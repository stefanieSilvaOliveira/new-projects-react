
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'

import axios from 'axios';
import { Container, H1,Image,ContainerItens,User,Button} from './style';
import Friends from '../../img/image-group-friends.png';
import { TiTrash } from "react-icons/ti";


function Users() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

useEffect(() =>{
    
 async function fetchUsers(){
    const {data: newUsers} = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);
     }

fetchUsers();
    
}, []);

async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    
    const newUsers = users.filter((user) => user.id !== userId);
    
    setUsers(newUsers);
}

function goBackPage(){
    history.push("/");
}

return (
    <Container>
   <Image alt='logo-image' src={Friends}></Image>
    
    <ContainerItens>
    
    <H1>New Registered Users</H1>
                              
    <ul>
        {users.map((user) => (
        <User key={user.id}>
        <p>{user.name}</p> <p>{user.age}</p>
        <button onClick={() => deleteUser(user.id)}><TiTrash/></button>
        </User>  
        ))}    
    </ul>
    
    <Button onClick={goBackPage}>Next</Button> 
    
    
</ContainerItens>   
</Container> 
)};

export default Users;
