import {
  Upload,
  ShieldCheck,
  Share2,
  CreditCard,
  FolderOpen,
  History,
} from "lucide-react";

export const features = [
  {
    title: "Easy File Upload",
    description:
      "Quickly upload your files with our intuitive drag-and-drop interface.",
    icon: Upload,
    iconColor: "text-purple-600",
  },
  {
    title: "Secure Storage",
    description:
      "Your files are encrypted and stored securely in our cloud infrastructure.",
    icon: ShieldCheck,
    iconColor: "text-green-600",
  },
  {
    title: "Simple Sharing",
    description:
      "Share files with anyone using secure links that you control.",
    icon: Share2,
    iconColor: "text-blue-600",
  },
  {
    title: "Flexible Credits",
    description:
      "Pay only for what you use with our credit-based system.",
    icon: CreditCard,
    iconColor: "text-yellow-600",
  },
  {
    title: "File Management",
    description:
      "Organize, preview, and manage your files from any device.",
    icon: FolderOpen,
    iconColor: "text-indigo-600",
  },
  {
    title: "Transaction History",
    description:
      "Keep track of all your credit purchases and usage.",
    icon: History,
    iconColor: "text-red-600",
  },
];

export const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    features: [
      "5 file uploads",
      "Basic file sharing",
      "7-day file retention",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Premium",
    description: "For individuals with larger needs",
    price: 500,
    features: [
      "500 file uploads",
      "Advanced file sharing",
      "30-day file retention",
      "Priority email support",
      "File analytics",
    ],
    cta: "Go Premium",
    highlighted: true,
  },
  {
    name: "Ultimate",
    description: "For teams and businesses",
    price: 2500,
    features: [
      "5000 file uploads",
      "Team sharing capabilities",
      "Unlimited file retention",
      "24/7 priority support",
      "Advanced analytics",
      "API access",
    ],
    cta: "Go Ultimate",
    highlighted: false,
  },
];