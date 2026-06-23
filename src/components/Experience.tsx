import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Chennai, India',
    period: '2024 – Present',
    description: 'Lead development of enterprise-grade applications serving 50K+ users. Architect scalable microservices and mentor junior developers.',
    achievements: [
      'Reduced page load times by 40% through performance optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Led migration from monolith to microservices architecture',
    ],
    tech: ['React', 'Node.js', 'AWS', 'Docker'],
    current: true,
  },
  {
    role: 'Full-Stack Developer',
    company: 'Digital Innovations Ltd',
    location: 'Bangalore, India',
    period: '2023 – 2024',
    description: 'Developed and maintained multiple client-facing web applications and mobile apps with a focus on user experience and performance.',
    achievements: [
      'Built 10+ responsive web applications from scratch',
      'Integrated real-time features using WebSocket technology',
      'Improved SEO rankings by 50% through optimization',
    ],
    tech: ['Vue.js', 'Express', 'PostgreSQL', 'Firebase'],
    current: false,
  },
  {
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2022 – 2023',
    description: 'Built pixel-perfect, responsive interfaces for early-stage products. Collaborated closely with designers and product managers.',
    achievements: [
      'Developed component library used across 5 products',
      'Achieved 95+ Lighthouse performance scores',
      'Reduced bundle size by 35% through code splitting',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    current: false,
  },
];

export default function Experience() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 px-5"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-wider mb-3 block">
            // experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            A timeline of my career growth and the impactful work I've delivered across diverse teams and technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? 'bg-primary-500 border-primary-400 shadow-lg shadow-primary-500/50'
                    : 'bg-[var(--bg-secondary)] border-[var(--text-muted)]'
                }`}>
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-40" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 size={14} className="text-primary-400" />
                        <span className="text-sm font-medium text-primary-400">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map(achievement => (
                      <li key={achievement} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <span className="w-1 h-1 rounded-full bg-accent-400 mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
