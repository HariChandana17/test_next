import React, { useState } from 'react';
import { sendEmailContact } from '../services/apiService';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendEmailContact(formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Address</h3>
                    <p className="text-slate-600">#829, 8th Floor, Manjeera Majestic Commercial</p>
                    <p className="text-sm text-slate-500 mt-1">Kukatpally, Hyderabad</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <a href="mailto:vnextassociates@gmail.com" className="text-slate-600 hover:text-blue-600">vnextassociates@gmail.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <a href="tel:+918074010081" className="text-slate-600 hover:text-blue-600">+91 80740 10081</a>
                  </div>
                </li>
              </ul>
            </div>
            
             <div className="bg-blue-900 p-8 rounded-xl text-white">
               <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Clock size={20}/> Office Hours</h3>
               <p className="mb-2">Monday - Saturday</p>
               <p className="mt-4 text-blue-200 text-sm">Our AI Assistant is available 24/7 for basic guidance.</p>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Thank you for contacting us. We will respond to your enquiry shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Enquiry</h2>
                <p className="text-slate-500 mb-6">Fill out the form below and we'll get back to you.</p>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea required className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none h-40"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                
                <button disabled={isSubmitting} type="submit" className="w-full bg-blue-900 text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors disabled:opacity-70">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;