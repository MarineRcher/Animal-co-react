import styles from './../styles/header.module.css';

function Header() {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.titre}>Animal&Co</div>
        <div className={styles.panier}> Panier</div>
        <div className={styles.connexion}>Se connecter</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.chien}>Chien</div>
        <div className={styles.chat}>Chat</div>
      </div>
    </>
  );
}

export default Header;
