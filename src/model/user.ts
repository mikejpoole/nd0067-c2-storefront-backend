import connection from '../database';
import bcrypt from 'bcryptjs';

import * as dotenv from 'dotenv';
dotenv.config();

export type User = {
    id?: number;
    firstname?: string;
    lastname?: string;
    password_clear?: string;
    password?: string;
};

export class UserStore {

    // ONLY USE INDEX FOR TESTING. NEVER EXPOSE THIS!!!
    async index(): Promise<User[]> {
        try {
            const conn = await connection.connect();
            const sql = 'SELECT * FROM users';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get users. Error: ${err}`);
        }
    }

    async create(u: User): Promise<User> {
        try {
            const conn = await connection.connect();
            const sql = 'INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3) RETURNING *';
            const hash = bcrypt.hashSync(
                u.password_clear + process.env.BCRYPT_PEPPER,
                parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)
            );
            const result = await conn.query(sql, [u.firstname, u.lastname, hash]);
            const user = result.rows[0];
            conn.release();
            return user;
        } catch (err) {
            throw new Error(`Unable create user (${u.firstname}): ${err}`);
        }
    }

    async authenticate(creds: User): Promise<User | null> {
        if (!creds.id && !creds.password_clear) {
            console.log('No credentials supplied.');
            return null;
        }

        let result;

        // Check the database
        try {
            const conn = await connection.connect();
            const sql = 'SELECT firstname, password FROM users WHERE id = ($1)';
            result = await conn.query(sql, [creds.id]);
        } catch (err) {
            throw new Error(`Unable to check user table: ${err}`);
        }

        if (result.rows.length) {
            const user: User = result.rows[0];
            console.log(user.firstname, 'found');

            try {
                const passwordClearWithPepper = creds.password_clear + process.env.BCRYPT_PEPPER;
                // console.log(passwordClearWithPepper);
                const correctPassword: boolean = bcrypt.compareSync(passwordClearWithPepper, user.password);

                if (correctPassword) {
                    console.log('Password is correct');
                    return user;
                } else {
                     console.log(`Credentials for ${user.firstname} do not match.`);
                }
            } catch (err) {
                throw new Error(`Unable to authenticate user (${creds.firstname}): ${err}`);
            }
        }
        return null;
    }
}