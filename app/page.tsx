"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Download, ChevronLeft, ChevronRight, MessageCircleCode ,Facebook, Twitter, Linkedin, MessageCircle, Building2 } from 'lucide-react';

export default function BusinessCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(true);
  const [showInquiry, setShowInquiry] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // gallery images links
  const galleryImages = [
    "https://images.pexels.com/photos/247113/anise-spices-seeds-sprockets-247113.jpeg",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/32578355/pexels-photo-32578355.jpeg",
    "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg",
    "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const ExtraItems = [
    {
      title: "Perfect spice",
      image: "https://images.pexels.com/photos/7615463/pexels-photo-7615463.jpeg",
      description: "We Pick The Most Exclusive Handpicked Spices"
    },
    {
      title: "Quality workfore",
      image: "https://images.pexels.com/photos/3184361/pexels-photo-3184361.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Amazing quality workfore, ready to ship "
    },
    {
      title: "International Exports",
      image: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg",
      description: "We export our goods internationally to any country"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919507956725';
  };

  const handleSaveContact = () => {
    const vCard =`BEGIN:VCARD
                  VERSION:3.0
                  FN:Kunal Kumar
                  ORG:Tropical Spice Exporters Inc.
                  TEL:+919507956725
                  EMAIL:kunaldevspro@gmail.com
                  URL:https://kunalkumar.com
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
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
  
        <div className="relative bg-gradient-to-r from-red-500 to-purple-600 p-8 text-white text-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Building2 className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl font-bold mb-2">Kunal Kumar</h1>
            <p className="text-blue-100 text-sm">Product Manager</p>
            <p className="text-blue-100 text-xs mt-1">Tropical Spice Exporters Inc.</p>
          </div>
        </div>

        {/* adding the links of social media */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="flex justify-center space-x-4">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://wa.me/+919507956725', '_blank')}>
              <MessageCircleCode className="w-4 h-4 text-blue-600" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://x.com/Kunaltwts', '_blank')}>
              <Twitter className="w-4 h-4 text-sky-500" />
            </button>
            <button className="p-2 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/kunalkumar123/', '_blank')}>
              <Linkedin className="w-4 h-4 text-blue-700" />
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
              Call Me Now
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

        {/* image gallery */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowGallery(!showGallery)}
            className="w-full text-left font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center justify-between"
          >
            <span className='text-lg'>Gallery</span>
            <span>{showGallery ? '▼' : '▶'}</span>
          </button>
          
          {showGallery && (
            <div className="mt-4 space-y-4">
              <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={galleryImages[currentImageIndex]} 
                  alt="Gallery" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {galleryImages.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex overflow-x-auto space-x-2 pb-2">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* added extra 3 */}
        <div className="px-6 py-4 bg-white border-b">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">Featured Work</h3>
          <div className="grid grid-cols-1 gap-3">
            {ExtraItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex">
                  <img src={item.image} 
                    alt={item.title}
                    className="w-20 h-20 object-cover"/>
                  <div className="p-3 flex-1">
                    <h4 className="font-medium text-sm text-gray-800">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div className="px-6 py-4 bg-white border-b">
          <h3 className="font-semibold text-gray-700 mb-3 text-lg">Premium Spice Exporters:</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
           At Tropical Spice Exporters, we source and supply the finest quality spices and tropical products worldwide. With over 35 years of expertise, we specialize in ethically sourced, organic, and sustainably harvested spices—perfect for wholesalers, distributors, and gourmet food brands.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">fresh Herbs</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Quality spices</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Organic spices</span>
          </div>
        </div>

        {/* Inquiry Section */}
        <div className="px-6 py-4 bg-white border-b">
          <button 
            onClick={() => setShowInquiry(true)}
            // className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
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

        {/* QR Code */}
        <div className="px-6 py-6 bg-gray-50 text-center">
          <h3 className="font-semibold text-gray-700 mb-3">Scan to Connect</h3>
          <div className="w-32 h-32 mx-auto bg-white rounded-xl p-4 shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
              <div className="text-xs text-gray-500 text-center">
                QR Code<br/> 
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Scan to save contact info</p>
        </div>

        {/* Contact Info */}
        <div className="px-6 py-4 bg-gray-50 border-t">
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              <span>+91 9507956725</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              <span>kunaldevspro@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-400" />
              <span>Kerala, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}