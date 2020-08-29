import React from 'react';
import './App.css';

import FormDataForm from './Components/FarmDataForm';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <h1>Almonds Farm Water Requirement Calculator</h1>
        <FormDataForm />
      </div>
    </div>
  );
}

export default App;
