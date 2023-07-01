import React, { useEffect, useState } from 'react';
import styles from './../styles/productsPage.module.css';
import CardProduct from '../components/CardProduct.tsx';

import dogCat from './../assets/dogandcat.jpg';
import { Product } from '../components/CardProduct.tsx';

export interface CartItem {
  product: Product;
  quantity: number;
}

const CatAutresProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productId: string): void => {
    const product = products.find((item) => item.id === productId);
    if (!product) return; // Return early if product is not found
  
    const existingCartItem = cart.find((item) => item.product.id === productId);
  
    let updatedCart: CartItem[];
  
    if (existingCartItem) {
      // If the product already exists in the cart, increase the quantity
      updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart = [...cart, { product, quantity: 1 }];
    }
  
    setCart(updatedCart);
  
    const requestBody = {
      userId: 'your_user_id', // Replace with the actual user ID
      productId: productId, // Include the productId in the request body
      quantity: existingCartItem ? existingCartItem.quantity + 1 : 1,
    };
  
    // Send the updated cart to the server (API)
    fetch('http://localhost:3003/cart/product', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Panier mis à jour:', data);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de la mise à jour du panier:", error);
      });
  };
  

  const isInCart = (productId: string): boolean =>
    cart.some((item) => item.product.id === productId);

  const fetchProductData = async () => {
    try {
      const response = await fetch('http://localhost:3003/product/cat/others');
      const value = await response.json();
      setProducts(value.post);
      console.log(value);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
     

      <img className={styles.dogCat} src={dogCat} />
      <div className={styles.allIcons}>
        <div className={styles.icon}>
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          {products.length > 0 && (
            <button
              disabled={isInCart(products[0].id)}
              onClick={() => addToCart(products[0].id)} // Pass the productId to addToCart function
            >
              Ajouter au panier
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CatAutresProductsPage;
