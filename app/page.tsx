"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, ChevronLeft, ChevronRight, MessageCircleCode ,MessageCircle, Instagram ,Facebook} from 'lucide-react';

export default function BusinessCard() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pebbleBayIndex, setPebbleBayIndex] = useState(0);
  const [sobhaPalmCourtIndex, setSobhaPalmCourtIndex] = useState(0);
  const [prestigeLeelaIndex, setPrestigeLeelaIndex] = useState(0);
  const [birlaAlokyaIndex, setBirlaAlokyaIndex] = useState(0);
  const [JpIndex, setJpIndex] = useState(0);

  // const [showGallery, setShowGallery] = useState(true);
  const [showPebbleBay, setShowPebbleBay] = useState(true);
  const [showSobhaPalmCourt, setShowSobhaPalmCourt] = useState(true);
  const [showPrestigeLeela, setShowPrestigeLeela] = useState(true);
  const [showBirlaAlokya, setShowBirlaAlokya] = useState(true);
  const [showJP, setShowJp] = useState(true);

  const [showInquiry, setShowInquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [expanded, setExpanded] = useState({
  testimonial1: false,
  testimonial2: false,
  testimonial3: false
});
  // gallery images links for now will add it in public later
  const pebbleBayImages = [
    "https://static.wixstatic.com/media/f55b92_1b51aed4df8143baabab4453f3a92af8~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_1b51aed4df8143baabab4453f3a92af8~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_a0bef7fd913543f884929d2e0f7f7d58~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_a0bef7fd913543f884929d2e0f7f7d58~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_1cae9b28ec464f69a7f5a4487c33b6ae~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_1cae9b28ec464f69a7f5a4487c33b6ae~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_afb574ee0aac402788de06b3c78e8bbb~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_afb574ee0aac402788de06b3c78e8bbb~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_3ea65ceaa840406d8c970ccdf5df2136~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_3ea65ceaa840406d8c970ccdf5df2136~mv2.jpg",
  ];

   const sobhaPalmCourtImages = [
    "https://static.wixstatic.com/media/f55b92_3cef3d540dae4c2d9693fd37834ece29~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_3cef3d540dae4c2d9693fd37834ece29~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_7c3f76a7a6d54f7bb0fd9a86a60c1193~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_7c3f76a7a6d54f7bb0fd9a86a60c1193~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_df40d3199a304fa19f68e31ebc1d1d76~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_df40d3199a304fa19f68e31ebc1d1d76~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_df40d3199a304fa19f68e31ebc1d1d76~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_df40d3199a304fa19f68e31ebc1d1d76~mv2.jpg",
  ];

    const prestigeLeelaImages = [
    "https://static.wixstatic.com/media/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_d067229746384c18b75d6899fa404c74~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_d067229746384c18b75d6899fa404c74~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_51e7d71d5ab949c7b2c3737d4f5ba57b~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_51e7d71d5ab949c7b2c3737d4f5ba57b~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_95632193594642dbb7200e8289f2f410~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_95632193594642dbb7200e8289f2f410~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_cb584cf95d61456fac99680db53dea29~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_cb584cf95d61456fac99680db53dea29~mv2.jpg",
    "https://static.wixstatic.com/media/f55b92_07d9cdf236be437b82d1aa5722e2ea79~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_07d9cdf236be437b82d1aa5722e2ea79~mv2.jpg",
  ];

      const birlaAlokyaImages = [
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0019.jpg?updatedAt=1751028308951",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0017.jpg?updatedAt=1751028308583",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0018.jpg?updatedAt=1751028308482",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0013.jpg?updatedAt=1751028304710",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0015.jpg?updatedAt=1751028304605",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0012.jpg?updatedAt=1751028304595",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0016.jpg?updatedAt=1751028304567",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0010.jpg?updatedAt=1751028304574",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0009.jpg?updatedAt=1751028304578",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0014.jpg?updatedAt=1751028304541",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0007.jpg?updatedAt=1751028304490",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0008.jpg?updatedAt=1751028304438",
    "https://ik.imagekit.io/9xuslizm5i/IMG-20250627-WA0011.jpg?updatedAt=1751028304442",
  ];

  const jpImages = [
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0034.jpg?updatedAt=1751034680845",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0026.jpg?updatedAt=1751034680716",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0024.jpg?updatedAt=1751034684463",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0022.jpg?updatedAt=1751034680901",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0031.jpg?updatedAt=1751034683982",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0023.jpg?updatedAt=1751034679950",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0032.jpg?updatedAt=1751034679975",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0035.jpg?updatedAt=1751034680758",
    "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0030.jpg?updatedAt=1751034683916"
  ];

  const companyServices = [
   {
    title: "Commercial & Residential Interior Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Tailored design solutions for both commercial spaces and residential homes, crafted to reflect your style and functionality needs."
  },
  {
    title: "End-to-End Interior Solutions (Turnkey Projects)",
    image: "https://static.wixstatic.com/media/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg/v1/fit/w_2520,h_654,q_90,enc_avif,quality_auto/f55b92_131b44e1a95b419abbd73e8084178265~mv2.jpg",
    description: "Comprehensive interior services under one roof—from concept to completion—making the process seamless and hassle-free."
  },
  {
    title: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
    description: "High-quality, custom-designed furniture with premium materials and flawless finishes—all at competitive pricing."
  },
  {
    title: "Residential Construction & Development",
    image: "https://static.wixstatic.com/media/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg/v1/fit/w_2520,h_1330,q_90,enc_avif,quality_auto/f55b92_a8361df38097436f91b6910d3827956a~mv2.jpg",
    description: "From architectural planning to construction execution, we deliver quality-built homes on time and with meticulous attention to detail."
  },
  {
    title: "Kitchen Interiors",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    description: "Experts in kitchen design—from sleek, modern layouts to fully customized panels and fittings tailored to your space and lifestyle"
  },
  {
    title: "Interior Renovations",
    image: "https://ik.imagekit.io/9xuslizm5i/JP%20Nagar%20Primero%20Morado/IMG-20250627-WA0031.jpg?updatedAt=1751034683982",
    description: "Transform existing interiors with our renovation services—whether it's a complete overhaul or functional upgrades, we bring your space back to life beautifully"
  }
  ];

  // Navigation functions for each gallery
  const nextPebbleBayImage = () => setPebbleBayIndex((prev) => (prev + 1) % pebbleBayImages.length);
  const prevPebbleBayImage = () => setPebbleBayIndex((prev) => (prev - 1 + pebbleBayImages.length) % pebbleBayImages.length);
  
  const nextSobhaPalmCourtImage = () => setSobhaPalmCourtIndex((prev) => (prev + 1) % sobhaPalmCourtImages.length);
  const prevSobhaPalmCourtImage = () => setSobhaPalmCourtIndex((prev) => (prev - 1 + sobhaPalmCourtImages.length) % sobhaPalmCourtImages.length);
  
  const nextPrestigeLeelaImage = () => setPrestigeLeelaIndex((prev) => (prev + 1) % prestigeLeelaImages.length);
  const prevPrestigeLeelaImage = () => setPrestigeLeelaIndex((prev) => (prev - 1 + prestigeLeelaImages.length) % prestigeLeelaImages.length);

  const nextBirlaAlokyaImages = () => setBirlaAlokyaIndex((prev) => (prev + 1) % birlaAlokyaImages.length);
  const prevBirlaAlokyaImages = () => setBirlaAlokyaIndex((prev) => (prev - 1 + birlaAlokyaImages.length) % birlaAlokyaImages.length);

  const nextJpImage = () => setJpIndex((prev) => (prev + 1) % jpImages.length);
  const prevJpImage = () => setJpIndex((prev) => (prev - 1 + jpImages.length) % jpImages.length);

  const handleCall = () => {
    window.location.href = 'tel:+919945466887';
  };

  const handleSaveContact = () => {
    const vCard =`BEGIN:VCARD
VERSION:3.0
FN:D'adore
ORG:D'adore Interiors LLP.
TEL:+919945466887
EMAIL:dadoreinterior@gmail.com
URL:https://www.dadore.in/
END:VCARD`;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf'; //using vcf format here
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setShowInquiry(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-sm overflow-hidden">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            {/* Logo Container with subtle shine effect */}
              <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src="https://static.wixstatic.com/media/f55b92_c42b7a50245d4a08ae36542ccfaf1c64~mv2.png" 
                alt="D&apos;adore Interiors Logo"
                className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>

            <h1 className="text-4xl font-bold mb-2 font-sans">
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
                D&apos;adore
              </span>
              <span className="text-white ml-2">Interiors LLP</span>
            </h1>
            
            {/* Styling a Tagline */}
            <div className="mb-1">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium tracking-wider backdrop-blur-sm border border-white/20">
                EXPERIENCE LUXURIOUS LIVING
              </span>
            </div>
            
            <p className="text-blue-100 text-xs font-medium mt-2 opacity-90">
              Crafting dream spaces since 2017
            </p>
          </div>
        </div>  

        {/* adding the links of social media */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="flex justify-center space-x-4">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://wa.me/+919945466887', '_blank')}>
              <MessageCircleCode className="w-4 h-4 text-blue-600" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://www.instagram.com/dadore.in/', '_blank')}>
              <Instagram className="w-4 h-4 text-sky-500" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://www.facebook.com/dadore.interiors.5/', '_blank')}>
              <Facebook className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </div>

        {/* call now and save contact section */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={handleCall}
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Office
            </button>
            <button 
              onClick={handleSaveContact}
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Save Contact
            </button>
          </div>
        </div>

        {/* PEBBLE BAY GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowPebbleBay(!showPebbleBay)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>PEBBLE BAY</span>
            <span>{showPebbleBay ? '▼' : '▶'}</span>
          </button>
          
          {showPebbleBay && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={pebbleBayImages[pebbleBayIndex]} 
                  alt="Pebble Bay Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevPebbleBayImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextPebbleBayImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {pebbleBayImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === pebbleBayIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {pebbleBayImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Pebble Bay Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${pebbleBayIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setPebbleBayIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SOBHA PALM COURT GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowSobhaPalmCourt(!showSobhaPalmCourt)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>SOBHA PALM COURT</span>
            <span>{showSobhaPalmCourt ? '▼' : '▶'}</span>
          </button>
          
          {showSobhaPalmCourt && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={sobhaPalmCourtImages[sobhaPalmCourtIndex]} 
                  alt="Sobha Palm Court Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevSobhaPalmCourtImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSobhaPalmCourtImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {sobhaPalmCourtImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === sobhaPalmCourtIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {sobhaPalmCourtImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Sobha Palm Court Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${sobhaPalmCourtIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setSobhaPalmCourtIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PRESTIGE LEELA RESIDENCY GALLERY */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowPrestigeLeela(!showPrestigeLeela)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>PRESTIGE LEELA RESIDENCY</span>
            <span>{showPrestigeLeela ? '▼' : '▶'}</span>
          </button>
          
          {showPrestigeLeela && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={prestigeLeelaImages[prestigeLeelaIndex]} 
                  alt="Prestige Leela Residency Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevPrestigeLeelaImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextPrestigeLeelaImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {prestigeLeelaImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === prestigeLeelaIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {prestigeLeelaImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Prestige Leela Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${prestigeLeelaIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setPrestigeLeelaIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Birla alokya GAllery */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowBirlaAlokya(!showBirlaAlokya)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>BIRLA ALOKYA</span>
            <span>{showBirlaAlokya ? '▼' : '▶'}</span>
          </button>
          
          {showBirlaAlokya && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={birlaAlokyaImages[birlaAlokyaIndex]} 
                  alt="Pebble Bay Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevBirlaAlokyaImages}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextBirlaAlokyaImages}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {pebbleBayImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === birlaAlokyaIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {birlaAlokyaImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Pebble Bay Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${birlaAlokyaIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setBirlaAlokyaIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

          {/* JP Gallery */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowJp(!showJP)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>JP NAGAR PRIMERO MORADO</span>
            <span>{showJP ? '▼' : '▶'}</span>
          </button>
          
          {showJP && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={jpImages[JpIndex]} 
                  alt="JP Project Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevJpImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextJpImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {jpImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === JpIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {jpImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`JP Project Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${JpIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setJpIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* added extra 3 */}
        <div className="px-6 py-4 bg-white border-b">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">In Our Services</h3>
          <div className="grid grid-cols-1 gap-3">
            {companyServices.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover"/>
                  <div className="p-3 flex-1">
                    <h4 className="font-medium text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Our Company */}
        <div className="px-6 py-6 bg-white border-b">
          <h3 className="font-semibold text-gray-800 mb-4 text-xl">About Us</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
            Since 2017, D&apos;adore Interiors has been transforming spaces across the region with our signature blend of luxury and functionality. Our award-winning team of designers specializes in creating bespoke residential interiors that reflect each client&apos;s personality while enhancing everyday living.
          </p>
          
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center rounded-lg">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden border-2 border-white/30 shadow-lg">
              <img
                src="https://static.wixstatic.com/media/f55b92_c42b7a50245d4a08ae36542ccfaf1c64~mv2.png" 
                alt="D&apos;adore Interiors Logo"
                className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300"
              />
              </div>
              <h1 className="text-4xl font-bold mb-2 font-serif tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r text-white">
                  D&apos;adore
                </span>
                <span className="text-white ml-1">Interiors LLP</span>
              </h1>
              <p className="text-blue-100 text-sm font-light tracking-wider mb-1">EXPERIENCE LUXURIOUS LIVING</p>
              <p className="text-blue-100 text-xs font-medium opacity-90">Crafting dream spaces since 2017</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Luxury Design</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Customised Solutions</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Attention to Detail</span>
            <span className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">customized solutions</span>
          </div>
        </div>

        {/* Inquiry Section */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowInquiry(true)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            Inquires
          </button>

          {/* Inquiry Modal */}
          {showInquiry && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">Send an Inquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3 text-gray-800 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <button 
                      type="submit" 
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setShowInquiry(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-md transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

       {/* QR Code SVG */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Scan to Contact Us</h3>
              <div className="flex justify-center">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 25 25" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="border border-gray-200"
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd"
                    d="M8 0L8 4L9 4L9 5L8 5L8 7L9 7L9 6L10 6L10 9L11 9L11 10L9 10L9 9L7 9L7 8L4 8L4 9L5 9L5 10L1 10L1 11L0 11L0 14L3 14L3 13L4 13L4 14L5 14L5 15L7 15L7 16L6 16L6 17L7 17L7 16L8 16L8 18L10 18L10 19L8 19L8 21L9 21L9 20L10 20L10 22L9 22L9 23L8 23L8 25L10 25L10 24L12 24L12 25L13 25L13 24L12 24L12 23L13 23L13 22L11 22L11 21L12 21L12 20L13 20L13 18L14 18L14 20L15 20L15 18L14 18L14 17L13 17L13 16L12 16L12 13L13 13L13 11L14 11L14 12L16 12L16 13L15 13L15 16L16 16L16 21L17 21L17 22L16 22L16 23L17 23L17 25L19 25L19 24L22 24L22 25L25 25L25 24L24 24L24 22L25 22L25 21L24 21L24 20L25 20L25 19L21 19L21 17L23 17L23 16L24 16L24 15L23 15L23 14L24 14L24 13L25 13L25 12L24 12L24 11L23 11L23 10L24 10L24 9L25 9L25 8L21 8L21 9L20 9L20 8L19 8L19 9L20 9L20 10L18 10L18 11L17 11L17 10L16 10L16 8L15 8L15 6L14 6L14 5L17 5L17 0L14 0L14 1L16 1L16 3L15 3L15 2L14 2L14 3L10 3L10 2L11 2L11 1L12 1L12 0L11 0L11 1L10 1L10 2L9 2L9 0ZM10 4L10 5L11 5L11 7L12 7L12 6L13 6L13 8L11 8L11 9L12 9L12 10L14 10L14 6L13 6L13 5L14 5L14 4L12 4L12 5L11 5L11 4ZM16 6L16 7L17 7L17 6ZM0 8L0 9L2 9L2 8ZM6 9L6 10L5 10L5 14L8 14L8 16L9 16L9 17L10 17L10 18L11 18L11 17L10 17L10 16L11 16L11 14L10 14L10 15L9 15L9 14L8 14L8 12L7 12L7 11L6 11L6 10L7 10L7 9ZM22 9L22 10L23 10L23 9ZM20 10L20 11L19 11L19 12L20 12L20 13L17 13L17 14L16 14L16 15L19 15L19 14L20 14L20 13L21 13L21 14L23 14L23 13L21 13L21 12L22 12L22 11L21 11L21 10ZM1 11L1 12L3 12L3 11ZM10 11L10 12L9 12L9 13L11 13L11 12L12 12L12 11ZM20 11L20 12L21 12L21 11ZM6 12L6 13L7 13L7 12ZM13 14L13 15L14 15L14 14ZM21 15L21 16L22 16L22 15ZM0 16L0 17L5 17L5 16ZM12 17L12 18L13 18L13 17ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM10 19L10 20L12 20L12 19ZM14 21L14 23L15 23L15 21ZM20 21L20 22L19 22L19 23L21 23L21 22L22 22L22 23L23 23L23 22L22 22L22 21ZM10 22L10 23L9 23L9 24L10 24L10 23L11 23L11 22ZM17 22L17 23L18 23L18 22ZM15 24L15 25L16 25L16 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" 
                    fill="#000000"
                  />
                </svg>
              </div>
              <p className="text-sm text-center text-gray-600 mt-2">Scan this QR code to save our contact</p>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="px-6 py-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-8 relative pb-2">
                WHAT PEOPLE SAY
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              </h2>
              <div className="space-y-6">
                {/* 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      RS
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Rocky Sasmal</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial1 ? 'line-clamp-3' : ''}`}>
                      &quot;I recently had the pleasure of working with Sagar on our home renovation project. From start to finish, Sagar was professional, creative and a true pleasure to work with. His attention to detail and ability to bring our vision to life exceeded our expectations. He has a great sense of style and was able to seamlessly blend our personal taste&apos;s with his organisations own expertise to create a beautiful, iconic space. The complete Dadore team was also very responsive and communicative throughout the process, ensuring that everything was running smoothly and that we were happy with the progress. I highly recommend Sagar and Dadore to anyone looking for a talented and professional interior designer. They truly made our home a beautiful abode and I couldn&apos;t be happier with the results. Thank you Sagar!&quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial1: !prev.testimonial1}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial1 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                {/* 2nf */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      AR
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Arti S Rungta</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial2 ? 'line-clamp-3' : ''}`}>
                    &quot;  We approached D&apos;adore based on the recommendation by our interior designer and it turned out to be exactly what we were looking for. Sagar was approachable for any query and his work style is thoroughly professional right from maintaining the check list, providing details of the work schedule, costing, etc. He listens to the requirements carefully and endevors to fulfill them with the best solutions. A glimpse of before and after work pics speak all. In a nutshell, A wholesome solution for all the services required for home renovation. &quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial2: !prev.testimonial2}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial2 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>

                {/* 3rd */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      DB
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Disha Bhandari</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <p className={`text-gray-600 italic transition-all duration-300 ${!expanded.testimonial3 ? 'line-clamp-3' : ''}`}>
                    &quot;  It was a complete pleasure to work with the D&apos;adore team… they are very professional, proficient and adept at the work they do. They have good processes, approachable and a helpful team with very good workers for all kind of work. The best part was that they managed to finish the work before time which is absolutely unheard of… I am very thankful to Sagar and his team for a great finish to our home. &quot;
                    </p>
                    <button 
                      onClick={() => setExpanded(prev => ({...prev, testimonial3: !prev.testimonial3}))}
                      className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-800 focus:outline-none"
                    >
                      {expanded.testimonial3 ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* About Me Section - */}
          <div className="px-6 py-8 bg-white border-b">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-800 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-amber-600 rounded-full"></span>
              </h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full transform rotate-6"></div>
                <img
                  src="https://static.wixstatic.com/media/f55b92_c42b7a50245d4a08ae36542ccfaf1c64~mv2.png" 
                  alt="Founder"
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-1">Founder&apos;s name</h4>
                <p className="text-amber-600 font-medium mb-3">Founder</p>
                <div className="flex justify-center md:justify-start space-x-2 mb-4">
                  <div className="w-8 h-1 bg-amber-400 rounded-full"></div>
                  <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-justify">
                I founded D&apos;adore Interior LLP in 2017 with a singular vision: to democratize exceptional design. What began as a passion for transforming blank spaces into soulful environments has evolved into a practice that has touched hundreds of homes and commercial spaces across Bangalore.
              </p>
              
              <p className="leading-relaxed text-justify">
                With <span className="font-bold text-amber-600">12+ years of hands-on experience</span>, I&apos;ve cultivated a design philosophy that balances aesthetic excellence with functional pragmatism. My approach is deeply collaborative—working closely with clients, contractors, and craftsmen to navigate on-site challenges and deliver solutions that stand the test of time.
              </p>
              
              <div className="relative bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400 my-4">
                <div className="absolute top-0 left-0 transform -translate-y-2 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="italic text-gray-700 pl-6">
                  At D&apos;adore, we don&apos;t just design spaces—we craft the backdrop for life&apos;s most meaningful moments
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 grid-cols-3 gap-3 mt-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">12+</div>
                <div className="text-xs font-medium text-amber-800">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">250+</div>
                <div className="text-xs font-medium text-amber-800">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-3 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl font-bold text-amber-600">100%</div>
                <div className="text-xs font-medium text-amber-800">Client Satisfaction</div>
              </div>
            </div>
          </div>

            {/* Contact section */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span>+91 9945466887</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span>dadoreinterior@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>
                  204, Esteem Plaza
                  13th Cross Rd. Armane Nagar, 
                  Sadashivnagar, Bengaluru 560080</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}