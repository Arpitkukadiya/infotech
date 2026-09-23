export const BUSINESS = {
  name: "TechSecure Infotech",
  tagline: "Smart Tech. Secure Future.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@techsecure.in",
  address: "123 Tech Street, Sector 18, New Delhi – 110001",
  hours: "Mon–Sat: 10 AM – 8 PM",
  lat: 28.5707,
  lng: 77.3240,
  placeId: "ChIJVVVVVVVVVVVREVdXc3BlY2lmaWM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.99!2d77.3217!3d28.5707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector%2018!5e0!3m2!1sen!2sin",
};

export const SERVICES = [
  { icon: "Camera", title: "CCTV Camera Installation", desc: "HD & IP cameras with mobile viewing.", price: "From ₹1,499" },
  { icon: "HardDrive", title: "DVR / NVR Setup", desc: "Setup, HDD, remote access configuration.", price: "From ₹1,999" },
  { icon: "Smartphone", title: "Phone & Laptop Repair", desc: "Screen, battery, hardware diagnostics.", price: "From ₹299" },
  { icon: "Network", title: "Network & Gadgets", desc: "Routers, printers, smart home installs.", price: "From ₹499" },
  { icon: "ShieldCheck", title: "Annual Maintenance (AMC)", desc: "Yearly support for security equipment.", price: "From ₹4,999/yr" },
  { icon: "Wrench", title: "On-site Support", desc: "Fast doorstep service across the city.", price: "From ₹399" },
];

export const PRODUCTS = [
  { id: 1, name: "HD CCTV Camera 2MP", category: "Cameras", price: "₹1,899", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600", specs: "1080p • Night Vision • IP66" },
  { id: 2, name: "4CH DVR H.265+", category: "DVRs", price: "₹3,499", img: "https://images.unsplash.com/photo-1591808763002-7b3e4f1c3a1e?w=600", specs: "4 Channel • Mobile App" },
  { id: 3, name: "Refurb Laptop i5 8GB", category: "Laptops", price: "₹18,999", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600", specs: "i5 • 8GB • 256GB SSD" },
  { id: 4, name: "Smartphone 5G 128GB", category: "Phones", price: "₹14,999", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", specs: "5G • 128GB • 5000mAh" },
  { id: 5, name: "Dome Camera 5MP", category: "Cameras", price: "₹2,499", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600", specs: "5MP • IR 30m" },
  { id: 6, name: "8CH NVR PoE Kit", category: "DVRs", price: "₹8,999", img: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?w=600", specs: "8 Channel • PoE • 4K" },
  { id: 7, name: "Gaming Laptop RTX", category: "Laptops", price: "₹64,999", img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600", specs: "RTX 3050 • 16GB • 512GB" },
  { id: 8, name: "Wireless Router AX3000", category: "Accessories", price: "₹3,299", img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600", specs: "WiFi 6 • Dual Band" },
];

export const TESTIMONIALS = [
  { name: "Ranjan Rawat", role: "Homeowner", rating: 5, text: "Excellent CCTV installation. Team was professional." },
  { name: "Kashif Ahmad", role: "Shop Owner", rating: 5, text: "Their DVR setup and after-sales support is top-notch." },
  { name: "Sanjana Dixit", role: "IT Manager", rating: 5, text: "We use TechSecure for our office AMC. Great service." },
  { name: "Arjun Mehta", role: "Customer", rating: 5, text: "Laptop repair done same day at a very reasonable price." },
];

export const STATS = [
  { value: 500, label: "Cameras Installed", icon: "Camera" },
  { value: 1200, label: "Devices Serviced", icon: "Laptop" },
  { value: 80, label: "Cities Covered", icon: "MapPin" },
  { value: 4.9, label: "Client Rating", icon: "Star", suffix: "/5" },
];