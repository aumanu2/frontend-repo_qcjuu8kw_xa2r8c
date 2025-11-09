import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-['Inter','IBM Plex Sans',system-ui,sans-serif] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-black/10 bg-white/80 py-10 text-center text-xs text-black/60 backdrop-blur-md dark:border-white/10 dark:bg-black/60 dark:text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Your Name. Built with React, Tailwind & Spline. Minimalist BW aesthetic with subtle motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
