import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'

import axios from 'axios';
const Home = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        loadUsers()
        //  console.log(users)
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        //  console.log(result.data)
        setUser(result.data.reverse())
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers()
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link to="" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
