import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SLIDE_INTERVAL = 7000;
const slides = [
  '/assets/friuli-slide-0.jpg',
  '/assets/friuli-slide-1.jpg',
  '/assets/friuli-slide-7.jpg',
  '/assets/friuli-slide-2.jpg',
  '/assets/friuli-slide-8.jpg',
  '/assets/friuli-slide-4.jpg',
  '/assets/friuli-slide-9.jpg',
  '/assets/friuli-slide-5.jpg',
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) setPlaying(false);
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % slides.length), SLIDE_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [index, playing]);

  return <>
    {slides.map((slide, position) => (
      <img key={slide} src={slide} alt={position === index ? 'Immagine di Caffè Friuli fornita per la copertina' : ''}
        aria-hidden={position !== index} data-slide-active={position === index}
        className={`hero-photo transition-opacity duration-1000 motion-reduce:transition-none ${position === index ? 'opacity-100' : 'opacity-0'}`}
        fetchPriority={position === 0 ? 'high' : 'auto'} loading={position < 2 ? 'eager' : 'lazy'} />
    ))}
    <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-7 sm:right-8" role="group" aria-label="Controlli immagini della copertina">
      <span className="mr-2 min-w-10 text-center text-xs tabular-nums text-primary-foreground" aria-live={playing ? 'off' : 'polite'}>{index + 1} / {slides.length}</span>
      <Button variant="outline" size="icon" className="size-11 rounded-full border-primary-foreground/50 bg-espresso/70 text-primary-foreground hover:bg-gold hover:text-espresso" aria-label="Immagine precedente" title="Immagine precedente" onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}><ChevronLeft /></Button>
      <Button variant="outline" className="h-11 rounded-full border-primary-foreground/50 bg-espresso/70 px-4 text-xs text-primary-foreground hover:bg-gold hover:text-espresso" aria-pressed={playing} aria-label={playing ? 'Pausa presentazione' : 'Riprendi presentazione'} title={playing ? 'Disattiva cambio automatico' : 'Attiva cambio automatico'} onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play />}<span className="hidden sm:inline">Automatico: {playing ? 'sì' : 'no'}</span></Button>
      <Button variant="outline" size="icon" className="size-11 rounded-full border-primary-foreground/50 bg-espresso/70 text-primary-foreground hover:bg-gold hover:text-espresso" aria-label="Immagine successiva" title="Immagine successiva" onClick={() => setIndex((current) => (current + 1) % slides.length)}><ChevronRight /></Button>
    </div>
  </>;
}