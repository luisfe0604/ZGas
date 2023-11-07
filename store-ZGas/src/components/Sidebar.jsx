import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div>        
          <a href="/customer" className="menu-item">Clientes</a>
          <a href="/products" className="menu-item">Produtos</a>
          <a href="/users" className="menu-item">Usuários</a>
          <a className="menu-item">Relatórios</a>
          <a className="menu-item">Backup</a></div>
        <div><a href="/"className="menu-item last-item">Sair</a></div>

      </div>
    </div>
  );
};
export default Sidebar
