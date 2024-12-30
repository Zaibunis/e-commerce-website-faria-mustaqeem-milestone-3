'use client';

import { useRouter } from 'next/router';
import Navbar from '../../navbar';
import Footer from '../../footer';

const services = {
  '1': {
    title: 'Luxury Facials',
    description: 'Experience rejuvenation with our premium facial treatments designed to bring out your natural glow.',
    details: 'Our facials are customized to your skin&rsquo;s needs. Whether you need deep hydration, anti-aging treatments, or simply a fresh glow, our expert estheticians will provide the perfect facial tailored to you.',

    imageUrl: '/fac.jpeg',
  },
  '2': {
    title: 'Makeup Artistry',
    description: 'From everyday looks to special occasions, our makeup artists ensure you look stunning.',
    details: 'Our makeup artists specialize in various styles, from natural makeup to bold looks for events. We use high-quality products to ensure your makeup lasts all day.',
    imageUrl: '/art.jpeg',
  },
  '3': {
    title: 'Wellness Coaching',
    description: 'Achieve balance and vitality with personalized coaching for your mind and body.',
    details: 'Our wellness coaches help you set goals and create a balanced lifestyle, incorporating physical and mental well-being practices to help you thrive.',
    imageUrl: '/well.jpeg',
  },
  '4': {
    title: 'Eco-Friendly Skincare',
    description: 'Discover our range of sustainable skincare products that care for you and the planet.',
    details: 'Our eco-friendly skincare range includes products designed to nourish your skin while minimizing environmental impact. All products are ethically sourced and cruelty-free.',
    imageUrl: '/eco.jpeg',
  },
  '5': {
    title: 'Diamond Spa',
    description: 'Indulge in a luxurious spa experience that rejuvenates your body and mind.',
    details: 'Our Diamond Spa offers a luxurious and peaceful atmosphere, providing top-of-the-line treatments for ultimate relaxation and rejuvenation. Let us pamper you from head to toe.',
    imageUrl: '/spa.jpeg',
  },
  '6': {
    title: 'Energy Therapy',
    description: 'Recharge and revitalize with our innovative energy therapy sessions.',
    details: 'Our energy therapy sessions help restore balance and vitality through healing techniques, including energy work and relaxation methods, to help you feel rejuvenated and focused.',
    imageUrl: '/ene.jpeg',
  },
};

export default function ServiceDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  // Cast the id as one of the keys of the services object
  const service = services[id as keyof typeof services];

  if (!service) {
    return <div>Service not found!</div>;
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
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg shadow-xl"
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
                {service.title} - Click below to reserve your spot.
              </p>

              <a
                href="/component/booking" // Link to the contact or booking page
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
