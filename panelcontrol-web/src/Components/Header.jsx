import React from 'react';
import styles from '../estilos/Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
      <a href="">Total Products</a>
      <a href="">Total Orders</a>
      <a href="">Total Revenue</a>
      <a href="">Average Price</a>
      <a href="#sectionBestSelling">Top Selling Products</a>
      </nav>
    </header>
  );
};

export default Header;
