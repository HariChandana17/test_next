// import React, { useState } from 'react';
// import { sendRequirements } from '../services/apiService';
// import { AlertCircle, Upload, CheckCircle } from 'lucide-react';

// const BuySell: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   // Simple state management for forms
//   const [buyerData, setBuyerData] = useState({
//     name: '', companyName: '', email: '', phone: '', productName: '', brand: '', message: ''
//   });
  
//   const [sellerData, setSellerData] = useState({
//     name: '', companyName: '', email: '', phone: '', brand: '', 
//     yearMfg: '', yearPurchase: '', serial: '', partNo: '', description: ''
//   });

//   const handleBuyerSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await sendRequirements({
//       name: buyerData.name,
//       email: buyerData.email,
//       phone: buyerData.phone,
//       brand: buyerData.brand,
//       message: `
//     Company: ${buyerData.companyName}
//     Product: ${buyerData.productName}
//     Message: ${buyerData.message || 'N/A'}`
//     });
//     alert("Buyer requirement submitted for professional analysis. We will contact you shortly.");
//     } catch (err) {
//       console.error("Error submitting:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSellerSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await sendRequirements({ type: 'SELLER', ...sellerData });
//       setSubmitStatus('success');
//       setTimeout(() => setSubmitStatus('idle'), 5000);
//     } catch (err) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const SuccessMessage = () => (
//     <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 flex items-center gap-3 border border-green-200">
//       <CheckCircle size={20} />
//       <span>Requirement submitted successfully! Our team will contact you shortly.</span>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 py-12">
//       <div className="container mx-auto px-4 md:px-6">
        
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dead Stock Liquidation</h1>
//           <p className="text-slate-600">
//             A controlled bridge between businesses holding non-moving inventory and buyers seeking specific parts.
//             We are not a marketplace; we facilitate professional connections.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="flex border-b border-slate-200">
//             <button
//               onClick={() => { setActiveTab('buyer'); setSubmitStatus('idle'); }}
//               className={`flex-1 py-6 text-center font-bold text-lg transition-colors ${
//                 activeTab === 'buyer' ? 'bg-blue-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
//               }`}
//             >
//               I want to BUY Parts
//             </button>
//             <button
//               onClick={() => { setActiveTab('seller'); setSubmitStatus('idle'); }}
//               className={`flex-1 py-6 text-center font-bold text-lg transition-colors ${
//                 activeTab === 'seller' ? 'bg-amber-500 text-blue-900' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
//               }`}
//             >
//               I want to SELL Dead Stock
//             </button>
//           </div>

//           <div className="p-8 md:p-12">
//             {submitStatus === 'success' && <SuccessMessage />}

//             {activeTab === 'buyer' ? (
//               <form onSubmit={handleBuyerSubmit} className="space-y-6 animate-fade-in">
//                 <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-800 mb-6">
//                   <AlertCircle size={20} className="shrink-0" />
//                   <p>Send your requirements for specific machine parts or products. We will check our database of verified sellers.</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
//                     <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                       value={buyerData.name} onChange={e => setBuyerData({...buyerData, name: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
//                     <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                        value={buyerData.companyName} onChange={e => setBuyerData({...buyerData, companyName: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
//                     <input required type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                        value={buyerData.email} onChange={e => setBuyerData({...buyerData, email: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
//                     <input required type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                        value={buyerData.phone} onChange={e => setBuyerData({...buyerData, phone: e.target.value})} />
//                   </div>
//                 </div>

//                 <div className="border-t border-slate-100 pt-6">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-4">Product Requirement</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                      <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Part / Product Name</label>
//                       <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                          value={buyerData.productName} onChange={e => setBuyerData({...buyerData, productName: e.target.value})} />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Brand / Manufacturer</label>
//                       <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
//                          value={buyerData.brand} onChange={e => setBuyerData({...buyerData, brand: e.target.value})} />
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
//                     <textarea className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none h-32"
//                        value={buyerData.message} onChange={e => setBuyerData({...buyerData, message: e.target.value})} placeholder="Additional details..." ></textarea>
//                   </div>
//                 </div>

