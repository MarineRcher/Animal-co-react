import React from 'react';
import { products } from '../../data/products.ts';
import styles from './../styles/productPage.module.css';
import Header from '../components/header.tsx';

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <>
      {' '}
      <Header />
      <div className={styles.corps}>
        <div className={styles.image}>Image</div>
        <div className={styles.presentation}>
          <div className={styles.title}>
            <h2>Croquettes</h2>
          </div>
          <div className={styles.description}>
            {' '}
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident
          </div>
          <div className={styles.price}>10€</div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
