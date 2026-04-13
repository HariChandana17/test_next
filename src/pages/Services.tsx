import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ChevronRight, ArrowLeft } from 'lucide-react';

const Services: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id) {
    const service = SERVICES.find(s => s.id === id);
    if (!service) {
      return <div className="p-20 text-center">Service not found. <Link to="/services" className="text-blue-600 underline">Back to Services</Link></div>;
    }

    return (
      <div className="bg-slate-50 min-h-screen pb-20">
        {/* Service Header */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Link to="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-6 text-sm">
              <ArrowLeft size={16} className="mr-2" /> Back to All Services
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">{service.shortDescription}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 -mt-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column: Description & Features */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Overview</h2>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {service.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full text-blue-600 mr-3 mt-1">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Benefits & CTA */}
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 h-fit">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Why Choose This Service?</h3>
                <ul className="space-y-4 mb-10">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-amber-100 p-1 rounded-full text-amber-600 mr-3 mt-1">
                        <Check size={14} />
                      </div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full text-center bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
                  >
                    {service.ctaText}
                  </Link>
                  <p className="text-xs text-center text-slate-500">
                    Need custom requirements? <Link to="/contact" className="underline text-blue-600">Contact us</Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  // Overview List View
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          At V NEXT, we specialize in three core areas to help businesses achieve accuracy, efficiency, and growth.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-2 bg-blue-900 group-hover:bg-amber-500 transition-colors"></div>
              <div className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-between w-full px-6 py-3 bg-slate-50 text-blue-900 font-semibold rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-all"
                >
                  Learn More <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;