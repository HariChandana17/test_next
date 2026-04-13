import React from 'react';
import { INDUSTRIES } from '../constants';
import { Link } from 'react-router-dom';
import { Factory, Truck, ShoppingBag, Car, Store } from 'lucide-react';

const Industries: React.FC = () => {
  
  const getIcon = (name: string) => {
    switch(name) {
      case 'Logistics & Warehousing': return <Truck size={40} />;
      case 'Retail & Distribution': return <ShoppingBag size={40} />;
      case 'Manufacturing': return <Factory size={40} />;
      case 'Automobile': return <Car size={40} />;
      case 'Franchise Operations': return <Store size={40} />;
      default: return <Factory size={40} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Industries We Serve</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our expertise spans across key sectors, delivering tailored solutions for unique operational challenges.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center">
              <div className="text-blue-900 mb-6 p-4 bg-blue-50 rounded-full">
                {getIcon(ind.name)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{ind.name}</h3>
              <p className="text-slate-500 text-sm mb-6">
                Specialized assurance services for {ind.name.toLowerCase()} including audits, staffing, and process optimization.
              </p>
              <Link to="/contact" className="text-amber-600 font-semibold text-sm hover:underline">
                Get Industry Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-900 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Don't see your industry?</h2>
          <p className="mb-8 text-blue-200">We adapt our core assurance methodology to various sectors. Contact us to discuss your specific needs.</p>
          <Link to="/contact" className="px-6 py-3 bg-white text-blue-900 rounded font-bold hover:bg-slate-100 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Industries;