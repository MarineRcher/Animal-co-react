import styles from './../styles/SignUp.module.css';
import { useState, FormEvent } from 'react';

type Account = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

// Composant
export default function SignUp() {
  const [account, setAccount] = useState<Account>({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted details:', account);
  }

  return (
    <div className={styles.signUp}>
      <h1 className={styles.title}>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <label htmlFor="name">Prénom</label>
          <input
            type="name"
            id="name"
            value={account.name}
            onChange={(e) => setAccount({ ...account, name: e.target.value })}
          />
        </div>
        <div className={styles.lastName}>
          <label htmlFor="name">Nom de famille</label>
          <input
            type="lastName"
            id="lastName"
            value={account.lastName}
            onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
          />
        </div>
        <div className={account.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="reason">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="reason">Confirmez le mot de passe</label>
          <input
            id="password"
            type="password"
            value={account.password}
            onChange={(e) => setAccount({ ...account, password: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className={styles.submit}>
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}
