import React from 'react';

const GREPlatform = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side - Image */}
        <div className="rounded-lg overflow-hidden">
          <img 
            src="ss.png" 
            alt="GRE Platform Interface" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Powerful Platform
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Ground Breaking Curriculum
          </h3>
          <p className="text-gray-600">
            The GRE test measures a set of content in Verbal, Math, and the essay.
          </p>
          <p className="text-gray-600">
            We'll show you how to conquer, but we'll also show you how to master powerful ninja-like test-taking tactics to take your score to the next level.
          </p>

          {/* Features */}
          <div className="space-y-8 mt-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Easy-To-Follow Prep</h4>
                <p className="text-gray-600">Anywhere, Anytime</p>
                <p className="text-sm text-gray-500 mt-1">
                  With streaming on-demand lessons, you can prep anywhere, even at home in your pajamas. All you need is an internet connection. It's preparation for the GRE test on your terms.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">Select Your Perfect Study Plan</h4>
                <p className="text-gray-600">Customized for You</p>
                <p className="text-sm text-gray-500 mt-1">
                  Whether you have 1, 2, or 3 months to train, or only need help with Quant, or Verbal, we've got you covered with 6 study plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GREPlatform;