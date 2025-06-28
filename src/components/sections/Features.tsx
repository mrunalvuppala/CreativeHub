import React from 'react';
import { Palette, BarChart3, Share2, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Beautiful Portfolios',
    description: 'Create stunning portfolio pages with customizable layouts and professional templates.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: BarChart3,
    title: 'Project Analytics',
    description: 'Track views, engagement, and performance metrics for all your creative projects.',
    color: 'from-secondary-500 to-secondary-700',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your work instantly with custom URLs and social media integration.',
    color: 'from-accent-500 to-accent-700',
  },
  {
    icon: Shield,
    title: 'Professional Security',
    description: 'Enterprise-grade security with data encryption and privacy controls.',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with instant loading and seamless user experience.',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Reach audiences worldwide with SEO optimization and fast global delivery.',
    color: 'from-indigo-500 to-indigo-700',
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with modern technologies and designed for professional creators who demand the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}