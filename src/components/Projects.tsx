import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import t2dImage from '../assets/T2D copy.png';
import adminImage from '../assets/admin copy.png';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

const projects = [
  {
    title: 'T2Drive Admin Portal',
    description: 'T2Drive Admin is a comprehensive web-based administration platform for managing drivers, trips, vehicles, subscriptions, payments, and platform operations through a centralized dashboard with real-time monitoring and analytics',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    image: adminImage,
    liveUrl: '#',
    githubUrl: 'https://github.com/karthikeyan-wd/t2drive-Admin-portal',
    launchingSoon: true,
    featured: true,
  },
  {
    title: 'T2Drive',
    description: 'T2Drive is a complete mobility platform for driver partners, featuring digital onboarding, live ride requests, GPS navigation, real-time location tracking, secure payments, subscriptions, and trip management.',
    tags: ['React Native', 'Node.js', 'Socket.IO', 'Maps'],
    image: t2dImage,
    liveUrl: '#',
    githubUrl: 'https://github.com/karthikeyan-wd/T2drive-showcase',
    launchingSoon: true,
    featured: true,
  },
  {
    title: 'Zukvo',
    description: 'Zithmi (Zithspace) is Zukvo\'s all-in-one internal operations platform, combining CRM, project management, client portal, document management, invoicing, proposals, and multi-tenant business operations in a single workspace.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: 'https://www.zukvo.com/',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Zukvo Landing Page',
    description: 'Zithmi (Zithspace) is Zukvo\'s all-in-one internal operations platform, combining CRM, project management, client portal, document management, invoicing, proposals, and multi-tenant business operations in a single workspace',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: 'https://www.zukvo.com/',
    githubUrl: '#',
    featured: false,
  },

  {
    title: 'Life Journey Portfolio',
    description: 'A documentary-style, interactive web experience chronicling my personal and professional evolution across distinct chapters using scroll-driven animations.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    liveUrl: 'https://life-journey-portfolio-nine.vercel.app/',
    githubUrl: 'https://github.com/karthikeyan-wd/life-journey-portfolio',
    featured: false,
  },
];

export default function Projects() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 px-5"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider mb-3 block">
            // my work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            A curated selection of projects that showcase my expertise in building 
            full-stack applications with modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects (Large Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card overflow-hidden group cursor-pointer relative"
              onClick={() => {
                const targetUrl = project.githubUrl !== '#' ? project.githubUrl : (project.liveUrl !== '#' ? project.liveUrl : null);
                if (targetUrl) window.open(targetUrl, '_blank');
              }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 bg-[var(--bg-primary)]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
                
                {(project as any).launchingSoon && (
                  <span className="absolute top-0 left-0 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border-b border-r border-amber-500/20 rounded-br-xl backdrop-blur-md flex items-center gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Launching Soon
                  </span>
                )}
                
                {project.liveUrl !== '#' && !(project as any).launchingSoon && (
                  <span className="absolute top-0 left-0 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border-b border-r border-emerald-500/20 rounded-br-xl backdrop-blur-md flex items-center gap-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                  </span>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                      aria-label={`View ${project.title} source`}
                    >
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={18} className="text-[var(--text-muted)] group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects (Smaller Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-card p-5 pt-7 group cursor-pointer relative overflow-hidden"
              onClick={() => {
                const targetUrl = project.githubUrl !== '#' ? project.githubUrl : (project.liveUrl !== '#' ? project.liveUrl : null);
                if (targetUrl) window.open(targetUrl, '_blank');
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-primary-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                {project.liveUrl !== '#' && (
                  <span className="absolute top-0 left-0 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border-b border-r border-emerald-500/20 rounded-br-xl backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                  </span>
                )}
                <div className="flex gap-1.5 flex-shrink-0 ml-2">
                  <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} className="text-[var(--text-muted)] hover:text-primary-400 transition-colors" aria-label="Source">
                    <GithubIcon size={14} />
                  </a>
                  <a href={project.liveUrl} onClick={(e) => e.stopPropagation()} className="text-[var(--text-muted)] hover:text-primary-400 transition-colors" aria-label="Live">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-color)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
