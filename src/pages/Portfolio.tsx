import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Database, Cloud, Smartphone } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Enterprise Web Application',
    category: 'Full-Stack Development',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Scalable enterprise web application built with React, Node.js, and PostgreSQL, serving 10,000+ users with real-time features.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Platform',
    category: 'DevOps & Cloud',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Automated cloud infrastructure management platform using AWS, Terraform, and Kubernetes for enterprise deployments.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
    year: '2024',
  },
  {
    id: 4,
    title: 'AI-Powered Analytics Dashboard',
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Machine learning-powered analytics dashboard providing predictive insights and real-time data visualization for business intelligence.',
    tags: ['Python', 'TensorFlow', 'D3.js', 'FastAPI', 'ML'],
    year: '2023',
  },
  {
    id: 5,
    title: 'E-commerce Microservices',
    category: 'Backend Architecture',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Microservices architecture for high-traffic e-commerce platform handling 1M+ transactions daily with 99.9% uptime.',
    tags: ['Microservices', 'GraphQL', 'MongoDB', 'RabbitMQ'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Blockchain DeFi Platform',
    category: 'Blockchain Development',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Decentralized finance platform with smart contracts, yield farming, and cross-chain compatibility for cryptocurrency trading.',
    tags: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
    year: '2023',
  },
];

const certifications = [
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google Cloud Professional Developer', issuer: 'Google Cloud', year: '2023' },
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: '2023' },
  { name: 'MongoDB Certified Developer', issuer: 'MongoDB Inc.', year: '2022' },
];

export function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <img
              src="/Picture.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
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
              50+ Projects Delivered
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

        {/* Portfolio Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
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

        {/* Technical Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-xl mb-4">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
              <p className="text-gray-300 text-sm">React, Vue.js, TypeScript, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex p-4 bg-green-500/20 rounded-xl mb-4">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backend</h3>
              <p className="text-gray-300 text-sm">Node.js, Python, Java, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <div className="inline-flex p-4 bg-purple-500/20 rounded-xl mb-4">
                <Cloud className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-gray-300 text-sm">AWS, Docker, Kubernetes, Terraform, CI/CD</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}