import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import userRoutes from './handler/user';
import productRoutes from './handler/product';
import router from './handler/routes';

console.log('Configuring server...');

dotenv.config();

const app: express.Application = express();
const port = process.env.PORT || 8081;

// app.use(cors({}}));              // p144
app.use(bodyParser.json());
app.use(process.env.APP_PATH, router);

// Start the Server
app.listen(port, () => {
  console.log(`Server running on ${process.env.APP_HOST} port ${port}`);
  console.log(`Press CTRL+C to stop server`);
});
