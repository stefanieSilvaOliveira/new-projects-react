
import React, {useState, useRef,} from 'react';
import {useHistory} from "react-router-dom";

import axios from 'axios';
import { Container, H1, Image,ContainerItens,InputLabel, Input, Button,} from './style';
import Group from '../../img/img-group-inicial.png';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function App() {
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const inputName = useRef();
    const inputAge =  useRef();

    
async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
       name: inputName.current.value, 
       age:  inputAge.current.value,
       });

   console.log(newUser)        

   setUsers([...users,newUser]);   

   history.push("/usuarios")
     
}

return (
    <Container>
    <Image alt="logo-image" src={Group}></Image>
    <ContainerItens>
    <H1>Create your Registration</H1>
    
    <InputLabel>Name</InputLabel>
    <Input ref={inputName} placeholder='Nome'></Input>
    
    <InputLabel>Age</InputLabel>
    <Input ref={inputAge} placeholder='Age'></Input>
    
    <Button onClick={addNewUser}>Register</Button>  
    
    <div style={{ display: 'flex', justifyContent: 'space-around',  marginTop: '20px', cursor: 'pointer'}}>
      <FcGoogle fontSize={18}/>
      <FaLinkedin fontSize={18} color='#4561AA' />
      <FaFacebook fontSize={18} color='#4561AA'/>
      </div>

</ContainerItens>   
</Container> 
)};


export default App;
