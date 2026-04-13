import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart2, Users, TrendingUp } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Optimizing Accuracy.<br/>
            <span className="text-amber-400">Empowering People.</span><br/>
            Driving Growth.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Your partner for People, Product, and Process Assurance. We deliver smart, reliable, and technology-driven solutions for measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-amber-500 text-blue-900 font-bold rounded-lg hover:bg-amber-400 transition-colors shadow-lg"
            >
              Get a Quote
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Us</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We help businesses build efficiency, accuracy, and growth. We are a passionate team of professionals providing assurance services for enterprises across industries. Our mission is to deliver smart solutions that create measurable impact, empowering businesses with transparency and operational excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Accuracy</h3>
                <p className="text-sm text-slate-500">Precision in every audit and report.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">People</h3>
                <p className="text-sm text-slate-500">Empowering your workforce effectively.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Growth</h3>
                <p className="text-sm text-slate-500">Driving sustainable business expansion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Core Services</h2>
            <p className="text-slate-600">Comprehensive solutions tailored for your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
                <div className="mb-6 text-blue-900">
                  {/* Icon mapping would go here, simplified for now */}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-8 flex-grow">
                  {service.shortDescription}
                </p>
                <button 
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose V NEXT?</h2>
              <ul className="space-y-6">
                {[
                  "Strong expertise in audits & compliance",
                  "Technology-driven approach (ERP, RFID, barcodes)",
                  "Pan–South India reach",
                  "Customer-focused, dedicated support",
                  "Proven results: Reduced discrepancies by 40%"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-blue-50 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-amber-400">Dead Stock Liquidation</h3>
              <p className="text-blue-100 mb-6">
                We act as a bridge specifically for non-moving inventory. Whether you are buying specific parts or selling dead stock, we facilitate the connection.
              </p>
              <Link to="/buy-sell" className="inline-block px-6 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-slate-100 transition-colors">
                Visit Buy / Sell Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Ready to optimize your operations?</h2>
          <Link to="/contact" className="inline-block px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 shadow-lg transition-transform hover:-translate-y-1">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;