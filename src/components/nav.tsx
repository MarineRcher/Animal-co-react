import styles from "./../styles/nav.module.css";
import logo from "./../assets/logo.png";



function Nav() {
  return (
    <div className={styles.navbar}>
    <img className={styles.logo} src={logo} />
    <div className={styles.link}>Connexion</div>
    <div className={styles.link}>Chien</div>
    <div className={styles.link}>Chat</div>
    <div className={styles.link}>Panier</div>
    </div>
  )
}

export default Nav;