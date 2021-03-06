import express, { Request, Response } from 'express';

import { verifyAuthToken } from '../middleware/verify';
import { Product, ProductStore } from '../model/product';

import * as dotenv from 'dotenv';
dotenv.config();

const productStore = new ProductStore();

const index = async (req: Request, res: Response) => {
  const products = await productStore.index();
  res.json(products);
};

const show = async (req: Request, res: Response) => {
    const product = await productStore.show(+req.params.id);
    res.json(product);
};

const create = async (req: Request, res: Response) => {
    const body: Product = req.body;
    try {
        const product: Product = {
            name: body.name,
            price: body.price
        };

        const newproduct = await productStore.create(product);
        res.json(newproduct);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
};

// const destroy = async (req: Request, res: Response) => {
//     const deleted = await productStore.delete(+req.params.id);
//     res.json(deleted);
// };

const productRouter = express.Router();

productRouter.get('/', index);
productRouter.get('/:id', show);
productRouter.post('/', verifyAuthToken, create);
// productRouter.delete('/:id', verifyAuthToken, destroy);         // DO NOT INCLUDE THIS IN PRODUCTION!!!

export default productRouter;
