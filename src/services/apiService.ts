// const API_BASE_URL = "http://localhost:5000";
// }  ]    }      "dest": "/frontend/dist/$1"      "src": "/(.*)",    {  "routes": [  ],    }      "config": { "distDir": "dist" }      "use": "@vercel/static-build",      "src": "frontend/package.json",    {  "builds": [// // Individual exports so you can use: import { sendRequirements } from ...
// export const sendRequirements = async (data: any) => {
//   const response = await fetch(`${API_BASE_URL}/send-requirements`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };

// export const sendEmailContact = async (data: any) => {
//   const response = await fetch(`${API_BASE_URL}/send-email`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };

// export const chatWithAI = async (message: string) => {
//   const response = await fetch(`${API_BASE_URL}/api/chat`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message }),
//   });
//   return response.json();
// };

// // // Default object export for: import apiService from ...
// // export const apiService = {
// //   sendRequirements,
// //   sendEmailContact,
// //   chat: chatWithAI
// // };

// export const apiService = {
//   // Existing functions...
//   sendEmail: async (data: any) => { /* ... */ },

//   // NEW: Updated Chat function that hits your Python Backend
//   chat: async (message: string) => {
//     const response = await fetch(`${API_BASE_URL}/api/chat`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ message }),
//     });
//     return response.json();
//   }
// };

// src/services/apiService.ts

// Since we use the Vite Proxy, we don't need "http://localhost:5000"
// Vite will automatically forward these to the backend.
// frontend/src/services/apiService.ts

// Since we use the Vite Proxy in development and an optional backend URL in production,
// read the backend base URL from environment variables.
const API_BASE_URL = (import.meta.env.VITE_API_URL as string) || "";
const buildApiUrl = (path: string) => {
  const base = API_BASE_URL.replace(/\/$/, "");
  return base ? `${base}${path}` : path;
};

export const sendEmailContact = async (data: any) => {
  const endpoint = buildApiUrl("/send-email");

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const chatWithAI = async (message: string) => {
  const endpoint = buildApiUrl("/api/chat");

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  return response.json();
};