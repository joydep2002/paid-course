import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header/Header'
import Header from './components/Header/Header';
import Course from './components/Courses/Course';

function App() {
  return (
    <div>
        <Header></Header>
        <Course></Course>
    </div>
  );
}

export default App;
