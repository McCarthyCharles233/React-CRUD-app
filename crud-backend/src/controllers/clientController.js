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
        console.error("Error adding clients:", error);
        res.status(500).json({message: 'Internal Server'});
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;

        const updateClient = await clientService.updateClient(clientId, clientData)
        if (!updateClient) {
            return res.status(404).json({message: 'Client not found'})
        }
        res.status(200).json(updateClient);

    } catch (error) {
        console.error("Error updating clients:", error);
        res.status(500).json({message: 'Internal Server'});
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await clientService.deleteClient(clientId)

        if (deleted) {
            return res.status(404).json({ message: 'Client not found'});
        }

        res.status(200).send();     
        
    } catch (error) {
        console.error("Error deleting clients:", error);
        res.status(500).json({message: 'Internal Server'});
    }
};


export const searchClients = async (req, res) => {
    try {
        const searchTerm = req.params.q;
        const clients = await clientService.searchClients(searchTerm);
        res.status(200).json(clients); 
       
    } catch (error) {
        console.error("Error searching clients:", error);
        res.status(500).json({message: 'Internal Server'});
    }
};