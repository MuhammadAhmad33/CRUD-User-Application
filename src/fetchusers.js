import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

const Fetch = () => {

  const [users, setUsers] = useState([
    /*{
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
      email: "Sincere@april.biz",
      id: 1
    },
    {
      name: "Ervin Howell",
      phone: " 010-692-6593 x09125",
      email: " Shanna@melissa.tv",
      id: 2
    },
    {
      name: "Clementine Bauch",
      phone: " 1-463-123-4447",
      email: "Nathan@yesenia.net",
      id: 3
    },
    {
      name: "Patricia Lebsack",
      phone: "493-170-9623 x156",
      email: " Julianne.OConner@kory.org",
      id: 4
    },
    {
      name: " Chelsey Dietrich",
      phone: "(254)954-1289",
      email: "Lucio_Hettinger@annie.ca",
      id: 5
    },
    {
      name: " Mrs. Dennis Schulist",
      phone: "1-477-935-8478 x6430",
      email: "Karley_Dach@jasper.info",
      id: 6
    },
    {
      name: " Kurtis Weissnat",
      phone: "210.067.6132",
      email: "Telly.Hoeger@billy.biz",
      id: 7
    },
    {
      name: "Nicholas Runolfsdottir V",
      phone: "586.493.6943 x140",
      email: " Sherwood@rosamond.me",
      id: 8
    },
    {
      name: "Glenna Reichert",
      phone: "(775)976-6794 x41206",
      email: "Chaim_McDermott@dana.io",
      id: 9
    },
    {
      name: "Clementina DuBuque",
      phone: "024-648-3804",
      email: "Rey.Padberg@karina.biz",
      id: 10
    }*/
  ])
  const [order, setOrder] = useState('ASC');
  const [on, off] = useState(<i class="fa-solid fa-sort-down"></i>);


  const History = useHistory();
  const fetchData = () => {
    fetch("http://localhost:9000/users")
      .then(response => {
        return response.json()  
      })
      .then(data => {

        console.log(data)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Delete = (id) => {

    fetch(`http://localhost:9000/users/${id}`, {
      method: 'DELETE'
    }).then(() => {

      console.log('User deleted')
      window.location.reload(false);
      History.push('/');
    })
  }

  const sort = (col) => {
    if (order === "ASC") {
      const sorted = [...users].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
      setUsers(sorted);
      console.log('Sorted')
      off(<i class="fa-solid fa-sort-up"></i>)
      setOrder("ASC")
      const a = <i class="fa-solid fa-sort-down"></i>;
      console.log(a);
    }
  }
  return (
    <div >
      <div className="content">
        <h1 className="h1" >Crud-App</h1>
        <h3 className="h1">User Records</h3>
      </div>
      {users.length > 0 && (
        <table className="container"  >
          <tr className="table-header">
            <th onClick={() => sort("name")} className="table-header">Name{on}</th>
            <th onClick={() => sort("phone")} className="table-header">Phone Number</th>
            <th onClick={() => sort("email")} className="table-header">Email</th>
            <th className="table-header">Delete Option</th>
          </tr>
          {users.map(user => (
            <tr key={user.id}>

              <td className="col">{user.name}</td>
              <td className="col">{user.phone}</td>
              <td className="col">{user.email}</td>
              <td className="col"><button onClick={() => Delete(user.id)} className="delete">Delete</button> <br /></td>

            </tr>
          ))}
        </table>
      )}

    </div>
  )
}
export default Fetch;