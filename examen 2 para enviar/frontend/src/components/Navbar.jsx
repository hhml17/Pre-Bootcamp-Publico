// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login'); // Redirige al inicio de sesión
  };

  return (
    <nav className="navbar">
      {user ? (
        <>
          <Link to="/homeapp">
            <button className="navbar-button">Todas las Peliculas</button>
          </Link>
          <Link to="/movies/add">
            <button className="navbar-button">Agregar Película</button>
          </Link>
          <button onClick={onLogout} className="navbar-button">Cerrar Sesión</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="navbar-button">Iniciar Sesión</button>
          </Link>
          <Link to="/register">
            <button className="navbar-button">Registrarse</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;