import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import axios from 'axios'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMolde] = useState("add");
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client)
    setModalMolde(mode);
    setIsOpen(true);
  }

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add"){
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData)
        console.log("Client added:", response.data); 
      } catch (err) {
        console.error("Error adding Client:", err)
    }
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
      console.log('Updating client with ID:', clientData.id)
      try {
        const response = await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData)
        console.log("Client updated:", response.data); 
      } catch (err) {
        console.error("Error updating Client:", err)
    }
      
    }     
  } 
  return (
    <>
      <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm}/>
      <TableList  handleOpen={handleOpen} searchTerm={searchTerm}/>
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit}
      onClose={() => setIsOpen(false)}
      mode={modalMode} clientData={clientData}
      />
    </>
  )
}

export default App
