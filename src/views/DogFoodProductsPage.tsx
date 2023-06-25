import { useEffect, useState } from 'react';
import styles from './../styles/productsPage.module.css';
import CardProduct from './../components/CardProduct.tsx';
import Nav from '../components/nav.tsx';
import dogCat from './../assets/dogandcat.jpg';
import { Product } from '../components/CardProduct.tsx';

const DogFoodProductsPage = () => {
  const [products, setProduct] = useState<Product[]>([]);

  const fetchProductData = async () => {
    const response = await fetch('http://localhost:3003/product/dog/food');
    const value = await response.json();
    setProduct(value.post);
    console.log(value);
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
          {products.length > 0 &&
            products.map((product, index: number) => {
              return <CardProduct key={index} product={product} />;
            })}
        </div>
      </div>
    </>
  );
};

export default DogFoodProductsPage;
