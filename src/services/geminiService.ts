// import { GoogleGenAI, Chat } from "@google/genai";
// import { SYSTEM_INSTRUCTION } from "../constants";

// let chatSession: Chat | null = null;

// const getAiClient = () => {
//   if (!process.env.API_KEY) {
//     console.error("API_KEY is missing from environment variables.");
//     return null;
//   }
//   return new GoogleGenAI({ apiKey: process.env.API_KEY });
// };

// export const initializeChat = (): Chat | null => {
//   const ai = getAiClient();
//   if (!ai) return null;

//   try {
//     chatSession = ai.chats.create({
//       model: 'gemini-3-flash-preview',
//       config: {
//         systemInstruction: SYSTEM_INSTRUCTION,
//         temperature: 0.7, // Balanced for professional but conversational tone
//       },
//     });
//     return chatSession;
//   } catch (error) {
//     console.error("Failed to initialize chat session", error);
//     return null;
//   }
// };

// export const sendMessageToAi = async (message: string): Promise<string> => {
//   if (!chatSession) {
//     initializeChat();
//   }

//   if (!chatSession) {
//     return "I am currently unavailable. Please check your connection or contact support.";
//   }

//   try {
//     const response = await chatSession.sendMessage({ message });
//     return response.text || "I didn't receive a response. Please try again.";
//   } catch (error) {
//     console.error("Error sending message to AI:", error);
//     return "I encountered an error while processing your request. Please try again later.";
//   }
// };