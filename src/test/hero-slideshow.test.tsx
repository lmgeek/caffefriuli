import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import { HeroSlideshow } from '@/components/hero-slideshow';

afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals(); });

it('changes the image after exactly 7 seconds and supports manual navigation', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: false }));
  vi.useFakeTimers();
  const { container } = render(<HeroSlideshow />);
  const active = () => container.querySelector('[data-slide-active="true"]')?.getAttribute('src');
  const first = active();
  act(() => vi.advanceTimersByTime(6999));
  expect(active()).toBe(first);
  act(() => vi.advanceTimersByTime(1));
  expect(active()).not.toBe(first);
  fireEvent.click(screen.getByRole('button', { name: 'Immagine precedente' }));
  expect(active()).toBe(first);
  fireEvent.click(screen.getByRole('button', { name: 'Immagine successiva' }));
  expect(active()).not.toBe(first);
});

it('allows pausing automatic changes', () => {
  vi.stubGlobal('matchMedia', () => ({ matches: false }));
  vi.useFakeTimers();
  const { container } = render(<HeroSlideshow />);
  const first = container.querySelector('[data-slide-active="true"]')?.getAttribute('src');
  fireEvent.click(screen.getByRole('button', { name: 'Pausa presentazione' }));
  act(() => vi.advanceTimersByTime(14000));
  expect(container.querySelector('[data-slide-active="true"]')?.getAttribute('src')).toBe(first);
});