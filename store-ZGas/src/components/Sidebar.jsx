import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  // Use o estado para controlar a visibilidade do submenu
  const [showReportsSubMenu, setShowReportsSubMenu] = useState(false);

  return (
    <div className="sidebar">
      <div className="menu">
        <div>
          <a href="/customer" className="menu-item">Clientes</a>
          <a href="/products" className="menu-item">Produtos</a>
          <a href="/users" className="menu-item">Usuários</a>

          {/* Adicione o submenu de "Relatórios" com um condicional */}
          <div
            className={`menu-item${showReportsSubMenu ? ' active' : ''}`}
            onClick={() => {
              setShowReportsSubMenu(!showReportsSubMenu);
            }}
          >
            <a>Relatórios</a>
            <FontAwesomeIcon
              icon={showReportsSubMenu ? faChevronUp : faChevronDown}
            />
          </div>
          {showReportsSubMenu && (
            <div className="submenu">
              <a href="/daily-report" className="submenu-item menu-item">Relatório Diário</a>
              <a href="/weekly-report" className="submenu-item menu-item">Relatório Semanal</a>
              <a href="/monthly-report" className="submenu-item menu-item">Relatório Mensal</a>
            </div>
          )}

          <a className="menu-item">Backup</a>
        </div>
        <div><a href="/" className="menu-item last-item">Sair</a></div>
      </div>
    </div>
  );
};

export default Sidebar;
