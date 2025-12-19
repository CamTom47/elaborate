import app from "./app.js";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
	dotenv.config();
}

const PORT = process.env.PORT || 3001;
console.log('MAILGUN_API_KEY:', process.env.MAILGUN_API_KEY ? 'set' : 'missing');
console.log('MAIL_DOMAIN:', process.env.MAIL_DOMAIN || 'missing');

app.listen(PORT, () => {
	console.log(`Server started listening on PORT:${PORT}`);
});
