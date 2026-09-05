import {
  Upload,
  ShieldCheck,
  Share2,
  CreditCard,
  FolderOpen,
  History,
} from "lucide-react";

// ================= FEATURES =================

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

// ================= PRICING =================

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

// ================= TESTIMONIALS =================

// ==================== TESTIMONIALS ====================

export const testimonials = [
  {
    name: "Arun Kumar",
    role: "Software Developer",
    company: "Tech Solutions",
    image: "https://i.pravatar.cc/150?img=12",
    message:
      "CloudShare makes sharing files extremely easy. I can upload my files quickly and share them securely with my team.",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    company: "Creative Studio",
    image: "https://i.pravatar.cc/150?img=47",
    message:
      "I love how simple CloudShare is to use. The interface is clean, fast, and I don't have to worry about my files.",
  },
  {
    name: "Rahul Raj",
    role: "Project Manager",
    company: "Digital Works",
    image: "https://i.pravatar.cc/150?img=33",
    message:
      "CloudShare has made it much easier for our team to exchange large files. The secure sharing feature is especially useful.",
  },
  {
    name: "Sneha Patel",
    role: "Business Analyst",
    company: "DataCorp",
    image: "https://i.pravatar.cc/150?img=44",
    message:
      "The file management features are excellent. I can organize and access my important documents whenever I need them.",
  },
  {
    name: "Vikram Singh",
    role: "Full Stack Developer",
    company: "CodeLabs",
    image: "https://i.pravatar.cc/150?img=11",
    message:
      "CloudShare provides a simple and reliable solution for file sharing. It has become part of my daily workflow.",
  },
  {
    name: "Anjali Menon",
    role: "Product Designer",
    company: "InnovateHub",
    image: "https://i.pravatar.cc/150?img=32",
    message:
      "The experience is smooth and professional. Uploading, managing, and sharing files takes only a few seconds.",
  },
];