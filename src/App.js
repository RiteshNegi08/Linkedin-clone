import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
   return(
   <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;