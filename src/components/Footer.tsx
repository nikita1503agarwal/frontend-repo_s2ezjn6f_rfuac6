import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-white/10 text-sm text-zinc-600 dark:text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {year} Aurora Gallery. All rights reserved.</div>
        <nav className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Instagram', 'X'].map(l => (
            <a key={l} href="#" className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current hover:after:w-full after:transition-all after:duration-300">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
