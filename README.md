# Future Care Companion

https://github.com/josephzai63-boop/excellent-future-care.git

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://happy-future-bot.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/28f451f3-49db-4e2f-ae65-2f299a17ccaa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Host Africa static hosting

The build prerenders the homepage, about, contact, services index and every service detail page. Run `npm run build`, then upload the **contents** of `.output/public` to the Host Africa website's `public_html` directory. Keep `.htaccess`, `robots.txt` and `sitemap.xml` in the uploaded files.

The contact form still saves enquiries and sends its email from the Lovable-hosted backend; a static website cannot safely hold the Resend connection or write to the enquiries database. On Host Africa, the form calls `https://happy-future-bot.lovable.app/api/public/contact`. The allowed website addresses are `excellentfutureltd.com` and `www.excellentfutureltd.com` (plus the Lovable preview and published addresses). If the live site uses a different domain, add that exact HTTPS address to `ALLOWED_ORIGINS` in `src/routes/api/public/contact.ts`, publish the backend change, then rebuild and upload the static files.

Publish the Lovable app after changing the contact service. Then rebuild the static pages and upload `.output/public`; this keeps the form's saved enquiries and Resend notices working from Host Africa.
