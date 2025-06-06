import React from 'react';

const CourseOfferings = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-700 mb-2">Pick the plan that
          works best for you.</h2>
          <p className="text-gray-600">Choose from a variety of flexible plans designed to match your learning goals andschedule, making education easy and affordable</p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl">
          {/* Basic Monthly Plan */}
          <div className="border border-gray-200 rounded-l-lg p-6 bg-white hover:bg-green-500 hover:text-white hover:border-green-500 hover:scale-105 hover:shadow-lg hover:z-20 transition-all duration-300 ease-in-out cursor-pointer relative group">
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 group-hover:text-white mb-4 transition-colors duration-300">BASIC MONTHLY PLAN</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <span className="text-lg text-green-500 group-hover:text-white transition-colors duration-300">$</span>
                  <span className="text-5xl font-light text-green-500 group-hover:text-white transition-colors duration-300">49</span>
                  <span className="text-sm text-green-500 group-hover:text-white transition-colors duration-300">/mo</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">Reg. </span>
                  <span className="text-red-500 group-hover:text-red-300 line-through transition-colors duration-300">$149</span>
                  <span className="ml-1 font-semibold group-hover:text-white transition-colors duration-300">Save $100/mo!</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>24 Hour 100% satisfaction guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>100+ Comprehensive Math, Verbal, AW lessons</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Easy to navigate checklist syllabus</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>7+ point guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Email support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Score cancellation guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Easy one-click cancellation</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 bg-green-500 group-hover:bg-white group-hover:text-green-500 text-white rounded-md hover:bg-white hover:text-green-500 transition-all duration-300 text-sm font-medium">
              Select Plan
            </button>
          </div>

          {/* Monthly + All 5 Official Exams */}
          <div className="border-2 border-green-500 p-6 bg-green-500 text-white relative z-10 shadow-lg rounded-lg transform scale-105 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider mb-4">MONTHLY + ALL 5 OFFICIAL EXAMS</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <span className="text-lg">$</span>
                  <span className="text-5xl font-light">139</span>
                  <span className="text-sm ml-1">1st mo</span>
                </div>
                <p className="mt-1 text-sm">Only $49/mo thereafter</p>
                <div className="mt-2 text-sm">
                  <span className="text-gray-200">Reg. </span>
                  <span className="text-red-300 line-through">$254</span>
                  <span className="ml-1 font-semibold">Save over $115/mo!</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>24 Hour 100% satisfaction guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>All 5 Official POWERPREP PLUS® Online practice exams made by the GRE® test makers (worth $105)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>1, 2, or 3 Month study plans to fit your schedule</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Easy to navigate checklist syllabus</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>7+ point guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Email & Intercom chat support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Score cancellation guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Easy one-click cancellation</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 bg-white text-green-500 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium">
              Select Plan
            </button>
          </div>

          {/* 6 Month Pack */}
          <div className="border border-gray-200 rounded-r-lg p-6 bg-white hover:bg-green-500 hover:text-white hover:border-green-500 hover:scale-105 hover:shadow-lg hover:z-20 transition-all duration-300 ease-in-out cursor-pointer relative group">
            <div className="text-center">
              <h3 className="text-xs uppercase tracking-wider text-gray-500 group-hover:text-white mb-4 transition-colors duration-300">6 MONTH PACK + ALL 5 OFFICIAL EXAMS & THE OFFICIAL GUIDE TO THE GRE®</h3>
              <div className="mb-4">
                <div className="flex items-center justify-center">
                  <span className="text-lg text-green-500 group-hover:text-white transition-colors duration-300">$</span>
                  <span className="text-5xl font-light text-green-500 group-hover:text-white transition-colors duration-300">349</span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">Reg. </span>
                  <span className="text-red-500 group-hover:text-red-300 line-through transition-colors duration-300">$1039</span>
                  <span className="ml-1 font-semibold group-hover:text-white transition-colors duration-300">Save $690!</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>24 Hour 100% satisfaction guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>All 5 Official POWERPREP PLUS® Online practice exams made by the GRE® test makers (worth $105)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Official Guide to the GRE® 3rd Edition</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>1, 2, or 3 Month study plans to fit your schedule</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Easy to navigate checklist syllabus</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>7+ point guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Email & Intercom chat support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Score cancellation guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 group-hover:text-white transition-colors duration-300">•</span>
                <span>Easy one-click cancellation</span>
              </li>
            </ul>

            <button className="w-full py-2 px-4 bg-green-500 group-hover:bg-white group-hover:text-green-500 text-white rounded-md hover:bg-white hover:text-green-500 transition-all duration-300 text-sm font-medium">
              Select Plan
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOfferings;