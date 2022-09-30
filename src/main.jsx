import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JorunalApp';
// import { HerosApp } from './HeroesApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
          <BrowserRouter>
               <JournalApp/>
          </BrowserRouter>
     </React.StrictMode>
);
