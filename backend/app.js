import express from "express";
import helmet from "helmet";
import cors from "cors";
import messageRouter from "./routes/messages.js";

const app = express();
const router = express.Router();
app.use(helmet());

const allowedOrigins = [
	"https://frameworksdev.com", //production frontend
	"http://localhost:5173", //development fronted
];
app.use(
	cors({
		origin: function (origin, callback) {
			//allow non-browser tools (no origin)
			if (!origin) return callbacked(null, true);
			if (allowedOrigins.includes(origin)) return callback(null, true);
			return callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	})
);

app.use(express.json());
app.use("/message", messageRouter);

export default app;
