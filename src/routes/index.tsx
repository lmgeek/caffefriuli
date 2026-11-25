import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  Coffee,
  Sun,
  Heart,
  MapPin,
  Navigation,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { CafeMap } from "@/components/cafe-map";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { VisitCounter } from "@/components/visit-counter";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CafeHeader, sectionLinks } from "@/components/cafe-header";
import { cafeInfo, localBusiness } from "@/lib/cafe-info";
const title = "Caffè Friuli | Caffetteria nel Centro di Latina";
const description =
  "Scopri Caffè Friuli nel cuore di Latina. Il piacere del caffè italiano, la colazione e un'atmosfera accogliente per la tua pausa.";
export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});
const specialties = [
  {
    name: "Caffetteria",
    text: "Espresso, cappuccino e il piacere del vero caffè italiano.",
    image: "/assets/espresso.jpg",
    icon: Coffee,
  },
  {
    name: "Colazione",
    text: "Il momento più dolce per iniziare la giornata.",
    image: "/assets/cornetti.jpg",
    icon: Sun,
  },
  {
    name: "La tua pausa",
    text: "Un luogo accogliente per concedersi un momento di relax.",
    image: "/assets/cappuccino.jpg",
    icon: Heart,
  },
];
function Index() {
  return (
    <>
      <CafeHeader />
      <main>
        <section id="home" className="hero text-primary-foreground">
          <HeroSlideshow />
          <div className="hero-shade" />
          <div className="inner">
            <div className="hero-copy reveal">
              <p className="eyebrow mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-gold" />
                Nel cuore di Latina
              </p>
              <h1>
                Caffè Friuli<span className="sr-only"> — </span>
                <span className="mt-2 block">Il piacere di</span>
                <span className="block italic text-gold">ogni momento.</span>
              </h1>
              <p className="hero-intro mt-7 text-primary-foreground/80">
                Nel cuore di Latina, il gusto autentico del caffè
                <br className="hidden sm:block" /> e il piacere di sentirsi a casa.
              </p>
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-gold px-6 text-xs font-semibold text-espresso hover:bg-gold/90"
                >
                  <a href="#chi-siamo">
                    Scopri il nostro mondo
                    <ArrowRight />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-primary-foreground/45 bg-transparent px-6 text-xs text-primary-foreground hover:bg-primary-foreground hover:text-espresso"
                >
                  <a href="#dove-siamo">
                    <MapPin />
                    Vieni a trovarci
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <a
            href="#chi-siamo"
            aria-label="Vai a Chi siamo"
            className="hero-down hidden text-primary-foreground/60 sm:block"
          >
            <ArrowDown className="size-5" />
          </a>
        </section>
        <div className="flex min-h-[58px] items-center justify-center gap-5 border-b border-border bg-cream px-4 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:gap-12 sm:text-xs">
          <span>Un caffè, un sorriso</span>
          <span className="text-gold">✦</span>
          <span>Il tuo momento di pausa</span>
          <span className="hidden text-gold sm:block">✦</span>
          <span className="hidden sm:block">Autenticamente italiano</span>
        </div>
        <section id="chi-siamo" className="section">
          <div className="inner grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="relative pb-5 pr-5">
              <div className="absolute inset-5 rounded-full border border-gold/40" />
              <img
                src="/assets/locale.png"
                alt="Caffè Friuli: insegna, ingresso e tavolini esterni, nella foto fornita"
                loading="lazy"
                className="about-photo relative"
              />
              <div className="absolute bottom-0 right-0 bg-espresso px-6 py-5 text-primary-foreground">
                <Coffee className="mx-auto mb-2 size-6 text-gold" />
                <p className="display text-sm italic">La tua pausa, a Latina.</p>
              </div>
            </div>
            <div>
              <p className="eyebrow">Chi siamo</p>
              <h2 className="mt-4">
                Un piccolo piacere,
                <br />
                <span className="italic">ogni giorno.</span>
              </h2>
              <div className="my-6 h-px w-12 bg-gold" />
              <p className="body-copy">
                Ci sono momenti che meritano di essere vissuti con calma. Il profumo del caffè al
                mattino, una pausa tra un impegno e l'altro, il piacere di una chiacchierata.
              </p>
              <p className="body-copy mt-4">
                Nel centro di Latina, Caffè Friuli è un invito a rallentare e ritrovare il gusto
                delle cose semplici: una tazza calda, un'atmosfera accogliente e un momento tutto
                per te.
              </p>
              <p className="display mt-7 text-xl italic">Il bello di sentirsi a casa.</p>
            </div>
          </div>
        </section>
        <section id="specialita" className="section bg-cream">
          <div className="inner">
            <div className="text-center">
              <p className="eyebrow">Le nostre specialità</p>
              <h2 className="mt-4">A ogni momento, il suo piacere.</h2>
              <p className="body-copy mt-4">Piccoli rituali che rendono speciale la giornata.</p>
            </div>
            <div className="mt-11 grid gap-6 md:grid-cols-3">
              {specialties.map(({ name, text, image, icon: Icon }) => (
                <article key={name} className="specialty bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`Fotografia evocativa: ${name.toLowerCase()}`}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="px-7 pb-8 pt-6">
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-gold" />
                      <h3 className="text-2xl">{name}</h3>
                    </div>
                    <p className="body-copy mt-3">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="galleria" className="section">
          <div className="inner">
            <div className="mb-10 text-center">
              <p className="eyebrow">Ispirazioni di caffetteria</p>
              <h2 className="mt-4">Il gusto delle piccole cose.</h2>
            </div>
            <div className="gallery">
              <img
                className="big"
                src="/assets/hero-caffe-espresso.jpg"
                loading="lazy"
                alt="Tazzina di espresso con crema"
              />
              <img src="/assets/cornetti.jpg" loading="lazy" alt="Cornetti dorati" />
              <img
                src="/assets/espresso.jpg"
                loading="lazy"
                alt="Dettaglio di una tazza di caffè"
              />
              <img
                className="wide"
                src="/assets/cappuccino.jpg"
                loading="lazy"
                alt="Una tazza calda per una pausa caffè"
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Fotografie d'ispirazione, non del locale.
            </p>
          </div>
        </section>
        <section id="dove-siamo" className="section bg-cream">
          <div className="inner grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Dove siamo</p>
              <h2 className="mt-4">
                Ti aspettiamo
                <br />
                nel cuore di Latina.
              </h2>
              <p className="body-copy mt-5">
                Una pausa dal ritmo della città.
                <br />
                Il tuo prossimo momento di piacere è qui.
              </p>
              <div className="mt-7 flex items-center gap-3 text-gold">
                <MapPin className="size-5" />
                <span className="text-sm font-medium text-foreground">
                  Corso della Repubblica 299, 04100 Latina
                </span>
              </div>
            </div>
            <div className="border-l border-gold/40 pl-6 sm:pl-10">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h3 className="text-xl">Vieni a trovarci</h3>
                  <p className="text-sm text-muted-foreground">
                    {cafeInfo.streetAddress}, {cafeInfo.postalCode} Latina
                  </p>
                </div>
              </div>
              <div className="mt-7 flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h3 className="text-xl">Contatti</h3>
                  {cafeInfo.phones.map((t) => (
                    <a
                      key={t}
                      href={`tel:${t.replace(/\s/g, "")}`}
                      className="body-copy block hover:text-gold"
                    >
                      {t}
                    </a>
                  ))}
                  <a
                    href={`mailto:${cafeInfo.email}`}
                    className="body-copy flex items-center gap-2 hover:text-gold"
                  >
                    <Mail className="size-4" />
                    {cafeInfo.email}
                  </a>
                </div>
              </div>
              <div className="mt-7 flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-gold" />
                <div>
                  <h3 className="text-xl">Orari di apertura</h3>
                  <p className="body-copy mt-2 whitespace-pre-line">
                    {cafeInfo.openingHours || "Orari in aggiornamento"}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="h-12 rounded-full px-5 text-xs">
                  <a href={cafeInfo.mapsUrl} target="_blank" rel="noreferrer">
                    <Navigation />
                    Indicazioni stradali
                  </a>
                </Button>
                {cafeInfo.whatsappNumber ? (
                  <Button asChild variant="outline" className="h-12 rounded-full bg-transparent">
                    <a
                      href={`https://wa.me/${cafeInfo.whatsappNumber.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle />
                      WhatsApp
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    className="h-12 rounded-full bg-transparent text-xs"
                    title="Numero ufficiale da inserire"
                  >
                    <MessageCircle />
                    WhatsApp da configurare
                  </Button>
                )}
              </div>
            </div>
          </div>
          <CafeMap />
        </section>
      </main>
      <footer className="bg-espresso px-6 pb-6 pt-14 text-primary-foreground">
        <div className="inner">
          <div className="grid gap-9 pb-11 md:grid-cols-[1.5fr_1fr_1fr]">
            <a href="#home" className="flex items-center gap-4">
              <img
                src="/assets/logo.png"
                alt="Logo Caffè Friuli"
                loading="lazy"
                className="size-[76px] rounded-full"
              />
              <div>
                <p className="display text-2xl">Caffè Friuli</p>
                <p className="mt-2 text-xs text-primary-foreground/60">
                  Il piacere di ogni momento.
                </p>
              </div>
            </a>
            <nav
              aria-label="Navigazione footer"
              className="grid grid-cols-2 gap-4 text-xs text-primary-foreground/75"
            >
              {sectionLinks.map(([label, href]) => (
                <a href={href} key={href} className="hover:text-gold">
                  {label}
                </a>
              ))}
            </nav>
            <div>
              <p className="eyebrow">Restiamo in contatto</p>
              <div className="mt-4 flex gap-3">
                {[
                  { name: "Instagram", url: cafeInfo.instagramUrl, Icon: Instagram },
                  { name: "Facebook", url: cafeInfo.facebookUrl, Icon: Facebook },
                ].map(({ name, url, Icon }) =>
                  url ? (
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      key={name}
                      className="rounded-full border border-gold/60 hover:bg-gold hover:text-espresso"
                    >
                      <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icon />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="icon"
                      key={name}
                      disabled
                      aria-label={`${name}: link da configurare`}
                      title={`${name}: link da configurare`}
                      className="rounded-full border border-primary-foreground/30"
                    >
                      <Icon />
                    </Button>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-[10px] text-primary-foreground/50 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Caffè Friuli. Tutti i diritti riservati.</p>
            <p>Creato da TechCare-Latina Design</p>
            <VisitCounter />
            <p>
              {cafeInfo.legalDetails || "Informazioni legali da inserire"} ·{" "}
              {cafeInfo.privacyUrl ? (
                <a href={cafeInfo.privacyUrl}>Privacy Policy</a>
              ) : (
                "Privacy Policy da inserire"
              )}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
