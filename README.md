# TRADIQPH Computer IT Services

Next.js website for [TRADIQPH Computer IT Services](https://github.com/tradiqph/tradiqphcomputers) — IT services, online store, and Xendit checkout.

## Features

- Multi-page site (Home, Services, Store, About, Contact)
- Coming Soon maintenance mode with admin preview login
- IT hardware store with cart
- Xendit payment integration (Payment Links)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

See [`.env.example`](.env.example) for `XENDIT_SECRET_KEY`, `XENDIT_WEBHOOK_TOKEN`, and `NEXT_PUBLIC_SITE_URL`.

### Admin Login (preview mode)

- URL: `/admin/login`
- Username: `admin`
- Password: `TradIQPH`

## Deploy

Build for production:

```bash
npm run build
npm start
```

Set environment variables on your host and configure the Xendit webhook to `https://your-domain.com/api/webhooks/xendit`.

## Author

**tradiqph** — [github.com/tradiqph](https://github.com/tradiqph)
