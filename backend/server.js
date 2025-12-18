import app from './app.js';
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started listening on PORT:${PORT}`)
})