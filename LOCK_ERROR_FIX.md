# "Can't acquire lock for app: iet" Error Fix

## Problem:
Server par application lock acquire nahi kar pa raha.

## Solutions:

### Solution 1: Stop Application First (Recommended)
1. cPanel me **"STOP APP"** button click karein
2. 10-15 seconds wait karein
3. Phir **"RESTART"** ya **"Run NPM Install"** try karein

### Solution 2: Terminal se Process Kill
cPanel Terminal me ye commands run karein:

```bash
# Virtual environment activate
source /home/ietmalay/nodevenv/iet/20/bin/activate

# Application directory
cd /home/ietmalay/iet

# Node processes check karein
ps aux | grep node

# Agar koi process running hai, kill karein
pkill -f node
# ya specific process ID se:
# kill -9 <PID>
```

### Solution 3: Lock File Delete (Agar Solution 1 & 2 kaam na kare)
```bash
# Lock files check karein
cd /home/ietmalay/iet
ls -la | grep -i lock

# Passenger lock file delete (agar exist kare)
rm -f .passenger_lock
rm -f tmp/pids/passenger.pid
rm -f tmp/restart.txt
```

### Solution 4: Application Restart via Terminal
```bash
# Virtual environment activate
source /home/ietmalay/nodevenv/iet/20/bin/activate

# Application directory
cd /home/ietmalay/iet

# Stop any running processes
pkill -f "node.*app.js" || true

# Wait a bit
sleep 3

# Start application manually (test ke liye)
node app.js
```

### Solution 5: cPanel me Application Recreate
1. **DESTROY** button click karein (careful - yeh app delete kar dega)
2. Phir dobara create karein
3. Files upload karein
4. Install dependencies

---

## Step-by-Step Fix (Try in order):

### Step 1: Stop Application
- cPanel me **"STOP APP"** button click karein
- Wait 15-20 seconds

### Step 2: Check Running Processes
Terminal me:
```bash
ps aux | grep -i "iet\|node\|passenger" | grep -v grep
```

### Step 3: Kill Processes (agar running hain)
```bash
pkill -f node
pkill -f passenger
```

### Step 4: Clear Lock Files
```bash
cd /home/ietmalay/iet
find . -name "*.lock" -delete
find . -name "*.pid" -delete
rm -rf tmp/pids/* 2>/dev/null
```

### Step 5: Restart Application
- cPanel me **"RESTART"** button click karein
- Ya terminal se: `node app.js` (background me)

---

## Prevention:
- Hamesha **"STOP APP"** pehle click karein before making changes
- Multiple tabs me same app ko simultaneously modify na karein
- Terminal se manually app start karte waqt cPanel se stop karein

---

## If Nothing Works:
1. Contact hosting support
2. Ya application destroy karke dobara create karein (last resort)

