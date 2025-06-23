import React from 'react';
import { Search, Printer, FileDown } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ children }) => {
  return (
    <div className="search-bar-wrapper">
      {/* Left: Search */}
      <form className="search-form">
        <Search size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </form>
      {/* left filter button */}
      <div>
        {children}
      </div>

      {/* Right: Buttons */}
      <div className="action-buttons">
        <button className="action-btn">
          Export <FileDown size={16} className="btn-icon" />
        </button>
        <button className="action-btn">
          Print <Printer size={16} className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
