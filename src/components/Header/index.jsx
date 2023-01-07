import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';

export function Header() {
  const reserveSize = useSelector((state) => state.reserve);

  console.log('Reservas: ', reserveSize);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <Link to="/reservas" className="reserva">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize.length} reservas</span>
        </div>
      </Link>
    </header>
  );
}
