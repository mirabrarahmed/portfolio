import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './components/AboutMe';
import HomeScreen from './components/HomeScreen';
import Projects from './components/Projects';
import Research from './components/Research';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio/" element={<App />} />
        <Route path="home" element={<HomeScreen />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="research" element={<Research />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
