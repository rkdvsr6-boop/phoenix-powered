# 🎓 CampusPulse — AI-Powered Campus Operating System

> **“One intelligent pulse for a safer, smarter and more connected campus.”**  
> *From everyday grievances to emergency response — connecting campus problems with campus action.*

---

## 🚀 Dev Server Quickstart (0.0.0.0 Multi-Device Support)

CampusPulse runs on a multi-device development server listening on `0.0.0.0:8080` (all network interfaces). This allows access from both the development PC and any mobile phone/tablet on the same Wi-Fi.

### 🌐 Access URLs:
- **Computer URL:** [**http://localhost:8080/**](http://localhost:8080/)
- **Phone / Wi-Fi URL:** [**http://10.10.186.31:8080/**](http://10.10.186.31:8080/)
  *(Connect your Android / iOS phone to the same Wi-Fi network and open `http://10.10.186.31:8080` in Chrome/Safari).*

---

### 💻 Starting the Server:
Run this command from the project directory:
```powershell
powershell -ExecutionPolicy Bypass -File "server.ps1"
```
Or simply double-click:
```bat
start_chrome.bat
```

---

### 🛡️ Windows Firewall Note (If Phone Cannot Connect):
If your Android phone fails to connect, Windows Defender Firewall may be blocking inbound traffic on port `8080`.
To allow access, run this command in **PowerShell as Administrator**:
```powershell
New-NetFirewallRule -DisplayName "CampusPulse Dev Server Port 8080" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow
```
Or allow PowerShell when prompted by the Windows Security alert on Private networks.

---

## 🔑 One-Click Demo Logins:
- 👨‍🎓 **Student Demo:** ID `STU1001` (Aryan Kashyap)
- 👨‍🏫 **Faculty Demo:** ID `FAC1001` (Dr. Ramesh Sharma)
- 👮 **Security Demo:** ID `SEC1001` (Officer Vikram Singh)

---

## 📱 Mobile & Cross-Browser Optimizations

1. **Android Chrome & iOS Safari Support:**
   - Full viewport scaling without horizontal scroll overflow.
   - Drawer sidebar with touch backdrop overlay (`.sidebar-overlay`).
   - 16px font sizes on form inputs preventing mobile auto-zoom.
   - Touch-friendly cards and buttons (>= 44px tap targets).
   - Safe `localStorage` wrappers preventing crashes in Incognito / Private tabs.

2. **Google Chrome PWA Capabilities:**
   - `manifest.json` and `sw.js` for standalone app installation.
   - One-click **"Chrome App"** button in the top navigation bar.

3. **No Hardcoded Localhost:**
   - All frontend navigation and resource paths use clean relative URLs.

---

## 🧭 Major Routes & Features Tested:
1. **Login:** Custom ID or 1-click role logins.
2. **Dashboard:** Personalized greeting, metrics, and incident status pills.
3. **Safety Radar:** Interactive campus map with color-coded pins, filters, and community confirmation.
4. **Report Issue:** Multi-step wizard with animated AI processing and automatic ticket generation.
5. **Complaint Tracking (`campusIssues`):** Full 6-stage lifecycle progress tracking.
6. **Campus Community:** Social feed with helpful counters, issue verification, and comments.
7. **Lost & Found:** "I Lost / I Found" with AI match comparisons and privacy protection.
8. **Parking & Traffic:** Live occupancy bars and quick hazard reporting.
9. **Student Planner:** AI study schedules, exam countdowns, and timetable parsing.
10. **Faculty Hub:** Syllabus progression milestones, schedule conflict detection, and calendar.
11. **Security Command Center:** Triage dashboard with alert actions (`Accept`, `Navigate`, `Mark Responding`, `Resolve`).
12. **Campus AI Chatbot:** Interactive assistant with suggested prompt chips and real-time guidance.
