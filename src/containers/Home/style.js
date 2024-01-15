import styled from 'styled-components';




export const Container = styled.div `
       background-color: #f8f3ea;
       background-size: cover;
       display:flex;
       flex-direction: column;
       align-items:center;
       gap: 20px;        
`;

export const Image = styled.img `
        width: 250px;
        margin-top: 15px;
`;

export const ContainerItens= styled.div `
     padding: 50px 36px;
     display: flex;
     flex-direction: column;    
`;

export const H1 = styled.h1 `
    width: 250px;
    margin-top: -40px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
    color: #000;
    line-height: 40px;
    margin-bottom: 30px;
`; 

export const InputLabel = styled.p `
      letter-spacing: -0.408px;
      font-style:normal;
      font-weight: bold;
      margin-bottom: 9px;
      font-size: 15px;
      line-height: 15px;
      color: #000;   
      margin-left: 25px;  

`;
export const Input = styled.input `
      border-radius: 30px;
      border: none;
      outline: none;
      width: 250px;
      height: 30px;   
      margin-bottom:20px;
      margin-left:15px;
      padding-left: 25px;  
      font-style: normal;
      font-weight:normal;
      font-size: 12px;
      color: #000;
      line-height: 20px;
`;

export const Button = styled.button `
       border-radius: 14px;
       border: none;
       margin-top: 20px;
       height: 30px;
       width: 150px;
       background: #FA9EBC;
       margin-left: 50px;
       font-size: 12px;
       text-decoration: none;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       font-weight: 400;
       color: #000;
       cursor: pointer;

       &:hover{
        opacity: 0.8;
       
        
       }

       &:active{
        opacity: 0.5;
        
       }`;      
