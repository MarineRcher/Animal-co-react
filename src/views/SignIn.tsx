import styles from './../styles/SignIn.module.css';
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


export interface User {
  email: string;
  password: string;
}

// Composant
function SignIn() {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted details:', user);

    // Send the form data to the server
    fetch('http://localhost:3003/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log('Response:', data);
        localStorage.setItem('JWT', data.token);
        navigate('/Cat/Others');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }

  return (
    <div className={styles.signIn}>
      <h1 className={styles.title}>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className={styles.password}>
          <label htmlFor="reason">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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

export default SignIn;
