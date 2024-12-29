'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../navbar';
import { FaStar, FaLeaf, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import Footer from '../footer';

export default function About() {
  const teamMembers = [
    {
      name: "Holden Caulfield",
      role: "UI Developer",
      bio: "Expert in crafting seamless user experiences that bridge technology and beauty.",
      image: "/hi.jpeg",
    },
    {
      name: "Alper Kamu",
      role: "Designer",
      bio: "Driven by a passion for aesthetics, creating designs that inspire and empower.",
      image: "/hij.jpeg",
    },
    {
      name: "Atticus Finch",
      role: "Creative Director",
      bio: "Pioneering creative strategies that elevate our brand to new heights.",
      image: "/jih.jpeg",
    },
    {
      name: "Henry Letham",
      role: "Marketing Guru",
      bio: "Bringing innovative campaigns to life and connecting with our global audience.",
      image: "/jkl.jpeg",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-gray-50 p-8 relative overflow-hidden">
        {/* Page Heading */}
        <h1 className="text-6xl font-extrabold text-center text-gray-800 mt-10 mb-16 animate__animated animate__fadeInUp">
          About
        </h1>

        <section className="text-center max-w-5xl mx-auto relative px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 animate__animated animate__fadeInDown">
        Welcome to Makeup Magic
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
        Your go-to destination for luxury beauty products, innovative skincare, and bold self-expression. At Makeup Magic,
        we believe beauty has no rules—only limitless possibilities.
      </p>

      {/* Hero Image */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <Image
          src="/okm.jpeg" // Replace with a hero image
          alt="Glamorous makeup setup"
          width={800}
          height={400}
          className="rounded-lg shadow-lg max-w-full mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Floating Stars */}
      <FaStar className="absolute top-16 left-4 sm:left-10 text-pink-500 animate__animated animate__bounce animate__infinite animate__slow text-4xl sm:text-5xl" />
      <FaStar className="absolute top-16 right-4 sm:right-10 text-pink-500 animate__animated animate__bounce animate__infinite animate__slow text-4xl sm:text-5xl" />
    </section>

        {/* Our Story */}
        <section className="mt-16 bg-white p-12 rounded-lg shadow-lg max-w-5xl mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out relative">
          <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
            Our Story
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Born from a passion for creativity and self-expression, Makeup Magic was founded with the mission to empower individuals through the transformative art of makeup. From day one, we&apos;ve been dedicated to providing top-quality products that inspire confidence, celebrate diversity, and encourage self-love. Whether you&apos;re just starting your beauty journey or you&apos;re a seasoned makeup artist, we have the perfect products to help you express your unique style.
          </p>
          {/* Floating Symbol */}
          <FaHandsHelping className="absolute top-5 left-10 text-pink-500 text-5xl animate__animated animate__bounceIn animate__slow" />
        </section>

        {/* Vision and Values */}
        <section className="mt-16 max-w-6xl mx-auto relative">
          <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
            Our Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Empowerment */}
            <div className="text-center p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaHandsHelping className="absolute top-0 left-0 text-pink-500 text-5xl animate__animated animate__bounceIn animate__slow" />
              <h3 className="text-3xl font-bold text-pink-600 mb-4">Empowerment</h3>
              <p className="text-gray-600 text-lg">
                We aim to empower every individual to feel confident and beautiful, embracing their unique style.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaLightbulb className="absolute top-0 left-0 text-yellow-500 text-5xl animate__animated animate__pulse animate__slow" />
              <h3 className="text-3xl font-bold text-pink-600 mb-4">Innovation</h3>
              <p className="text-gray-600 text-lg">
                Staying ahead in the beauty industry by offering cutting-edge products that redefine the beauty experience.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center p-8 bg-gradient-to-br from-pink-100 to-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out relative">
              <FaLeaf className="absolute top-0 left-0 text-green-500 text-5xl animate__animated animate__fadeInUp animate__slow" />
              <h3 className="text-3xl font-bold text-pink-600 mb-4">Sustainability</h3>
              <p className="text-gray-600 text-lg">
                Committed to cruelty-free and eco-conscious practices for a better, greener future.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="text-gray-600 body-font bg-gradient-to-b from-white to-pink-50 py-24 relative">
          <div className="container px-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-4xl font-bold title-font text-pink-600 tracking-wide mb-4">
                Meet Our Team
              </h1>
              <p className="lg:w-2/3 mx-auto text-lg text-gray-700 leading-relaxed">
                A team of passionate individuals dedicated to bringing out your best look, inspiring creativity, and redefining beauty standards.
              </p>
            </div>
            {/* Team Member Cards */}
            <div className="flex flex-wrap -m-4">
              {teamMembers.map((teamMember, index) => (
                <div className="p-4 lg:w-1/2" key={index}>
                  <div className="h-full flex flex-col sm:flex-row items-center sm:justify-start justify-center text-center sm:text-left bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      alt={teamMember.name}
                      width={200}
                      height={200}
                      className="flex-shrink-0 rounded-full w-36 h-36 object-cover shadow-md"
                      src={teamMember.image}
                    />
                    <div className="flex-grow sm:pl-8 mt-4 sm:mt-0">
                      <h2 className="title-font font-medium text-2xl text-pink-600">
                        {teamMember.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3 text-lg">{teamMember.role}</h3>
                      <p className="mb-4 text-gray-600">{teamMember.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Icons in Team Section */}
          <FaStar className="absolute top-10 left-20 text-pink-500 animate__animated animate__bounce animate__infinite animate__slow text-4xl" />
          <FaStar className="absolute top-10 right-20 text-pink-500 animate__animated animate__bounce animate__infinite animate__slow text-4xl" />
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-to-br from-pink-500 to-pink-700 text-white p-10 rounded-lg shadow-lg relative">
          <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__zoomIn">
            Ready to Elevate Your Beauty Game?
          </h2>
          <p className="text-lg leading-relaxed mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Discover products that make you shine inside and out. Join our community and redefine beauty on your own terms.
          </p>
          <Link href={`/component/product/1`}>
            <button className="bg-white text-pink-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-pink-100 hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
              Shop Now
            </button>
          </Link>
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
