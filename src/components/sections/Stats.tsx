import React from 'react';
import { TrendingUp, Clock, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '250%',
    label: 'Average Growth in Portfolio Views',
    description: 'Users see significant increases in project visibility',
  },
  {
    icon: Clock,
    value: '5 min',
    label: 'Setup Time',
    description: 'Get your professional portfolio live in minutes',
  },
  {
    icon: Award,
    value: '4.9/5',
    label: 'User Satisfaction',
    description: 'Rated by thousands of creative professionals',
  },
  {
    icon: Heart,
    value: '99%',
    label: 'Client Recommendation Rate',
    description: 'Creators love sharing their success stories',
  },
];

export function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Creative Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of creators who have transformed their careers with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="inline-flex p-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-3">{stat.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}