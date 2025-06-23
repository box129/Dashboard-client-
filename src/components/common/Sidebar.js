import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CreditCard } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/transactions', icon: CreditCard, label: 'Transactions' },
  ];

  return (
    <div className="sidebar">
      {/* Where the leadway logo is */}
      <div className="sidebar-header">
        <div className="logo-container">
          <img src="./Frame.svg" alt="lead logo" />
        </div>
      </div>
      {/*Where the actually navigaation is done*/}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'nav-item-active' : ''}`
            }
            end={item.path === '/'}
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