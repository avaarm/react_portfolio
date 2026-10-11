import Section, { Reveal } from './Section'
import { ArrowUpRight } from 'lucide-react'
import { experience, community } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="A decade in cell and gene therapy.">
      <ol className="border-t border-line">
        {experience.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.05}>
            <li className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 border-b border-line">
              <div className="font-mono text-xs text-ink-muted space-y-1 pt-1">
                <p className="text-ink-soft">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{exp.role}</h3>
                <p className="mt-1 text-accent text-sm">{exp.company}</p>
                <ul className="mt-4 space-y-2 max-w-3xl">
                  {exp.highlights.map(h => (
                    <li key={h} className="relative pl-5 text-sm text-ink-soft leading-relaxed">
                      <span className="absolute left-0 top-[0.6em] w-2 h-px bg-ink-muted" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-16 grid md:grid-cols-[200px_1fr] gap-4 md:gap-10">
        <h3 className="font-mono text-xs text-ink-muted tracking-wider pt-1">Community</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {community.map(c => (
            <div key={c.org} className="p-6 rounded-2xl border border-line bg-surface-raised">
              <p className="font-mono text-xs text-ink-muted">{c.period}</p>
              <h4 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{c.org}</h4>
              <p className="text-sm text-accent">{c.role}</p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.description}</p>
              {c.link && (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm text-ink-soft hover:text-ink transition-colors"
                >
                  {c.link.replace('https://', '')} <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
