import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* {I might have to remove the h2 tag} */}
      <h2></h2>
      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
        </button>

        <div className="user-profile">
          <img 
            src="" 
            alt="User" 
            className="user-avatar" 
          />
          <span className="user-name">Josh Mide</span>
          <ChevronDown size={16} className="chevron" />
        </div>
      </div>
    </header>
    
  );
};


export default Header;