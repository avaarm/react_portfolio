import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { GraduationCap, MapPin, FlaskConical, Code2 } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-widest mb-3">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Where science meets software
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-text-secondary leading-relaxed"
          >
            <p>
              I'm a cell therapy manufacturing leader with 10+ years of process development,
              MSAT, and client program management experience spanning autologous and allogeneic
              CAR-T, TCR, NK, and B cell modalities.
            </p>
            <p>
              My journey into programming began with a mission: creating access to tech for young
              Armenian women who don't have the opportunity to learn computer science. That
              passion evolved into building AI-powered tools that bridge biotech and software.
            </p>
            <p>
              Today I architect automation solutions that streamline manufacturing workflows,
              build intelligent document generation tools, and develop mobile applications --
              all while driving innovation in cell therapy manufacturing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: MapPin, label: 'Location', value: 'Seattle, WA' },
              { icon: GraduationCap, label: 'Education', value: 'B.S. Microbiology, UC San Diego' },
              { icon: FlaskConical, label: 'Specialty', value: 'Cell Therapy PD & MSAT' },
              { icon: Code2, label: 'Engineering', value: 'Full-Stack & AI/ML' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="p-4 rounded-xl border border-border-dim bg-surface-card backdrop-blur-sm hover:border-border-bright transition-colors"
              >
                <Icon size={18} className="text-accent mb-2" />
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-text-primary font-medium">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
