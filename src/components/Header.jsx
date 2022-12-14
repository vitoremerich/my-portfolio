import React from 'react';
import '../styles/components/header.sass';

export default function Header() {
  return (
    <header className="header-container">
      <div className="left-container">
        <h1>
          <span>Olá,</span>
          me chamo
          <strong>Vitor Emerich.</strong>
        </h1>
        <h2>Desenvolvedor Web</h2>
        <p>Sou especializado em React, Design responsivo e Nodejs</p>
        <ul className="buttons-container">
          <li><a className="projetos" href="#projetos">Projetos</a></li>
          <li><a className="contato" href="#contato">Contato</a></li>
        </ul>
      </div>
      <img src="https://cdn.shopify.com/s/files/1/0471/6039/3896/products/Macbook_Pro_M1_iStockBD2.png?v=1647169869" alt="laptop" />
    </header>
  );
}
