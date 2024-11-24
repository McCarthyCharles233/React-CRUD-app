import pg from 'pg';
import env from 'dotenv';

env.config();

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env file');
}

const db = new pg.Client({
    connectionString: DATABASE_URL,
});

db.connect();

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
