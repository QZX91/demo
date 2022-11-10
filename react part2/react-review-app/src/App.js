import "./App.css";
import AddUser from "./components/Users/addUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import { useState } from "react";
import {v4 as uuid} from 'uuid';

function App() {
  const [users, setUser]= useState([]);

  const addUser = (name, age)=>{
    const newUser= {
      name, age, id:uuid() 
    }
    setUser([...users, newUser]);
  }

  return (
    <div>
      <AddUser addUser={addUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
