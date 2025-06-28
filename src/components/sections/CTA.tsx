import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-400/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-400/30 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-white">Join the Creative Revolution</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Showcase
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Your Best Work?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creative professionals who trust CreativeHub to showcase their portfolio and grow their careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/dashboard"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-gray-400 text-sm">
                ✨ No credit card required • Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}