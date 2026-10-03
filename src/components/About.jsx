import Section, { Reveal } from './Section'

const facts = [
  { label: 'Based in', value: 'Seattle, WA' },
  { label: 'Education', value: 'B.S. Microbiology, UC San Diego' },
  { label: 'Focus', value: 'Cell therapy PD, MSAT, tech transfer' },
  { label: 'Modalities', value: 'CAR-T, TCR, NK, B cell' },
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
              I'm a cell therapy manufacturing leader with 10+ years in process development, MSAT,
              and client program management across autologous and allogeneic CAR-T, TCR, NK, and
              B cell programs.
            </p>
            <p>
              I started programming to teach: helping students in Armenia get access to computer
              science they couldn't get otherwise. That grew into building AI-powered tools for my
              own field, where biotech and software meet.
            </p>
            <p>
              Today I design automation that streamlines manufacturing workflows, build AI-assisted
              GMP document tools, and ship mobile apps on the side.
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
