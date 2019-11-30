import App from './app';
import dotenv from 'dotenv';
import './database/mongoose';
dotenv.config();

App.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
