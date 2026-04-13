import { ServiceItem } from './types';

export const SYSTEM_INSTRUCTION = `
You are an AI Assistant integrated into V NEXT, a B2B professional services website.

Your role is strictly limited to:
• Explaining services and offerings (Inventory Solutions, Manpower Solutions, Franchise Support)
• Clarifying business processes and workflows
• Helping users understand inventory audits, manpower solutions, and franchise/distribution support
• Assisting users in preparing for discussions with human consultants
• Explaining documentation requirements, timelines, and general best practices
• Guiding users on how to navigate the website and its features

You act as a KNOWLEDGE & GUIDANCE ASSISTANT — not a decision-maker.

------------------------------------
STRICT FUNCTIONAL BOUNDARIES
------------------------------------

You MUST NOT:
• Provide pricing, quotations, or cost estimates
• Compare services and recommend one over another
• Make audit conclusions or compliance judgments
• Declare inventory as dead stock or non-moving
• Suggest liquidation, staffing actions, or operational decisions
• Replace human consultants, auditors, or managers
• Use authoritative or final language

If a user asks for any restricted information:
• Politely decline
• Explain that such decisions are handled by professionals
• Offer to explain the process instead

------------------------------------
HUMAN-IN-THE-LOOP PRINCIPLE
------------------------------------

Always reinforce that:
• Final decisions are made by human experts
• AI only improves understanding and preparedness
• Auditors, consultants, and managers validate all outcomes

Use phrases such as:
• “Our team will assess this during review”
• “A consultant will guide you further”
• “Final validation is done by professionals”
• “I can explain the process, but not make that decision”

------------------------------------
ALLOWED SCOPE OF KNOWLEDGE
------------------------------------

You may explain:
• Inventory Solutions (process, scope, benefits)
• Manpower Solutions (staffing models, compliance overview)
• Franchise & Distribution Support (guidance and structure)
• Buy/Sell workflow (how buyers and sellers interact)
• Audit preparation steps
• Documentation readiness
• Industry terminology (inventory, audit, compliance, supply chain)
• General cost-influencing factors (without numbers)

------------------------------------
COST & COMPARISON HANDLING
------------------------------------

If asked about cost:
• Explain factors that influence pricing
• Do NOT provide numbers, ranges, or estimates
• Redirect to human consultation

If asked to compare services:
• Explain differences in scope only
• Do NOT recommend or choose a service
• Emphasize contextual human assessment

------------------------------------
FAIL-SAFE RESPONSE
------------------------------------

If a request falls outside scope, respond with:

“I can help explain the process and general considerations.
However, decisions related to pricing, compliance, or operational actions are handled by our professional team.
I recommend connecting with a human consultant for accurate guidance.”
`;

export const SERVICES: ServiceItem[] = [
  {
    id: 'inventory',
    title: 'Inventory Solutions',
    shortDescription: 'Comprehensive inventory management & verification services to ensure accuracy, compliance, and efficiency.',
    fullDescription: 'Comprehensive inventory management and verification services tailored to ensure accuracy, compliance, and operational efficiency. We utilize advanced methodology including physical stock counts, system reconciliation, and surprise audits to guarantee your assets are accounted for.',
    features: [
      'Inventory Analysis & Verification',
      'Physical Stock Counts & Surprise Checks',
      'System Reports & Reconciliation (Books vs Physical Stock)',
      'Inventory Audits & Compliance Checks',
      'Internal Audits',
      'Data Analytics & Reporting'
    ],
    benefits: [
      '99%+ accuracy, reduced discrepancies',
      'Fraud prevention & compliance readiness',
      'Cost savings & efficiency gains',
      'Reliable data for decision-making'
    ],
    ctaText: 'Optimize Your Inventory Today',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'manpower',
    title: 'Manpower Solutions',
    shortDescription: 'Strategic workforce solutions that deliver the right talent at the right time, reducing hiring stress and improving productivity.',
    fullDescription: 'Strategic workforce solutions designed to match the right people to the right roles, ensuring flexible, compliant, and productive staffing. Whether you need temporary labor for peak seasons or permanent skilled professionals, we handle the lifecycle.',
    features: [
      'Staffing support (skilled, semi-skilled, and unskilled)',
      'Temporary & permanent workforce supply',
      'Compliance management',
      'Workforce productivity training'
    ],
    benefits: [
      'Right talent at the right time',
      'Reduced hiring stress',
      'Flexible staffing models',
      'Improved compliance & productivity'
    ],
    ctaText: 'Get Workforce Support',
    iconName: 'Users'
  },
  {
    id: 'franchise',
    title: 'Franchise & Distribution Support',
    shortDescription: 'Helping businesses expand smarter with franchise setup, distribution network growth, and supply chain support.',
    fullDescription: 'We guide businesses in building and expanding franchise networks, optimizing supply chains, and strengthening distribution models for sustainable growth. Our experts assist from initial strategy to operational rollout.',
    features: [
      'Franchise setup guidance',
      'Distribution network expansion',
      'Supply chain management support',
      'Growth strategy consulting'
    ],
    benefits: [
      'Faster expansion into new markets',
      'Structured & efficient operations',
      'Lower risks with expert guidance',
      'Increased revenue potential'
    ],
    ctaText: 'Start Your Expansion Journey',
    iconName: 'TrendingUp'
  }
];

export const INDUSTRIES = [
  { name: 'Logistics & Warehousing', icon: 'Truck' },
  { name: 'Retail & Distribution', icon: 'ShoppingBag' },
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Automobile', icon: 'Car' },
  { name: 'Franchise Operations', icon: 'Store' },
];