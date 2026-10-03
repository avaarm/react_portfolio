import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Section({ id, index, label, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`px-5 sm:px-8 py-20 md:py-28 border-t border-line ${className}`}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 mb-12 md:mb-16">
          <p className="font-mono text-xs text-ink-muted tracking-wider pt-2">
            <span className="text-accent">{index}</span> / {label}
          </p>
          <div>
            <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-[1.1] text-ink max-w-3xl">
              {title}
            </h2>
            {intro && <p className="mt-4 text-ink-soft max-w-2xl leading-relaxed">{intro}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
