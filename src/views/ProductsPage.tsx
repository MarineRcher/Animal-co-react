import React from 'react';
import { products } from '../../data/products.ts';
import styles from './../styles/productsPage.module.css';
import CardProduct from '../components/CardProduct.tsx';

type Props = {};

const ProductsPage = (props: Props) => {
  return (
    <>
      {' '}
     
      <div className={styles.allIcons}>
        <div className={styles.icon}>
        {products.map((product) => (
             <CardProduct name={product.name} price={product.price} note={product.note} />
              ))}
              
              
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
