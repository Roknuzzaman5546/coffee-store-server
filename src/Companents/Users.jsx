import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadeduser = useLoaderData();
    const [users , setUsers] = useState(loadeduser)

    const hadndleuserDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(() => {
            fetch(`https://coffe-store-server-5cp46egnt-rokonuzzamans-projects.vercel.app/user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                    const remaing = loadeduser.filter(cof => cof._id !== id)
                    setUsers(remaing)
                })
        })
    }
    return (
        <div>
            <h2 className=" text-2xl font-bold text-center text-orange-400">Users {loadeduser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>LastLogat</th>
                            <th>Edit</th>
                            <th>DeLete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>{user._id}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastloggedAt}</td>
                                <td className="btn"><Link to={`/updateusers/${user._id}`}>Edit</Link></td>
                                <td><button onClick={() => hadndleuserDelete(user._id)} className="btn">X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;