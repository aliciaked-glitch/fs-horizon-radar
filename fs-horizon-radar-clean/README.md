# FS Horizon Radar Clean Restart Package

This is the full clean restart package for GitHub.

## What is inside
- `backend/` -> upload and deploy this to Railway
- `frontend/` -> upload and deploy this to Vercel

## Before deploying frontend
Open `frontend/index.html` and replace:
`PASTE_RAILWAY_URL_HERE`
with your Railway public domain, including `https://`

## Railway settings
- Root Directory: `backend`
- Generate public domain after deploy
- If asked for the app port when generating the domain, use `8000`

## Vercel settings
- Import the same GitHub repository
- Root Directory: `frontend`
- Framework preset: `Other`

## Important
You can upload this whole folder to GitHub exactly as it is.
