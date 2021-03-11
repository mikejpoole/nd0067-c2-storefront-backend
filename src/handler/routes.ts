import express from 'express';
import cors from "cors";

import orderRouter from './order';
import productRouter from './product';
import userRouter from './user';

const router = express.Router();

// default options from https://expressjs.com/en/resources/middleware/cors.html
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

router.use(cors(corsOptions));

router.get( "/", ( req, res ) => {
    res.status(200).send(`<html style="background: #f5f5f5; text-align: center;">
        <main style="padding: 20px; margin: 40px; font-size: 50px;">Welcome to the pet store API</main>
        </html>`);
});

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/orders", orderRouter);

export default router;