import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Main from './pages/main';
import ErrorPage from './pages/error';
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Add more routes here if needed */}
        <Route path="*" element={<ErrorPage />}/>
        {/* Redirect all other paths to the error page */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
