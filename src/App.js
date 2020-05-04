import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Weather App</h1>
      <main>
      <Forecast />
      </main>
      <footer>
       
      </footer>

      </header>
    </div>
  );
}

export default App;
