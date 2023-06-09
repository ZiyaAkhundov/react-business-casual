import React from 'react';
import '../index.css'
import {NavLink} from 'react-router-dom'
function ErrorPage() {
  return (
    <div style={{ 'display': 'flex', 'justifyContent': 'center', 'flexDirection': 'column', 'alignItems': 'center', 'margin': '100px 0' }}>
      <h1 style={{ 'color': 'white' }}>Error Occured</h1>
      <p style={{ 'color': 'white' }}>Oops! Something went wrong.</p>
      <NavLink
        to="/" className='error-btn'>
        Back to Home
      </NavLink>;
    </div>
  );
}

export default ErrorPage;