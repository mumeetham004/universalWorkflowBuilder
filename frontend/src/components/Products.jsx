import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ name, price, category, rating, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition group">
      <div className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-2 text-xs text-gray-500 font-medium">({rating}.0)</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">Fresh and healthy {category.toLowerCase()} from our farm.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-blue-600">${price}</span>
          <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Organic Whole Milk",
      price: "4.99",
      category: "Milk",
      rating: 5,
      image: "https://images.unsplash.com/photo-1563636619-e9107da5a163?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Artisan Greek Yogurt",
      price: "3.50",
      category: "Yogurt",
      rating: 4,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Pure Salted Butter",
      price: "5.25",
      category: "Butter",
      rating: 5,
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Fresh Cottage Cheese",
      price: "6.75",
      category: "Cheese",
      rating: 4,
      image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of fresh dairy products, made with love and care for your healthy lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
