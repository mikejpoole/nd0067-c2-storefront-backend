import express, { Request, Response } from 'express';

import { verifyAuthToken } from '../middleware/verify';
import { Order, OrderStore } from '../model/order';

import * as dotenv from 'dotenv';
dotenv.config();

const orderStore = new OrderStore();

const show = async (req: Request, res: Response) => {
    const body: Order = req.body;
    const product = await orderStore.show(body.id);
    res.json(product);
};

// const create = async (req: Request, res: Response) => {
//     const body: Order = req.body;
//     try {
//         const product: Order = {
//             user_id: body.user_id,
//         };

//         const newproduct = await orderStore.create(product);
//         res.json(newproduct);
//     } catch(err) {
//         res.status(400);
//         res.json(err);
//     }
// };

const orderRouter = express.Router();

orderRouter.get('/:id', show);

export default orderRouter;
