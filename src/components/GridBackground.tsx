import { useTheme } from '../context/ThemeContext';

export default function GridBackground() {
  const { theme } = useTheme();

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${theme === 'dark' ? 'rgba(148, 163, 184, 0.06)' : 'rgba(0, 0, 0, 0.04)'} 1px, transparent 1px),
          linear-gradient(to bottom, ${theme === 'dark' ? 'rgba(148, 163, 184, 0.06)' : 'rgba(0, 0, 0, 0.04)'} 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
      }}
    />
  );
}
