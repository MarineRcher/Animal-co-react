import React from 'react';
import styles from '../styles/cardProduct.module.css';

type Props = {
  name: string;
  price: number;
  note: number;
};

function CardProduct({ name, price, note }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>Image</div>

      <h3>{name}</h3>
      <div> {note}/5 </div>
      <div> {price}€</div>
    </div>
  );
}

export default CardProduct;
