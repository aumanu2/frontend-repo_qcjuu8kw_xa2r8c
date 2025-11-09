import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Hero() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-white text-black dark:bg-black dark:text-white overflow-hidden"
      aria-label="Hero"
    >
      {/* 3D Spline Scene */}
      <div className="absolute inset-0" aria-hidden="true">
        <Spline
          scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80 dark:from-black/60 dark:via-transparent dark:to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6">
        {/* Minimal top bar */}
        <div className="fixed top-0 left-0 right-0 mx-auto max-w-6xl px-6">
          <div className="mt-6 flex items-center justify-between rounded-full border border-black/10 bg-white/70 p-2 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
            <button
              onClick={() => scrollToId('home')}
              className="px-4 py-2 text-sm font-medium tracking-wide hover:opacity-70"
            >
              Portfolio
            </button>
            <nav className="flex items-center gap-2 text-sm">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="rounded-full px-3 py-1.5 tracking-wide text-black/80 transition hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle theme"
                className="ml-2 rounded-full border border-black/10 px-3 py-1.5 text-xs uppercase tracking-widest hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
              >
                {dark ? 'Dark' : 'Light'}
              </button>
            </nav>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* HERO SECTION START */}
          <h1 className="font-light tracking-tight text-4xl sm:text-5xl md:text-6xl">
            Building ideas that connect.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/70 dark:text-white/70">
            A modern, minimalist portfolio with a focus on clarity, balance, and subtle motion.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => scrollToId('projects')}
              className="rounded-full border border-black px-5 py-2 text-sm tracking-wide transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              View Projects
            </button>
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm tracking-wide text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
          {/* HERO SECTION END */}
        </motion.div>

        <motion.button
          onClick={() => scrollToId('about')}
          className="absolute bottom-10 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-widest backdrop-blur-md hover:opacity-80 dark:border-white/10 dark:bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Scroll
          <ArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  );
}
