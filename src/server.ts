import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import userRoutes from './handler/user';

console.log('Configuring server...');

dotenv.config();

const app: express.Application = express();
const port = process.env.PORT || 8081;

app.use(bodyParser.json());

// const corsOptions = {};       // p144
// app.use(cors(corsOptions));

app.get( "/", ( req, res ) => {
  res.send(`<html style="background: #f5f5f5; text-align: center;">
    <main style="padding: 20px; margin: 40px; font-size: 50px;">Welcome to the pet store API</main>
    </html>`);
} );

// Handle the routes
// petRoutes(app);
userRoutes(app);

// Start the Server
app.listen(port, () => {
  console.log(`Server running on ${process.env.APP_HOST} port ${port}`);
  console.log(`Press CTRL+C to stop server`);
});
