import { useEffect, useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const sectionLinks = [['Chi siamo', '#chi-siamo'], ['Specialità', '#specialita'], ['Galleria', '#galleria'], ['Dove siamo', '#dove-siamo']] as const;
export function CafeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 20); update(); window.addEventListener('scroll', update, {passive:true}); return () => window.removeEventListener('scroll', update); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 text-primary-foreground transition-colors duration-300 ${scrolled || open ? 'bg-espresso/95 backdrop-blur-md' : 'bg-transparent'}`}>
    <nav aria-label="Navigazione principale" className="inner grid h-[88px] grid-cols-[minmax(0,1fr)_auto] items-center gap-8 px-6 md:flex md:justify-between">
      <a href="#home" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3"><img src="/assets/logo.png" alt="Logo originale Caffè Friuli" width="58" height="58" className="size-[58px] shrink-0 rounded-full" /><span className="display truncate text-[23px]">Caffè Friuli</span></a>
      <div className="hidden items-center gap-8 md:flex">{sectionLinks.map(([label,href]) => <a key={href} href={href} className="text-xs text-primary-foreground/85 hover:text-gold">{label}</a>)}</div>
      <Button asChild className="hidden h-10 rounded-full border border-gold/70 bg-transparent px-4 text-xs text-primary-foreground hover:bg-gold hover:text-espresso lg:inline-flex"><a href="#dove-siamo"><MapPin className="size-4"/>Vieni a trovarci</a></Button>
      <Button variant="ghost" size="icon" className="size-11 shrink-0 text-primary-foreground hover:bg-primary-foreground/10 md:hidden" aria-label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </nav>
    {open && <nav id="mobile-nav" aria-label="Menu mobile" className="border-t border-primary-foreground/10 px-6 pb-5 md:hidden">{sectionLinks.map(([label,href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-primary-foreground/10 py-4 text-lg">{label}</a>)}</nav>}
  </header>;
}
