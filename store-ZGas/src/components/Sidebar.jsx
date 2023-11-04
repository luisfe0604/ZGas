import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div>        <a href="/customer" className="menu-item">Clientes</a>
          <a className="menu-item">Produtos</a>
          <a className="menu-item">Usuários</a>
          <a className="menu-item">Backup</a></div>
        <div><a className="menu-item">Sair</a></div>

      </div>
    </div>
  );
};
export default Sidebar
