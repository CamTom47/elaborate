import express from "express";
import helmet from "helmet";
import cors from "cors";
import messageRouter from "./routes/messages.js";
import { NotFoundError } from "./ExpressError.js";

const app = express();
const router = express.Router();
app.use(helmet());

const allowedOrigins = [
	"https://frameworksdev.com", //production frontend
	"http://localhost:5173", //development fronted
	"http://localhost:8081", //development fronted
];
app.use(
	cors({
		origin: function (origin, callback) {
			//allow non-browser tools (no origin)
			if (!origin) return callback(null, true);
			if (allowedOrigins.includes(origin)) return callback(null, true);
			return callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	})
);

app.use(express.json());
app.use("/message", messageRouter);

// Handle 404 errors. This will match everything
app.use((req, res, next) => {
	return next(new NotFoundError());
});

//Generic error handler; anything unhandled goes here
app.use((err, req, res, next) => {
	console.log(req);
	if (process.env.NODE_ENV !== "test") console.error(err.stack);
	const status = err.status || 500;
	const message = err.message;

	return res.status(status).json({
		error: { message, status },
	});
});

export default app;
