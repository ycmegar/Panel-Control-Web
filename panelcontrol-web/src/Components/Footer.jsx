import React from 'react'
import styles from '../estilos/Footer.module.css'

const Footer = () => {
    return (
      <footer className={styles.footer}> 
      <ul className={styles.font}>
        <li><a href="/" className={styles.logo}>
          <span className="fa-solid fa-house" alt="home" id="home"></span>
            </a> </li>
        <li><h3>Proyecto Práctica de BIT Bootcamp</h3></li>
        <li><h4>Derechos Reservados &copy; 2023</h4></li>
        </ul>         
      </footer>
    );
  };

export default Footer