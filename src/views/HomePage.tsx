import styles from './../styles/homePage.module.css';
import Nav from '../components/nav';

//import images
import dogandcat from './../assets/dogandcat.jpg';
import dogFood from './../assets/dog/food/food.jpg';
import ball from './../assets/dog/autre/ball.jpg';
import arbre from './../assets/cat/autres/arbre.jpg';
import jouetCat from './../assets/cat/autres/jouet.jpg';


export default function HomePage() {
  return (
    <>
    
      <img className={styles.dogandcat} src={dogandcat} />
      <div className={styles.presentation}>
        <div className={styles.boxPresntation}>
          <h2>100% Organique</h2>
          <div className={styles.textBox}>liposuie wlo oqohcsa dk dkqkqd. dmcnjsdka</div>
        </div>
        <div className={styles.boxPresntation}>
          <h2>100% Francais</h2>
          <div className={styles.textBox}>liposuie wlo oqohcsa dk dkqkqd. dmcnjsdka</div>
        </div>
        <div className={styles.boxPresntation}>
          <h2>100% Organique</h2>
          <div className={styles.textBox}>liposuie wlo oqohcsa dk dkqkqd. dmcnjsdka</div>
        </div>
        <div className={styles.boxPresntation}>
          <h2>100% Organique</h2>
          <div className={styles.textBox}>liposuie wlo oqohcsa dk dkqkqd. dmcnjsdka</div>
        </div>
        </div>
        <div className={styles.titleProducts}>Produits</div>
        <div className={styles.categoryProduits}>Nos différentes catégories</div>
        <div className={styles.categories}>

          <div className={styles.category}>
            <img className={styles.imgCategories} src={dogFood}></img>
          </div>
          <div className={styles.category}>
          <img className={styles.imgCategories} src={ball}></img>
          </div>
          <div className={styles.category}>
          <img className={styles.imgCategories} src={ball}></img>
          </div>
          <div className={styles.category}>
            <img className={styles.imgCategories} src={dogFood}></img>
          </div>
          <div className={styles.category}>
          <img className={styles.imgCategories} src={dogFood}></img>
          </div>
          <div className={styles.category}>
          <img className={styles.imgCategories} src={jouetCat}></img>
          </div>

        </div>
    </>
  );
}