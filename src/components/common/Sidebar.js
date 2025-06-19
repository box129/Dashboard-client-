import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CreditCard } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/transaction', icon: CreditCard, label: 'Transactions' },
  ];

  return (
    <div className="sidebar">
      {/* Where the leadway logo is */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">
            <span>L</span>
          </div>
          <div className="logo-text">
            <h1>LEADWAY</h1>
            <p>CAPITAL & TRUSTS LIMITED</p>
          </div>
        </div>
      </div>
      {/*Where the actually navigaation is done*/}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className="nav-item"
            activeClassName="nav-item-active"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;