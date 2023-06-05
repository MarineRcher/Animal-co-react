import styles from './../styles/SignIn.module.css';
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
      <h1 className={styles.title}>Connexion</h1>
      <form onSubmit={handleSubmit}>
       
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
        
        <div>
          <button type="submit" className={styles.submit}>
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
