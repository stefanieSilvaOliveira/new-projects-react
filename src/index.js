import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import Routes from './routes';

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
);




  
