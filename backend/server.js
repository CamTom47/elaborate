import app from './app.js';
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}


console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('MAILGUN_API_KEY:', !!process.env.MAILGUN_API_KEY);
console.log('MAIL_DOMAIN:', process.env.MAIL_DOMAIN);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started listening on PORT:${PORT}`)
})