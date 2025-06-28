import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Calendar, Award } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Modern web applications built with React, Node.js, and cloud technologies for scalable solutions.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android.',
    tags: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Scalable cloud infrastructure setup using AWS, Docker, and Kubernetes for enterprise applications.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    year: '2024',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
    tags: ['E-commerce', 'Payment Gateway', 'Analytics', 'SEO'],
    year: '2023',
  },
  {
    id: 5,
    title: 'Data Analytics Dashboard',
    category: 'Data Science',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interactive data visualization dashboards using Python, D3.js, and machine learning algorithms.',
    tags: ['Python', 'D3.js', 'Machine Learning', 'Data Visualization'],
    year: '2023',
  },
  {
    id: 6,
    title: 'API Development',
    category: 'Backend Development',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'RESTful APIs and GraphQL services with robust authentication and real-time capabilities.',
    tags: ['REST API', 'GraphQL', 'Authentication', 'Real-time'],
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
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white/20"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Professional</h1>
          <p className="text-xl text-gray-300 mb-6">Full-Stack Developer & Technology Enthusiast</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Available Worldwide
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              3+ Years Experience
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              25+ Projects Completed
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies, cloud computing, and mobile development. 
            I specialize in building scalable applications and delivering innovative solutions that drive business growth.
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

        {/* Skills & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {[
                { skill: 'JavaScript/TypeScript', level: 95 },
                { skill: 'React & Node.js', level: 92 },
                { skill: 'Python & Data Science', level: 88 },
                { skill: 'Cloud Technologies (AWS)', level: 85 },
                { skill: 'Mobile Development', level: 82 },
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
                <h4 className="text-lg font-semibold text-white">Full-Stack Developer</h4>
                <p className="text-primary-400 mb-2">Tech Solutions Inc. • 2022 - Present</p>
                <p className="text-gray-300 text-sm">
                  Developing scalable web applications using modern frameworks, implementing cloud solutions, and leading technical initiatives.
                </p>
              </div>
              <div className="border-l-2 border-secondary-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Software Engineer</h4>
                <p className="text-secondary-400 mb-2">Innovation Labs • 2021 - 2022</p>
                <p className="text-gray-300 text-sm">
                  Built mobile applications and APIs, collaborated with cross-functional teams, and optimized application performance.
                </p>
              </div>
              <div className="border-l-2 border-accent-500 pl-4">
                <h4 className="text-lg font-semibold text-white">Junior Developer</h4>
                <p className="text-accent-400 mb-2">StartUp Ventures • 2020 - 2021</p>
                <p className="text-gray-300 text-sm">
                  Contributed to various projects, learned modern development practices, and gained experience in agile methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'm passionate about creating innovative solutions and would love to discuss how we can work together.
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