# FS Horizon Radar Static Version

This is the simpler replacement package.

## Why this is easier
- No Next.js
- No TypeScript
- No build step
- Much easier to deploy on Vercel
- Safe fallback data if the API is unavailable

## Before uploading
Open `index.html` and replace:
`PASTE_RAILWAY_URL_HERE`
with your Railway public URL, for example:
`https://your-service.up.railway.app`

## Upload to GitHub
Upload the contents of this folder to a new repo, or replace the contents of your current frontend repo.

## Deploy on Vercel
When importing to Vercel:
- Framework preset: Other
- Root directory: the folder containing `index.html`

