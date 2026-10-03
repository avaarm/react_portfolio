import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { Reveal } from './Section'

const links = [
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'armenuhi-avanesyan', href: 'https://linkedin.com/in/armenuhi-avanesyan' },
  { icon: GithubIcon, label: 'GitHub', value: 'avaarm', href: 'https://github.com/avaarm' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 sm:px-8 py-24 md:py-32 border-t border-line overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-ink-muted tracking-wider mb-6">
            <span className="text-accent">06</span> / Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] text-ink max-w-4xl">
            Working on cell therapy, biotech software, or both? Let's talk.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <a
            href="mailto:avaarm95@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-ink text-surface font-medium hover:bg-white transition-colors w-fit"
          >
            <Mail size={18} />
            avaarm95@gmail.com
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="flex flex-wrap gap-6">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-ink-soft hover:text-ink transition-colors"
              >
                <Icon size={18} />
                <span className="text-sm">{value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
