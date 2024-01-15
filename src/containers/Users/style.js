import styled from 'styled-components';

 
export const Container = styled.div `
       height: 100%;
       min-height: 100vh;
       background-color: #f8f3ea;
       background-size: cover;
       display:flex;
       flex-direction: column;
       align-items:center;
       gap: 20px;        
`;

export const Image = styled.img `
        width: 250px;
        margin-top: 30px;
`;

export const ContainerItens= styled.div `
     margin-top: -20px;
     padding: 40px 20px;
     display: flex;
     flex-direction: column; 
     background: #fff;
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
     border-bottom-left-radius: 10px; 
     border-bottom-right-radius: 10px; 
     border: solid 1px #FA9EBC;
`;   

export const H1 = styled.h1 `
    width: 250px;
    margin-top: -20px;
    font-weight: 400;
    font-size: 25px;
    text-align: center;
    color: #000;
    line-height: 40px;
    margin-bottom: 30px;
    cursor: pointer;
    
`; 

export const Button = styled.button `
       border-radius: 14px;
       border: none;
       margin-top: 40px;
       height: 30px;
       width: 150px;
       background: #FA9EBC;
       margin-left: 50px;
       font-size: 12px;
       font-weight: 400;
       text-decoration: none;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       color: #000;
       cursor: pointer;

       &:hover{
        opacity: 0.8;
       
        
       }

       &:active{
        opacity: 0.5;
        
       }      
`;


export const User = styled.li`
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 30px;
        border: none;
        outline: none;
        width: 250px;
        height: 30px;   
        margin-bottom:20px;
        margin-left:15px;
        margin-top: 20px;
        padding-left: 25px;  
        font-style: normal;
        font-weight:normal;
        font-size: 12px;
        background-color: #fff;
        line-height: 20px;

        p{
            width: 200px;
            text-align: center;
            margin-left: -30px;
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            color: #000;
            background: #f4f2ef;
            cursor: pointer;
            border-radius: 20px;
        }

        button{
            border: none;
            color:#000;
            background: none;
            font-size: 18px;
            margin-left: 10px;
            cursor: pointer;

            &:hover{
           opacity: 0.8;
           }

           &:active{
           opacity: 0.5;
           }    
        }
`;

