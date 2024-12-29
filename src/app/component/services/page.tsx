'use client';

import { FaSpa, FaPaintBrush, FaHeartbeat, FaLeaf, FaGem, FaBolt } from 'react-icons/fa';
import Navbar from '../navbar';
import Link from 'next/link';
import Footer from '../footer';

export default function Services() {
  const services = [
    {
      id: 'luxury-facials',
      icon: <FaSpa className="text-pink-500 text-6xl mb-4" />,
      title: 'Luxury Facials',
      description:
        'Experience rejuvenation with our premium facial treatments designed to bring out your natural glow.',
    },
    {
      id: 'makeup-artistry',
      icon: <FaPaintBrush className="text-purple-500 text-6xl mb-4" />,
      title: 'Makeup Artistry',
      description:
        'From everyday looks to special occasions, our makeup artists ensure you look stunning.',
    },
    {
      id: 'wellness-coaching',
      icon: <FaHeartbeat className="text-red-500 text-6xl mb-4" />,
      title: 'Wellness Coaching',
      description:
        'Achieve balance and vitality with personalized coaching for your mind and body.',
    },
    {
      id: 'eco-friendly-skincare',
      icon: <FaLeaf className="text-green-500 text-6xl mb-4" />,
      title: 'Eco-Friendly Skincare',
      description:
        'Discover our range of sustainable skincare products that care for you and the planet.',
    },
    {
      id: 'diamond-spa',
      icon: <FaGem className="text-blue-500 text-6xl mb-4" />,
      title: 'Diamond Spa',
      description:
        'Indulge in a luxurious spa experience that rejuvenates your body and mind.',
    },
    {
      id: 'energy-therapy',
      icon: <FaBolt className="text-yellow-500 text-6xl mb-4" />,
      title: 'Energy Therapy',
      description:
        'Recharge and revitalize with our innovative energy therapy sessions.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-pink-200 p-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600">Our Services</h1>
          <p className="text-lg text-gray-700 mt-4">
            Discover the ultimate blend of luxury and expertise with our curated services.
          </p>
        </div>
        {/* Layout for services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-300 via-purple-300 to-white opacity-10 pointer-events-none"></div>
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-bold text-pink-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link
                  href={`/services/${service.id}`} // Navigate to the detailed page
                  className="inline-block bg-pink-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
