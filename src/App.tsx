import React from 'react';
import './App.css';
import './index.css';
import './App.css';
import "antd/dist/antd.css";
import 'tailwindcss/tailwind.css'
import BodyContainer from './pages/BodyContainer/BodyContainer'

function App() {
  return (
    <body className="bg-[#E5E5E5]">
    <div className="App flex flex-row justify-center">
      <BodyContainer />
    </div>
    </body>
  );
}

export default App;
