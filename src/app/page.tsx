'use client';


import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import Welcome from './component/welcome';
import Footer from './component/footer';

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | null; // Image URL for each product
}

// Manually map product IDs to specific image URLs (example)
const productImages: { [key: number]: string } = {
  1: '/mp.jpeg',
  2: '/eye.jpeg',
  3: '/ssd.jpeg',
  4: '/rty.jpeg',
  5: '/redo.jpeg',
  6: '/bo.jpeg',
};

 // Manually map product IDs to specific names (example)
 const productNames: { [key: number]: string } = {
  1: 'Mascara Volume Extreme',
  2: 'Eye Shadow Palette',
  3: 'Sephora Setting Powder',
  4: 'Red Matte Lipstick',
  5: 'Red Shiny Nail Polish',
  6: 'Calvin Klein Fragrance',
};

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on component mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://dummyjson.com/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setProducts(data.products.slice(0, 6)); // Limit to the first 6 products
      } catch (error: any) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // Empty dependency array means it runs once when the component mounts

  // If loading, display loading message
  if (loading) {
    return <p>Loading products...</p>;
  }

  // If there is an error, display error message
  if (error) {
    return <p>{error}</p>;
  }

  // If no products, display fallback message
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  // Render the products with name, price, image, and description
  return (
    <div>
      <Navbar />
      <section className="bg-pink-50 py-12">
      <div className="container mx-auto text-center px-6 bg-pink-600 text-white py-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4 hover:scale-110 transition-transform duration-300">
          Limited Time Sale on Makeup Products!
        </h2>
        <p className="text-lg mb-8">
          Discover your favorite beauty products at up to <span className="font-bold">50% off</span>. Don’t miss out on this exclusive offer.
        </p>
        <Link href="/shop" className="text-lg font-medium underline hover:no-underline transition duration-300">
          Shop the Sale Now
        </Link>
      </div>
    </section>
      <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-gray-50 p-8">
        <h1 className="text-6xl font-extrabold text-center text-gray-800 mt-10 mb-16">Our Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className="relative border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow transform hover:scale-105 duration-300" // Apply scaling on hover
            >
              {/* Use the custom productImages map to assign an image based on product ID */}
              <Image
                src={productImages[product.id] || '/fallback-image.jpg'} // Default fallback if no mapping is found
                width={500}
                height={300}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 id={`product-name-${product.id}`} className="text-xl font-semibold">
                {productNames[product.id] || product.name} {/* Use the mapped name */}
              </h2> {/* Product name with unique id */}
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/component/product/${product.id}`} // Navigate to the product detail page
                >
                  <button className="text-white font-bold py-2 px-4 rounded-md bg-pink-500 hover:bg-pink-700 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
     <Welcome />
     <Footer />
    </div>
  );
}
