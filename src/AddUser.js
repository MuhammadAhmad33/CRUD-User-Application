import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddUser = () => {
    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const History = useHistory();

    const Add = (e) => {
        e.preventDefault();
        const user = { name, phone, email };
        console.log(user);
        fetch('http://localhost:9000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
            History.push('/');
        })
    }
    return (
        <form onSubmit={Add}>
            <h2 className="h3">Fill below to add a user</h2> 
            <label className="h2" >Name: </label><input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            <label className="h2">
                Phone: </label>
            <input
                type="text"
                required
                value={phone}
                onChange={(e) => setphone(e.target.value)}
            />
            <br /> <br />
            <label className="h2" >
                Email:  </label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br /> <br />
            <button className="home">Add User</button>
        </form>

    );
}
export default AddUser;