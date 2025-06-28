import React, { useState } from 'react';
import { Plus, Search, Filter, Grid, List, Edit, Trash2, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Design',
    status: 'Published',
    views: 1420,
    likes: 89,
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity system including logo, colors, and typography for a modern tech startup.',
  },
  {
    id: 2,
    title: 'Mobile App UI/UX',
    category: 'UI/UX',
    status: 'Draft',
    views: 0,
    likes: 0,
    date: '2024-01-20',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'User interface and experience design for a social media mobile application.',
  },
  {
    id: 3,
    title: 'Website Redesign',
    category: 'Web Design',
    status: 'Published',
    views: 892,
    likes: 45,
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete website redesign focusing on user experience and modern design principles.',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    category: 'Web Design',
    status: 'Published',
    views: 1156,
    likes: 67,
    date: '2024-01-08',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern e-commerce platform design with focus on conversion optimization.',
  },
  {
    id: 5,
    title: 'Photography Portfolio',
    category: 'Photography',
    status: 'Published',
    views: 743,
    likes: 34,
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative photography portfolio showcasing various styles and techniques.',
  },
  {
    id: 6,
    title: 'Logo Design Collection',
    category: 'Design',
    status: 'Draft',
    views: 0,
    likes: 0,
    date: '2024-01-22',
    image: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Collection of various logo designs for different industries and clients.',
  },
];

export function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design', 'UI/UX', 'Web Design', 'Photography'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Projects</h1>
            <p className="text-gray-300">Manage and showcase your creative work.</p>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1">
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black/20 border border-white/20 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-black/50 rounded-lg text-white hover:bg-black/70 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-black/50 rounded-lg text-red-400 hover:bg-black/70 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{project.category}</span>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>{project.views} views</span>
                      <span>{project.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black/20">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Views</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Likes</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img className="w-12 h-12 rounded-lg object-cover mr-4" src={project.image} alt={project.title} />
                          <div>
                            <p className="text-white font-medium">{project.title}</p>
                            <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{project.category}</td>
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
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-gray-400 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}