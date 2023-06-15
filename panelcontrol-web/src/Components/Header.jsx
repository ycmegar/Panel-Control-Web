import React from 'react';
import styles from '../estilos/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>          
      <a href="/">
        <picture className={styles.logo}><span className="fa-brands fa-cpanel" alt="logo CP" id="logo"></span> </picture></a>
        <nav className={styles.nav}>
          <a href="#ProductosTotal">Productos</a>
          <a href="#OrdenTotal">Órdenes</a>
          <a href="#GananciaTotal">Ganancia</a>
          <a href="#PrecioPromedio">Precio Promedio</a>
          <a href="#SectionBestSelling">Top Productos</a>
      </nav>
    </header>
  );
};

export default Header;
