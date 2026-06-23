import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-5 border-t border-[var(--border-color)]" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="text-lg font-bold gradient-text">Karthikeyan</span>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            Crafting digital experiences with passion
          </p>
        </div>
        <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
          © {new Date().getFullYear()} — Built with
          <Heart size={12} className="text-red-400 fill-red-400" />
          using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
