"use client";
import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqData: FAQItem[] = [
    {
      id: 'gre-162-guarantee',
      question: 'How does the better scores money back guarantee work for the GRE 162+ Course?',
      answer: 'Complete all course materials and practice tests. If you don\'t improve by 5 points or achieve 162+, we\'ll refund your money within 30 days of your official GRE test date.'
    },
    {
      id: 'enroll-course',
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our courses, select your program, and click "Enroll Now." Complete the secure checkout and get instant access to all materials.'
    },
    {
      id: 'multiple-devices',
      question: 'Can I access courses on multiple devices?',
      answer: 'Yes! Access your courses on any device - laptop, phone, or tablet. Your progress syncs automatically across all devices.'
    },
    {
      id: 'refund-policy',
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day money-back guarantee. Not satisfied? Contact our support team for a full refund within the first week.'
    },
    {
      id: 'support-available',
      question: 'What kind of support is available if I get stuck?',
      answer: 'Get help through our 24/7 online center, email support, live chat, discussion forums, and direct tutor access for premium courses.'
    }
  ];

  const toggleItem = (id: string): void => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const isOpen = (id: string): boolean => openItems.has(id);

  return (
    <section className={`bg-white py-12 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our GRE courses and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-sm"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={isOpen(item.id)}
              >
                <h3 className="text-base font-medium text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      isOpen(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {isOpen(item.id) && (
                <div className="px-5 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;