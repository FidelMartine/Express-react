import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/home');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        backgroundColor: darkMode ? '#343a40' : '#f8f9fa',
        color: darkMode ? '#f8f9fa' : '#343a40',
        position: 'relative',
      }}
    >
      <button
        onClick={toggleDarkMode}
        className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          border: '1px solid',
          borderRadius: '20px',
          padding: '10px',
          background: darkMode ? '#495057' : '#ffffff',
          color: darkMode ? '#f8f9fa' : '#343a40',
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {darkMode ? (
          <span role="img" aria-label="Sun">☀️</span> // Sun icon
        ) : (
          <span role="img" aria-label="Moon">🌙</span> // Moon icon
        )}
      </button>

      <div
        className="card p-4 w-100 shadow"
        style={{
          maxWidth: '400px',
          borderRadius: '20px',
          backgroundColor: darkMode ? '#495057' : '#ffffff',
        }}
      >
        <h2 className="card-title text-center text-danger mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-primary">Username</label>
            <input
              type="text"
              className={`form-control border-primary ${darkMode ? 'bg-dark text-light' : ''}`}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                backgroundColor: darkMode ? '#343a40' : '#ffffff',
                color: darkMode ? '#f8f9fa' : '#343a40',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-primary">Password</label>
            <input
              type="password"
              className={`form-control border-primary ${darkMode ? 'bg-dark text-light' : ''}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                backgroundColor: darkMode ? '#343a40' : '#ffffff',
                color: darkMode ? '#f8f9fa' : '#343a40',
              }}
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
        <div className="mt-3 text-center">
          <p>No tienes cuenta? <Link to="/register" className="text-info">Register here</Link></p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content border-danger">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Inicio de sesión exitoso</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body bg-light text-danger">
                <p>Bienvenido de nuevo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

