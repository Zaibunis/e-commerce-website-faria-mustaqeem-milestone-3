

'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-pink-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-pink-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-pink-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookF className="text-2xl hover:text-pink-300 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter className="text-2xl hover:text-pink-300 transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram className="text-2xl hover:text-pink-300 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedinIn className="text-2xl hover:text-pink-300 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md border-2 border-white bg-white text-gray-800"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-pink-700 text-white font-semibold hover:bg-pink-800"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <p className="flex text-sm">1234 Makkah Hotel, Karachi, Pakistan</p>
            <p className="text-sm">Email: zainabmustaqeem123@hotmail.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Makeup Magic✨. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
