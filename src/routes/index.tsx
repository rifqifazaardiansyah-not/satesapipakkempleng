import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Flame, MapPin, Phone, Instagram, Clock, Star, Utensils,
  Heart, Users, Award, Truck, Sparkles, ChevronRight,
} from "lucide-react";
import heroSatay from "@/assets/hero-satay.jpg";
import satayPlate from "@/assets/satay-plate.jpg";
import grillMaster from "@/assets/grill-master.jpg";
import satayVariety from "@/assets/satay-variety.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Sate Sapi Pak Kempleng — Sate Sapi Legendaris Khas Ungaran" },
      {
        name: "description",
        content:
          "Sate Sapi Pak Kempleng — warisan kuliner legendaris dari Ungaran. Daging sapi empuk, resep keluarga turun-temurun, dibakar dengan arang tradisional.",
      },
      { property: "og:title", content: "Sate Sapi Pak Kempleng — Legenda Kuliner Ungaran" },
      { property: "og:description", content: "Resep keluarga turun-temurun. Daging empuk, aroma arang, cita rasa autentik." },
      { property: "og:image", content: heroSatay },
    ],
  }),
});

function Ornament({ label }: { label: string }) {
  return (
    <div className="ornamental-divider mb-4 text-xs uppercase tracking-[0.3em]">
      <Sparkles className="h-3 w-3" />
      <span>{label}</span>
      <Sparkles className="h-3 w-3" />
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2 text-cream">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/60 bg-charcoal/40 backdrop-blur">
              <Flame className="h-5 w-5 text-[var(--gold)]" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg text-[var(--cream)]">Pak Kempleng</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]">Est. Ungaran</div>
            </div>
          </a>
          <nav className="hidden gap-8 text-sm text-[var(--cream)]/80 md:flex">
            <a href="#tentang" className="hover:text-[var(--gold)]">Tentang</a>
            <a href="#menu" className="hover:text-[var(--gold)]">Menu</a>
            <a href="#keunggulan" className="hover:text-[var(--gold)]">Keunggulan</a>
            <a href="#kontak" className="hover:text-[var(--gold)]">Kontak</a>
          </nav>
          <Button asChild className="hidden md:inline-flex bg-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/90">
            <a href="#kontak">Pesan Sekarang</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroSatay}
          alt="Sate sapi dibakar di atas bara arang"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_40/0.85)] via-[oklch(0.18_0.02_40/0.55)] to-[oklch(0.18_0.02_40/0.95)]" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--charcoal)]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[var(--gold)] backdrop-blur">
              <Flame className="h-3 w-3" /> Warisan Kuliner Sejak Generasi
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-[var(--cream)] text-balance md:text-7xl lg:text-8xl">
              Sate Sapi <span className="italic text-[var(--gold)]">Legendaris</span> Khas Ungaran
            </h1>
            <p className="mt-8 max-w-xl text-lg text-[var(--cream)]/85 md:text-xl">
              Resep keluarga turun-temurun, daging sapi pilihan yang empuk, dibakar perlahan di atas
              bara arang. Dicintai pelanggan setia lintas generasi.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/90 shadow-warm">
                <a href="#kontak">Pesan Sekarang <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[var(--cream)]/40 bg-transparent text-[var(--cream)] hover:bg-[var(--cream)]/10">
                <a href="#menu">Lihat Menu</a>
              </Button>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-[var(--cream)]/15 pt-8 text-[var(--cream)]">
              {[
                { k: "3+", v: "Generasi" },
                { k: "10K+", v: "Pelanggan Setia" },
                { k: "100%", v: "Resep Asli" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-[var(--gold)] md:text-4xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="tentang" className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={grillMaster}
              alt="Pak Kempleng membakar sate di atas tungku arang"
              width={1024}
              height={1280}
              loading="lazy"
              className="rounded-lg shadow-warm"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg border border-[var(--gold)]/40 bg-card p-5 shadow-soft md:block">
              <div className="font-display text-3xl text-primary">Sejak 1970</div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Warung Asli Ungaran</div>
            </div>
          </div>

          <div>
            <Ornament label="Tentang Kami" />
            <h2 className="font-display text-4xl text-foreground md:text-5xl">
              Sebuah Cerita yang Dibakar di Atas Bara Arang
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sate Sapi Pak Kempleng lahir dari dapur kecil di Ungaran, diwariskan dari generasi ke
              generasi tanpa pernah mengubah resepnya. Setiap tusuk sate adalah hasil pemilihan
              daging terbaik, bumbu rempah yang ditumbuk sendiri, dan kesabaran panggangan arang
              yang tak tergantikan.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Award, t: "Warisan Keluarga", d: "Resep otentik turun-temurun yang dijaga keasliannya." },
                { icon: Utensils, t: "Daging Pilihan", d: "Hanya bagian terempuk dari sapi pilihan." },
                { icon: Flame, t: "Bara Arang Tradisional", d: "Aroma khas yang tidak bisa ditiru kompor modern." },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gold)]/15 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TARGET MARKET */}
      <section className="relative bg-[var(--secondary)] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Ornament label="Untuk Siapa" />
          <h2 className="mx-auto max-w-2xl font-display text-4xl text-foreground md:text-5xl text-balance">
            Dicintai dari Pelanggan Setia hingga Pelancong yang Singgah
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, t: "Pelanggan Setia", d: "Mereka yang sudah datang sejak kecil." },
              { icon: Users, t: "Keluarga", d: "Tempat berkumpul lintas generasi." },
              { icon: MapPin, t: "Wisatawan Kuliner", d: "Pemburu cita rasa otentik nusantara." },
              { icon: Truck, t: "Pelancong Ungaran", d: "Singgah, pulang membawa kenangan." },
            ].map((c) => (
              <div key={c.t} className="paper-card p-8 text-left transition hover:-translate-y-1 hover:shadow-warm">
                <c.icon className="h-7 w-7 text-primary" />
                <div className="mt-5 font-display text-xl">{c.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UVP */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <Ornament label="Mengapa Pak Kempleng" />
              <h2 className="font-display text-4xl text-foreground md:text-5xl text-balance">
                Yang Membuat Sate Ini Tidak Bisa Dilupakan
              </h2>
            </div>
            <p className="text-muted-foreground md:text-lg">
              Bukan sekadar makanan, melainkan kenangan yang dibakar di atas arang dan disajikan
              dengan ketulusan keluarga.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Resep Turun-Temurun", d: "Diwariskan tanpa pernah diubah, sejak generasi pertama." },
              { n: "02", t: "Daging Premium Empuk", d: "Pemilihan dan pemotongan teliti agar lumer di mulut." },
              { n: "03", t: "Rasa Otentik", d: "Bumbu kacang dengan kekayaan rasa khas Jawa." },
              { n: "04", t: "Reputasi Legendaris", d: "Nama yang dibicarakan turun-temurun di Ungaran." },
            ].map((u) => (
              <div key={u.n} className="group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition hover:border-[var(--gold)]">
                <div className="font-display text-5xl text-[var(--gold)]/40 group-hover:text-[var(--gold)]">{u.n}</div>
                <div className="mt-6 font-display text-xl">{u.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{u.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative overflow-hidden bg-[var(--charcoal)] py-24 text-[var(--cream)] md:py-32">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-ember)" }} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="ornamental-divider mb-4 text-xs uppercase tracking-[0.3em]">
              <Sparkles className="h-3 w-3" />
              <span>Menu Unggulan</span>
              <Sparkles className="h-3 w-3" />
            </div>
            <h2 className="font-display text-4xl text-[var(--cream)] md:text-5xl">Sajian Khas dari Dapur Kami</h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { img: satayPlate, t: "Sate Sapi", p: "Rp 25.000", d: "Daging sapi pilihan, empuk dan kaya rempah." },
              { img: satayVariety, t: "Sate Koyor", p: "Rp 22.000", d: "Tekstur lembut khas, favorit pelanggan setia." },
              { img: heroSatay, t: "Sate Jeroan", p: "Rp 20.000", d: "Kombinasi sempurna untuk pecinta cita rasa kuat." },
              { img: grillMaster, t: "Pelengkap Nusantara", p: "Rp 10.000", d: "Lontong, gule, dan sambal kacang otentik." },
            ].map((m) => (
              <div key={m.t} className="group overflow-hidden rounded-lg border border-[var(--cream)]/10 bg-[var(--charcoal)]/40 backdrop-blur">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.t} width={800} height={1000} loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <div className="font-display text-xl text-[var(--cream)]">{m.t}</div>
                    <div className="text-sm text-[var(--gold)]">{m.p}</div>
                  </div>
                  <p className="mt-2 text-sm text-[var(--cream)]/70">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="keunggulan" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Ornament label="Keunggulan" />
            <h2 className="font-display text-4xl text-foreground md:text-5xl text-balance">
              Lima Alasan Setiap Tusuk Begitu Istimewa
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Utensils, t: "Daging Empuk" },
              { icon: Flame, t: "Aroma Arang" },
              { icon: MapPin, t: "Lokasi Strategis" },
              { icon: Heart, t: "Rasa Otentik" },
              { icon: Users, t: "Pelanggan Lintas Generasi" },
            ].map((a) => (
              <div key={a.t} className="paper-card flex flex-col items-center p-8 text-center transition hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-warm text-[var(--cream)]">
                  <a.icon className="h-6 w-6" />
                </div>
                <div className="mt-5 font-display text-base">{a.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL */}
      <section className="bg-[var(--secondary)] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Ornament label="Hadir Secara Digital" />
              <h2 className="font-display text-4xl text-foreground md:text-5xl text-balance">
                Warisan Tradisional, Mudah Dijangkau Hari Ini
              </h2>
              <p className="mt-6 text-muted-foreground md:text-lg">
                Kami hadir di mana pun Anda mencari. Dari pencarian Google hingga pesan antar online,
                cita rasa legendaris Ungaran tetap sampai ke meja makan Anda.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, t: "Google Maps", d: "Mudah ditemukan di setiap cabang." },
                { icon: Truck, t: "Pesan Antar Online", d: "GoFood, GrabFood, ShopeeFood." },
                { icon: Instagram, t: "Instagram & TikTok", d: "Cerita dan momen tiap hari." },
                { icon: Sparkles, t: "Branding Kuliner", d: "Identitas kuat yang dipercaya." },
              ].map((d) => (
                <div key={d.t} className="paper-card p-6">
                  <d.icon className="h-6 w-6 text-primary" />
                  <div className="mt-4 font-display text-lg">{d.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Ornament label="Kata Mereka" />
            <h2 className="font-display text-4xl text-foreground md:text-5xl text-balance">
              Suara dari Pelanggan Setia Kami
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { n: "Bu Siti Rahmawati", c: "Semarang", t: "Sejak kecil saya makan sate Pak Kempleng. Rasanya nggak pernah berubah, selalu juara." },
              { n: "Pak Budi Santoso", c: "Yogyakarta", t: "Setiap lewat Ungaran wajib mampir. Dagingnya empuk, bumbu kacangnya nendang." },
              { n: "Mas Aditya Pratama", c: "Jakarta", t: "Sate paling otentik yang pernah saya cicipi. Pulang bawa oleh-oleh tiga porsi!" },
            ].map((t) => (
              <figure key={t.n} className="paper-card flex h-full flex-col p-8">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-6 flex-1 font-display text-lg italic leading-relaxed text-foreground">
                  “{t.c && t.t}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-medium">{t.n}</div>
                  <div className="text-sm text-muted-foreground">{t.c}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="bg-[var(--charcoal)] py-24 text-[var(--cream)] md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Ornament label="Kunjungi Kami" />
              <h2 className="font-display text-4xl text-[var(--cream)] md:text-5xl text-balance">
                Datang, Cicipi, dan Jadi Bagian dari Cerita Kami
              </h2>
              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[var(--gold)]" />
                  <div>
                    <div className="font-display text-lg">Cabang Utama</div>
                    <div className="text-sm text-[var(--cream)]/70">Jl. Jenderal Sudirman, Ungaran, Kabupaten Semarang, Jawa Tengah</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 text-[var(--gold)]" />
                  <div>
                    <div className="font-display text-lg">Jam Buka</div>
                    <div className="text-sm text-[var(--cream)]/70">Setiap hari · 10.00 – 22.00 WIB</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[var(--gold)]" />
                  <div>
                    <div className="font-display text-lg">WhatsApp</div>
                    <div className="text-sm text-[var(--cream)]/70">+62 812 3456 7890</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Instagram className="mt-1 h-5 w-5 text-[var(--gold)]" />
                  <div>
                    <div className="font-display text-lg">Sosial Media</div>
                    <div className="text-sm text-[var(--cream)]/70">@satepakkempleng</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/90">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Chat WhatsApp</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[var(--cream)]/30 bg-transparent text-[var(--cream)] hover:bg-[var(--cream)]/10">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer">Buka di Google Maps</a>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-[var(--cream)]/15">
              <img src={satayPlate} alt="Sajian sate sapi lengkap" width={1024} height={1024} loading="lazy"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden py-28 md:py-36">
        <img src={heroSatay} alt="" aria-hidden width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.18_0.02_40/0.82)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-[var(--cream)]">
          <Sparkles className="mx-auto h-6 w-6 text-[var(--gold)]" />
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
            Rasakan Cita Rasa <span className="italic text-[var(--gold)]">Legendaris</span> Khas Ungaran
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--cream)]/80">
            Datang ke cabang terdekat atau pesan sekarang juga. Satu tusuk, sejuta kenangan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[var(--gold)] text-[var(--charcoal)] hover:bg-[var(--gold)]/90">
              <a href="#kontak">Kunjungi Cabang</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[var(--cream)]/40 bg-transparent text-[var(--cream)] hover:bg-[var(--cream)]/10">
              <a href="https://wa.me/6281234567890">Pesan Sekarang</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[var(--charcoal)] py-10 text-center text-sm text-[var(--cream)]/60">
        © {new Date().getFullYear()} Sate Sapi Pak Kempleng · Ungaran, Jawa Tengah
      </footer>
    </div>
  );
}
