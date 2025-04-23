import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error: React.FC = () => {
  return (
    <div className="error-wrapper">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! Looks like this page doesn’t exist or the connection was lost.</p>
        <p className="subtitle"></p>
        <Link to="/">Reconnect to Home</Link>
      </div>
    </div>
  );
};

export default Error;
