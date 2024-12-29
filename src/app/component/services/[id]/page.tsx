'use client';

import { useRouter } from 'next/router';
import Navbar from '../../navbar';
import Image from 'next/image'; // For images (you can use your own images)
import { FaSpa, FaPaintBrush, FaHeartbeat, FaLeaf, FaGem, FaBolt } from 'react-icons/fa';
import Footer from '../../footer';

export default function ServiceDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Define the service details for each service with images and engaging content
  const services = {
    'luxury-facials': {
      title: 'Luxury Facials',
      description:
        'Experience rejuvenation with our premium facial treatments designed to bring out your natural glow.',
      details:
        'Our facials are customized to your skin’s needs. Whether you need deep hydration, anti-aging treatments, or simply a fresh glow, our expert estheticians will provide the perfect facial tailored to you.',
      imageUrl: '/images/luxury-facials.jpg', // Add a suitable image
      callToAction: 'Book Your Facial Now!',
    },
    'makeup-artistry': {
      title: 'Makeup Artistry',
      description:
        'From everyday looks to special occasions, our makeup artists ensure you look stunning.',
      details:
        'Our makeup artists specialize in various styles, from natural makeup to bold looks for events. We use high-quality products to ensure your makeup lasts all day.',
      imageUrl: '/images/makeup-artistry.jpg', // Add a suitable image
      callToAction: 'Book Your Makeup Appointment!',
    },
    'wellness-coaching': {
      title: 'Wellness Coaching',
      description:
        'Achieve balance and vitality with personalized coaching for your mind and body.',
      details:
        'Our wellness coaches help you set goals and create a balanced lifestyle, incorporating physical and mental well-being practices to help you thrive.',
      imageUrl: '/images/wellness-coaching.jpg', // Add a suitable image
      callToAction: 'Start Your Wellness Journey!',
    },
    // Add other services here with their details
  };

  // Check if the service exists
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found!</div>; // Handle missing service
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-pink-100 to-pink-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-pink-600">{service.title}</h1>
            <p className="text-lg text-gray-700 mt-4">{service.description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Image */}
            <div className="relative w-full h-80 sm:h-96 lg:h-full">
              <Image
                src={service.imageUrl}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Service Details */}
            <div className="flex flex-col justify-center text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-pink-600">Why Choose {service.title}?</h2>
              <p className="text-lg">{service.details}</p>

              <h3 className="text-2xl font-semibold text-pink-500">What We Offer:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personalized treatments</li>
                <li>High-quality products</li>
                <li>Expert guidance and attention</li>
                <li>Relaxing and rejuvenating experience</li>
              </ul>

              <h3 className="text-2xl font-semibold text-pink-500">Book Your Appointment:</h3>
              <p className="text-lg">
                {service.callToAction} Click below to reserve your spot.
              </p>

              <a
                href="/contact" // Link to contact page or booking system
                className="inline-block bg-pink-500 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
