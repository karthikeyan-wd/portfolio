import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Sparkles, Layout, Smartphone } from 'lucide-react';
import GridBackground from './GridBackground';

function GithubIcon({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function TwitterIcon({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function ReactIcon({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="-10.5 -9.45 21 18.9" fill="currentColor" className={className}>
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

function VscodeIcon({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  );
}

function FloatingBadge({ 
  icon: Icon, 
  className, 
  animate, 
  delay = 0,
  color = 'text-primary-500',
  rotation = 0,
  displayClass = 'hidden md:flex'
}: { 
  icon: any, 
  className: string, 
  animate: any, 
  delay?: number,
  color?: string,
  rotation?: number,
  displayClass?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: rotation - 10 }}
      animate={{ opacity: 1, scale: 1, ...animate }}
      transition={{ 
        duration: 3, 
        delay, 
        repeat: Infinity, 
        repeatType: 'reverse', 
        ease: 'easeInOut' 
      }}
      className={`absolute ${displayClass} pointer-events-none z-0 ${className}`}
    >
      <div className="bg-white/5 dark:bg-black/20 backdrop-blur-md border border-black/5 dark:border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center transform scale-75 md:scale-100 origin-center">
        <Icon size={36} className={`drop-shadow-lg ${color}`} />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-16 pb-24 md:pb-16 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <GridBackground />
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent-500/15 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary-400/10 blur-[100px]"
        />
      </div>

      {/* Floating Badges */}
      <FloatingBadge 
        icon={GithubIcon}
        className="top-[12%] left-[4%] md:top-[20%] md:left-[15%]"
        animate={{ y: [-15, 15], rotate: [-15, -5] }}
        delay={0}
        color="text-[var(--text-primary)]"
        rotation={-10}
        displayClass="flex"
      />
      <FloatingBadge 
        icon={ReactIcon}
        className="top-[15%] right-[4%] md:top-[25%] md:right-[15%]"
        animate={{ y: [15, -15], rotate: [5, 15] }}
        delay={1}
        color="text-[#61DAFB]"
        rotation={10}
        displayClass="flex"
      />
      <FloatingBadge 
        icon={VscodeIcon}
        className="bottom-[30%] left-[18%]"
        animate={{ y: [-20, 20], rotate: [-5, 5] }}
        delay={0.5}
        color="text-[#007ACC]"
        rotation={0}
      />
      <FloatingBadge 
        icon={Sparkles}
        className="bottom-[25%] right-[20%]"
        animate={{ y: [20, -20], rotate: [-10, 0] }}
        delay={1.5}
        color="text-accent-400"
        rotation={-5}
      />
      <FloatingBadge 
        icon={Smartphone}
        className="bottom-[25%] left-[8%] md:bottom-auto md:top-[45%] md:left-auto md:right-[10%]"
        animate={{ y: [-10, 10], rotate: [10, 20] }}
        delay={2.5}
        color="text-primary-400"
        rotation={15}
        displayClass="flex"
      />
      <FloatingBadge 
        icon={Layout}
        className="top-[50%] left-[8%]"
        animate={{ y: [10, -10], rotate: [-20, -10] }}
        delay={2}
        color="text-emerald-400"
        rotation={-15}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-[var(--text-secondary)]">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-[var(--text-primary)]"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Karthikeyan</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-3 font-light"
        >
          Full-Stack Developer & Creative Technologist
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          I craft elegant, high-performance digital experiences that blend creativity with cutting-edge technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            id="cta-projects"
            className="group w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            View My Work
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            id="cta-contact"
            className="group w-full sm:w-auto px-8 py-3.5 glass-card text-[var(--text-primary)] rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: 'https://github.com/karthikeyan-wd', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/karthi-keyan-a-10a539361/', label: 'LinkedIn' },
            { icon: TwitterIcon, href: '#', label: 'Twitter' },
          ].map(social => (
            <a
              key={social.label}
              href={social.href}
              id={`social-${social.label.toLowerCase()}`}
              aria-label={social.label}
              className="p-3 rounded-xl text-[var(--text-muted)] hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-28 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
