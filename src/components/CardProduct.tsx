import styles from './../styles/cardProduct.module.css';
import dogFood from './../assets/dog/food/food.jpg';

import { Product } from '../../data/products';

type Props = {
  product: Product;
};

function CardProduct({ product }: Props) {
  return (
    <div className={styles.card}>
      <img src={dogFood} className={styles.image} />

      <h3>{product.productName}</h3>
      <div> {product.note}/5 </div>
      <div> {product.price}€</div>
      <div> {product.description}</div>
    </div>
  );
}

export default CardProduct;
