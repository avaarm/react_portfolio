import Section, { Reveal } from './Section'

const facts = [
  { label: 'Based in', value: 'Seattle, WA' },
  { label: 'Education', value: 'B.S. Microbiology & Immunology, UC San Diego' },
  { label: 'Focus', value: 'PD, MSAT, tech transfer, IND/CMC' },
  { label: 'Modalities', value: 'CAR-T, TCR, NK, B-cell, HSC' },
  { label: 'Builds with', value: 'React, React Native, Python, LLMs' },
]

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="Where the lab meets the codebase.">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <div className="hidden md:block" />
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <Reveal className="space-y-5 text-ink-soft leading-relaxed text-[1.0625rem]">
            <p>
              I've spent 10+ years moving cell and gene therapies from bench to clinic, across
              autologous and allogeneic CAR-T, TCR, NK, B-cell, and large-scale HSC programs. I've
              authored 15 IND submissions, including CMC sections and responses to FDA information
              requests.
            </p>
            <p>
              I started programming to teach. I spent three years as a senior TA in the University
              of Washington's full-stack bootcamp, and I founded Navak Academy, which translated the
              Django Girls tutorial into Armenian. That grew into building tools for my own field.
            </p>
            <p>
              Today I build automation that gives manufacturing leadership real-time visibility,
              AI-assisted GMP document tools, and mobile apps. Most of my work is translating
              between scientists, regulators, and engineers.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="border-t border-line">
              {facts.map(f => (
                <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 py-3.5 border-b border-line">
                  <dt className="font-mono text-xs text-ink-muted pt-0.5">{f.label}</dt>
                  <dd className="text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
