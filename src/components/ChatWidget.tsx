// import React, { useState, useEffect, useRef } from 'react';
// import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
// import { ChatMessage } from '../types';
// //import { sendMessageToAi, initializeChat } from '../services/geminiService';
// import { apiService } from '../services/apiService'; 

// const ChatWidget: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Initialize session on mount
//     initializeChat();
//     // Add initial greeting
//     setMessages([{
//       role: 'model',
//       text: "Hello! I'm your V NEXT Assistant. I can help guide you through our services, buy/sell process, and documentation. How can I assist you today?",
//       timestamp: new Date()
//     }]);
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isOpen]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMsg: ChatMessage = {
//       role: 'user',
//       text: input,
//       timestamp: new Date()
//     };

//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const responseText = await sendMessageToAi(userMsg.text);
//       const aiMsg: ChatMessage = {
//         role: 'model',
//         text: responseText,
//         timestamp: new Date()
//       };
//       setMessages(prev => [...prev, aiMsg]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
//       {/* Chat Window */}
//       {isOpen && (
//         <div className="bg-white w-full sm:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col mb-4 border border-slate-200 overflow-hidden animate-fade-in-up">
//           {/* Header */}
//           <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <Bot size={20} />
//               <div>
//                 <h3 className="font-semibold text-sm">V NEXT Assistant</h3>
//                 <p className="text-xs text-blue-200">Guidance Only</p>
//               </div>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded">
//               <X size={18} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 bg-slate-50 scrollbar-thin">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
//                   msg.role === 'user' 
//                     ? 'bg-blue-600 text-white rounded-br-none' 
//                     : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
//                 }`}>
//                   <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start mb-4">
//                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
//                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
//                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></div>
//                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></div>
//                  </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Ask about our services..."
//               className="flex-1 bg-slate-100 text-slate-800 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button 
//               onClick={handleSend}
//               disabled={isLoading || !input.trim()}
//               className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 disabled:opacity-50 transition-colors"
//             >
//               <Send size={18} />
//             </button>
//           </div>
          
//           {/* Disclaimer */}
//           <div className="bg-slate-50 px-4 py-2 text-[10px] text-slate-400 text-center border-t border-slate-100">
//             AI provides guidance only. Decisions handled by human professionals.
//           </div>
//         </div>
//       )}

//       {/* Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`${isOpen ? 'bg-slate-700' : 'bg-blue-900'} text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
//         aria-label="Toggle Chat"
//       >
//         {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
//       </button>
//     </div>
//   );
// };

// export default ChatWidget;


import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { apiService } from '../services/apiService'; 

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add initial greeting on component mount
    setMessages([{
      role: 'model',
      text: "Hello! I'm your V NEXT Assistant. I can help guide you through our services, buy/sell process, and documentation. How can I assist you today?",
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 1. Add User Message to UI
    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    const currentInput = input; // Store input before clearing
    setInput('');
    setIsLoading(true);

    try {
      // 2. Call the Python Backend via apiService
      const data = await apiService.chat(currentInput);
      
      // 3. Add AI Response to UI
      const aiMsg: ChatMessage = {
        role: 'model',
        text: data.response || "I received an empty response. Please try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
      
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: ChatMessage = {
        role: 'model',
        text: "I'm having trouble connecting to the server. Please ensure the backend is running.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-full sm:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col mb-4 border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-amber-400" />
              <div>
                <h3 className="font-semibold text-sm">V NEXT Assistant</h3>
                <p className="text-xs text-blue-200">Guidance Only</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-800 p-1 rounded transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about our services..."
              className="flex-1 bg-slate-100 text-slate-800 text-sm rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 disabled:opacity-50 transition-colors shrink-0"
            >
              <Send size={18} />
            </button>
          </div>
          
          {/* Footer Disclaimer */}
          <div className="bg-slate-50 px-4 py-2 text-[10px] text-slate-400 text-center border-t border-slate-100">
            AI provides guidance only. Decisions handled by human professionals.
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-blue-900'} text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center justify-center`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;