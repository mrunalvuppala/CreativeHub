import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Database, Cloud, Smartphone, Heart, Eye, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2023' },
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
  { name: 'MongoDB Certified Developer', issuer: 'MongoDB Inc.', year: '2022' },
];

export function Portfolio() {
  const { projects, likeProject, viewProject } = useProjects();
  
  // Get published projects for portfolio display
  const publishedProjects = projects.filter(project => project.status === 'Published');
  
  // Calculate portfolio stats from real data
  const totalViews = projects.reduce((sum, p) => sum + p.views, 0);
  const totalLikes = projects.reduce((sum, p) => sum + p.likes, 0);
  const totalProjects = publishedProjects.length;

  const handleViewProject = (id: number) => {
    viewProject(id);
  };

  const handleLikeProject = (id: number) => {
    likeProject(id);
  };

  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <img
              src="/Picture.jpg"
              alt="Professional Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl mx-auto"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop';
              }}
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Senior Software Engineer</h1>
          <p className="text-xl text-gray-300 mb-6">Full-Stack Developer | Cloud Architect | Tech Lead</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Remote | Global
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              5+ Years Experience
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              {totalProjects}+ Projects Delivered
            </div>
          </div>

          {/* Real-time Portfolio Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">{totalProjects}</div>
              <div className="text-gray-300 text-sm">Published Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">{totalViews.toLocaleString()}</div>
              <div className="text-gray-300 text-sm">Total Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">{totalLikes}</div>
              <div className="text-gray-300 text-sm">Total Likes</div>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate software engineer with expertise in building scalable, high-performance applications. 
            Specialized in full-stack development, cloud architecture, and leading technical teams to deliver 
            innovative solutions that drive business growth and user engagement.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/techie05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-md text-blue-300 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </div>
        </div>

        {/* Portfolio Grid - Real Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              <Plus className="w-4 h-4 mr-2" />
              Manage Projects
            </Link>
          </div>
          
          {publishedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedProjects.map((project) => (
                <div key={project.id} className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button
                          onClick={() => handleViewProject(project.id)}
                          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors group/btn"
                          title="View Project"
                        >
                          <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => handleLikeProject(project.id)}
                          className="p-3 bg-white/20 backdrop-blur-md rounded-full text-red-400 hover:bg-white/30 transition-colors group/btn"
                          title="Like Project"
                        >
                          <Heart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full">
                        {new Date(project.date).getFullYear()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Project Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {project.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {project.likes}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    {/* Project Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-md">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">No Published Projects</h3>
              <p className="text-gray-400 mb-6">Create and publish projects to showcase them in your portfolio</p>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Project
              </Link>
            </div>
          )}
        </div>

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-xl mb-4">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
              <p className="text-gray-300 text-sm">React, Vue.js, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-4 bg-green-500/20 rounded-xl mb-4">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-300 text-sm">Node.js, Python, Java, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-4 bg-purple-500/20 rounded-xl mb-4">
                <Cloud className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-gray-300 text-sm">AWS, Docker, Kubernetes, Terraform, CI/CD</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="inline-flex p-4 bg-orange-500/20 rounded-xl mb-4">
                <Smartphone className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile</h3>
              <p className="text-gray-300 text-sm">React Native, Flutter, iOS, Android</p>
            </div>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Core Skills</h3>
            <div className="space-y-4">
              {[
                { skill: 'JavaScript/TypeScript', level: 95 },
                { skill: 'React & Node.js', level: 92 },
                { skill: 'Cloud Architecture (AWS)', level: 88 },
                { skill: 'Database Design & Optimization', level: 90 },
                { skill: 'System Design & Scalability', level: 87 },
                { skill: 'DevOps & CI/CD', level: 85 },
              ].map((item) => (
                <div key={item.skill}>
                  <div className="flex justify-between text-white mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Senior Software Engineer</h4>
                <p className="text-primary-400 mb-2">Tech Innovation Corp • 2022 - Present</p>
                <p className="text-gray-300 text-sm">
                  Leading development of enterprise-scale applications, architecting cloud solutions, and mentoring junior developers. 
                  Delivered 15+ major projects with 99.9% uptime.
                </p>
              </div>
              <div className="border-l-2 border-secondary-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Full-Stack Developer</h4>
                <p className="text-secondary-400 mb-2">Digital Solutions Ltd • 2020 - 2022</p>
                <p className="text-gray-300 text-sm">
                  Built scalable web applications serving 100K+ users, implemented microservices architecture, 
                  and optimized database performance by 40%.
                </p>
              </div>
              <div className="border-l-2 border-accent-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Software Developer</h4>
                <p className="text-accent-400 mb-2">StartUp Ventures • 2019 - 2020</p>
                <p className="text-gray-300 text-sm">
                  Developed mobile applications and RESTful APIs, collaborated in agile teams, 
                  and contributed to product strategy and technical decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Extraordinary</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? I'm passionate about solving complex technical challenges 
            and building scalable solutions that make a real impact. Let's discuss your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/techie05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Plus className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}