import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Zap, Database, Globe, Smartphone, Cpu, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaNodeJs, 
  FaGithub, FaNpm, FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiAntdesign, SiAxios, SiVercel, 
  SiExpress, SiSocketdotio, SiRedis, SiPostgresql, SiExpo, SiVite, 
  SiAndroidstudio, SiXcode, SiPostman
} from 'react-icons/si';
import { VscCode, VscOpenai } from 'react-icons/vsc';

const getSkillIcon = (name: string) => {
  const iconMap: Record<string, any> = {
    'React.js': FaReact,
    'React Hooks': FaReact,
    'JavaScript (ES6+)': FaJsSquare,
    'TypeScript': SiTypescript,
    'HTML5': FaHtml5,
    'CSS3': FaCss3Alt,
    'Tailwind CSS': SiTailwindcss,
    'Ant Design': SiAntdesign,
    'Axios': SiAxios,
    'Figma': FaFigma,
    'Tailwind': SiTailwindcss,
    'Canva': Palette,
    'CSS': FaCss3Alt,
    'Docker': FaDocker,
    'AWS': FaAws,
    'Vercel': SiVercel,
    'Node.js': FaNodeJs,
    'Express.js': SiExpress,
    'Socket.IO': SiSocketdotio,
    'Redis': SiRedis,
    'PostgreSQL': SiPostgresql,
    'React Native': FaReact,
    'Expo': SiExpo,
    'Git/GitHub': FaGithub,
    'VS Code': VscCode,
    'Postman': SiPostman,
    'npm/Yarn': FaNpm,
    'Vite': SiVite,
    'Android Studio': SiAndroidstudio,
    'Xcode': SiXcode,
    'ChatGPT': VscOpenai,
  };
  return iconMap[name] || null;
};

type SkillItem = {
  name: string;
  icon?: any;
  items?: string[];
  color?: string;
  isSplit?: boolean;
  subSections?: { name: string; icon: any; items: string[]; color: string }[];
};

