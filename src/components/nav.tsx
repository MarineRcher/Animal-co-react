import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/nav.module.css';
import logo from './../assets/logo.png';

function Nav() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <Link to="/signIn" className={styles.link}>Connexion</Link>
      <Link to="/Dog/Food" className={styles.link}>Chien</Link>
      <Link to="/Cat/Food" className={styles.link}>Chat</Link>
      <Link to="/shopCart" className={styles.link}>Panier</Link>
    </div>
  );
}

export default Nav;
