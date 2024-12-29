'use client';

import { useState, useEffect } from 'react';
import Footer from './footer';


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | null;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const CartSummary = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const removeItem = (id: number) => {
    const updatedCart = cart.filter(item => item.product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div>
    
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold">Cart Summary</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center mt-4">
                <div>
                  <p>{item.product.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>${item.product.price * item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.product.id)} className="text-red-500 hover:underline">
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Total: ${getTotalPrice()}</h2>
            </div>
            <button className="mt-4 text-white font-bold py-2 px-4 rounded-md bg-pink-500 hover:bg-pink-700 transition-colors duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartSummary;
