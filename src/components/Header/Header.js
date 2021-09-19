import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header headerBG">
      <NavigationBar />
      <HeaderMain />
    </header>
  );
};

export default Header;