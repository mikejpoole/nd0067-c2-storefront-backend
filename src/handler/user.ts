import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { verifyAuthToken } from '../middleware/verify';
import { User, UserStore } from '../model/user';

const userStore = new UserStore();

const index = async (req: Request, res: Response) => {
    try {
        const users = await userStore.index();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
};

const create = async (req: Request, res: Response) => {
    const body: User = req.body;

    const user: User = {
        firstname: body.lastname,
        lastname: body.lastname,
        password_clear: body.password_clear
    };

    // Returning a token rather than just the user object
    try{
        const newUser = await userStore.create(user);
        const token = jwt.sign({ user: newUser }, process.env.AUTHTOKEN_SECRET);
        res.json(token);
    } catch(error) {
        res.status(401);
        res.json(error + user);
    }
};

const authenticate = async (req: Request, res: Response) => {
    const body: User = req.body;

    const creds: User = {
        id: body.id,
        password_clear: body.password_clear
    };

    try {
        const user = await userStore.authenticate(creds);
        const token = jwt.sign({ user }, process.env.AUTHTOKEN_SECRET);
        res.json(token);
    } catch(error) {
        res.status(401);
        res.json(error);
    }
};

const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index);
    app.post('/users/create', verifyAuthToken, create);
    app.get('/users/authenticate', authenticate);
};

export default userRoutes;