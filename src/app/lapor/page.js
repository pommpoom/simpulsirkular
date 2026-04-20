"use client"; // Wajib ditulis di baris paling atas untuk komponen yang punya form/interaksi

import { useState } from 'react';
import { CircleAlert, LoaderCircle, MapPin, Package, SendHorizontal } from 'lucide-react';

export default function LaporLimbah() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Nanti di sini kita masukkan fungsi untuk kirim data ke Database/Backend
    setTimeout(() => {
      alert("Berhasil! Data limbahmu sudah masuk ke bursa.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[32px] border border-white/70 bg-[linear-gradient(160deg,rgba(47,122,79,0.95),rgba(30,86,56,0.95))] p-7 text-white shadow-[var(--shadow)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold">
              <Package className="h-4 w-4" />
              Form setor limbah
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight">
              Isi sekali, lalu biarkan tim menindaklanjuti.
            </h1>
            <p className="mt-4 text-base leading-8 text-emerald-50/90">
              Form ini dirapikan agar informasi yang paling penting langsung terlihat dan lebih cepat diisi.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Yang perlu disiapkan</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-white/90">
                  <li>Kategori limbah yang paling mendekati</li>
                  <li>Perkiraan berat dalam kilogram</li>
                  <li>Alamat pickup atau patokan lokasi</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 h-5 w-5 text-amber-200" />
                  <p className="text-sm leading-7 text-white/90">
                    Semakin jelas alamat dan berat, semakin mudah untuk dicocokkan ke mitra pengolah terdekat.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="rounded-[32px] border border-white/70 bg-[var(--surface)] p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black tracking-tight text-[var(--brand-deep)]">Formulir pelaporan</h2>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--muted)]">
                Masukkan detail sisa makanan atau material organik dari tempat usahamu. Susunannya kami buat lebih
                sederhana supaya cepat dipahami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-[var(--foreground)]">Kategori limbah</label>
                  <select
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-[var(--foreground)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    required
                  >
                    <option value="">Pilih kategori yang paling sesuai</option>
                    <option value="ampas_kopi">Ampas kopi</option>
                    <option value="sisa_makanan">Sisa makanan campur</option>
                    <option value="sayur_buah">Sisa sayur dan buah</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[var(--foreground)]">Estimasi berat</label>
                  <div className="relative">
                    <Package className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted)]" />
                    <input
                      type="number"
                      min="1"
                      placeholder="Misal: 5"
                      className="w-full rounded-2xl border border-[var(--line)] bg-white py-3.5 pl-12 pr-4 text-[var(--foreground)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[var(--foreground)]">Kesiapan pickup</label>
                  <select
                    className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-[var(--foreground)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    required
                  >
                    <option value="">Pilih waktu siap diambil</option>
                    <option value="hari_ini">Hari ini</option>
                    <option value="besok">Besok</option>
                    <option value="fleksibel">Fleksibel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[var(--foreground)]">Alamat pengambilan</label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-[var(--muted)]" />
                  <textarea
                    rows="4"
                    placeholder="Tuliskan alamat lengkap, nama tempat usaha, atau patokan lokasi..."
                    className="w-full rounded-2xl border border-[var(--line)] bg-white py-3.5 pl-12 pr-4 text-[var(--foreground)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
                Data ini masih bersifat simulasi UI. Saat backend siap, tombol kirim bisa langsung dihubungkan ke database.
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-lg font-bold text-white transition ${
                  loading ? 'bg-gray-400' : 'bg-[var(--brand)] hover:bg-[var(--brand-deep)]'
                }`}
              >
                {loading ? (
                  <>
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                    Memproses data...
                  </>
                ) : (
                  <>
                    <SendHorizontal className="h-5 w-5" />
                    Siarkan ke bursa maggot
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
