"use client";

import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BarChart3,
  Clock3,
  Leaf,
  MapPin,
  Package,
  Recycle,
  ShieldCheck,
  TreeDeciduous,
  TrendingUp,
} from 'lucide-react';

const weeklyData = [
  { day: 'Sen', kg: 12, height: 'h-24', tone: 'bg-emerald-400' },
  { day: 'Sel', kg: 18, height: 'h-36', tone: 'bg-emerald-500' },
  { day: 'Rab', kg: 15, height: 'h-28', tone: 'bg-emerald-400' },
  { day: 'Kam', kg: 25, height: 'h-48', tone: 'bg-[var(--brand)]' },
  { day: 'Jum', kg: 20, height: 'h-40', tone: 'bg-emerald-500' },
  { day: 'Sab', kg: 30, height: 'h-56', tone: 'bg-[var(--brand-deep)]' },
  { day: 'Min', kg: 10, height: 'h-20', tone: 'bg-emerald-300' },
];

const summaryCards = [
  {
    label: 'Limbah tersalurkan',
    value: '125 kg',
    detail: 'Naik 18% dari pekan lalu',
    icon: Package,
    tone: 'bg-sky-100 text-sky-700',
  },
  {
    label: 'Emisi metana dicegah',
    value: '8.2 kg',
    detail: 'Setara 34 kantong organik terselamatkan',
    icon: TreeDeciduous,
    tone: 'bg-emerald-100 text-emerald-700',
  },
  {
    label: 'Target mingguan',
    value: '85%',
    detail: 'Tinggal satu pickup lagi untuk menutup target',
    icon: TrendingUp,
    tone: 'bg-amber-100 text-amber-700',
  },
];

const activitySteps = [
  {
    title: 'Setoran terbaru siap diproses',
    description: 'Tiga laporan baru sudah masuk dan menunggu penjadwalan pickup berikutnya.',
    icon: Recycle,
  },
  {
    title: 'Mitra terdekat sudah dicocokkan',
    description: 'Sistem memprioritaskan rute dengan jarak paling efisien untuk pickup organik.',
    icon: MapPin,
  },
  {
    title: 'Pantau dan lanjutkan dari satu tempat',
    description: 'Dari dashboard ini kamu bisa lanjut setor limbah atau cek bursa tanpa kehilangan konteks.',
    icon: ShieldCheck,
  },
];

export default function Dashboard() {
  return (
    <div className="overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="relative rounded-[36px] border border-white/70 bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] backdrop-blur md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-28 rounded-t-[36px] bg-gradient-to-r from-emerald-100/70 via-transparent to-amber-100/70" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
                <Leaf className="h-4 w-4" />
                Ringkasan kontribusi SimpulSirkular
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--brand-deep)] sm:text-5xl">
                Dashboard yang selaras dengan alur utama, jadi semua langkah terasa nyambung.
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Halo, Erlang. Dari sini kamu bisa melihat progres setoran, capaian mingguan, dan langsung lanjut
                ke pelaporan atau bursa tanpa berpindah ke pengalaman yang terasa berbeda.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/lapor"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--brand)] px-7 py-4 text-lg font-bold text-white transition hover:bg-[var(--brand-deep)]"
                >
                  <Recycle className="h-5 w-5" />
                  Lanjut setor limbah
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/bursa"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-white/80 px-7 py-4 text-lg font-bold text-[var(--brand-deep)] transition hover:bg-white"
                >
                  <MapPin className="h-5 w-5" />
                  Cek bursa pakan
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
                <span className="rounded-full bg-white/80 px-4 py-2">Statistik 7 hari</span>
                <span className="rounded-full bg-white/80 px-4 py-2">Rute pickup lebih jelas</span>
                <span className="rounded-full bg-white/80 px-4 py-2">Terhubung ke semua halaman inti</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[30px] border border-[var(--line)] bg-[var(--surface-strong)] p-6 shadow-lg">
                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm sm:col-span-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                          Total poin hijau
                        </p>
                        <p className="mt-2 text-4xl font-black tracking-tight text-[var(--foreground)]">2.450 XP</p>
                      </div>
                      <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      Konsistensi setor limbahmu membantu sistem membuat pickup makin efisien dari minggu ke minggu.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
                    <div className="inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-3xl font-black tracking-tight text-[var(--foreground)]">4x</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Pickup terselesaikan pekan ini</p>
                  </article>

                  <article className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
                    <div className="inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-3xl font-black tracking-tight text-[var(--foreground)]">92%</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Laporan dinilai lengkap saat masuk</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.label}
                className="rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-[var(--shadow)] backdrop-blur"
              >
                <div className={`inline-flex rounded-2xl p-3 ${card.tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.24em] text-[var(--muted)]">{card.label}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--brand-deep)]">{card.value}</h2>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{card.detail}</p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/70 bg-white/75 p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
            <div className="flex items-center gap-3 text-[var(--brand-deep)]">
              <BarChart3 className="h-6 w-6" />
              <p className="text-sm font-bold uppercase tracking-[0.24em]">Aktivitas 7 hari</p>
            </div>
            <div className="mt-4 flex items-end justify-between gap-3 rounded-[28px] border border-[var(--line)] bg-[var(--surface-strong)] px-4 pb-4 pt-10">
              {weeklyData.map((item) => (
                <div key={item.day} className="group flex flex-1 flex-col items-center">
                  <div className="mb-2 text-xs font-bold text-[var(--brand)] opacity-0 transition-opacity group-hover:opacity-100">
                    {item.kg} kg
                  </div>
                  <div
                    className={`w-full max-w-[42px] rounded-t-[18px] transition-transform duration-300 group-hover:-translate-y-1 ${item.height} ${item.tone}`}
                  />
                  <span className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4 rounded-[28px] bg-[var(--brand-deep)] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Status minggu ini</p>
                <h3 className="mt-2 text-2xl font-black">Performa pickup tetap stabil dan naik di akhir pekan</h3>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[var(--brand-deep)] transition hover:bg-emerald-50"
              >
                Kembali ke beranda
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(47,122,79,0.09),rgba(255,255,255,0.82))] p-6 shadow-[var(--shadow)] md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand)]">Alur terhubung</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--brand-deep)]">
              Dashboard ini sekarang mengikuti ritme halaman utama
            </h2>
            <div className="mt-6 space-y-4">
              {activitySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="rounded-3xl bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand)] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-[var(--brand)]">0{index + 1}</span>
                          <h3 className="text-lg font-bold text-[var(--foreground)]">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/lapor"
                className="rounded-3xl border border-[var(--line)] bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand)]">Aksi utama</p>
                <p className="mt-2 text-xl font-black text-[var(--brand-deep)]">Buat laporan baru</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Langsung masuk ke form yang sudah dirapikan dan siap dipakai.
                </p>
              </Link>
              <Link
                href="/bursa"
                className="rounded-3xl border border-[var(--line)] bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand)]">Langkah berikutnya</p>
                <p className="mt-2 text-xl font-black text-[var(--brand-deep)]">Lihat bursa pasok</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Pantau preview titik pasok organik tanpa keluar dari alur utama aplikasi.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
