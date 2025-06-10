import React from 'react';
import './App.css';
import MultiStepForm from './Component/form2';
//import RegisterForm from './Component/form';
//import MultiStepForm from './Component/form2';

function App() {
  return (
    <div className="kApp">
      <h1 className='page'>Welcome to the Registration Page</h1>
      <p className='fill'>Please fill out the form below to register.</p>
      <MultiStepForm/>
      <footer className="footer">
        <p>&copy; 2025 Registration Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
