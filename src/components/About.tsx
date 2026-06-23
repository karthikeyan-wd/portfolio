import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Database, Globe, Smartphone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  { name: 'Frontend', icon: Code2, items: ['React', 'Next.js', 'TypeScript', 'Vue.js'], color: 'primary' },
  { name: 'UI/UX', icon: Palette, items: ['Figma', 'Tailwind', 'Framer Motion', 'CSS'], color: 'accent' },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'], color: 'primary' },
  { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'Expo', 'Swift'], color: 'accent' },
  { name: 'DevOps', icon: Zap, items: ['Docker', 'AWS', 'CI/CD', 'Vercel'], color: 'primary' },
  { name: 'Web', icon: Globe, items: ['REST APIs', 'GraphQL', 'WebSockets', 'PWAs'], color: 'accent' },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
  { value: '5+', label: 'Awards' },
];

export default function About() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 px-5"
      style={{ background: 'var(--bg-secondary)' }}
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
            // about me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Crafting Digital <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            I'm a passionate developer who thrives on building beautiful, performant, and 
            user-centric digital products. With expertise spanning the full stack, I bring 
            ideas to life through clean code and creative design.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="glass-card p-5 md:p-6 text-center"
            >
              <div className="text-2xl md:text-4xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[var(--text-muted)] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${
                    skill.color === 'primary'
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'bg-accent-500/10 text-accent-400'
                  } transition-all duration-300 group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
