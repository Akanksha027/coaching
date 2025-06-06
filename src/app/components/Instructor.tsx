"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Instructor
 = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const instructors = [
    {
      id: 1,
      name: 'Chris Aylward',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      details: "Chris Aylward's students have been accepted everywhere—from Georgetown to Northwestern to Duke University—and he's touted by students as an enjoyable tutor who takes the time to make sure his students understand everything. He has worked in content development for The Princeton Review by editing GRE, GMAT, SAT, and ACT materials and writing new questions. He's also co-authored two calculus publications for The Princeton Review."
    },
    {
      id: 2,
      name: 'Chris Knuth',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      details: "Chris Knuth's students have been accepted everywhere—from Georgetown to Northwestern to Duke University—and he's touted by students as an enjoyable tutor who takes the time to make sure his students understand everything. He has worked in content development for The Princeton Review by editing GRE, GMAT, SAT, and ACT materials and writing new questions. He's also co-authored two calculus publications for The Princeton Review."
    },
    {
      id: 3,
      name: 'Tony Pumilia',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
      details: "Tony Pumilia's students have been accepted everywhere—from Georgetown to Northwestern to Duke University—and he's touted by students as an enjoyable tutor who takes the time to make sure his students understand everything. He has worked in content development for The Princeton Review by editing GRE, GMAT, SAT, and ACT materials and writing new questions. He's also co-authored two calculus publications for The Princeton Review."
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c24c?w=150&h=150&fit=crop&crop=face',
      details: "Sarah Johnson's students have been accepted everywhere—from Georgetown to Northwestern to Duke University—and she's touted by students as an enjoyable tutor who takes the time to make sure her students understand everything. She has worked in content development for The Princeton Review by editing GRE, GMAT, SAT, and ACT materials and writing new questions. She's also co-authored two calculus publications for The Princeton Review."
    },
    {
      id: 5,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f21?w=150&h=150&fit=crop&crop=face',
      details: "Michael Chen's students have been accepted everywhere—from Georgetown to Northwestern to Duke University—and he's touted by students as an enjoyable tutor who takes the time to make sure his students understand everything. He has worked in content development for The Princeton Review by editing GRE, GMAT, SAT, and ACT materials and writing new questions. He's also co-authored two calculus publications for The Princeton Review."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, instructors.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, instructors.length - 2)) % Math.max(1, instructors.length - 2));
  };

  const openModal = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const closeModal = () => {
    setSelectedInstructor(null);
  };

  return (
    <div className="bg-gray-50  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Instructors Dedicated to Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our instructors are more than experts—they've passed through a rigorous 
            screening process to prove they can engage, motivate, and deliver results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Instructor Cards */}
          <div className="overflow-hidden px-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {instructors.map((instructor) => (
                <div
                  key={instructor.id}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 cursor-pointer transform hover:scale-105"
                  onClick={() => openModal(instructor)}
                >
                  <div className="text-center">
                    <div className="relative mb-6">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">
                      {instructor.name}
                    </h3>
                    <button className="text-gray-600 underline hover:text-gray-800 transition-colors duration-200">
                      Meet {instructor.name.split(' ')[0]}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, instructors.length - 2) }).map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-green-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedInstructor && (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div className="p-8 text-center">
        <div className="mb-6">
          <img
            src={selectedInstructor.image}
            alt={selectedInstructor.name}
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-green-400"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          {selectedInstructor.name}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          {selectedInstructor.details}
        </p>
      </div>
    </div>
  </div>
)}



        {/* Contact Info */}
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className="text-sm text-gray-600">
            <div className="font-semibold">Enrollment Advisors Ready To Answer</div>
            <div className="flex items-center mt-1">
              <span className="mr-2">📞 Phone call:</span>
              <span className="font-semibold">1-800-2REVIEW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;