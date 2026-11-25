import { cafeInfo } from '@/lib/cafe-info';

// Public browser key for the Google Maps Embed API.
const GOOGLE_MAPS_BROWSER_KEY = 'AIzaSyBmvJph4LmrbtW7skeczzpBIyb9WWzFKo4';

export function CafeMap() {
  const query = `${cafeInfo.name}, ${cafeInfo.streetAddress}, ${cafeInfo.postalCode} ${cafeInfo.city}, ${cafeInfo.country}`;
  const url = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(GOOGLE_MAPS_BROWSER_KEY)}&q=${encodeURIComponent(query)}&zoom=16&language=it`;
  return (
    <div className="inner mt-12 overflow-hidden rounded-md border border-border">
      <iframe
        title="Posizione di Caffè Friuli — Corso della Repubblica 299, Latina"
        src={url}
        className="h-[350px] w-full border-0 sm:h-[420px]"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}