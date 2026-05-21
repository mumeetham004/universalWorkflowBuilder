import React from 'react';
import { Milk, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Milk className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold tracking-tight text-white">Dairia</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bringing the goodness of nature to your table. We are dedicated to providing the highest quality dairy products.
            </p>
            <div className="flex space-x-4">
              {/* Social icons removed due to library issues */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition">Our Products</a></li>
              <li><a href="#" className="hover:text-white transition">Subscription Plans</a></li>
              <li><a href="#" className="hover:text-white transition">Delivery Areas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Returns Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new products and special offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dairia Milk Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
