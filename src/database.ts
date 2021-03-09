import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const { PG_HOST, PG_DATABASE, PG_DATABASE_TEST, PG_USER, PG_PASSWORD, ENV } = process.env;

let connection: Pool;

if (ENV === 'test') {
    connection = new Pool({
        host: PG_HOST,
        database: PG_DATABASE_TEST,
        user: PG_USER,
        password: PG_PASSWORD
    });
}

if (ENV === 'dev') {
    connection = new Pool({
        host: PG_HOST,
        database: PG_DATABASE,
        user: PG_USER,
        password: PG_PASSWORD
    });
}

export default connection;