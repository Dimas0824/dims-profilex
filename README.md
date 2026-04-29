# dims-profilex

Halaman profil sederhana untuk tugas Cloud Computing, dibangun dengan Next.js (App Router).

## Requirements

- Node.js 22.12.0
- npm 10+

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Lint, Test, Build

```bash
npm run lint
npm run test
npm run build
```

## Docker

```bash
docker build -t dims-profilex .
docker run --rm -p 3000:3000 dims-profilex
```

## CI Flow

- PR/push akan menjalankan lint, test, dan build.
- Build image dijalankan untuk branch `main`.
