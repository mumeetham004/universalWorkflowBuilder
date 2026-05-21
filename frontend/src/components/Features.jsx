import React from 'react';
import { Leaf, Truck, ShieldCheck, Clock } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition">
    <div className="bg-blue-50 p-4 rounded-2xl mb-6">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature
            icon={Leaf}
            title="100% Organic"
            description="Our dairy products come from grass-fed cows with no added hormones or chemicals."
          />
          <Feature
            icon={Truck}
            title="Fast Delivery"
            description="Fresh dairy products delivered to your doorstep within hours of production."
          />
          <Feature
            icon={ShieldCheck}
            title="Quality Assured"
            description="Every batch is tested for purity and quality to ensure you get only the best."
          />
          <Feature
            icon={Clock}
            title="Always Fresh"
            description="We maintain a strict cold chain to keep our products as fresh as possible."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
