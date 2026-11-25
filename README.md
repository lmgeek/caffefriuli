# Caffè Friuli

Website for Caffè Friuli in Latina, built as a single-page TanStack Start app with section anchors.

## Development

You need Node.js 22.12+ and Bun (or npm).

```sh
bun install
bun run dev
```

With npm:

```sh
npm install
npm run dev
```

## Build

```sh
bun run build
```

The build produces a Nitro `node-server` output in `.output/`, ready to run with Node (for example on Dokploy):

```sh
node .output/server/index.mjs
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
