'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
              </div>
              <span className="text-2xl font-bold">Skillara</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Skillara brings all your learning resources together in one easy-to-use platform, helping students and educators connect, grow, and succeed.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-3">
              <a 
                href="/about" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
              <a 
                href="/events" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Event
              </a>
              <a 
                href="/blog" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Blog
              </a>
              <a 
                href="/stories" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Web Stories
              </a>
              <a 
                href="/shop" 
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Shop
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <p>455 West Orchard Street</p>
                <p>Kings Mountain, NC 280867</p>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+088 (246) 642-27-10</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>example@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Follow us here</h3>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-gray-800 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-gray-800 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-gray-800 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-gray-800 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© Copyright 2025, All Rights Reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="/privacy" 
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;