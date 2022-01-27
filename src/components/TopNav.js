import React from 'react';
import Search from './Search';
const TopNav = () => {
  return (
    <nav>
      <div className="logo">
        <b>Book Store</b>
      </div>
      <Search/>
    </nav>
  );
};

export default TopNav;
