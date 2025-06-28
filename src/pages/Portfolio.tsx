import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Brand Identity Design',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete brand identity system including logo, colors, and typography for a modern tech startup.',
    tags: ['Branding', 'Logo Design', 'Typography'],
    year: '2024',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern e-commerce platform design with focus on conversion optimization and user experience.',
    tags: ['E-commerce', 'UI/UX', 'Web Design'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Mobile App UI/UX',
    category: 'UI/UX',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'User interface and experience design for a social media mobile application.',
    tags: ['Mobile UI', 'UX Design', 'Prototyping'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Photography Portfolio',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Creative photography portfolio showcasing various styles and techniques.',
    tags: ['Portrait', 'Landscape', 'Street Photography'],
    year: '2023',
  },
  {
    id: 5,
    title: 'Website Redesign',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete website redesign focusing on user experience and modern design principles.',
    tags: ['Web Design', 'Responsive', 'User Experience'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Logo Design Collection',
    category: 'Design',
    image: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Collection of various logo designs for different industries and clients.',
    tags: ['Logo Design', 'Branding', 'Identity'],
    year: '2023',
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Alex Johnson</h1>
          <p className="text-xl text-gray-300 mb-6">Creative Designer & Digital Artist</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              San Francisco, CA
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              5+ Years Experience
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              50+ Projects Completed
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate creative professional specializing in brand identity, web design, and digital experiences. 
            I help businesses tell their story through thoughtful design and innovative solutions.
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
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
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

        {/* Portfolio Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
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
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {[
                { skill: 'Brand Identity Design', level: 95 },
                { skill: 'Web Design & UI/UX', level: 90 },
                { skill: 'Digital Photography', level: 85 },
                { skill: 'Motion Graphics', level: 80 },
                { skill: 'Creative Direction', level: 88 },
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
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Senior Designer</h4>
                <p className="text-primary-400 mb-2">Creative Agency Pro • 2022 - Present</p>
                <p className="text-gray-300 text-sm">
                  Leading design projects for major brands, managing client relationships, and mentoring junior designers.
                </p>
              </div>
              <div className="border-l-2 border-secondary-500 pl-4">
                <h4 className="text-lg font-semibold text-white">UI/UX Designer</h4>
                <p className="text-secondary-400 mb-2">Tech Startup Inc. • 2020 - 2022</p>
                <p className="text-gray-300 text-sm">
                  Designed user interfaces for web and mobile applications, conducted user research and usability testing.
                </p>
              </div>
              <div className="border-l-2 border-accent-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Freelance Designer</h4>
                <p className="text-accent-400 mb-2">Self-Employed • 2018 - 2020</p>
                <p className="text-gray-300 text-sm">
                  Provided design services to small businesses and startups, specializing in brand identity and web design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your creative vision to life? I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="https://www.linkedin.com/in/techie05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}