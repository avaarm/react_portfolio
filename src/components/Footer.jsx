export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-ink-muted">
        <p>&copy; {new Date().getFullYear()} Armenuhi Avanesyan</p>
        <p>Seattle, WA</p>
      </div>
    </footer>
  )
}
