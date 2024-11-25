import * as clientService from "../services/clientService.js"

export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (error) {
        console.error("Error fetching clients:", error);
        res.status(400).json({message: 'Internal Server'});
    }
};

export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);
        res.status(200).json(newClient);
    } catch (error) {
        console.error("Error fetching clients:", error);
        res.status(500).json({message: 'Internal Server'});
    }
};

