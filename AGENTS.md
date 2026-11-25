## Website architecture

- Keep the café website as a single index route with section anchors, as explicitly requested; no backend or additional pages are needed.
- Store official contact configuration and structured business data in a shared browser-safe module so unconfirmed details stay absent consistently.
- Serve uploaded and downloaded photography as static files from `public/assets/`; keep reusable section presentation in global semantic styles.
- Count visits through the free Abacus public counter, once per browser session; hide the counter on service failure rather than displaying invented totals.
- Render the location through Google Maps Embed using the public browser key and the verified address; no server lookup or invented coordinates are needed.
- Keep hero image rotation isolated from the fixed hero text; use a lightweight React timer and CSS crossfade with manual controls and reduced-motion support.
- Derive sitemap entries from required route staticData.sitemap decisions using the shared sitemap helper and server handler; omit lastmod without authoritative page timestamps.
