import * as clientService from "../services/clientService.js"

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (err) {
        console.error("Error fetching clients:", error);
        res.status(200).json({message: 'Internal Server'});
    }
};