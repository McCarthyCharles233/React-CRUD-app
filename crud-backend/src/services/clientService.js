import { query } from "../db.js"

export const getClients = async() => {
    const {rows} = await query("SELECT * FROM clients_tb");
    return rows;
}

export const createClient = async(clientData) => {
    const {name, email, job, isactive} = clientData;

    const {rows} = await query(
        "INSERT INTO clients_tb(name, email, job, isactive) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, job, isactive]
    );

    return rows[0];
}

