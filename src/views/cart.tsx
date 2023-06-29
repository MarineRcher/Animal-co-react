import React, { useState, useEffect } from 'react';


export interface Panier {
  _id: string;
  userId: string;
  productId: string;
  quantity: number;
}


const Cart = () => {
  const [panier, setPanier] = useState<Panier[]>([]);

  useEffect(() => {
    fetchPanierItems();
  }, []);

  const fetchPanierItems = async () => {
    try {
      const response = await fetch('http://localhost:3003/cart/product');
      const data = await response.json();
      setPanier(data.panier);
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    }
  };

  return (
    <>
    <div>
      <h1>Panier</h1>
      {panier.map((item) => (
        <div key={item._id}>
          <p>Produit ID: {item.productId}</p>
          <p>Quantité: {item.quantity}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;