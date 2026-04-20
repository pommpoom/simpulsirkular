import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  Leaf,
  MapPin,
  Recycle,
  Route,
  ShieldCheck,
  Sprout,
} from 'lucide-react';

const stats = [
  { value: '150 kg', label: 'Limbah terselamatkan', icon: Leaf, tone: 'bg-emerald-100 text-emerald-700' },
  { value: '12 titik', label: 'UMKM tergabung', icon: MapPin, tone: 'bg-amber-100 text-amber-700' },
  { value: '< 10 menit', label: 'Waktu isi formulir', icon: Clock3, tone: 'bg-sky-100 text-sky-700' },
];

const steps = [
  {
    title: 'Lapor dengan detail yang jelas',
    description: 'Isi kategori, estimasi berat, dan lokasi agar tim bisa langsung menilai kelayakan pickup.',
  },
  {
    title: 'Kami cocokkan ke mitra terdekat',
    description: 'Data limbah diteruskan ke pengolah yang paling relevan, dari maggot hingga kompos lokal.',
  },
  {
    title: 'Pickup lebih teratur',
    description: 'Alur yang rapi membantu mengurangi penumpukan limbah dan memudahkan tindak lanjut.',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="relative rounded-[36px] border border-white/70 bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] backdrop-blur md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-28 rounded-t-[36px] bg-gradient-to-r from-amber-100/70 via-transparent to-emerald-100/70" />
          <div className="floating-orb absolute -right-8 top-14 h-24 w-24 rounded-full bg-emerald-200/30 blur-2xl" />
          <div className="floating-orb-delayed absolute bottom-8 right-28 h-20 w-20 rounded-full bg-amber-200/35 blur-2xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="pulse-ring inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <Sprout className="h-4 w-4" />
                Solusi regenerasi tanah Surakarta
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--brand-deep)] sm:text-5xl lg:text-6xl">
                Pelaporan limbah organik yang terasa lebih tenang, jelas, dan mudah ditindaklanjuti.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                SimpulSirkular membantu UMKM menyalurkan sisa makanan dan material organik ke mitra
                pengolah lokal, tanpa alur yang membingungkan.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/lapor"
                  className="button-glow group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--brand)] px-7 py-4 text-lg font-bold text-white transition hover:bg-[var(--brand-deep)]"
                >
                  <Recycle className="h-5 w-5" />
                  Saya ingin setor limbah
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/bursa"
                  className="card-lift inline-flex items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-white/80 px-7 py-4 text-lg font-bold text-[var(--brand-deep)] transition hover:bg-white"
                >
                  <MapPin className="h-5 w-5" />
                  Lihat bursa pakan
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
                <span className="card-lift rounded-full bg-white/80 px-4 py-2">Pickup lebih terarah</span>
                <span className="card-lift rounded-full bg-white/80 px-4 py-2">Input lebih singkat</span>
                <span className="card-lift rounded-full bg-white/80 px-4 py-2">Cocok untuk mobile</span>
              </div>
            </div>

            <div className="relative">
              <div className="card-lift rounded-[30px] border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-lg">
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <article
                        key={stat.label}
                        className="card-lift rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm"
                      >
                        <div className={`inline-flex rounded-2xl p-3 ${stat.tone}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-3xl font-black tracking-tight text-[var(--foreground)]">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-[28px] bg-[var(--brand-deep)] p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                        Alur minggu ini
                      </p>
                      <h2 className="mt-2 text-2xl font-black">65% target pickup tercapai</h2>
                    </div>
                    <ShieldCheck className="h-8 w-8 text-emerald-200" />
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[65%] rounded-full bg-[var(--accent)] transition-all duration-700 hover:w-[72%]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-emerald-100">
                    Fokus kami adalah membuat pelaporan cepat dipahami dan mudah diteruskan ke mitra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-lift rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand)]">Cara kerja</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--brand-deep)]">
              Tiga langkah yang lebih mudah dipahami
            </h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <article key={step.title} className="card-lift rounded-3xl border border-[var(--line)] bg-[var(--surface-strong)] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)] text-sm font-black text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--foreground)]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="card-lift rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(47,122,79,0.09),rgba(255,255,255,0.82))] p-6 shadow-[var(--shadow)] md:p-8">
            <div className="flex items-center gap-3 text-[var(--brand-deep)]">
              <Route className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-[0.24em]">Mengapa lebih nyaman?</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <article className="card-lift rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Fokus pada tugas utama</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Pengguna diarahkan ke satu aksi utama lebih dulu, jadi tidak perlu menebak langkah berikutnya.
                </p>
              </article>
              <article className="card-lift rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Kontras lebih lembut</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Warna dan jarak antar elemen dibuat lebih santai di mata, terutama saat dibuka cukup lama.
                </p>
              </article>
              <article className="card-lift rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Kartu informasi ringkas</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Angka penting dan status proses muncul lebih cepat tanpa membuat layar terasa padat.
                </p>
              </article>
              <article className="card-lift rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--foreground)]">Mobile lebih tertata</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Tombol, card, dan blok teks ditumpuk secara natural agar tetap nyaman dipakai dari ponsel.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
