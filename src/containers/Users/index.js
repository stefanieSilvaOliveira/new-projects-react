
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'

import axios from 'axios';
import { Container, H1,Image,ContainerItens,Button, User} from './style';
import Friends from '../../img/image-group-friends.png';
import { TiTrash } from "react-icons/ti";


function Users() {
    const [users, setUsers] = useState([]);
    const history = useHistory()
    

useEffect(() =>{
    
 async function fectUsers(){
    const {data: newUsers} = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);
    }

fectUsers()
    
}, [])

function goBackPage(){
    history.push("/")
}

// React Hook => useEffect (Efeito Colateral)
// Quais são esses efeitos? Assim que a minha aplicação inicia o UseEffect é chamado. (Pagina carregou)
// Quando um estado que está dentro do array de dependencia do UseEffect é alterado.



async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter((user) => user.id !== userId);
    
    setUsers(newUsers);
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
