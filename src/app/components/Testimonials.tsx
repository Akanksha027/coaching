"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b332c24c?w=100&h=100&fit=crop&crop=face',
      greScore: '332',
      previousScore: '298',
      quote: "The instructors at Princeton Review completely transformed my approach to the GRE. I went from struggling with basic concepts to scoring in the 95th percentile. The personalized attention and strategic guidance made all the difference.",
      university: 'Stanford University',
      program: 'Computer Science PhD'
    },
    {
      id: 2,
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f21?w=100&h=100&fit=crop&crop=face',
      greScore: '328',
      previousScore: '305',
      quote: "I was skeptical about test prep courses, but Princeton Review proved me wrong. The structured approach and practice materials helped me improve by 23 points. Now I'm pursuing my dream of studying at MIT.",
      university: 'MIT',
      program: 'Electrical Engineering MS'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      greScore: '325',
      previousScore: '289',
      quote: "The verbal section was my biggest weakness, but the Princeton Review instructors helped me develop strategies that boosted my confidence and my score. Their support was invaluable throughout my journey.",
      university: 'Harvard University',
      program: 'Psychology PhD'
    },
    {
      id: 4,
      name: 'David Kim',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      greScore: '330',
      previousScore: '312',
      quote: "Thanks to Princeton Review, I achieved my target score and got into my dream program. The instructors were patient, knowledgeable, and always available to help. I couldn't have done it without them.",
      university: 'UC Berkeley',
      program: 'Business Analytics MS'
    },
    {
      id: 5,
      name: 'Jessica Liu',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      greScore: '327',
      previousScore: '301',
      quote: "The quantitative reasoning section used to intimidate me, but Princeton Review's methodical approach helped me tackle even the most challenging problems with confidence. My score improvement exceeded my expectations.",
      university: 'Northwestern University',
      program: 'Data Science MS'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      greScore: '324',
      previousScore: '295',
      quote: "Princeton Review didn't just help me improve my GRE scores - they taught me test-taking strategies that I still use today. The investment was worth every penny for my future.",
      university: 'Duke University',
      program: 'Public Policy MA'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real students, real results. See how Princeton Review helped these students 
            achieve their GRE goals and get into their dream programs.
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Featured Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-8 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-green-100" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Student Photo and Info */}
              <div className="flex-shrink-0 text-center">
                <img
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400 mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {testimonials[currentIndex].name}
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  {testimonials[currentIndex].program}
                </div>
                <div className="text-sm font-semibold text-green-600">
                  {testimonials[currentIndex].university}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Star Rating */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Score Improvement */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Previous Score</div>
                      <div className="text-2xl font-bold text-gray-400">
                        {testimonials[currentIndex].previousScore}
                      </div>
                    </div>
                    <div className="text-green-600 font-bold text-2xl">→</div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">New Score</div>
                      <div className="text-3xl font-bold text-green-600">
                        {testimonials[currentIndex].greScore}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Improvement</div>
                      <div className="text-2xl font-bold text-green-600">
                        +{testimonials[currentIndex].greScore - testimonials[currentIndex].previousScore}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-green-500' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid of All Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-green-400 bg-green-50' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-300 mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="text-sm text-gray-600">{testimonial.university}</div>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                "{testimonial.quote}"
              </p>

              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-xs text-gray-500">Score</div>
                  <div className="font-bold text-green-600">{testimonial.greScore}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Improved</div>
                  <div className="font-bold text-green-600">
                    +{testimonial.greScore - testimonial.previousScore}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Join Their Success?
          </h3>
          <p className="text-gray-600 mb-6">
            Start your journey to GRE success with personalized instruction and proven strategies.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;