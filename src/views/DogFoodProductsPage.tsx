import React from 'react';
import { useEffect, useState } from 'react';
import { products } from '../../data/products.ts';
import styles from './../styles/productsPage.module.css';
import CardProduct from '../components/cardProduct.tsx';
import Nav from '../components/nav.tsx';
import dogCat from './../assets/dogandcat.jpg';
//import { Product } from '../components/cardProduct.tsx';

const DogFoodProductsPage = () => {
  const [product, setProduct] = useState([]);

  const fetchProductData = () => {
    fetch('http://localhost:3003/product/dog/food')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data from fetch: ', data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <>
      <Nav />

      <img className={styles.dogCat} src={dogCat} />
      <div className={styles.allIcons}>
        <div className={styles.icon}>
          {products.map((product) => ( 
            <CardProduct key={product.id}
              product={{ productName: '', note: 4, price: 4, description: 'description' }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DogFoodProductsPage;