const skills: SkillItem[] = [
  { name: 'Frontend', icon: Code2, items: ['React.js', 'React Hooks', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design', 'Responsive Design', 'Axios', 'React Native', 'Expo', 'React Navigation'], color: 'primary' },
  { 
    name: 'UI & DevOps',
    isSplit: true,
    subSections: [
      { name: 'UI/UX', icon: Palette, items: ['Figma', 'Tailwind', 'Canva', 'CSS'], color: 'accent' },
      { name: 'DevOps', icon: Zap, items: ['Docker', 'AWS', 'CI/CD', 'Vercel'], color: 'primary' }
    ]
  },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'Redis', 'PostgreSQL'], color: 'primary' },
  { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Expo', 'React Navigation', 'AsyncStorage', 'Native Modules (Basic)'], color: 'accent' },
  { name: 'Web', icon: Globe, items: ['REST APIs', 'WebSockets', 'Cron Jobs', 'JWT Auth', 'Redis Pub/Sub', 'Redis Caching', 'API Integration', 'Responsive Design', 'JSON', 'CORS'], color: 'accent' },
  { name: 'Tools & AI', icon: Cpu, items: ['Git/GitHub', 'VS Code', 'Postman', 'npm/Yarn', 'Vite', 'Android Studio', 'Xcode', 'Figma', 'ChatGPT', 'Claude AI', 'Cursor', 'Antigravity AI', 'Copilot', 'Gemini'], color: 'primary' },
];

const stats = [
  { value: '10+', label: 'Months Experience' },
  { value: '4', label: 'Projects Completed' },
  { value: '3', label: 'Happy Clients' },
  { value: '2', label: 'Awards' },
];

const skillDescriptions: Record<string, string> = {
  // Frontend
  'React.js': 'Built the dynamic web interfaces for the VDrive Admin App and Zukvo project, ensuring smooth state management and fast rendering.',
  'React Hooks': 'Utilized custom hooks to handle complex logic, state, and side effects across both Zukvo and the VDrive Admin dashboards.',
  'JavaScript (ES6+)': 'Wrote clean, modular JavaScript to power the core logic of VDrive and Zukvo, using modern ES6+ features.',
  'TypeScript': 'Implemented strict static typing in Zukvo and VDrive to catch errors early and maintain a scalable codebase.',
  'HTML5': 'Structured accessible and SEO-friendly layouts for Zukvo and the VDrive web platforms.',
  'CSS3': 'Crafted highly responsive and fluid designs for all web projects using modern CSS3 features.',
  'Tailwind CSS': 'Rapidly styled the VDrive Admin dashboard and Zukvo interfaces using Tailwind\'s utility-first classes.',
  'Ant Design': 'Leveraged Ant Design\'s enterprise-grade component library to build complex data tables and UI elements in the VDrive Admin App.',
  'Responsive Design': 'Ensured seamless user experiences across mobile, tablet, and desktop screens for Zukvo and web-based VDrive portals.',
  'Axios': 'Handled asynchronous HTTP requests and seamless API integrations across the VDrive ecosystem and Zukvo.',

  // UI/UX
  'Figma': 'Designed the initial wireframes and interactive prototypes for the VDrive mobile and admin interfaces.',
  'Tailwind': 'Translated high-fidelity designs into pixel-perfect code for both VDrive and Zukvo.',
  'Canva': 'Created quick marketing assets, logos, and promotional graphics for the VDrive and Zukvo projects.',
  'CSS': 'Applied advanced styling, animations, and transitions to enhance user engagement.',

  // Backend
  'Node.js': 'Architected robust backend services and server-side logic to power both the VDrive ecosystem and the Zukvo project.',
  'Express.js': 'Built robust RESTful APIs and middleware pipelines for VDrive and Zukvo.',
  'REST APIs': 'Designed standardized endpoints connecting the VDrive Mobile App and Admin App securely to the backend.',
  'Socket.IO': 'Powered live updates and instant notifications between the VDrive Admin App and the mobile driver application.',
  'Redis': 'Utilized in-memory data structures to handle high-speed data operations in the VDrive backend.',
  'PostgreSQL': 'Modeled relational data, such as users, rides, and transactions, ensuring data integrity for VDrive and Zukvo.',

  // Mobile
  'React Native': 'Developed the core functionality and UI for the cross-platform VDrive Mobile App used by drivers.',
  'Expo': 'Accelerated the development and deployment pipeline of the VDrive Mobile App using the Expo toolchain.',
  'React Navigation': 'Implemented intuitive tab and stack navigation flows within the VDrive driver provider app.',
  'AsyncStorage': 'Managed persistent, on-device local storage for driver session data and preferences in the VDrive app.',
  'Native Modules (Basic)': 'Integrated essential native capabilities and device features specifically required for the VDrive driver app.',

  // Web
  'WebSockets': 'Established real-time, bi-directional communication to track live driver locations in the VDrive ecosystem.',
  'Cron Jobs': 'Scheduled automated background tasks for periodic maintenance and data syncing in the VDrive backend.',
  'JWT Auth': 'Secured the VDrive and Zukvo platforms using JSON Web Tokens for authentication and role-based access control.',
  'Redis Pub/Sub': 'Implemented scalable message brokering for real-time events in the VDrive driver app.',
  'Redis Caching': 'Drastically improved API response times for Zukvo and VDrive by caching frequently accessed data.',
  'API Integration': 'Connected third-party services like payment gateways and mapping APIs into the VDrive ecosystem.',
  'JSON': 'Structured complex data payloads for seamless transfer between the mobile app, admin portal, and backend.',
  'CORS': 'Configured secure Cross-Origin Resource Sharing policies for the Zukvo and VDrive APIs.',

  // Tools & AI
  'Git/GitHub': 'Managed version control and collaborative workflows for the entire suite of VDrive apps and Zukvo.',
  'VS Code': 'Optimized development workflows while building and maintaining the VDrive and Zukvo codebases.',
  'Postman': 'Tested and documented the complex API endpoints powering the driver and admin interactions in VDrive.',
  'npm/Yarn': 'Managed complex package dependencies across the project structures of VDrive and Zukvo.',
  'Vite': 'Leveraged next-generation frontend tooling for blazing fast builds in the Zukvo project.',
  'Android Studio': 'Compiled, debugged, and managed Android-specific deployments for the VDrive Mobile App.',
  'Xcode': 'Managed iOS builds, provisioning profiles, and deployments for the VDrive ecosystem.',
  'ChatGPT': 'Leveraged AI to conceptualize logic flows and troubleshoot complex issues during VDrive development.',
  'Claude AI': 'Analyzed large codebases and drafted technical documentation for Zukvo and VDrive.',
  'Cursor': 'Developed code rapidly using an AI-first code editor across all my recent projects.',
  'Antigravity AI': 'Integrated advanced autonomous agentic coding assistants into my workflow.',
  'Copilot': 'Sped up repetitive coding tasks with AI autocomplete while building the VDrive Admin dashboard.',
  'Gemini': 'Leveraged multimodal AI for complex reasoning tasks during backend API design.',
};

export default function About() {
  const { ref, isInView } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<Omit<SkillItem, 'isSplit' | 'subSections'> | null>(null);

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
              className="glass-card py-3 md:py-4 px-4 text-center flex flex-col justify-center"
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

        {/* Skills List */}
        <div className="glass-card flex flex-col overflow-hidden">
          {skills.map((skill, i) => {
            const isLastSkill = i === skills.length - 1;
            
            if (skill.isSplit && skill.subSections) {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className={`flex flex-col ${!isLastSkill ? "border-b border-[var(--border-glass)]" : ""}`}
                >
                  {skill.subSections.map((sub, j) => {
                    const SubIcon = sub.icon;
                    return (
                      <div 
                        key={sub.name} 
                        className={`p-4 sm:p-5 cursor-pointer group hover:bg-[var(--border-glass)] transition-colors ${j > 0 ? "border-t border-[var(--border-glass)]" : ""}`}
                        onClick={() => setActiveCategory(sub)}
                      >
                        <div className="flex items-center gap-3 mb-3 group">
                          <div className={`p-2 rounded-xl ${
                            sub.color === 'primary'
                              ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400'
                              : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                          } transition-all duration-300 group-hover:scale-110`}>
                            <SubIcon size={18} />
                          </div>
                          <h3 className="text-base font-bold text-[var(--text-primary)] tracking-wide">
                            {sub.name}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {sub.items.map(item => {
                            const ItemIcon = getSkillIcon(item);
                            return (
                              <span
                                key={item}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary-400)] hover:bg-[var(--bg-card)] transition-colors"
                              >
                                {ItemIcon && <ItemIcon size={12} className="opacity-80" />}
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              );
            }

            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`p-4 sm:p-5 group cursor-pointer hover:bg-[var(--border-glass)] transition-colors ${!isLastSkill ? "border-b border-[var(--border-glass)]" : ""}`}
                onClick={() => setActiveCategory(skill)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${
                    skill.color === 'primary'
                      ? 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400'
                      : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                  } transition-all duration-300 group-hover:scale-110`}>
                    {Icon && <Icon size={18} />}
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] tracking-wide">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items?.map(item => {
                    const ItemIcon = getSkillIcon(item);
                    return (
                      <span
                        key={item}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-glass)] text-[var(--text-secondary)] border border-[var(--border-glass)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary-400)] hover:bg-[var(--bg-card)] transition-colors"
                      >
                        {ItemIcon && <ItemIcon size={12} className="opacity-80" />}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Side Drawer */}
      <AnimatePresence>
        {activeCategory && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCategory(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-[var(--bg-secondary)] border-l border-[var(--border-color)] z-50 overflow-y-auto shadow-2xl"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl ${
                      activeCategory.color === 'primary'
                        ? 'bg-primary-500/10 text-primary-400'
                        : 'bg-accent-500/10 text-accent-400'
                    }`}>
                      {activeCategory.icon && <activeCategory.icon size={26} />}
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {activeCategory.name}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-primary)] rounded-xl transition-all cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {activeCategory.items?.map(item => (
                    <div key={item} className="glass-card p-5 border border-[var(--border-color)]/50 hover:border-primary-500/30 transition-colors">
                      <h4 className="text-base font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {item}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed pl-3.5">
                        {skillDescriptions[item] || `Extensively utilized ${item} to build robust solutions and optimize workflows.`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
