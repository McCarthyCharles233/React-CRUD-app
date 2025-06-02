import { useEffect, useState } from "react";

export default function ModalForm ({isOpen, onClose, mode, onSubmit, clientData}){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [status, setStatus] = useState('Inactive');

    // handle status change - Fixed
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const clientData = {name, email, job, isactive: status === 'Active'}
            await onSubmit(clientData)
            onClose();
        } catch (err) {
            console.error("Error adding client", err)
        }
        onClose();
    }

    useEffect(() => {
        if (mode === 'edit' && clientData){
            setName(clientData.name || '');
            setEmail(clientData.email || '');
            setJob(clientData.job || '');
            // Convert boolean to string for UI
            setStatus(clientData.isactive ? 'Active' : 'Inactive');
        } else {
            setName('');
            setEmail('');
            setJob('');
            setStatus('Inactive');
        }
    }, [mode, clientData, isOpen]); 

    return(
        <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal" open={isOpen} key={modalKey}>
        <div className="modal-box">
            <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
            <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex items-center gap-2 my-4">
                Name
                <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Email
                <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="input input-bordered flex items-center gap-2 my-4">
                Job
                <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)}/>
            </label>
            <div className="flex mb-4 justify-between my-4">
                <select 
                    value={status} 
                    className="select select-bordered w-full max-w-xs" 
                    onChange={handleStatusChange}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={(e) => {
                    e.preventDefault();
                    onClose();
                }}
                >
                ✕
            </button>

            <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
            </form> 
        </div>
        </dialog>
        </>
    )
}