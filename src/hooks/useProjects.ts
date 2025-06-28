import { useState, useEffect } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  status: 'Published' | 'Draft';
  views: number;
  likes: number;
  date: string;
  image: string;
  description: string;
  tags?: string[];
}

const initialProjects: Project[] = [
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
    tags: ['Branding', 'Logo Design', 'Typography'],
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
    tags: ['Mobile UI', 'UX Design', 'Prototyping'],
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
    tags: ['Web Design', 'Responsive', 'User Experience'],
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
    tags: ['E-commerce', 'UI/UX', 'Conversion'],
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
    tags: ['Portrait', 'Landscape', 'Street Photography'],
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
    tags: ['Logo Design', 'Branding', 'Identity'],
  },
];

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('creativehub-projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  useEffect(() => {
    localStorage.setItem('creativehub-projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = {
      ...project,
      id: Date.now(),
      views: 0,
      likes: 0,
      date: new Date().toISOString().split('T')[0],
    };
    setProjects(prev => [newProject, ...prev]);
    return newProject;
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ));
  };

  const deleteProject = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const likeProject = (id: number) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, likes: project.likes + 1 } : project
    ));
  };

  const viewProject = (id: number) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, views: project.views + 1 } : project
    ));
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
    likeProject,
    viewProject,
  };
}