# cPanel Server Deployment Guide (Urdu/English)

## Server Configuration (Screenshot se):
- **Application Root:** `/home/ietmalay/iet`
- **Application URL:** `ietmalaysia.com/development`
- **Node.js Version:** 20.20.0
- **Application Startup File:** `app.js`
- **Application Mode:** Development

---

## Step-by-Step Deployment Process:

### Step 1: Local Build (Optional - ya server par build karein)

```bash
# Dependencies install karein
npm install

# Production build banayein
npm run build
```

**Note:** Agar server par build karna hai, to Step 3 ke baad server par ye commands run karein.

---

### Step 2: Files Prepare Karein

1. **Node_modules exclude karein** - Server par install hoga
2. **.next folder include karein** - Production build ke liye zaroori hai
3. **.env files check karein** - Environment variables ke liye

---

### Step 3: Files Upload Karein (FTP/cPanel File Manager)

**Upload karne wali files/folders:**
```
✓ app/
✓ components/
✓ hooks/
✓ lib/
✓ public/
✓ styles/
✓ .next/          (agar locally build kiya hai)
✓ app.js          (NEW - server startup file)
✓ next.config.mjs
✓ package.json
✓ package-lock.json (ya pnpm-lock.yaml)
✓ tsconfig.json
✓ postcss.config.mjs
✓ components.json
```

**Exclude karne wali:**
```
✗ node_modules/   (server par install hoga)
✗ .git/
✗ .next/          (agar server par build karein to)
```

**Upload Location:** `/home/ietmalay/iet/`

---

### Step 4: cPanel me Configuration

1. **cPanel me Node.js section me jayein**
2. **Application Root:** `iet` (already set hai)
3. **Application Startup File:** `app.js` (already set hai)
4. **Node.js Version:** `20.20.0` (already set hai)

---

### Step 5: Server par Dependencies Install

**Option A: cPanel Terminal se (Recommended)**
```bash
# Virtual environment activate karein
source /home/ietmalay/nodevenv/iet/20/bin/activate

# Application directory me jayein
cd /home/ietmalay/iet

# Dependencies install karein
npm install --production
```

**Option B: cPanel "Run NPM Install" button use karein**
- "Run NPM Install" button click karein

---

### Step 6: Build (Agar server par build karna hai)

```bash
# Virtual environment activate karein
source /home/ietmalay/nodevenv/iet/20/bin/activate

# Application directory me jayein
cd /home/ietmalay/iet

# Build karein
npm run build
```

---

### Step 7: Environment Variables (Agar zaroorat ho)

cPanel me "Environment Variables" section me:
- **ADD VARIABLE** button click karein
- Variables add karein (e.g., `NODE_ENV=production`)

---

### Step 8: Application Start

1. **RESTART** button click karein
2. Ya **STOP APP** phir **RESTART** karein

---

### Step 9: Check Application

Browser me open karein: `https://ietmalaysia.com/development`

---

## Troubleshooting:

### Issue: Application start nahi ho rahi
- **Solution:** Logs check karein - "Passenger log file" me dekh sakte hain
- Log path: `/home/ietmalay/dev`

### Issue: Dependencies error
- **Solution:** Server par `npm install` dobara run karein

### Issue: Build error
- **Solution:** Server par Node.js version check karein (20.20.0 honi chahiye)
- `npm run build` manually run karein aur errors check karein

### Issue: Port/URL issues
- **Solution:** cPanel automatically port handle karta hai, app.js me PORT variable use ho raha hai

---

## Important Notes:

1. **Production Mode:** Agar production me deploy karna hai, to:
   - Application mode ko "Production" change karein
   - Environment variable: `NODE_ENV=production` add karein

2. **File Permissions:** Ensure proper permissions:
   ```bash
   chmod 755 /home/ietmalay/iet
   ```

3. **Next.js Standalone:** Agar chahiye, to `next.config.mjs` me standalone mode enable karein:
   ```js
   output: 'standalone'
   ```

---

## Quick Commands Summary:

```bash
# Virtual environment activate
source /home/ietmalay/nodevenv/iet/20/bin/activate

# Directory change
cd /home/ietmalay/iet

# Install dependencies
npm install --production

# Build (agar zaroorat ho)
npm run build

# Check if app is running
ps aux | grep node
```

---

**Good Luck! 🚀**

