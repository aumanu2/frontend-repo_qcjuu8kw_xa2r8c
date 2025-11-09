import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white text-black dark:bg-black dark:text-white">
      {/* CONTACT SECTION START */}
      <div className="mx-auto max-w-3xl px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-light tracking-tight md:text-4xl"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-sm leading-relaxed text-black/70 dark:text-white/70"
        >
          Prefer email? Send a note and I’ll get back shortly.
        </motion.p>

        <form
          className="mt-8 grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form));
            const mailto = `mailto:hello@example.com?subject=${encodeURIComponent(
              data.name ? `[Portfolio] Message from ${data.name}` : '[Portfolio] Message'
            )}&body=${encodeURIComponent(`${data.message || ''}\n\nFrom: ${data.email || ''}`)}`;
            window.location.href = mailto;
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="name"
              placeholder="Your name"
              className="w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-black dark:border-white/20 dark:placeholder:text-white/40 dark:focus:border-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-black dark:border-white/20 dark:placeholder:text-white/40 dark:focus:border-white"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-black/40 focus:border-black dark:border-white/20 dark:placeholder:text-white/40 dark:focus:border-white"
          />
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-black/60 dark:text-white/60">
              Or reach out: <a className="underline hover:opacity-80" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a> ·{' '}
              <a className="underline hover:opacity-80" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>{' '}·{' '}
              <a className="underline hover:opacity-80" href="mailto:hello@example.com">Email</a>
            </div>
            <button
              type="submit"
              className="rounded-full border border-black px-5 py-2 text-sm tracking-wide transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* CONTACT SECTION END */}
    </section>
  );
}
