import express from 'express';
import productRouter from './product';
import userRouter from './user';

const router = express.Router();

router.get( "/", ( req, res ) => {
    res.status(200).send(`<html style="background: #f5f5f5; text-align: center;">
        <main style="padding: 20px; margin: 40px; font-size: 50px;">Welcome to the pet store API</main>
        </html>`);
});

router.use("/users", userRouter);
router.use("/products", productRouter);
// router.use("/orders", orderRouter);

export default router;