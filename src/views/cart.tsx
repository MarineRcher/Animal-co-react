import React, { useState, useEffect } from 'react';


interface User {
    id: number;
    name: string;
    cartItems: CartItem[];
  }

  interface Product {
    id: number;
    name: string;
    price: number;
  }

const Cart = () => {
    const [cartProduct, setCartProduct] = useState<CartProduct[]>([];)
}