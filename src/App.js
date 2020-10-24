import React from 'react';
import './App.css';
import Contact from './components/ContactList.jsx';
function App() {
  return (
    <div className="App">
      <div className="Contact">
      <Contact 
      name="Brandie Knight"
      image="https://randomuser.me/api/portraits/women/78.jpg"
      status= {true}
      /></div>
        <br/><br/>
      <div className="Contact">
      <Contact 
      name="Samantha Young"
      image="https://randomuser.me/api/portraits/women/6.jpg"
      status= {false}
      /></div>
        <br/><br/>
      <div className="Contact">
      <Contact 
      name="Daryl Lynch"
      image="https://randomuser.me/api/portraits/men/63.jpg"
      status= {true}
      /></div>
    </div>
  );
}

export default App;
