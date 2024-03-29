import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const apiUrl= import.meta.env.VITE_AUTH_API_URL
const clientId = import.meta.env.VITE_AUTH_API_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
          domain={apiUrl}
          
          clientId={clientId}
          
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
);
