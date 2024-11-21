import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMolde] = useState("add");

  const handleOpen = (mode) => {
    setModalMolde(mode);
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode === "add"){
      console.log("modal mode add");
    } else {
      console.log("modal mode edit");
      
    }     
  } 
  return (
    <>
      <NavBar onOpen={() => handleOpen("add")}/>
      <TableList  handleOpen={handleOpen}/>
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit}
      onClose={() => setIsOpen(false)}
      mode={modalMode}/>
    </>
  )
}

export default App