//                 <button disabled={isSubmitting} type="submit" className="w-full bg-blue-900 text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors disabled:opacity-70">
//                   {isSubmitting ? 'Sending...' : 'Submit Buyer Enquiry'}
//                 </button>
//               </form>
//             ) : (
//               <form onSubmit={handleSellerSubmit} className="space-y-6 animate-fade-in">
//                  <div className="bg-amber-50 p-4 rounded-lg flex gap-3 text-sm text-amber-900 mb-6">
//                   <Upload size={20} className="shrink-0" />
//                   <p>Upload details of your dead stock. You can enter details manually below OR upload an Excel/TXT file at the end.</p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
//                     <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                       value={sellerData.name} onChange={e => setSellerData({...sellerData, name: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
//                     <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                       value={sellerData.companyName} onChange={e => setSellerData({...sellerData, companyName: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
//                     <input required type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                       value={sellerData.email} onChange={e => setSellerData({...sellerData, email: e.target.value})} />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
//                     <input required type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                       value={sellerData.phone} onChange={e => setSellerData({...sellerData, phone: e.target.value})} />
//                   </div>
//                 </div>

//                 <div className="border-t border-slate-100 pt-6">
//                   <h3 className="text-lg font-semibold text-slate-800 mb-4">Stock Details</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                      <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
//                       <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                         value={sellerData.brand} onChange={e => setSellerData({...sellerData, brand: e.target.value})} />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Part Number</label>
//                       <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                         value={sellerData.partNo} onChange={e => setSellerData({...sellerData, partNo: e.target.value})} />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Serial Number</label>
//                       <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                         value={sellerData.serial} onChange={e => setSellerData({...sellerData, serial: e.target.value})} />
//                     </div>
//                      <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Year of Mfg</label>
//                       <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                         value={sellerData.yearMfg} onChange={e => setSellerData({...sellerData, yearMfg: e.target.value})} />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-700 mb-2">Year of Purchase</label>
//                       <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
//                         value={sellerData.yearPurchase} onChange={e => setSellerData({...sellerData, yearPurchase: e.target.value})} />
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
//                     <textarea className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none h-24"
//                       value={sellerData.description} onChange={e => setSellerData({...sellerData, description: e.target.value})}></textarea>
//                   </div>
                  
//                   {/* Bulk Upload */}
//                   <div className="mt-6 p-6 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 text-center">
//                     <p className="font-semibold text-slate-700 mb-2">Have a large list?</p>
//                     <p className="text-sm text-slate-500 mb-4">Upload .xlsx, .csv, or .txt file</p>
//                     <input type="file" accept=".xlsx,.csv,.txt" className="block w-full text-sm text-slate-500
//                       file:mr-4 file:py-2 file:px-4
//                       file:rounded-full file:border-0
//                       file:text-sm file:font-semibold
//                       file:bg-amber-100 file:text-amber-700
//                       hover:file:bg-amber-200
//                     "/>
//                   </div>
//                 </div>

//                 <button disabled={isSubmitting} type="submit" className="w-full bg-amber-500 text-blue-900 py-4 rounded font-bold hover:bg-amber-400 transition-colors disabled:opacity-70">
//                   {isSubmitting ? 'Sending...' : 'Submit Dead Stock Details'}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BuySell;

import React, { useState } from 'react';
import { sendRequirements } from '../services/apiService';
import { AlertCircle, Upload, CheckCircle } from 'lucide-react';

