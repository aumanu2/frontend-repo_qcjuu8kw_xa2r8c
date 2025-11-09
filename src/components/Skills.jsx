import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Data & ML',
    items: ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'LangChain'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Vite', 'Vercel', 'AWS'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-white text-black dark:bg-black dark:text-white">
      {/* SKILLS SECTION START */}
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light tracking-tight md:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
            >
              <h3 className="text-sm font-medium tracking-wide text-black/60 dark:text-white/60">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-black/80 dark:text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      {/* SKILLS SECTION END */}
    </section>
  );
}
