'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation'; // This hook accesses dynamic route parameters
import React, { useEffect, useState } from 'react';
import Navbar from "../../../app/component/navbar"; // Adjust path if needed
import Footer from '../footer';

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

const productImages: { [key: number]: string } = {
  1: '/mp.jpeg',
  2: '/eye.jpeg',
  3: '/ssd.jpeg',
  4: '/rty.jpeg',
  5: '/redo.jpeg',
  6: '/bo.jpeg',
};

const productNames: { [key: number]: string } = {
  1: 'Mascara Volume Extreme',
  2: 'Eye Shadow Palette',
  3: 'Sephora Setting Powder',
  4: 'Red Matte Lipstick',
  5: 'Red Shiny Nail Polish',
  6: 'Calvin Klein Fragrance',
};

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false); // Checkout popup
  const [checkoutMessage, setCheckoutMessage] = useState<string>(''); // Checkout message

  const { id } = useParams(); // Access dynamic route parameters directly

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, [id]);

  const fetchProduct = async (id: string | string[]) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) throw new Error('Product not found');
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    if (product) {
      const existingProduct = cart.find(item => item.product.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.push({ product, quantity });
      }
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
      setQuantity(1);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    setCheckoutMessage('Your order has been successfully placed!');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    localStorage.removeItem('cart');
    setCart([]);
  };

  const updateQuantity = (action: 'increase' | 'decrease') => {
    setQuantity(prev => (action === 'increase' ? prev + 1 : Math.max(prev - 1, 1)));
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Cart Summary */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              {cart.length > 0 ? (
                cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <span className="font-semibold">{productNames[item.product.id]}</span>
                      <p className="text-sm text-gray-600">
                        ${item.product.price} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 font-bold hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
              {cart.length > 0 && (
                <>
                  <div className="mt-4 flex justify-between">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-xl font-semibold text-pink-500">
                      ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0)}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="mt-4 w-full py-2 px-4 rounded-md bg-pink-500 text-white font-bold hover:bg-pink-700 transition-colors duration-300"
                  >
                    Checkout
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right side: Product Details */}
          <div className="md:w-2/3">
            <div className="flex flex-col">
              <div className="md:w-1/2">
                <Image
                  src={productImages[product.id] || '/fallback-image.jpg'}
                  width={500}
                  height={300}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
              </div>
              <h1 className="text-3xl font-bold">{productNames[product.id] || product.name}</h1>
              <p className="text-xl font-semibold text-gray-600 mt-2">${product.price}</p>
              <p className="mt-4 text-lg">{product.description}</p>
              <div className="mt-6 flex items-center space-x-2">
                <button onClick={() => updateQuantity('decrease')} className="bg-black text-white px-4 py-2 rounded-md">
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button onClick={() => updateQuantity('increase')} className="bg-black text-white px-4 py-2 rounded-md">
                  +
                </button>
              </div>
              <button
                onClick={addToCart}
                className="mt-4 text-white font-bold py-2 px-4 rounded-md bg-pink-500 hover:bg-pink-700 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Checkout Popup */}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold">{checkoutMessage}</p>
            </div>
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}
