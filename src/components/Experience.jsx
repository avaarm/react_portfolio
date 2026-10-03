import Section, { Reveal } from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="A decade in cell and gene therapy.">
      <ol className="border-t border-line">
        {experience.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.05}>
            <li className="grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-8 border-b border-line">
              <div className="font-mono text-xs text-ink-muted space-y-1 pt-1">
                <p className="text-ink-soft">{exp.period.replace(' - ', ' – ')}</p>
                <p>{exp.location}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{exp.role.replace(' - ', ', ')}</h3>
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
    </Section>
  )
}
