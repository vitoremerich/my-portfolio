import React from 'react';
import '../styles/components/navbar.sass';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="text-container">
        <a href="/">./Vitor</a>
      </div>
      <div className="nav-items-container">
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#skills">Habilidades</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  );
}
