import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './firebase/FirebaseContext.jsx';
import { AppwriteContextProvider } from './appwrite/AppwriteContext.jsx';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <AppwriteContextProvider>
      <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      </BrowserRouter>
      </AppwriteContextProvider>
    </ContextProvider>
)
