import Link from 'next/link';
import { ArrowRight, Clock3, MapPin, PackageCheck, Recycle } from 'lucide-react';

const supplyPoints = [
  {
    name: 'Pasar Gede',
    type: 'Sayur & buah',
    volume: '20-35 kg/hari',
  },
  {
    name: 'Kawasan Manahan',
    type: 'Sisa makanan matang',
    volume: '8-15 kg/hari',
  },
  {
    name: 'Banjarsari',
    type: 'Ampas kopi',
    volume: '5-10 kg/hari',
  },
];

export default function BursaPage() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-white/70 bg-[var(--surface)] p-8 shadow-[var(--shadow)] backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                <Clock3 className="h-4 w-4" />
                Bursa pakan sedang kami rapikan
              </span>
              <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-[var(--brand-deep)] sm:text-5xl">
                Titik pasok organik akan tampil lebih rapi di sini.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Untuk sementara, tim lapangan masih memprioritaskan input dari formulir pelaporan.
                Setelah data masuk, limbah akan dicocokkan dengan mitra pengolah terdekat.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/lapor"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--brand)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--brand-deep)]"
                >
                  <Recycle className="h-5 w-5" />
                  Lapor limbah sekarang
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--line)] bg-white/80 px-6 py-4 text-base font-semibold text-[var(--brand-deep)] transition hover:bg-white"
                >
                  Kembali ke beranda
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--surface-strong)] p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[var(--brand-deep)]">Contoh pasokan aktif</h2>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Preview
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {supplyPoints.map((point) => (
                  <article
                    key={point.name}
                    className="rounded-2xl border border-[var(--line)] bg-white px-5 py-4 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-[var(--foreground)]">{point.name}</h3>
                        <p className="mt-1 text-sm text-[var(--muted)]">{point.type}</p>
                      </div>
                      <MapPin className="mt-1 h-5 w-5 text-[var(--brand)]" />
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--brand-deep)]">
                      <PackageCheck className="h-4 w-4" />
                      {point.volume}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
