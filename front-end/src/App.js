import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Landing from './components/Landing';
import ClientesAdmin from './components/ClientesAdmin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/App.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/admin/clientes" element={<ClientesAdmin />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
