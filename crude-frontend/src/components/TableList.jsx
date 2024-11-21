export default function TableList({handleOpen}){


    const clients = [
        {id: 1, name: "John Doe", email: "johndoe@gmail.com", job: "Developer", status: true },
        {id: 2, name: "Tim Can", email: "timcan@gmail.com", job: "DevOps Engineer", status: true },
        {id: 3, name: "Lee Zhan", email: "zhanlee@gmail.com", job: "Project Manager", status: false }
    ]
    return(
        <>
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
            {clients.map((clients) => (
                <tr>
                <th>{clients.id}</th>
                <td>{clients.name}</td>
                <td>{clients.email}</td>
                <td>{clients.job}</td>
                <td>
                    {clients.status ? 'Active' : 'Inactive'}
                </td>
                    
                <td>
                    <button className="btn btn-secondary" onClick={() => handleOpen('edit')}>Update</button>
                </td>
                <td>
                    <button className="btn btn-accent">Delete</button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>        
        </>
    )
}