export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  ctaText: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum FormType {
  CONTACT = 'CONTACT',
  QUOTE = 'QUOTE',
  REQUIREMENTS_BUYER = 'REQUIREMENTS_BUYER',
  REQUIREMENTS_SELLER = 'REQUIREMENTS_SELLER',
}

export interface BaseFormData {
  name: string;
  email: string;
  phone?: string;
}

export interface SellerFormData extends BaseFormData {
  companyName: string;
  brand: string;
  yearOfManufacturing: string;
  yearOfPurchase: string;
  serialNumber: string;
  partNumber: string;
  description: string;
  file?: File | null;
}

export interface BuyerFormData extends BaseFormData {
  companyName: string;
  productName: string;
  brand: string;
  message?: string;
}