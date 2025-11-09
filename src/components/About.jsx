import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white text-black dark:bg-black dark:text-white">
      {/* ABOUT SECTION START */}
      <div className="mx-auto max-w-4xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light tracking-tight md:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-base leading-7 text-black/70 dark:text-white/70"
        >
          I craft elegant, performant experiences at the intersection of design and systems.
          My work spans web apps, data visualizations, and intelligent interfaces. I value
          clarity, repeatability, and meaningful impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <p className="text-sm text-black/60 dark:text-white/60">
              Mission
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/80 dark:text-white/80">
              Build systems that scale thoughtfully, communicate clearly, and deliver value with
              minimalist aesthetics.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">
            <p className="text-sm text-black/60 dark:text-white/60">Focus</p>
            <p className="mt-2 text-sm leading-relaxed text-black/80 dark:text-white/80">
              Human-centered engineering, developer experience, and visual computation.
            </p>
          </div>
        </motion.div>
      </div>
      {/* ABOUT SECTION END */}
    </section>
  );
}
