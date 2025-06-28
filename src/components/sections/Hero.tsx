import React from 'react';
import { ArrowRight, Sparkles, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-accent-500 mr-2" />
            <span className="text-sm text-white">Built with Bolt.new - Professional Grade</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Creative
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Portfolio Platform
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Showcase your best work, manage projects seamlessly, and build your professional presence with our beautiful, production-ready platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Demo Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-300">Active Creators</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary-500/20 rounded-lg mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-secondary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Projects Showcased</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-lg mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}