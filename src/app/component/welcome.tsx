'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar, FaHeart, FaRocket, FaRegSmileBeam , FaHandsHelping } from 'react-icons/fa';

export default function Welcome() {
  return (
    <div className="relative">
      <main className="min-h-screen bg-gradient-to-br from-pink-200 via-white to-pink-100 p-8 md:p-16 flex flex-col items-center overflow-hidden">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-16 relative bg-pink-50 p-8 rounded-xl shadow-lg">
          <div className="text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-6 animate__animated animate__fadeIn">
              Services That Redefine Beauty
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
              We offer a curated selection of luxury beauty products and innovative services to help you look and feel your best.
            </p>
            <Link href="/component/services">
              <button className="bg-pink-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-pink-500 hover:scale-110 transition-transform duration-300 ease-in-out">
                Explore Our Services
              </button>
            </Link>
          </div>
          <div className="relative flex-shrink-0 mb-12 md:mb-0">
            <Image
              src="/j.jpeg"
              alt="Beauty Service"
              width={500}
              height={400}
              className="rounded-xl shadow-lg max-w-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>
      
        {/* Mission Section */}
        <section className="w-full relative bg-gradient-to-r from-pink-300 to-purple-300 py-16 text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/mkl.jpeg"
              alt="Mission Background"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Our Mission</h2>
            <p className="text-lg md:text-2xl mb-6">
              We strive to empower individuals with confidence by providing high-quality beauty products and services that enhance self-expression and celebrate diversity.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="bg-pink-600 p-4 rounded-full text-white text-3xl hover:bg-pink-500 transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <FaHandsHelping />
              </div>
            </div>
          </div>
        </section>
      
        {/* Our Services */}
        <section className="mt-16 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaRegSmileBeam className="absolute top-0 left-0 text-yellow-400 text-5xl animate__animated animate__pulse animate__slow" />
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">Glow Skincare</h3>
              <p className="text-gray-600 text-lg">
                Elevate your skin&rsquo;s natural radiance with our luxurious range of skincare products. From cleansing to moisturizing, we&rsquo;ve got your glow covered.
              </p>
            </div>
      
            {/* Service 2 */}
            <div className="p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaRegSmileBeam className="absolute top-0 left-0 text-green-500 text-5xl animate__animated animate__pulse animate__slow" />
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">Wellness Coaching</h3>
              <p className="text-gray-600 text-lg">
                Our wellness experts will guide you to a balanced lifestyle. Whether it&rsquo;s fitness, mental health, or nutrition, we&rsquo;ve got you covered.
              </p>
            </div>
      
            {/* Service 3 */}
            <div className="p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaRegSmileBeam className="absolute top-0 left-0 text-purple-400 text-5xl animate__animated animate__pulse animate__slow" />
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">Lifestyle Collection</h3>
              <p className="text-gray-600 text-lg">
                Discover products that align with your lifestyle. From eco-friendly packaging to self-care essentials, our collection enhances everyday living.
              </p>
            </div>
          </div>
        </section>
     {/* Customer Testimonial Section */}
<section className="max-w-6xl mx-auto p-12 bg-gradient-to-br from-pink-100 via-white to-pink-300 rounded-xl shadow-lg mb-24 relative text-center">
  <h2 className="text-4xl font-bold text-pink-600 mb-6">What Our Customers Say</h2>
  <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
    
    {/* Testimonial 1 */}
    <div className="flex items-center space-x-6">
      <Image
        src="/girl.jpeg"
        alt="Customer 1"
        width={100}
        height={100}
        className="rounded-full object-cover shadow-md"
      />
      <div>
        <p className="text-lg text-gray-700">
          &quot;Makeup Magic transformed my beauty routine! The consultation was personalized, and the results were stunning.&quot;
        </p>
        <p className="font-semibold text-pink-600">Ava</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="flex items-center space-x-6">
      <Image
        src="/i.jpeg"
        alt="Customer 2"
        width={100}
        height={100}
        className="rounded-full object-cover shadow-md"
      />
      <div>
        <p className="text-lg text-gray-700">
          &quot;The skincare treatment left my skin glowing! I feel so refreshed, and I can't wait for my next session.&quot;
        </p>
        <p className="font-semibold text-pink-600">Emily</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="flex items-center space-x-6">
      <Image
        src="/ik.jpeg"
        alt="Customer 3"
        width={100}
        height={100}
        className="rounded-full object-cover shadow-md"
      />
      <div>
        <p className="text-lg text-gray-700">
          &quot;I attended a beauty workshop, and it was amazing! The tips and tricks I learned have transformed my makeup routine.&quot;
        </p>
        <p className="font-semibold text-pink-600">Hannah</p>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="bg-gradient-to-br from-pink-500 to-pink-700 text-white text-center py-16 px-8 md:py-20 md:px-10 rounded-lg shadow-lg relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Ready to Elevate Your Beauty Routine?
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed mb-8">
                Book an appointment today and explore our exclusive services that will enhance your beauty from the inside out.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/component/booking">
                <button className="bg-white text-pink-600 py-4 px-8 md:py-6 md:px-12 rounded-lg shadow-lg hover:bg-pink-100 hover:scale-110 transition-transform duration-300 ease-in-out">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
