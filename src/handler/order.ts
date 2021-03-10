import express, { Request, Response } from 'express';

import { verifyAuthToken } from '../middleware/verify';
import { Order, OrderStore } from '../model/order';

import * as dotenv from 'dotenv';
dotenv.config();

const orderStore = new OrderStore();

const index = async (req: Request, res: Response) => {
    const orders = await orderStore.index(-1);
    res.json(orders);
};

const indexUser = async (req: Request, res: Response) => {
    console.log(req.params);
    const orders = await orderStore.index(+req.params.user_id);
    res.json(orders);
};

const show = async (req: Request, res: Response) => {
    const order = await orderStore.show(+req.params.id);
    res.json(order);
};

const create = async (req: Request, res: Response) => {
    const body: Order = req.body;
    try {
        const order: Order = {
            user_id: body.user_id
        };

        const neworder = await orderStore.create(order);
        res.json(neworder);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
};

const orderRouter = express.Router();

orderRouter.get('/incomplete', index);
orderRouter.get('/incomplete/:user_id', indexUser);

orderRouter.get('/:id', show);
orderRouter.post('/', create);

export default orderRouter;
