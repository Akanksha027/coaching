"use client";
import React, { useState } from 'react';
import { Play, Check, Menu, X } from 'lucide-react';

// Types
interface NavItem {
  label: string;
  href: string;
}

interface FeatureItem {
  text: string;
  icon: React.ReactNode;
}

// Navigation component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About', href: '/about' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 hover:shadow-lg">
              Create a new program
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <button className="w-full bg-[#d8ff29] hover:bg-lime-500 text-black px-6 py-2 text-sm font-semibold transition-all duration-200">
                  Create a new\
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero section component
const HeroSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      text: "Trusted by over 100+ professionals",
      icon: <Check className="w-5 h-5 text-white" />
    },
    {
      text: "Unlimited programs",
      icon: <Check className="w-5 h-5 text-white" />
    },
    {
      text: "Landing page builders",
      icon: <Check className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                Automate Your Coaching
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Education at
              Your Fingertips
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Use VOLVs to create automated messages that help you connect with your followers, and improve their lives by forming healthy habits.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-black px-5 rounded-3xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105">
                Create a new program
              </button>
              <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900 px-8 py-4 font-semibold text-lg transition-colors duration-200">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-1" />
                </div>
                See how it works
              </button>
            </div>

            {/* Features */}
            <div className="pt-8">
              <div className="grid sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=700&fit=crop&crop=face"
                alt="Professional woman smiling"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-4 right-4 w-full h-full bg-gradient-to-br from-lime-400/20 to-transparent rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-gray-900/10 to-transparent rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Homepage component
const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Homepage;