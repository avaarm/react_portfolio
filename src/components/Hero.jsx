import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { stats } from '../data'

const now = [
  { label: 'Currently', value: 'PD Scientist', sub: 'Fred Hutch, Seattle' },
  { label: 'Latest build', value: 'Birdy: Dream Life', sub: 'iOS app · React Native' },
  { label: 'Recent work', value: 'FOLR1 CAR T, Phase I', sub: 'Blood, 2025 · poster abstract' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/avaarm', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/armenuhi-avanesyan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:avaarm95@gmail.com', label: 'Email' },
]

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="top" className="relative px-5 sm:px-8 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/4 w-[640px] h-[640px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-end">
          <div>
            <motion.p {...fade(0)} className="font-mono text-xs text-ink-muted tracking-wider mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Seattle, WA · Open to new roles
            </motion.p>

            <motion.h1
              {...fade(0.08)}
              className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] text-ink"
            >
              Cell therapy scientist.
              <br />
              <span className="text-ink-muted">Software builder.</span>
            </motion.h1>

            <motion.p {...fade(0.16)} className="mt-7 text-lg md:text-xl text-ink-soft max-w-2xl leading-relaxed">
              I lead process development for CAR-T, TCR, and NK cell therapies, and I build the
              software that makes manufacturing easier to run: automation, GMP document tools,
              and mobile apps.
            </motion.p>

            <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-ink text-surface text-sm font-medium hover:bg-white transition-colors"
              >
                See my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-line-strong text-sm font-medium text-ink hover:bg-surface-hover transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-1 ml-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-hover transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.aside {...fade(0.32)} className="rounded-xl border border-line bg-surface-raised/80 backdrop-blur-sm">
            {now.map((item, i) => (
              <div key={item.label} className={`px-5 py-4 ${i > 0 ? 'border-t border-line' : ''}`}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-1.5">{item.label}</p>
                <p className="text-sm font-medium text-ink">{item.value}</p>
                <p className="text-xs text-ink-muted mt-0.5">{item.sub}</p>
              </div>
            ))}
          </motion.aside>
        </div>

        <motion.dl
          {...fade(0.4)}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-line"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`pt-6 pb-2 pr-4 ${i % 2 === 1 ? 'pl-4 md:pl-6 border-l border-line' : ''} ${i === 2 ? 'md:pl-6 md:border-l md:border-line' : ''}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
