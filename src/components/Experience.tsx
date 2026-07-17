import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'React Native Full Stack Developer',
    company: 'Zithtech',
    location: 'Chennai, India (On-site)',
    period: '2026 – Present',
    description: 'Transitioned into a React Native Full Stack Developer role, building scalable cross-platform mobile applications and supporting backend services. Developed end-to-end solutions from UI implementation to API integration, authentication, real-time features, and deployment.',
    achievements: [
      'Developed cross-platform mobile applications using React Native',
      'Built and integrated secure REST APIs with backend services',
      'Implemented authentication, real-time updates, push notifications, and payment integration',
      'Worked on production applications including ride-booking and business management platforms',
      'Collaborated with UI/UX designers, backend engineers, and QA teams in an Agile environment',
      'Optimized application performance and resolved production issues',
    ],
    tech: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Redux Toolkit', 'Socket.IO', 'Firebase', 'AWS', 'Git'],
    current: true,
  },
  {
    role: 'Associate Software Engineer (Full Stack Developer)',
    company: 'Zithtech',
    location: 'Chennai, India (On-site)',
    period: '2026',
    description: 'Promoted to Associate Software Engineer, contributing to the design, development, and maintenance of full-stack applications. Working across frontend, backend, APIs, databases, and cloud services to deliver scalable, production-ready software solutions.',
    achievements: [
      'Developed end-to-end web applications using modern frontend and backend technologies',
      'Built secure REST APIs and integrated third-party services',
      'Designed responsive, high-performance user interfaces with React',
      'Collaborated with cross-functional teams throughout the software development lifecycle',
      'Optimized application performance, fixed production issues, and implemented new features',
      'Participated in code reviews, testing, deployment, and technical documentation',
    ],
    tech: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Git', 'REST APIs', 'AWS', 'Docker'],
    current: false,
  },
  {
    role: 'Web Developer Trainee',
    company: 'Zithtech',
    location: 'Chennai, India (On-site)',
    period: '2025 – 2026',
    description: 'Contributed to the development of scalable web applications by building responsive user interfaces, integrating APIs, and collaborating with cross-functional teams. Worked on real-world projects using modern frontend technologies and industry best practices.',
    achievements: [
      'Developed responsive and reusable frontend components using React.js',
      'Integrated REST APIs and implemented dynamic application features',
      'Collaborated with designers and backend developers to deliver production-ready solutions',
      'Participated in bug fixing, performance optimization, and code reviews',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Git', 'Vite'],
    current: false,
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'Novitech',
    location: 'Coimbatore, India (Remote)',
    period: '2025 (2 Months)',
    description: 'Designed intuitive and user-centered interfaces for web and mobile applications. Created wireframes, prototypes, and modern UI designs while collaborating with developers to ensure a seamless user experience.',
    achievements: [
      'Designed responsive web and mobile application interfaces in Figma',
      'Created wireframes, user flows, and interactive prototypes',
      'Improved user experience through modern UI design principles',
      'Collaborated remotely with developers to hand off production-ready designs',
    ],
    tech: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    current: false,
  },
  {
    role: 'Web Developer Intern',
    company: 'Vilora Tech',
    location: 'Puducherry, India (On-site)',
    period: '2025',
    description: 'Worked as a Web Developer Intern, contributing to responsive web applications, UI development, and frontend feature implementation. Collaborated with the development team to build modern, user-friendly interfaces and improve application performance.',
    achievements: [
      'Developed responsive web pages using modern frontend technologies',
      'Converted Figma/UI designs into reusable, pixel-perfect components',
      'Fixed bugs, optimized UI performance, and improved user experience',
      'Collaborated with developers using Git and followed agile development practices',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git'],
    current: true,
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
                      <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                        {exp.role.replace(/ (Intern|Trainee)/, '')}
                        {(exp.role.includes('Intern') || exp.role.includes('Trainee')) && (
                          <span className="text-sm font-medium text-[var(--text-muted)] mt-0.5">
                            {exp.role.includes('Intern') ? 'Intern' : 'Trainee'}
                          </span>
                        )}
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
