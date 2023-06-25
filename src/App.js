import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
import About from './Components/About';
import Meaning from './Components/Meaning';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Definition from './Components/Definition';

function App() {
  const [mode, setMode] = useState('#f1f3f4');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === '#212b42'){
      setMode('#f1f3f4');
      document.body.style.backgroundColor = '#f1f3f4';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success');
    }else{
      setMode('#212b42');
      document.body.style.backgroundColor = '#212b42';
      document.body.style.color = '#add7ff';
      showAlert('Dark mode has been enabled', 'success');
    }
  }

  return (
    <>
      <Router basename='/TextUtils'>
        <Navbar title= "TextUtils" mode = {mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <div className="container">
          <Routes>
            <Route exact path="/TextUtils" element ={ <TextForm showAlert = {showAlert} heading="Enter Your Text To Analyze"/> }/>
            <Route path="/About" element = {<About/>}/>
            <Route path="/Meaning" element = {<Meaning/>}/>
            <Route path="/search/:word" element = {<Definition mode = {mode}/>}/>
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
