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
            {products.map((product) => (
              <p key="1"> {product.name} </p>
            ))}
          </div>
          <div className={styles.description}>
            {products.map((product) => (
              <p key={1}> {product.description} </p>
            ))}
          </div>
          <div className={styles.price}>
            {products.map((product) => (
              <p key={1}> {product.price} </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
