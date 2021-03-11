import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Token Verification Middleware
export const verifyAuthToken = (req: Request, res: Response, next: any) => {
    try {
        const authHeader = req.headers.authorization;
        // console.log('authHeader:', authHeader);

        if (authHeader) {
            const authToken = authHeader.split(' ')[1];             // Ignores Bearer in the header
            jwt.verify(authToken,
                process.env.AUTHTOKEN_SECRET,
                (err, verifiedJwt) => {
                    if(err){
                        console.log('Error:', err.message);
                        res.status(401);
                        res.send(err.message);
                    }else{
                        // console.log('Verified JWT', verifiedJwt);
                        next();
                    }
                });
        } else {
            res.status(401);
            res.send('Missing authorization header');
        }
    } catch (error) {
        res.status(401);
        res.send(error);
    }
};
