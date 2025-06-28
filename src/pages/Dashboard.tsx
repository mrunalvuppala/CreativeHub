import React from 'react';
import { Plus, TrendingUp, Eye, Heart, Share2, Calendar, Clock, BarChart3 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Design',
    status: 'Published',
    views: 1420,
    likes: 89,
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Mobile App UI/UX',
    category: 'UI/UX',
    status: 'Draft',
    views: 0,
    likes: 0,
    date: '2024-01-20',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'Website Redesign',
    category: 'Web Design',
    status: 'Published',
    views: 892,
    likes: 45,
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const stats = [
  { label: 'Total Views', value: '2,312', change: '+12%', icon: Eye, color: 'text-blue-400' },
  { label: 'Total Likes', value: '134', change: '+8%', icon: Heart, color: 'text-red-400' },
  { label: 'Projects', value: '6', change: '+2', icon: BarChart3, color: 'text-green-400' },
  { label: 'Shares', value: '89', change: '+15%', icon: Share2, color: 'text-purple-400' },
];

export function Dashboard() {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-300">Welcome back! Here's your portfolio overview.</p>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1">
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-black/20 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/20">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Views</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Likes</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={project.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img className="w-12 h-12 rounded-lg object-cover mr-4" src={project.image} alt={project.title} />
                        <div>
                          <p className="text-white font-medium">{project.title}</p>
                          <p className="text-gray-400 text-sm">{project.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{project.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-300">{project.likes}</td>
                    <td className="px-6 py-4 text-gray-300">{new Date(project.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}