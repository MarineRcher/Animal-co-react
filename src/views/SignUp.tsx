import styles from './../styles/SignUp.module.css';
import { useState, FormEvent } from 'react';

export interface User {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

function SignUp() {
  const [user, setUser] = useState<User>({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted details:', user);
    
    // Send the form data to the server
    fetch('http://localhost:3003/auth/signup', {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log('Response:', data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }


  return (
    <div className={styles.signUp}>
      <h1 className={styles.title}>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.name}>
          <label htmlFor="name">Prénom</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className={styles.lastName}>
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="test"
            id="lastName"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className={styles.username}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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

export default SignUp;
