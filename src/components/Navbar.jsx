import Link from 'next/link';
import { Leaf, Recycle } from 'lucide-react';

const navLinks = [
  { href: '/lapor', label: 'Lapor Limbah' },
  { href: '/bursa', label: 'Bursa Pakan' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[rgba(244,241,232,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-lg shadow-emerald-900/10">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-[var(--brand-deep)]">SimpulSirkular</p>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                Alur limbah yang lebih tertata
              </p>
            </div>
          </Link>

          <Link
            href="/lapor"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] lg:hidden"
          >
            <Recycle className="h-4 w-4" />
            Lapor
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-white/80 hover:text-[var(--brand-deep)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lapor"
            className="hidden items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] lg:inline-flex"
          >
            <Recycle className="h-4 w-4" />
            Setor Limbah
          </Link>
        </div>
      </nav>
    </header>
  );
}
