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

## Docker / Dokploy

The included `Dockerfile` builds the app and runs the Nitro Node server. In Dokploy, select
**Docker** as the build type, point it at this repository and expose port `3000`. No database,
secrets or build variables are required: all photography is served from `public/assets/` and the
map uses Google's public embed without an API key.

```sh
docker build -t caffefriuli .
docker run --rm -p 3000:3000 caffefriuli
```

`PORT` and `HOST` can be overridden by the deployment environment if needed.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
