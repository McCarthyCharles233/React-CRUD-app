import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TableList({handleOpen, searchTerm}){
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clients')
                setTableData(response.data); 
            } catch (err) {
                setError(err.message)
            }
        };

        fetchData();

    }, []);

    const filteredData = tableData.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.job.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this client")
        if (confirmDelete){
            try {
                await axios.delete(`http://localhost:3000/api/clients/${id}`);
                setTableData((prevData => prevData.filter(client => client.id !== id)));
            } catch (err) {
                console.error("Error deleting Client:", err)
            }
        }
    }
    

    return(
        <>
        {error && <div className='alert alert-error'>{error}</div>}

        <div className="overflow-x-auto mt-10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody className="hover">
            {filteredData.map((clients) => ( 
                <tr key={clients.id}>
                <th>{clients.id}</th>
                <td>{clients.name}</td>
                <td>{clients.email}</td>
                <td>{clients.job}</td>
                <td>
                    {clients.status ? 'Active' : 'Inactive'}
                </td>
                    
                <td>
                    <button className="btn btn-secondary" onClick={() => handleOpen('edit', clients)}>Update</button>
                </td>
                <td>
                    <button className="btn btn-accent" onClick={() => handleDelete(clients.id)}>Delete</button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>        
        </>
    )
}