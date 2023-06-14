import styles from './../styles/cardProduct.module.css';
import dogFood from './../assets/dog/food/food.jpg';


export interface Product {
id: any;
name: string;
price: number;
note: number;
description: string;
categoryAnimal: string;
category: string;
}

type Props = {
  product: Product;
};

function CardProduct({ product }: Props) {
  return (
    <div className={styles.card}>
      <img src={dogFood} className={styles.image} />

      <h3>{product.name}</h3>
      <div> {product.note}/5 </div>
      <div> {product.price}€</div>
    </div>
  );
}

export default CardProduct;
