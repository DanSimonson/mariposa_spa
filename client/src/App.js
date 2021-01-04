import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';


function App() {
  const [reservations, setReservations] = useState([]);
  //const [sendForm, setSendForm] = useState(false)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("/api/reservations")
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Express Starter</h1>
        </header>
      </div>
    );
}

export default App;