const BuySell: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // ADD THIS: State to store the uploaded file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [buyerData, setBuyerData] = useState({
    name: '', companyName: '', email: '', phone: '', productName: '', brand: '', message: ''
  });
  
  const [sellerData, setSellerData] = useState({
    name: '', companyName: '', email: '', phone: '', brand: '', 
    yearMfg: '', yearPurchase: '', serial: '', partNo: '', description: ''
  });

  const handleBuyerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendRequirements({
        name: buyerData.name,
        email: buyerData.email,
        phone: buyerData.phone,
        brand: buyerData.brand,
        message: `Company: ${buyerData.companyName} | Product: ${buyerData.productName} | Message: ${buyerData.message || 'N/A'}`
      });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      console.error("Error submitting:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSellerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // MODIFY THIS: Use FormData to include the file
      const formData = new FormData();
      formData.append('type', 'SELLER');
      formData.append('name', sellerData.name);
      formData.append('companyName', sellerData.companyName);
      formData.append('email', sellerData.email);
      formData.append('phone', sellerData.phone);
      formData.append('brand', sellerData.brand);
      formData.append('yearMfg', sellerData.yearMfg);
      formData.append('yearPurchase', sellerData.yearPurchase);
      formData.append('serial', sellerData.serial);
      formData.append('partNo', sellerData.partNo);
      formData.append('message', sellerData.description);
      
      // Append the file if one was selected
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      await sendRequirements(formData);
      setSubmitStatus('success');
      setSelectedFile(null); // Clear file after success
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 flex items-center gap-3 border border-green-200">
      <CheckCircle size={20} />
      <span>Requirement submitted successfully! Our team will contact you shortly.</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dead Stock Liquidation</h1>
          <p className="text-slate-600">
            A controlled bridge between businesses holding non-moving inventory and buyers seeking specific parts.
            We are not a marketplace; we facilitate professional connections.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => { setActiveTab('buyer'); setSubmitStatus('idle'); }}
              className={`flex-1 py-6 text-center font-bold text-lg transition-colors ${
                activeTab === 'buyer' ? 'bg-blue-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              I want to BUY Parts
            </button>
            <button
              onClick={() => { setActiveTab('seller'); setSubmitStatus('idle'); }}
              className={`flex-1 py-6 text-center font-bold text-lg transition-colors ${
                activeTab === 'seller' ? 'bg-amber-500 text-blue-900' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              I want to SELL Dead Stock
            </button>
          </div>

          <div className="p-8 md:p-12">
            {submitStatus === 'success' && <SuccessMessage />}

            {activeTab === 'buyer' ? (
              <form onSubmit={handleBuyerSubmit} className="space-y-6 animate-fade-in">
                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-sm text-blue-800 mb-6">
                  <AlertCircle size={20} className="shrink-0" />
                  <p>Send your requirements for specific machine parts or products. We will check our database of verified sellers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                      value={buyerData.name} onChange={e => setBuyerData({...buyerData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                       value={buyerData.companyName} onChange={e => setBuyerData({...buyerData, companyName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input required type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                       value={buyerData.email} onChange={e => setBuyerData({...buyerData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                       value={buyerData.phone} onChange={e => setBuyerData({...buyerData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Product Requirement</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Part / Product Name</label>
                      <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                         value={buyerData.productName} onChange={e => setBuyerData({...buyerData, productName: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Brand / Manufacturer</label>
                      <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none" 
                         value={buyerData.brand} onChange={e => setBuyerData({...buyerData, brand: e.target.value})} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                    <textarea className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none h-32"
                       value={buyerData.message} onChange={e => setBuyerData({...buyerData, message: e.target.value})} placeholder="Additional details..." ></textarea>
                  </div>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-blue-900 text-white py-4 rounded font-bold hover:bg-blue-800 transition-colors disabled:opacity-70">
                  {isSubmitting ? 'Sending...' : 'Submit Buyer Enquiry'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleSellerSubmit} className="space-y-6 animate-fade-in">
                 <div className="bg-amber-50 p-4 rounded-lg flex gap-3 text-sm text-amber-900 mb-6">
                  <Upload size={20} className="shrink-0" />
                  <p>Upload details of your dead stock. You can enter details manually below OR upload an Excel/TXT file at the end.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                      value={sellerData.name} onChange={e => setSellerData({...sellerData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                    <input required type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                      value={sellerData.companyName} onChange={e => setSellerData({...sellerData, companyName: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input required type="email" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                      value={sellerData.email} onChange={e => setSellerData({...sellerData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input required type="tel" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                      value={sellerData.phone} onChange={e => setSellerData({...sellerData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Stock Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Brand</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                        value={sellerData.brand} onChange={e => setSellerData({...sellerData, brand: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Part Number</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                        value={sellerData.partNo} onChange={e => setSellerData({...sellerData, partNo: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Serial Number</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                        value={sellerData.serial} onChange={e => setSellerData({...sellerData, serial: e.target.value})} />
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Year of Mfg</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                        value={sellerData.yearMfg} onChange={e => setSellerData({...sellerData, yearMfg: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Year of Purchase</label>
                      <input type="text" className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none"
                        value={sellerData.yearPurchase} onChange={e => setSellerData({...sellerData, yearPurchase: e.target.value})} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                    <textarea className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-amber-500 outline-none h-24"
                      value={sellerData.description} onChange={e => setSellerData({...sellerData, description: e.target.value})}></textarea>
                  </div>
                  
                  {/* Bulk Upload Section */}
                  <div className="mt-6 p-6 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50 text-center">
                    <p className="font-semibold text-slate-700 mb-2">Have a large list?</p>
                    <p className="text-sm text-slate-500 mb-4">Upload .xlsx, .csv, or .txt file</p>
                    <input 
                      type="file" 
                      accept=".xlsx,.csv,.txt" 
                      onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                      className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-amber-100 file:text-amber-700
                      hover:file:bg-amber-200"
                    />
                    {selectedFile && <p className="mt-2 text-xs text-blue-600 font-bold">File Ready: {selectedFile.name}</p>}
                  </div>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full bg-amber-500 text-blue-900 py-4 rounded font-bold hover:bg-amber-400 transition-colors disabled:opacity-70">
                  {isSubmitting ? 'Sending...' : 'Submit Dead Stock Details'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;