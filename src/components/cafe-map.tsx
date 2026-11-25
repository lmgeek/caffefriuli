import { cafeInfo } from "@/lib/cafe-info";

export function CafeMap() {
  const query = `${cafeInfo.name}, ${cafeInfo.streetAddress}, ${cafeInfo.postalCode} ${cafeInfo.city}, ${cafeInfo.country}`;
  // Public Google Maps embed: no API key or domain restriction required.
  const url = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=16&hl=it`;
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
