# Deployment Steps for Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit changes:
```bash
git commit -m "Initial commit - Scoutripper trekking gear rental platform"
```

4. Create a new repository on GitHub and push:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite framework
5. Click "Deploy"
6. Done! Your site will be live in ~2 minutes

### Option B: Using Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

## Project Configuration

The project includes:
- ✅ `vercel.json` - Proper SPA routing configuration
- ✅ `.gitignore` - Excludes node_modules, dist, and .env files
- ✅ `package.json` - All dependencies defined
- ✅ Clean codebase - No unnecessary files

## Important Notes

- No environment variables needed for basic deployment
- All routing handled client-side via React Router
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite (auto-detected)

## Post-Deployment

Your app will be available at:
- `https://your-project-name.vercel.app`
- Custom domain can be added in Vercel dashboard

## Troubleshooting

If build fails:
1. Check Vercel build logs
2. Ensure all dependencies are in `package.json` 
3. Test local build: `npm run build`
4. Test local preview: `npm run preview`
