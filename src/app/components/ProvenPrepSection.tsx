import React from 'react';
import { Settings, FileText, Users, Award } from 'lucide-react';

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
}

const ProvenPrepSection: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: '1',
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: 'Exam-Style Questions',
      description: 'Study smart with questions that mirror the GRE\'s testing style and concepts.'
    },
    {
      id: '2',
      icon: <FileText className="w-8 h-8 text-gray-600" />,
      title: 'Drill Smart Technology',
      subtitle: 'Drill',
      description: 'Take personalized drills that adjust to your skill level.'
    },
    {
      id: '3',
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Top Instructors',
      description: 'Learn from top GRE instructors who teach expert strategies to boost your score.'
    },
    {
      id: '4',
      icon: <Award className="w-8 h-8 text-gray-600" />,
      title: 'Better Scores Guaranteed',
      description: 'You\'ll score higher, or we\'ll refund your tuition.',
      link: '* Full terms and conditions'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Prep for Real Results
          </h2>
          <p className="text-lg text-gray-600">
            Smarter prep. Better strategies. Higher scores.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Subtitle (if exists) */}
              {feature.subtitle && (
                <p className="text-sm font-medium text-gray-700 italic mb-2">
                  {feature.subtitle}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                {feature.description}
              </p>

              {/* Link (if exists) */}
              {feature.link && (
                <a 
                  href="#" 
                  className="text-xs text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  {feature.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenPrepSection;