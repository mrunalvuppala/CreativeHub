import React from 'react';
import { Zap } from 'lucide-react';

export function BoltBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://bolt.new"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
      >
        <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        Built with Bolt.new
      </a>
    </div>
  );
}