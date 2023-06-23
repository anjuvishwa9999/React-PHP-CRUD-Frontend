import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';
import Sign from './components/Sign';
import View from './components/view';
import Edit from './components/edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/sign" element={<Sign/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/edit/:user_id" element={<Edit/>}/>
    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
