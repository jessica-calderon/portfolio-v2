import React from 'react';
import './App.css';
import './index.css';
import './App.css';
import "antd/dist/antd.css";
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom';
import BodyContainer from './pages/BodyContainer/BodyContainer';

function App() {
  return (
    <Router>
      <body className="bg-[#E5E5E5]">
        <div className="App flex flex-row justify-center">
          <BodyContainer />
        </div>
      </body>
    </Router>
  );
}

export default App;
