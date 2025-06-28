import React from 'react';
import { Plus, TrendingUp, Eye, Heart, Share2, Calendar, Clock, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

export function Dashboard() {
  const { projects } = useProjects();

  const publishedProjects = projects.filter(p => p.status === 'Published');
  const totalViews = projects.reduce((sum, p) => sum + p.views, 0);
  const totalLikes = projects.reduce((sum, p) => sum + p.likes, 0);
  const totalShares = Math.floor(totalLikes * 0.3); // Estimated shares

  const stats = [
    { 
      label: 'Total Views', 
      value: totalViews.toLocaleString(), 
      change: '+12%', 
      icon: Eye, 
      color: 'text-blue-400' 
    },
    { 
      label: 'Total Likes', 
      value: totalLikes.toString(), 
      change: '+8%', 
      icon: Heart, 
      color: 'text-red-400' 
    },
    { 
      label: 'Projects', 
      value: projects.length.toString(), 
      change: `+${projects.filter(p => new Date(p.date) > new Date(Date.now() - 30*24*60*60*1000)).length}`, 
      icon: BarChart3, 
      color: 'text-green-400' 
    },
    { 
      label: 'Shares', 
      value: totalShares.toString(), 
      change: '+15%', 
      icon: Share2, 
      color: 'text-purple-400' 
    },
  ];

  const recentProjects = projects.slice(0, 5);

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-300">Welcome back! Here's your portfolio overview.</p>
          </div>
          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </Link>
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

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            to="/projects"
            className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-primary-400" />
              </div>
              <span className="text-sm text-gray-400">Quick Action</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Create Project</h3>
            <p className="text-gray-300 text-sm">Start a new creative project and showcase your work</p>
          </Link>

          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-secondary-500/20 to-accent-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-secondary-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-secondary-400" />
              </div>
              <span className="text-sm text-gray-400">View</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">View Portfolio</h3>
            <p className="text-gray-300 text-sm">See how your portfolio looks to visitors</p>
          </Link>

          <div className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-accent-400" />
              </div>
              <span className="text-sm text-gray-400">Analytics</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">View Analytics</h3>
            <p className="text-gray-300 text-sm">Track your portfolio performance and engagement</p>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-6 border-b border-white/20 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
            <Link
              to="/projects"
              className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
            >
              View All
            </Link>
          </div>
          {recentProjects.length > 0 ? (
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
                  {recentProjects.map((project, index) => (
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
          ) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No projects yet</h3>
              <p className="text-gray-400 mb-6">Create your first project to get started</p>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Project
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}