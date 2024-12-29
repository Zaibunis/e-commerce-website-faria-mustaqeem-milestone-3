'use client';

import { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    alert('Booking successful!');
  };

  return (
    <div>
      <Navbar />
      <div className=" mt-[30px] mb-[30px] min-h-screen bg-gradient-to-tr from-pink-200 via-pink-100 to-white flex items-center justify-center relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-50"></div>

        {/* Booking Form */}
        <div className="relative z-10 max-w-lg w-full bg-white shadow-2xl rounded-3xl p-10">
          <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-8">
            Book Your Appointment
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-pink-500 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-pink-500 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-pink-500 font-medium mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-600"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-pink-500 font-medium mb-2"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-600"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-pink-500 font-medium mb-2"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-600"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Facial">Facial</option>
                <option value="Makeup">Makeup</option>
                <option value="Skincare Consultation">Skincare Consultation</option>
                <option value="Wellness Coaching">Wellness Coaching</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 px-6 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-transform duration-300 transform hover:scale-105"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
