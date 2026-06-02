import React from 'react';
import { ShoppingCart, Menu, Milk } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Milk className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-bold text-gray-800 tracking-tight">Dairia</span>
      </div>

      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="#" className="hover:text-blue-600 transition">Home</a>
        <a href="#products" className="hover:text-blue-600 transition">Products</a>
        <a href="#about" className="hover:text-blue-600 transition">About Us</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-blue-600 transition relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </button>
        <button className="md:hidden p-2 text-gray-600">
          <Menu className="h-6 w-6" />
        </button>
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
