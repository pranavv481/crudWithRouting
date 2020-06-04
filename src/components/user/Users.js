import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, NavLink, useParams } from 'react-router-dom';
const Users = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }

    return (
        <div className="container my-4">
            <Link className="btn btn-primary" to="/">Back To Home</Link>
            <div className="display-5">User Id:{id}</div>
            <ul className="w-50 list-group">
                <li className="list-group-item">{user.name}</li>
                <li className="list-group-item">{user.username}</li>
                <li className="list-group-item">{user.email}</li>
                <li className="list-group-item">{user.phone}</li>
                <li className="list-group-item">{user.website}</li>
            </ul>
        </div>
    )
}

export default Users
