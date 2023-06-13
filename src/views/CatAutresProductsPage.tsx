import React from 'react';
import { products } from '../../data/products.ts';
import styles from './../styles/productsPage.module.css';
import CardProduct from '../components/cardProduct.tsx';
import Nav from '../components/nav.tsx';
import dogCat from './../assets/dogandcat.jpg';



type Props = {};

const CatAutresProductsPage = () => {
  return (
    <>
      <Nav />
      <img className={styles.dogCat} src={dogCat} />
      <div className={styles.allIcons}>
        <div className={styles.icon}>
          {products.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatAutresProductsPage;
