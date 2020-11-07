import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {firebase} from './firebase';

import './Resources/css/app.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props}/>
    </BrowserRouter>
  )
}

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <React.StrictMode>
      <App user={user} />
    </React.StrictMode>,
    document.getElementById('root')
  );
});


