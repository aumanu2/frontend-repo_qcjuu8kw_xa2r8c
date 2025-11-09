import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neural Graph Viz',
    description: 'Interactive network visualization with WebGL and force-directed layout.',
    link: '#',
  },
  {
    title: 'LLM Tooling Suite',
    description: 'Evaluation harness and prompt pipelines for production agents.',
    link: '#',
  },
  {
    title: 'Edge AI Dashboard',
    description: 'Real-time metrics and controls for distributed inference.',
    link: '#',
  },
  {
    title: 'Generative UI Kit',
    description: 'Composable patterns for AI-first product interfaces.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white text-black dark:bg-black dark:text-white">
      {/* PROJECTS SECTION START */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light tracking-tight md:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 p-6 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
            >
              <div className="flex min-h-[140px] flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 text-xs uppercase tracking-widest text-black/60 transition group-hover:translate-x-0.5 group-hover:text-black dark:text-white/60 dark:group-hover:text-white">
                  View →
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply blur-2xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: 'radial-gradient(600px circle at 0 0, rgba(0,0,0,0.08), transparent 40%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
      {/* PROJECTS SECTION END */}
    </section>
  );
}
