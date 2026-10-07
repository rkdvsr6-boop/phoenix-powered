/* ===================================================================
   CampusPulse — AI Campus Operating System
   Interactive Engine & Realistic Demo Data
   =================================================================== */

// Safe Storage Helpers (Cross-browser compatibility for Incognito / Safari / Restricted modes)
function safeGetStorage(key, fallback) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key) || fallback;
    }
  } catch (e) {}
  return fallback;
}

function safeSetStorage(key, value) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch (e) {}
}

// Storage Keys
const STORAGE_KEYS = {
  ACTIVE_USER: 'campuspulse_active_user',
  DEMO_USERS: 'campuspulse_demo_users',
  INCIDENTS: 'campuspulse_incidents',
  COMMUNITY: 'campuspulse_community',
  THEME: 'campuspulse_theme'
};

const DEFAULT_DEMO_USERS = [
  {
    id: 'DEMO-STU-1001',
    name: 'Aryan Kashyap',
    course: 'B.Tech CSE (AI)',
    year: '1st Year',
    section: 'Section 36',
    role: 'student',
    roleLabel: 'Student · B.Tech CSE (AI)',
    avatar: 'A'
  },
  {
    id: 'DEMO-STU-1002',
    name: 'Radhika',
    course: 'B.Tech CSE (AI)',
    year: '1st Year',
    section: 'Section 36',
    role: 'student',
    roleLabel: 'Student · B.Tech CSE (AI)',
    avatar: 'R'
  },
  {
    id: 'DEMO-SEC-1001',
    name: 'Officer Vikram Singh',
    course: 'Campus Security Command',
    year: 'Staff',
    section: 'Division 1',
    role: 'security',
    roleLabel: 'Security Command',
    avatar: 'V'
  },
  {
    id: 'DEMO-FAC-1001',
    name: 'Dr. Ramesh Sharma',
    course: 'Faculty · Computer Science Dept',
    year: 'Faculty',
    section: 'Cabin 304',
    role: 'faculty',
    roleLabel: 'Faculty · CS Dept',
    avatar: 'R'
  }
];

function loadSavedDemoUsers() {
  const raw = safeGetStorage(STORAGE_KEYS.DEMO_USERS, null);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return DEFAULT_DEMO_USERS;
}

function saveDemoUsers(users) {
  safeSetStorage(STORAGE_KEYS.DEMO_USERS, JSON.stringify(users));
}

function loadSavedActiveUser() {
  const raw = safeGetStorage(STORAGE_KEYS.ACTIVE_USER, null);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name) return parsed;
    } catch(e) {}
  }
  return null;
}

// Initial Default Incidents Database (Seeds)
const DEFAULT_INCIDENTS = [
  {
    id: 'inc1',
    code: 'CP-2026-081',
    title: 'Aggressive Dog',
    category: 'Animal Safety',
    icon: '🐕',
    location: 'Canteen Entrance',
    priority: 'High',
    reportedAt: '18 minutes ago',
    status: 'Assigned',
    assignedTo: 'Campus Security & Animal Control',
    reporterName: 'Aarav Mehta',
    reporterCourse: 'Student Council',
    description: 'Stray dog barking aggressively at students near the canteen main entrance. Potential safety hazard.',
    actionRequested: 'Animal control, Security assistance',
    timeline: ['Reported', 'AI Categorized', 'Assigned'],
    verifiedCount: 14,
    isVerified: false,
    mapCoords: { top: '54%', left: '17%' },
    filterCat: 'safety'
  },
  {
    id: 'inc2',
    code: 'CP-2026-047',
    title: 'Broken Streetlight',
    category: 'Infrastructure',
    icon: '💡',
    location: "Near Girls' Hostel Gate",
    priority: 'High',
    reportedAt: '1 hour ago',
    status: 'In Progress',
    assignedTo: 'Campus Maintenance & Electrical Team',
    reporterName: 'Priya Sharma',
    reporterCourse: 'Resident Block 4',
    description: 'Pathway lighting fixture pole #14 has broken wiring. Entire 40m pathway is completely dark at night.',
    actionRequested: 'Maintenance required, Urgent inspection',
    timeline: ['Reported', 'AI Categorized', 'Assigned', 'Action in Progress'],
    verifiedCount: 28,
    isVerified: true,
    mapCoords: { top: '32%', left: '75%' },
    filterCat: 'safety'
  },
  {
    id: 'inc3',
    code: 'CP-2026-039',
    title: 'Parking Congestion',
    category: 'Parking & Traffic',
    icon: '🚗',
    location: 'Gate 2 Parking Area',
    priority: 'Medium',
    reportedAt: '2 hours ago',
    status: 'Resolved',
    assignedTo: 'Ground Traffic Staff',
    reporterName: 'Rohan Verma',
    reporterCourse: 'Day Scholar',
    description: 'Heavy congestion during morning peak hours due to irregular two-wheeler parking blocking exit lane.',
    actionRequested: 'Traffic coordination',
    timeline: ['Reported', 'AI Categorized', 'Assigned', 'Action in Progress', 'Resolved', 'Verified'],
    verifiedCount: 9,
    isVerified: true,
    mapCoords: { top: '75%', left: '50%' },
    filterCat: 'parking'
  },
  {
    id: 'inc4',
    code: 'CP-2026-032',
    title: 'Sanitary Dispenser Empty',
    category: "Women's Safety & Facility",
    icon: '🧻',
    location: "Women's Washroom — Academic Block B",
    priority: 'High',
    reportedAt: '3 hours ago',
    status: 'Assigned',
    assignedTo: 'Housekeeping & Facilities Support',
    reporterName: 'Tanvi Nair',
    reporterCourse: 'B.Tech CSE',
    description: 'Sanitary pad vending machine in 2nd-floor washroom needs restock and coin validator check.',
    actionRequested: 'Cleaning & Restocking',
    timeline: ['Reported', 'AI Categorized', 'Assigned'],
    verifiedCount: 8,
    isVerified: false,
    mapCoords: { top: '36%', left: '68%' },
    filterCat: 'women'
  },
  {
    id: 'inc4w',
    code: 'CP-2026-032',
    title: 'Sanitary Dispenser Empty',
    category: "Women's Safety & Facility",
    icon: '🧻',
    location: "Women's Washroom — Block B",
    priority: 'High',
    reportedAt: '3 hours ago',
    status: 'Assigned',
    assignedTo: 'Facilities Support',
    reporterName: 'Tanvi Nair',
    reporterCourse: 'B.Tech CSE',
    description: 'Restock requested for sanitary napkin dispenser.',
    actionRequested: 'Refill required',
    timeline: ['Reported', 'AI Categorized', 'Assigned'],
    verifiedCount: 8,
    isVerified: false,
    mapCoords: { top: '36%', left: '68%' },
    filterCat: 'women'
  },
  {
    id: 'inc5',
    code: 'CP-2026-028',
    title: 'Lost University ID Card',
    category: 'Lost & Found',
    icon: '🪪',
    location: 'Central Library First Floor',
    priority: 'Low',
    reportedAt: '4 hours ago',
    status: 'Open',
    assignedTo: 'Campus Security Desk',
    reporterName: 'Aryan Kashyap',
    reporterCourse: 'B.Tech CSE (AI)',
    description: 'Green lanyard with ID card belonging to Aryan Kashyap STU1001. Left on reading desk #12.',
    actionRequested: 'Safe retrieval',
    timeline: ['Reported', 'AI Categorized'],
    verifiedCount: 3,
    isVerified: false,
    mapCoords: { top: '38%', left: '20%' },
    filterCat: 'lost'
  },
  {
    id: 'inc6',
    code: 'CP-2026-022',
    title: 'Reckless Driving Incident',
    category: 'Traffic & Safety',
    icon: '🚦',
    location: 'Main Road near Sports Arena',
    priority: 'Medium',
    reportedAt: '5 hours ago',
    status: 'In Progress',
    assignedTo: 'Security Patrol Unit 3',
    reporterName: 'Officer Vikram Singh',
    reporterCourse: 'Security Staff',
    description: 'White hatchback vehicle speeding over 45 km/h inside 15 km/h campus speed limit zone.',
    actionRequested: 'Investigation, Speed bump audit',
    timeline: ['Reported', 'AI Categorized', 'Assigned', 'Action in Progress'],
    verifiedCount: 16,
    isVerified: true,
    mapCoords: { top: '72%', left: '15%' },
    filterCat: 'infra'
  },
  {
    id: 'incR1',
    code: 'CP-2026-015',
    title: 'Blocked Pathway Cleared',
    category: 'Infrastructure',
    icon: '🚧',
    location: 'Academic Block Walkway',
    priority: 'Low',
    reportedAt: 'Yesterday',
    status: 'Resolved',
    assignedTo: 'Campus Maintenance',
    reporterName: 'Maintenance Team',
    reporterCourse: 'Facilities Staff',
    description: 'Fallen tree branches from overnight rain cleared and pathway opened for pedestrian traffic.',
    actionRequested: 'Maintenance completed',
    timeline: ['Reported', 'AI Categorized', 'Assigned', 'Action in Progress', 'Resolved', 'Verified'],
    verifiedCount: 42,
    isVerified: true,
    mapCoords: { top: '14%', left: '48%' },
    filterCat: 'resolved'
  },
  {
    id: 'incR2',
    code: 'CP-2026-012',
    title: 'Sports Complex Floodlight Fixed',
    category: 'Infrastructure',
    icon: '💡',
    location: 'Sports Complex Ground 2',
    priority: 'Low',
    reportedAt: '2 days ago',
    status: 'Resolved',
    assignedTo: 'Electrical Wing',
    reporterName: 'Electrical Wing',
    reporterCourse: 'Maintenance Staff',
    description: 'Replaced ballast and bulb on Mast 3. Evening practice sessions restored.',
    actionRequested: 'Maintenance completed',
    timeline: ['Reported', 'AI Categorized', 'Assigned', 'Action in Progress', 'Resolved', 'Verified'],
    verifiedCount: 31,
    isVerified: true,
    mapCoords: { top: '53%', left: '78%' },
    filterCat: 'resolved'
  }
];

function loadSavedIncidents() {
  const raw = safeGetStorage(STORAGE_KEYS.INCIDENTS, null);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  return DEFAULT_INCIDENTS;
}

function saveIncidents() {
  safeSetStorage(STORAGE_KEYS.INCIDENTS, JSON.stringify(state.incidents));
}

// Global State
const state = {
  theme: safeGetStorage('campuspulse_theme', 'dark'),
  currentUser: loadSavedActiveUser() || DEFAULT_DEMO_USERS[0],
  demoUsers: loadSavedDemoUsers(),
  activePage: 'dashboard',
  currentCategory: 'Safety',
  currentCategoryIcon: '🛡️',
  currentPriority: 'Medium',
  selectedActions: new Set(['Maintenance Required']),
  calDate: new Date(2026, 9, 1), // Oct 2026
  incidents: loadSavedIncidents(),

  // Community Posts
  communityPosts: [
    {
      id: 'cp1',
      author: 'Aarav Mehta',
      role: 'Student Council',
      avatar: 'AM',
      time: '25 min ago',
      tag: '📍 Campus Road',
      content: 'Main road near Block B is partially blocked due to tree maintenance. Please use the library pathway alternate route until 4:00 PM!',
      helpfulCount: 34,
      isHelpful: false,
      confirmCount: 12,
      isConfirmed: false,
      comments: [
        { author: 'Neha Gupta', text: 'Thanks for the heads up, saved me from being late for class!' },
        { author: 'Security Desk', text: 'Ground staff is on site. Pathway will clear by 3:30 PM.' }
      ]
    },
    {
      id: 'cp2',
      author: 'Priya Sharma',
      role: 'Resident Block 4',
      avatar: 'PS',
      time: '1 hour ago',
      tag: '💡 Infrastructure',
      content: 'Streetlight near the library entrance is working again! Huge thanks to maintenance team for fixing it within 2 hours of reporting.',
      helpfulCount: 56,
      isHelpful: true,
      confirmCount: 22,
      isConfirmed: true,
      comments: [
        { author: 'Maintenance Lead', text: 'Glad to help. New LED fixtures installed.' }
      ]
    },
    {
      id: 'cp3',
      author: 'Rohan Verma',
      role: 'Day Scholar',
      avatar: 'RV',
      time: '2 hours ago',
      tag: '🚗 Traffic & Parking',
      content: 'Parking near Gate 2 is crowded right now (~85% full). Head towards Gate 1 where more than 40 bays are still vacant.',
      helpfulCount: 29,
      isHelpful: false,
      confirmCount: 15,
      isConfirmed: false,
      comments: []
    },
    {
      id: 'cp4',
      author: 'Tanvi Nair',
      role: 'Student',
      avatar: 'TN',
      time: '3 hours ago',
      tag: '🔎 Lost & Found',
      content: 'Has anyone found a black leather wallet near the canteen? Has my university metro card and library slip.',
      helpfulCount: 18,
      isHelpful: false,
      confirmCount: 5,
      isConfirmed: false,
      comments: [
        { author: 'Campus AI Bot', text: 'Matching found! Check Lost & Found module — 1 item matches your description at security desk.' }
      ]
    }
  ],

  // Lost & Found Items
  lostFoundItems: [
    {
      id: 'lf1',
      type: 'lost',
      title: 'University ID Card',
      category: 'ID Card',
      location: 'Central Library',
      time: '4 hours ago',
      desc: 'Green lanyard with ID card STU1001. Left on 1st-floor desk.',
      icon: '🪪'
    },
    {
      id: 'lf2',
      type: 'found',
      title: 'ID Card — Library Gate',
      category: 'ID Card',
      location: 'Library Entrance Desk',
      time: '3 hours ago',
      desc: 'Student ID card submitted to counter by librarian.',
      icon: '🪪'
    },
    {
      id: 'lf3',
      type: 'lost',
      title: 'Black Leather Wallet',
      category: 'Wallet',
      location: 'Canteen Lawn',
      time: '6 hours ago',
      desc: 'Contains metro card and hostel room key #204.',
      icon: '👛'
    },
    {
      id: 'lf4',
      type: 'found',
      title: 'Earphones (White case)',
      category: 'Earphones',
      location: 'Sports Pavilion',
      time: '1 day ago',
      desc: 'Wireless bluetooth earphones found on bench near tennis court.',
      icon: '🎧'
    },
    {
      id: 'lf5',
      type: 'found',
      title: 'Engineering Mathematics Textbook',
      category: 'Books',
      location: 'Academic Block Room 204',
      time: 'Yesterday',
      desc: 'Higher Engineering Mathematics 8th Edition. Marked Unit 2.',
      icon: '📚'
    },
    {
      id: 'lf6',
      type: 'lost',
      title: 'Keychain with Bike Key',
      category: 'Keys',
      location: 'Gate 1 Parking Lot',
      time: 'Yesterday',
      desc: 'Silver Honda key with red fabric tag "Remove Before Flight".',
      icon: '🔑'
    }
  ],

  // Student Subjects & Schedule
  studentSubjects: ['Programming', 'Mathematics', 'Cyber Security', 'Engineering Design', 'English'],

  // Chat History
  chatMessages: [
    {
      sender: 'ai',
      text: `Hello! I'm **Campus AI**, your intelligent campus assistant. I can help you with:
• Reporting and tracking campus issues
• Creating personalized study plans
• Checking parking and traffic status
• Lost & Found assistance
• Safety information and guidance

What can I help you with today?`
    }
  ]
};

// ===================================================================
// CHROME PWA & SERVICE WORKER INTEGRATION
// ===================================================================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('chromeInstallBtn');
  if (btn) btn.classList.add('ready');
});

function installChromeApp() {
  if (deferredPrompt) {
    try {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult && choiceResult.outcome === 'accepted') {
          showToast('🎉 Chrome App Installed!', 'CampusPulse is now running as a dedicated Google Chrome App.');
        }
        deferredPrompt = null;
      }).catch(() => {
        deferredPrompt = null;
      });
    } catch (e) {
      deferredPrompt = null;
    }
  } else {
    showToast('🌐 Google Chrome Optimization', 'CampusPulse is optimized for Chrome! Click Chrome menu (⋮) → "Install CampusPulse" for a fullscreen desktop app experience.');
  }
}

try {
  if ('serviceWorker' in navigator && (window.isSecureContext || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('CampusPulse ServiceWorker active:', reg.scope);
      }).catch((err) => {
        console.log('CampusPulse ServiceWorker registration skipped:', err);
      });
    });
  }
} catch (e) {}

// ===================================================================
// INITIALIZATION & REAL-TIME REFRESH SYNC
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderIncidentCards();
  renderCampusIssues();
  renderLostFoundItems();
  renderCommunityFeed();
  renderSecurityAlerts();
  renderFacultyCalendar();
  bindRoleButtons();
  updateDashboardStats();

  // Check if a demo user is already logged in from previous session
  const savedActiveUser = loadSavedActiveUser();
  if (savedActiveUser && savedActiveUser.name) {
    setupUserSession(savedActiveUser, false);
  } else {
    // Show login screen
    const loginScr = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    if (loginScr) loginScr.classList.remove('hidden');
    if (mainApp) mainApp.classList.add('hidden');
  }

  // Cross-tab / Multi-device shared data sync
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEYS.INCIDENTS && e.newValue) {
      try {
        state.incidents = JSON.parse(e.newValue);
        renderIncidentCards();
        renderCampusIssues();
        renderSecurityAlerts();
        updateDashboardStats();
      } catch (err) {}
    }
    if (e.key === STORAGE_KEYS.DEMO_USERS && e.newValue) {
      try {
        state.demoUsers = JSON.parse(e.newValue);
        renderDemoUsersList();
      } catch (err) {}
    }
  });
});

// ===================================================================
// THEME MANAGEMENT
// ===================================================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const isLight = state.theme === 'light';
  syncThemeCheckboxes(isLight);
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  safeSetStorage('campuspulse_theme', state.theme);
  syncThemeCheckboxes(state.theme === 'light');
}

function syncThemeCheckboxes(isLight) {
  const tSb = document.getElementById('themeToggleSb');
  const tTop = document.getElementById('themeToggleTop');
  const tSet = document.getElementById('themeToggleSettings');
  if (tSb) tSb.checked = isLight;
  if (tTop) tTop.checked = isLight;
  if (tSet) tSet.checked = isLight;
}

// ===================================================================
// HACKATHON DEMO AUTHENTICATION & MULTI-USER SYSTEM
// ===================================================================
function bindRoleButtons() {
  const roleBtns = document.querySelectorAll('.role-selector .role-btn');
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.role-selector');
      if (container) {
        container.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      }
      btn.classList.add('active');
    });
  });
}

function quickFillDemo(name, course, year, section, role) {
  const nameInput = document.getElementById('demoFullName');
  const courseInput = document.getElementById('demoCourse');
  const yearInput = document.getElementById('demoYear');
  const secInput = document.getElementById('demoSection');

  if (nameInput) nameInput.value = name;
  if (courseInput) courseInput.value = course;
  if (yearInput) yearInput.value = year || '';
  if (secInput) secInput.value = section || '';

  const roleBtns = document.querySelectorAll('#loginScreen .role-selector .role-btn');
  roleBtns.forEach(btn => {
    if (btn.dataset.role === role) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  handleDemoLogin();
}

function handleDemoLogin() {
  const nameInput = document.getElementById('demoFullName');
  const courseInput = document.getElementById('demoCourse');
  const yearInput = document.getElementById('demoYear');
  const secInput = document.getElementById('demoSection');
  const activeRoleBtn = document.querySelector('#loginScreen .role-selector .role-btn.active');

  const fullName = nameInput ? nameInput.value.trim() : '';
  const course = courseInput ? courseInput.value.trim() : '';
  const year = yearInput ? yearInput.value.trim() : '';
  const section = secInput ? secInput.value.trim() : '';
  const role = activeRoleBtn ? activeRoleBtn.dataset.role : 'student';

  if (!fullName) {
    showToast('Name Required', 'Please enter your Full Name.');
    if (nameInput) nameInput.focus();
    return;
  }
  if (!course) {
    showToast('Course Required', 'Please enter your Course.');
    if (courseInput) courseInput.focus();
    return;
  }

  // Check if demo user already exists or create new
  let user = state.demoUsers.find(u => u.name.toLowerCase() === fullName.toLowerCase());
  if (!user) {
    user = {
      id: `DEMO-${role.toUpperCase().slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`,
      name: fullName,
      course: course,
      year: year || '1st Year',
      section: section || 'Section 36',
      role: role,
      roleLabel: role === 'student' ? `Student · ${course}` : (role === 'security' ? 'Security Command' : `Faculty · ${course}`),
      avatar: fullName.charAt(0).toUpperCase()
    };
    state.demoUsers.push(user);
    saveDemoUsers(state.demoUsers);
  } else {
    // Update existing profile details
    user.course = course;
    if (year) user.year = year;
    if (section) user.section = section;
    user.role = role;
    saveDemoUsers(state.demoUsers);
  }

  setupUserSession(user, true);
}

// Backward compatibility for any direct call
function handleLogin() {
  handleDemoLogin();
}

function quickDemo(role) {
  if (role === 'student') {
    quickFillDemo('Aryan Kashyap', 'B.Tech CSE (AI)', '1st Year', 'Section 36', 'student');
  } else if (role === 'faculty') {
    quickFillDemo('Dr. Ramesh Sharma', 'CS Dept', 'Faculty', '', 'faculty');
  } else if (role === 'security') {
    quickFillDemo('Officer Vikram Singh', 'Security Command', 'Staff', '', 'security');
  }
}

function setupUserSession(userObj, navigateAfter = true) {
  if (typeof userObj === 'string') {
    const id = arguments[0];
    const role = arguments[1] || 'student';
    const customName = arguments[2] || 'Aryan Kashyap';
    userObj = {
      id: id,
      name: customName,
      course: arguments[3] || 'B.Tech CSE (AI)',
      year: arguments[4] || '1st Year',
      section: arguments[5] || 'Section 36',
      role: role,
      roleLabel: role === 'student' ? 'Student' : (role === 'security' ? 'Security Command' : 'Faculty'),
      avatar: customName.charAt(0).toUpperCase()
    };
  }

  state.currentUser = Object.assign({}, userObj);
  if (!state.currentUser.avatar) {
    state.currentUser.avatar = (state.currentUser.name || 'U').charAt(0).toUpperCase();
  }

  // Persist demo active user in localStorage
  safeSetStorage(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(state.currentUser));

  // Update UI Elements
  const sbName = document.getElementById('sidebarName');
  const sbCourse = document.getElementById('sidebarCourse');
  const sbRole = document.getElementById('sidebarRole');
  const sbAvatar = document.getElementById('sidebarAvatar');
  const tbAvatar = document.getElementById('topbarAvatar');

  if (sbName) sbName.textContent = state.currentUser.name;
  if (sbCourse) sbCourse.textContent = state.currentUser.course || 'B.Tech CSE (AI)';
  if (sbRole) sbRole.textContent = state.currentUser.roleLabel || state.currentUser.role || 'Student';
  if (sbAvatar) sbAvatar.textContent = state.currentUser.avatar;
  if (tbAvatar) tbAvatar.textContent = state.currentUser.avatar;

  const greeting = `Good ${getTimeOfDay()}, ${state.currentUser.name} 👋`;
  const tg = document.getElementById('topbarGreeting');
  const dg = document.getElementById('dashGreeting');
  if (tg) tg.textContent = greeting;
  if (dg) dg.textContent = greeting;

  // Settings
  const sName = document.getElementById('settingsUserName');
  const sCourse = document.getElementById('settingsUserCourse');
  const sYearSec = document.getElementById('settingsUserYearSec');
  const su = document.getElementById('settingsUserId');
  const sr = document.getElementById('settingsRole');

  if (sName) sName.textContent = state.currentUser.name;
  if (sCourse) sCourse.textContent = state.currentUser.course || 'B.Tech CSE (AI)';
  if (sYearSec) {
    const ys = [state.currentUser.year, state.currentUser.section].filter(Boolean).join(' • ');
    sYearSec.textContent = ys || 'General';
  }
  if (su) su.textContent = state.currentUser.id || 'DEMO-1001';
  if (sr) sr.textContent = state.currentUser.roleLabel || state.currentUser.role || 'Student';

  // Adapt Nav For Role
  adaptNavForRole(state.currentUser.role);

  // Transition to App
  const loginScr = document.getElementById('loginScreen');
  const mainApp = document.getElementById('mainApp');
  if (loginScr) loginScr.classList.add('hidden');
  if (mainApp) mainApp.classList.remove('hidden');

  if (navigateAfter) {
    if (state.currentUser.role === 'security') {
      navigateTo('security');
    } else if (state.currentUser.role === 'faculty') {
      navigateTo('facultyHub');
    } else {
      navigateTo('dashboard');
    }
  }

  updateDashboardStats();
  showToast(`Welcome, ${state.currentUser.name}!`, `Active profile: ${state.currentUser.course || state.currentUser.roleLabel}`);
}

function adaptNavForRole(role) {
  const plannerNav = document.getElementById('plannerNavItem');
  const facultyNav = document.getElementById('facultyNavItem');
  const securityNav = document.getElementById('securityNavItem');

  if (plannerNav) plannerNav.style.display = role === 'faculty' ? 'none' : 'flex';
  if (facultyNav) facultyNav.style.display = role === 'student' ? 'none' : 'flex';
  if (securityNav) securityNav.style.display = role === 'student' ? 'none' : 'flex';
}

// ===================================================================
// DEMO USER SWITCHER MODAL & CONTROLS
// ===================================================================
let newDemoSelectedRole = 'student';
function selectNewDemoRole(role, btn) {
  newDemoSelectedRole = role;
  const btns = document.querySelectorAll('#newDemoRoleSelector .role-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function openUserSwitchModal() {
  renderDemoUsersList();
  const modal = document.getElementById('userSwitchModal');
  if (modal) modal.classList.add('active');
}

function renderDemoUsersList() {
  const container = document.getElementById('demoUsersList');
  if (!container) return;

  container.innerHTML = state.demoUsers.map(user => {
    const isActive = state.currentUser && (state.currentUser.name.toLowerCase() === user.name.toLowerCase());
    return `
      <div class="demo-user-card ${isActive ? 'active' : ''}">
        <div class="demo-user-info">
          <div class="demo-user-avatar">${user.avatar || user.name.charAt(0)}</div>
          <div>
            <strong style="display:block;font-size:0.95rem">${user.name} ${isActive ? '<span style="color:var(--cyan);font-size:0.75rem;font-weight:700">(Current)</span>' : ''}</strong>
            <span style="font-size:0.75rem;color:var(--text-muted)">${user.course} ${user.year ? '· ' + user.year : ''}</span>
          </div>
        </div>
        <div>
          ${isActive ? `
            <span class="pill verify" style="font-size:0.7rem">Active</span>
          ` : `
            <button class="btn-primary small" onclick="switchDemoUser('${user.id}')">Switch →</button>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function switchDemoUser(userId) {
  const user = state.demoUsers.find(u => u.id === userId);
  if (!user) return;

  setupUserSession(user, false);
  closeModal('userSwitchModal');
  renderIncidentCards();
  renderCampusIssues();
  renderSecurityAlerts();
  updateDashboardStats();
  showToast(`Switched Demo Profile`, `Now presenting as ${user.name} (${user.course}). Shared complaints are synced!`);
}

function createNewDemoUser() {
  const nameInput = document.getElementById('newDemoName');
  const courseInput = document.getElementById('newDemoCourse');
  const yearInput = document.getElementById('newDemoYear');
  const secInput = document.getElementById('newDemoSection');

  const name = nameInput ? nameInput.value.trim() : '';
  const course = courseInput ? courseInput.value.trim() : '';
  const year = yearInput ? yearInput.value.trim() : '';
  const sec = secInput ? secInput.value.trim() : '';

  if (!name) {
    showToast('Name Required', 'Please enter a name for the new profile.');
    if (nameInput) nameInput.focus();
    return;
  }
  if (!course) {
    showToast('Course Required', 'Please enter the course.');
    if (courseInput) courseInput.focus();
    return;
  }

  const role = newDemoSelectedRole || 'student';
  const newUser = {
    id: `DEMO-${role.toUpperCase().slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`,
    name: name,
    course: course,
    year: year || '1st Year',
    section: sec || 'Section 36',
    role: role,
    roleLabel: role === 'student' ? `Student · ${course}` : (role === 'security' ? 'Security Command' : `Faculty · ${course}`),
    avatar: name.charAt(0).toUpperCase()
  };

  state.demoUsers.push(newUser);
  saveDemoUsers(state.demoUsers);

  if (nameInput) nameInput.value = '';
  if (courseInput) courseInput.value = '';
  if (yearInput) yearInput.value = '';
  if (secInput) secInput.value = '';

  switchDemoUser(newUser.id);
}

function resetDemoData() {
  if (confirm('Reset all demo complaints and restore default initial campus data? This is useful for starting a fresh live presentation.')) {
    state.incidents = JSON.parse(JSON.stringify(DEFAULT_INCIDENTS));
    saveIncidents();
    renderIncidentCards();
    renderCampusIssues();
    renderSecurityAlerts();
    updateDashboardStats();
    closeModal('userSwitchModal');
    showToast('Demo Data Reset', 'Campus complaints database restored to clean seed state.');
  }
}

function updateDashboardStats() {
  const safetyEl = document.getElementById('statSafetyAlerts');
  const infraEl = document.getElementById('statInfraIssues');
  const myComplaintsEl = document.getElementById('statMyComplaints');

  if (safetyEl) {
    const count = state.incidents.filter(i => (i.priority === 'High' || i.priority === 'Emergency') && i.status !== 'Resolved').length;
    safetyEl.textContent = count;
  }
  if (infraEl) {
    const count = state.incidents.filter(i => (i.category === 'Infrastructure' || i.category === 'Lighting') && i.status !== 'Resolved').length;
    infraEl.textContent = count;
  }
  if (myComplaintsEl) {
    const curName = state.currentUser && state.currentUser.name ? state.currentUser.name.toLowerCase() : '';
    const count = state.incidents.filter(i => i.reporterName && i.reporterName.toLowerCase() === curName).length;
    myComplaintsEl.textContent = count;
  }
}

function handleLogout() {
  safeSetStorage(STORAGE_KEYS.ACTIVE_USER, '');
  const mainApp = document.getElementById('mainApp');
  const loginScr = document.getElementById('loginScreen');
  if (mainApp) mainApp.classList.add('hidden');
  if (loginScr) loginScr.classList.remove('hidden');
  showToast('Logged out', 'You have been safely signed out. Demo data remains preserved.');
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}

// ===================================================================
// NAVIGATION & SIDEBAR
// ===================================================================
function navigateTo(pageId) {
  if (pageId === 'complaintTracking') pageId = 'campusIssues';

  // Update state
  state.activePage = pageId;

  // Update Page Containers
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.add('active');
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }

  // Update Nav Items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(n => {
    if (n.dataset.page === pageId) {
      n.classList.add('active');
    } else {
      n.classList.remove('active');
    }
  });

  // Mobile sidebar auto close
  closeSidebar();
}

function openSidebar() {
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sb) sb.classList.add('open');
  if (overlay) overlay.classList.add('active');
}

function closeSidebar() {
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (sb) sb.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// ===================================================================
// SAFETY RADAR & MAP INTERACTION
// ===================================================================
function filterMap(category, btn) {
  const filterBtns = document.querySelectorAll('#page-safetyRadar .filter-btn');
  filterBtns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const pins = document.querySelectorAll('.map-pin');
  pins.forEach(pin => {
    const pinCat = pin.dataset.filter;
    if (category === 'all' || pinCat === category) {
      pin.style.display = 'flex';
    } else {
      pin.style.display = 'none';
    }
  });

  renderIncidentCards(category);
}

function renderIncidentCards(filter = 'all') {
  const container = document.getElementById('incidentCardsGrid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? state.incidents 
    : state.incidents.filter(i => i.filterCat === filter);

  container.innerHTML = filtered.map(inc => `
    <div class="radar-incident-card" onclick="openIncidentModal('${inc.id}')">
      <div>
        <div class="ric-header">
          <span class="ric-title">${inc.icon} ${inc.title}</span>
          <span class="imh-priority ${inc.priority.toLowerCase()}">${inc.priority}</span>
        </div>
        <div class="ric-loc">📍 ${inc.location}</div>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.75rem">${inc.description}</p>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;color:var(--text-muted)">
          <span>⏱️ ${inc.reportedAt}</span>
          <span class="inc-status ${inc.status.toLowerCase().replace(/\s+/g,'')}">${inc.status}</span>
        </div>
        <div class="ric-actions">
          <button class="btn-primary small" style="flex:1" onclick="event.stopPropagation();openIncidentModal('${inc.id}')">View Details</button>
          <button class="btn-ghost small" onclick="event.stopPropagation();quickVerify('${inc.id}')">${inc.isVerified ? '✓ Verified (' + inc.verifiedCount + ')' : 'Verify (' + inc.verifiedCount + ')'}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateIncidentStatus(incId, targetStatus) {
  const inc = state.incidents.find(i => i.id === incId);
  if (!inc) return;

  inc.status = targetStatus;
  if (!inc.timeline.includes(targetStatus)) {
    inc.timeline.push(targetStatus);
  }
  if (targetStatus === 'Resolved' || targetStatus === 'Verified') {
    inc.filterCat = 'resolved';
  }

  saveIncidents();
  renderIncidentCards();
  renderCampusIssues();
  renderSecurityAlerts();
  updateDashboardStats();

  const modal = document.getElementById('incidentModal');
  if (modal && modal.classList.contains('active')) {
    openIncidentModal(incId);
  }

  showToast(`Status Updated: ${targetStatus}`, `${inc.title} is now marked as "${targetStatus}".`);
}

function openIncidentModal(incId) {
  const inc = state.incidents.find(i => i.id === incId);
  if (!inc) return;

  const content = document.getElementById('incidentModalContent');
  if (!content) return;

  content.innerHTML = `
    <div class="incident-modal-header">
      <div>
        <span style="font-size:0.8rem;color:var(--cyan);font-family:monospace;font-weight:700">${inc.code}</span>
        <h2>${inc.icon} ${inc.title}</h2>
      </div>
      <span class="imh-priority ${inc.priority.toLowerCase()}">${inc.priority}</span>
    </div>
    
    <div class="incident-details-list">
      <div class="idl-row"><span>Reporter</span><strong style="color:var(--cyan)">👤 ${inc.reporterName || 'Aryan Kashyap'} (${inc.reporterCourse || 'B.Tech CSE (AI)'})</strong></div>
      <div class="idl-row"><span>Category</span><strong>${inc.category}</strong></div>
      <div class="idl-row"><span>Location</span><strong>📍 ${inc.location}</strong></div>
      <div class="idl-row"><span>Reported</span><strong>⏱️ ${inc.reportedAt}</strong></div>
      <div class="idl-row"><span>Current Status</span><strong style="color:var(--cyan)">${inc.status}</strong></div>
      <div class="idl-row"><span>Assigned To</span><strong>👮 ${inc.assignedTo}</strong></div>
      <div class="idl-row"><span>Action Requested</span><strong>${inc.actionRequested}</strong></div>
      <div class="idl-row"><span>Community Verifications</span><strong id="modalVerifyCount">${inc.verifiedCount} confirmations</strong></div>
    </div>

    <div style="margin-bottom:1.5rem">
      <h4 style="font-size:0.85rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.4rem">Description</h4>
      <p style="font-size:0.9rem;line-height:1.5;color:var(--text-primary)">${inc.description}</p>
    </div>

    <div style="margin-bottom:1.75rem">
      <h4 style="font-size:0.85rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:0.6rem">Incident Progression</h4>
      <div class="issue-timeline">
        ${['Reported', 'AI Categorized', 'Assigned', 'In Progress', 'Resolved', 'Verified'].map(step => {
          const isDone = inc.timeline.includes(step) || (step === 'In Progress' && inc.timeline.includes('Action in Progress'));
          const isCurrent = inc.status === step || (step === 'In Progress' && inc.status === 'In Progress');
          return `
            <div class="tl-step ${isDone ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
              ${isDone ? '✓' : '○'} ${step}
            </div>
            ${step !== 'Verified' ? '<span class="tl-arrow">→</span>' : ''}
          `;
        }).join('')}
      </div>
    </div>

    <div class="incident-modal-actions" style="display:flex;gap:0.5rem;flex-wrap:wrap">
      ${inc.status === 'Reported' || inc.status === 'AI Categorized' ? `
        <button class="btn-primary small" onclick="updateIncidentStatus('${inc.id}', 'Assigned')">⚡ Accept / Assign</button>
      ` : ''}
      ${inc.status === 'Assigned' ? `
        <button class="btn-primary small" onclick="updateIncidentStatus('${inc.id}', 'In Progress')">🚀 Mark Responding (In Progress)</button>
      ` : ''}
      ${inc.status !== 'Resolved' && inc.status !== 'Verified' ? `
        <button class="btn-green small" onclick="updateIncidentStatus('${inc.id}', 'Resolved')">✓ Mark Resolved</button>
      ` : ''}
      <button class="btn-ghost small" onclick="verifyFromModal('${inc.id}')">
        ${inc.isVerified ? '✓ Confirmed by You' : '👍 Verify Issue'} (${inc.verifiedCount || 1})
      </button>
      <button class="btn-ghost small" onclick="closeModal('incidentModal')">Close</button>
    </div>
  `;

  document.getElementById('incidentModal').classList.add('active');
}

function quickVerify(incId) {
  const inc = state.incidents.find(i => i.id === incId);
  if (!inc) return;

  if (!inc.isVerified) {
    inc.verifiedCount++;
    inc.isVerified = true;
    if (!inc.timeline.includes('Verified')) inc.timeline.push('Verified');
    showToast('✓ Issue Verified', `You and ${inc.verifiedCount - 1} other campus members verified this report.`);
  } else {
    inc.verifiedCount--;
    inc.isVerified = false;
    showToast('Verification removed', 'Your verification was updated.');
  }
  saveIncidents();
  renderIncidentCards();
  renderCampusIssues();
  updateDashboardStats();
}

function verifyFromModal(incId) {
  quickVerify(incId);
  openIncidentModal(incId);
}

function securityResolveIncident(incId) {
  updateIncidentStatus(incId, 'Resolved');
}

function showWomensSafetyModal() {
  document.getElementById('womensSafetyModal').classList.add('active');
}

function showWomensSafety() {
  showWomensSafetyModal();
}

// ===================================================================
// REPORT ISSUE WIZARD
// ===================================================================
function selectCategory(cat, icon) {
  if (cat === 'Women Safety') cat = "Women's Safety";
  state.currentCategory = cat;
  state.currentCategoryIcon = icon;

  const titleEl = document.getElementById('reportCatTitle');
  const iconEl = document.getElementById('reportCatIcon');
  if (titleEl) titleEl.textContent = `${cat} Issue`;
  if (iconEl) iconEl.textContent = icon;

  // Placeholder customized per category
  const descEl = document.getElementById('reportDesc');
  if (descEl) {
    if (cat === 'Animal') {
      descEl.placeholder = 'e.g. "There is an aggressive dog near the canteen entrance."';
    } else if (cat === 'Lighting') {
      descEl.placeholder = 'e.g. "Streetlight pole near hostel pathway is not working, area is dark."';
    } else if (cat === "Women's Safety" || cat === "Women Safety") {
      descEl.placeholder = 'e.g. "Unsafe pathway / repeated concern / facility issue..."';
    } else if (cat === 'Parking') {
      descEl.placeholder = 'e.g. "Vehicle parked blocking emergency ambulance route near Gate 1."';
    } else {
      descEl.placeholder = 'Describe what happened in detail...';
    }
  }

  goToStep(2);
}

function selectPriority(prio, btn) {
  state.currentPriority = prio;
  const prioBtns = document.querySelectorAll('.priority-selector .prio-btn');
  prioBtns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function toggleChip(chip) {
  chip.classList.toggle('active');
  const val = chip.textContent.trim();
  if (state.selectedActions.has(val)) {
    state.selectedActions.delete(val);
  } else {
    state.selectedActions.add(val);
  }
}

function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const area = document.getElementById('imgPreviewArea');
    if (area) {
      area.innerHTML = `
        <img src="${e.target.result}" style="max-height:140px;border-radius:8px;margin-bottom:0.5rem;object-fit:cover" />
        <p style="color:var(--green);font-size:0.8rem;font-weight:700">✓ Image attached: ${file.name}</p>
      `;
    }
  };
  reader.readAsDataURL(file);
}

function goToStep(stepNum) {
  const s1 = document.getElementById('reportStep1');
  const s2 = document.getElementById('reportStep2');
  const s3 = document.getElementById('reportStep3');
  const ind1 = document.getElementById('step1-ind');
  const ind2 = document.getElementById('step2-ind');
  const ind3 = document.getElementById('step3-ind');

  s1.classList.add('hidden');
  s2.classList.add('hidden');
  s3.classList.add('hidden');
  ind1.classList.remove('active');
  ind2.classList.remove('active');
  ind3.classList.remove('active');

  if (stepNum === 1) {
    s1.classList.remove('hidden');
    ind1.classList.add('active');
  } else if (stepNum === 2) {
    s2.classList.remove('hidden');
    ind1.classList.add('active');
    ind2.classList.add('active');
  } else if (stepNum === 3) {
    s3.classList.remove('hidden');
    ind1.classList.add('active');
    ind2.classList.add('active');
    ind3.classList.add('active');
  }
}

function submitReport() {
  const titleInput = document.getElementById('reportTitle');
  const descInput = document.getElementById('reportDesc');
  const locInput = document.getElementById('reportLocation');

  const title = titleInput ? titleInput.value.trim() : '';
  const desc = descInput ? descInput.value.trim() : '';
  const loc = locInput ? locInput.value.trim() : '';

  if (!title) {
    showToast('Missing Title', 'Please enter a title for the issue (e.g. Broken Streetlight).');
    if (titleInput) titleInput.focus();
    return;
  }
  if (!desc) {
    showToast('Missing Details', 'Please describe what happened.');
    if (descInput) descInput.focus();
    return;
  }
  if (!loc) {
    showToast('Missing Location', 'Please select campus location.');
    if (locInput) locInput.focus();
    return;
  }

  goToStep(3);

  // AI Animation Sequence
  const steps = [
    { id: 'ais1', text: '✓ Understanding report context & NLP analysis...' },
    { id: 'ais2', text: `✓ Categorized as: ${state.currentCategory}` },
    { id: 'ais3', text: `✓ Geotagged to: ${loc}` },
    { id: 'ais4', text: `✓ Priority computed: ${state.currentPriority}` },
    { id: 'ais5', text: '✓ Dispatched notification to Campus Authorities!' }
  ];

  document.getElementById('aiProcessing').classList.remove('hidden');
  document.getElementById('reportSuccess').classList.add('hidden');

  steps.forEach((st, idx) => {
    setTimeout(() => {
      const el = document.getElementById(st.id);
      if (el) {
        el.textContent = st.text;
        el.classList.add('done');
      }
    }, (idx + 1) * 450);
  });

  setTimeout(() => {
    // Generate new unique incident ID
    const newIdNum = Math.floor(100 + Math.random() * 900);
    const newCode = `CP-2026-${newIdNum}`;

    const newIncident = {
      id: `inc_new_${Date.now()}`,
      code: newCode,
      title: title || `${state.currentCategory} Report`,
      category: state.currentCategory,
      icon: state.currentCategoryIcon || '🚨',
      location: loc,
      priority: state.currentPriority,
      reportedAt: 'Just now',
      status: 'Reported',
      reporterName: state.currentUser ? state.currentUser.name : 'Aryan Kashyap',
      reporterCourse: state.currentUser ? (state.currentUser.course || 'B.Tech CSE (AI)') : 'B.Tech CSE (AI)',
      assignedTo: state.currentCategory === "Women's Safety" ? 'Special Protection Cell' : 'Campus Security & Facilities',
      description: desc,
      actionRequested: Array.from(state.selectedActions).join(', ') || 'Inspection required',
      timeline: ['Reported'],
      verifiedCount: 1,
      isVerified: true,
      mapCoords: { top: '45%', left: '50%' },
      filterCat: state.currentCategory === "Women's Safety" ? 'women' : (state.currentCategory === 'Infrastructure' ? 'infra' : 'safety')
    };

    state.incidents.unshift(newIncident);
    saveIncidents();

    // Populate Success Screen
    const sId = document.getElementById('successId');
    const sTitle = document.getElementById('successTitle');
    const sReporter = document.getElementById('successReporter');
    const sCat = document.getElementById('successCat');
    const sLoc = document.getElementById('successLoc');
    const sPrio = document.getElementById('successPrio');
    const sStatus = document.getElementById('successStatus');
    const aiNote = document.getElementById('aiCatNote');

    if (sId) sId.textContent = newCode;
    if (sTitle) sTitle.textContent = newIncident.title;
    if (sReporter) sReporter.textContent = `${newIncident.reporterName} (${newIncident.reporterCourse})`;
    if (sCat) sCat.textContent = `${state.currentCategoryIcon} ${state.currentCategory}`;
    if (sLoc) sLoc.textContent = `📍 ${loc}`;
    if (sPrio) sPrio.textContent = state.currentPriority;
    if (sStatus) sStatus.textContent = 'Reported';
    if (aiNote) aiNote.textContent = `${state.currentPriority} Priority ${state.currentCategory}`;

    document.getElementById('aiProcessing').classList.add('hidden');
    document.getElementById('reportSuccess').classList.remove('hidden');

    showToast(
      '✓ Report submitted successfully',
      `Complaint ${newCode} logged as "Reported" by ${newIncident.reporterName}.`
    );

    renderIncidentCards();
    renderCampusIssues();
    renderSecurityAlerts();
    updateDashboardStats();
  }, 2300);
}

function resetReport() {
  const titleInput = document.getElementById('reportTitle');
  const descInput = document.getElementById('reportDesc');
  const locInput = document.getElementById('reportLocation');

  if (titleInput) titleInput.value = '';
  if (descInput) descInput.value = '';
  if (locInput) locInput.value = '';

  const preview = document.getElementById('imgPreviewArea');
  if (preview) {
    preview.innerHTML = `
      <span class="upload-icon">📷</span>
      <p>Click to upload or drag & drop</p>
      <span class="upload-hint">JPG, PNG up to 10MB</span>
    `;
  }
  // Reset processing steps
  ['ais1','ais2','ais3','ais4','ais5'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('done');
      el.textContent = '⏳ Waiting...';
    }
  });
}

// ===================================================================
// CAMPUS ISSUES & COMPLAINT TRACKING
// ===================================================================
function filterIssues(filter, btn) {
  const btns = document.querySelectorAll('#page-campusIssues .filter-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderCampusIssues(filter);
}

function renderCampusIssues(filter = 'all') {
  const container = document.getElementById('issuesList');
  if (!container) return;

  let filtered = state.incidents;
  if (filter === 'high') {
    filtered = state.incidents.filter(i => i.priority === 'High' || i.priority === 'Emergency');
  } else if (filter === 'inprogress') {
    filtered = state.incidents.filter(i => i.status === 'In Progress');
  } else if (filter === 'assigned') {
    filtered = state.incidents.filter(i => i.status === 'Assigned' || i.status === 'Reported');
  } else if (filter === 'resolved') {
    filtered = state.incidents.filter(i => i.status === 'Resolved');
  }

  container.innerHTML = filtered.map(inc => `
    <div class="issue-card" onclick="openIncidentModal('${inc.id}')">
      <div class="issue-header">
        <div style="display:flex;align-items:center;gap:0.6rem">
          <span style="font-size:1.5rem">${inc.icon}</span>
          <div>
            <span class="issue-id">${inc.code}</span>
            <h4 style="font-size:1rem;margin-top:0.15rem">${inc.title}</h4>
          </div>
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center">
          <span class="imh-priority ${inc.priority.toLowerCase()}">${inc.priority}</span>
          <span class="inc-status ${inc.status.toLowerCase().replace(/\s+/g,'')}">${inc.status}</span>
        </div>
      </div>
      <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.5rem 0">
        📍 ${inc.location} · Reporter: <strong style="color:var(--cyan)">👤 ${inc.reporterName || 'Aryan Kashyap'}</strong> (${inc.reporterCourse || 'Student'}) · Assigned to: <strong>${inc.assignedTo}</strong>
      </p>
      <p style="font-size:0.85rem;color:var(--text-primary);margin-bottom:0.6rem;background:var(--bg-tertiary);padding:0.4rem 0.6rem;border-radius:6px;line-height:1.4">
        "${inc.description}"
      </p>
      <div class="issue-timeline">
        ${['Reported', 'AI Categorized', 'Assigned', 'In Progress', 'Resolved', 'Verified'].map(step => {
          const isDone = inc.timeline.includes(step) || (step === 'In Progress' && inc.timeline.includes('Action in Progress'));
          const isCurrent = inc.status === step || (step === 'In Progress' && inc.status === 'In Progress');
          return `
            <div class="tl-step ${isDone ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
              ${isDone ? '✓' : '○'} ${step}
            </div>
            ${step !== 'Verified' ? '<span class="tl-arrow">→</span>' : ''}
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ===================================================================
// LOST & FOUND
// ===================================================================
function showLFForm(type) {
  const content = document.getElementById('lfModalContent');
  if (!content) return;

  const isLost = type === 'lost';
  content.innerHTML = `
    <h2>${isLost ? '🔴 Report Lost Item' : '🟢 Submit Found Item'}</h2>
    <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.25rem 0 1.5rem">
      ${isLost ? 'Provide details and Campus AI will search for instant matches.' : 'Help return a found item securely to its owner.'}
    </p>

    <div class="form-group">
      <label>Item Name <span class="req">*</span></label>
      <input type="text" id="lfItemName" class="form-input" placeholder="e.g. University ID Card, Black Wallet" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Category <span class="req">*</span></label>
        <select id="lfCategory" class="form-select">
          <option>ID Card</option>
          <option>Wallet</option>
          <option>Phone</option>
          <option>Earphones</option>
          <option>Keys</option>
          <option>Books</option>
          <option>Bag</option>
          <option>Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Last Seen Location <span class="req">*</span></label>
        <select id="lfLocation" class="form-select">
          <option>Central Library</option>
          <option>Canteen</option>
          <option>Academic Block</option>
          <option>Sports Complex</option>
          <option>Parking Area</option>
          <option>Main Road</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label>Description & Distinct Marks</label>
      <textarea id="lfDesc" class="form-textarea" rows="3" placeholder="Color, brand, keychains, stickers, identifiers..."></textarea>
    </div>

    <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:1.5rem">
      🔒 Secure matching: Contact information is never shown publicly. Campus Security handles returns.
    </p>

    <div style="display:flex;gap:0.75rem;justify-content:flex-end">
      <button class="btn-ghost" onclick="closeModal('lfModal')">Cancel</button>
      <button class="btn-primary" onclick="submitLFItem('${type}')">${isLost ? 'Search AI Matches →' : 'Submit Item →'}</button>
    </div>
  `;

  document.getElementById('lfModal').classList.add('active');
}

function submitLFItem(type) {
  const name = document.getElementById('lfItemName').value.trim();
  const cat = document.getElementById('lfCategory').value;
  const loc = document.getElementById('lfLocation').value;
  const desc = document.getElementById('lfDesc').value.trim();

  if (!name) {
    showToast('Missing item name', 'Please specify what was lost or found.');
    return;
  }

  const iconMap = {
    'ID Card': '🪪',
    'Wallet': '👛',
    'Phone': '📱',
    'Earphones': '🎧',
    'Keys': '🔑',
    'Books': '📚',
    'Bag': '🎒',
    'Other': '📦'
  };

  const newItem = {
    id: `lf_${Date.now()}`,
    type: type,
    title: name,
    category: cat,
    location: loc,
    time: 'Just now',
    desc: desc || `Reported ${type} near ${loc}.`,
    icon: iconMap[cat] || '📦'
  };

  state.lostFoundItems.unshift(newItem);
  closeModal('lfModal');
  renderLostFoundItems();

  if (type === 'lost') {
    showToast('🔍 AI Searching Database...', 'Scanning campus found registry for potential matches.');
    setTimeout(() => {
      showMatchModal();
    }, 1200);
  } else {
    showToast('✅ Found Item Logged', 'Item registered. Matched owners will be notified securely.');
  }
}

function renderLostFoundItems() {
  const container = document.getElementById('lfItemsGrid');
  if (!container) return;

  container.innerHTML = state.lostFoundItems.map(item => `
    <div class="lf-item-card">
      <span class="lf-type-pill ${item.type}">${item.type}</span>
      <div style="font-size:2rem;margin-bottom:0.4rem">${item.icon}</div>
      <strong style="display:block;font-size:0.95rem">${item.title}</strong>
      <span style="font-size:0.75rem;color:var(--text-muted);display:block;margin-bottom:0.4rem">📍 ${item.location} · ${item.time}</span>
      <p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.75rem">${item.desc}</p>
      <button class="btn-ghost small" style="width:100%" onclick="showMatchModal()">Check Matches</button>
    </div>
  `).join('');
}

function showMatchModal() {
  document.getElementById('matchModal').classList.add('active');
}

// ===================================================================
// PARKING & TRAFFIC
// ===================================================================
function showTrafficReportModal() {
  document.getElementById('trafficModal').classList.add('active');
}

function quickTrafficReport(type) {
  showToast(
    `🚨 ${type} Reported`,
    'Campus AI categorized this report and routed it to Ground Traffic Security.'
  );

  const newTrafficIncident = {
    id: `inc_tr_${Date.now()}`,
    code: `CP-TR-${Math.floor(100 + Math.random() * 900)}`,
    title: type,
    category: 'Parking & Traffic',
    icon: '🚗',
    location: 'Gate 2 / Main Road',
    priority: type === 'Accident' ? 'Emergency' : 'Medium',
    reportedAt: 'Just now',
    status: 'Assigned',
    assignedTo: 'Traffic Ground Team',
    description: `User submitted quick traffic alert: ${type}.`,
    actionRequested: 'Traffic coordination, clearance',
    timeline: ['Reported', 'AI Categorized', 'Assigned'],
    verifiedCount: 1,
    isVerified: true,
    mapCoords: { top: '75%', left: '40%' },
    filterCat: 'parking'
  };

  state.incidents.unshift(newTrafficIncident);
  renderIncidentCards();
  renderCampusIssues();
  renderSecurityAlerts();
}

// ===================================================================
// STUDENT AI PLANNER
// ===================================================================
function addSubject() {
  const inp = document.getElementById('newSubject');
  const val = inp.value.trim();
  if (!val) return;

  state.studentSubjects.push(val);
  inp.value = '';

  const list = document.querySelector('.subject-list');
  const colors = ['#00d4ff', '#7c3aed', '#f59e0b', '#10b981', '#ef4444', '#ec4899', '#8b5cf6'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const div = document.createElement('div');
  div.className = 'subject-item';
  div.innerHTML = `
    <span class="subject-color" style="background:${color}"></span>
    <span>${val}</span>
    <button class="remove-btn" onclick="removeSubject(this)">✕</button>
  `;
  list.appendChild(div);

  showToast('✓ Subject added', `${val} added to your AI study tracker.`);
}

function removeSubject(btn) {
  const item = btn.closest('.subject-item');
  if (item) {
    item.remove();
    showToast('Subject removed', 'Academic schedule adjusted.');
  }
}

function addExamModal() {
  const examName = prompt('Enter Exam Name (e.g. Cyber Security Midterm):');
  if (!examName) return;
  const examDays = prompt('Days remaining until exam:', '14');
  if (!examDays) return;

  const examList = document.querySelector('.exam-list');
  const div = document.createElement('div');
  div.className = 'exam-item';
  div.innerHTML = `
    <div class="exam-countdown">
      <span class="countdown-num">${examDays}</span>
      <span class="countdown-label">days</span>
    </div>
    <div class="exam-info">
      <strong>${examName}</strong>
      <span>Scheduled Assessment</span>
      <span class="exam-subs">Tracked</span>
    </div>
    <span class="exam-alert orange">Upcoming</span>
  `;
  examList.appendChild(div);
  showToast('✓ Exam Added', `Countdown set for ${examName} (${examDays} days).`);
}

function showTimetableUpload() {
  showToast('📄 Parsing Timetable...', 'Campus AI is extracting class timings and lab schedules.');
  setTimeout(() => {
    regenerateSchedule();
    showToast('✅ Timetable Synchronized!', 'Your daily priorities and weekly slots were refreshed.');
  }, 1500);
}

function regenerateSchedule() {
  const scheduleEl = document.getElementById('scheduleTimeline');
  if (!scheduleEl) return;

  const schedules = [
    [
      { time: '08:00', bar: 'prog', title: 'Programming Revision', sub: 'Dynamic Programming & Graphs · 2 hrs' },
      { time: '10:15', bar: 'math', title: 'Mathematics Lecture', sub: 'Linear Algebra & Matrices · 1.5 hrs' },
      { time: '12:00', bar: 'break', title: 'Lunch & Campus Walk', sub: 'Canteen · 1 hr' },
      { time: '13:30', bar: 'cyber', title: 'Cyber Security Lab', sub: 'Network Packet Analysis · 2 hrs' },
      { time: '16:00', bar: 'eng', title: 'Engineering Design Review', sub: 'Sprint 2 deliverables · 1.5 hrs' },
      { time: '18:30', bar: 'prog', title: 'LeetCode Practice', sub: '3 Medium problems · 45 min' },
      { time: '20:30', bar: 'math', title: 'Formula Sheet Revision', sub: 'Unit 2 Calculus summary · 1 hr' }
    ],
    [
      { time: '08:00', bar: 'math', title: 'Mathematics Revision', sub: 'Unit 2 — Calculus · 2 hrs' },
      { time: '10:00', bar: 'prog', title: 'Programming Class', sub: 'Arrays & Linked Lists · 1.5 hrs' },
      { time: '12:00', bar: 'break', title: 'Lunch Break', sub: 'Rest & recharge · 1 hr' },
      { time: '14:00', bar: 'eng', title: 'Engineering Design', sub: 'Project Review · 2 hrs' },
      { time: '16:00', bar: 'cyber', title: 'Cyber Security', sub: 'Network Protocols · 1.5 hrs' },
      { time: '18:30', bar: 'prog', title: 'DSA Practice', sub: 'LeetCode Problems · 45 min' },
      { time: '20:30', bar: 'eng', title: 'Assignment Work', sub: 'Programming + English · 1 hr' }
    ]
  ];

  const pick = schedules[Math.floor(Math.random() * schedules.length)];
  scheduleEl.innerHTML = pick.map(s => `
    <div class="sch-item">
      <span class="sch-time">${s.time}</span>
      <div class="sch-bar ${s.bar}"></div>
      <div class="sch-content">
        <strong>${s.title}</strong>
        <span>${s.sub}</span>
      </div>
    </div>
  `).join('');

  showToast('🤖 AI Schedule Updated', 'Optimized for high-retention learning before your Midterm.');
}

// ===================================================================
// FACULTY HUB
// ===================================================================
function showFacultyAI() {
  showToast('🤖 Processing Syllabus...', 'Campus AI is structuring topics into 4 weekly teaching milestones.');
  setTimeout(() => {
    showToast('✅ Timeline Synchronized', 'Teaching progression aligned with examination dates.');
  }, 1400);
}

function renderFacultyCalendar() {
  const grid = document.getElementById('facCalGrid');
  if (!grid) return;

  const year = state.calDate.getFullYear();
  const month = state.calDate.getMonth();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const myEl = document.getElementById('calMonthYear');
  if (myEl) myEl.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = '';
  // Days of week header
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  days.forEach(d => {
    html += `<div style="text-align:center;font-size:0.7rem;font-weight:700;color:var(--text-muted);padding-bottom:0.25rem">${d}</div>`;
  });

  // Empty slots
  for (let i = 0; i < firstDay; i++) {
    html += `<div style="aspect-ratio:1"></div>`;
  }

  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    let classes = 'cal-day-cell';
    if ([5, 12, 19, 26].includes(d)) classes += ' has-event';
    if (d === 20) classes += ' exam-event';
    html += `<div class="${classes}">${d}</div>`;
  }

  grid.innerHTML = html;
}

function prevMonth() {
  state.calDate.setMonth(state.calDate.getMonth() - 1);
  renderFacultyCalendar();
}

function nextMonth() {
  state.calDate.setMonth(state.calDate.getMonth() + 1);
  renderFacultyCalendar();
}

// ===================================================================
// CAMPUS COMMUNITY FEED
// ===================================================================
function renderCommunityFeed() {
  const container = document.getElementById('communityFeed');
  if (!container) return;

  container.innerHTML = state.communityPosts.map(post => `
    <div class="feed-post" id="${post.id}">
      <div class="post-header">
        <div class="post-author">
          <div class="post-avatar">${post.avatar}</div>
          <div class="post-meta">
            <strong>${post.author}</strong>
            <span>${post.role} · ${post.time}</span>
          </div>
        </div>
        <span class="as-item blue" style="font-size:0.75rem">${post.tag}</span>
      </div>
      <p class="post-content">${post.content}</p>
      <div class="post-actions">
        <button class="post-action-btn ${post.isHelpful ? 'active' : ''}" onclick="toggleHelpful('${post.id}')">
          👍 Helpful (${post.helpfulCount})
        </button>
        <button class="post-action-btn ${post.isConfirmed ? 'active' : ''}" onclick="toggleConfirmPost('${post.id}')">
          ✓ Confirm Issue (${post.confirmCount})
        </button>
        <button class="post-action-btn" onclick="toggleComments('${post.id}')">
          💬 Comments (${post.comments.length})
        </button>
        <button class="post-action-btn" style="margin-left:auto;color:var(--text-muted)" onclick="reportCommunityPost('${post.id}')">
          🚩 Report
        </button>
      </div>
      <div class="post-comments-section" id="comments-${post.id}" style="display:none;margin-top:1rem;padding-top:0.75rem;border-top:1px dashed var(--border-subtle)">
        <div class="comments-list" style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:0.75rem">
          ${post.comments.map(c => `
            <div style="background:var(--bg-tertiary);padding:0.5rem 0.75rem;border-radius:6px;font-size:0.8rem">
              <strong style="color:var(--cyan)">${c.author}:</strong> ${c.text}
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:0.5rem">
          <input type="text" id="input-${post.id}" class="form-input small" placeholder="Write a constructive comment..." onkeydown="if(event.key==='Enter') addComment('${post.id}')" />
          <button class="btn-primary small" onclick="addComment('${post.id}')">Reply</button>
        </div>
      </div>
    </div>
  `).join('');
}

function showCreatePost() {
  const p = document.getElementById('postComposer');
  if (p) {
    p.style.display = 'block';
    document.getElementById('postContent').focus();
  }
}

function hideCreatePost() {
  const p = document.getElementById('postComposer');
  if (p) p.style.display = 'none';
}

function submitPost() {
  const content = document.getElementById('postContent').value.trim();
  if (!content) {
    showToast('Empty Post', 'Please write something before publishing.');
    return;
  }

  const newPost = {
    id: `cp_${Date.now()}`,
    author: state.currentUser.name,
    role: state.currentUser.roleLabel,
    avatar: state.currentUser.avatar,
    time: 'Just now',
    tag: '📍 Campus Update',
    content: content,
    helpfulCount: 1,
    isHelpful: true,
    confirmCount: 0,
    isConfirmed: false,
    comments: []
  };

  state.communityPosts.unshift(newPost);
  document.getElementById('postContent').value = '';
  hideCreatePost();
  renderCommunityFeed();

  showToast('✓ Post Published', 'Visible to all students, faculty, and ground staff.');
}

function toggleHelpful(postId) {
  const post = state.communityPosts.find(p => p.id === postId);
  if (!post) return;

  if (post.isHelpful) {
    post.helpfulCount--;
    post.isHelpful = false;
  } else {
    post.helpfulCount++;
    post.isHelpful = true;
  }
  renderCommunityFeed();
}

function toggleConfirmPost(postId) {
  const post = state.communityPosts.find(p => p.id === postId);
  if (!post) return;

  if (post.isConfirmed) {
    post.confirmCount--;
    post.isConfirmed = false;
  } else {
    post.confirmCount++;
    post.isConfirmed = true;
    showToast('✓ Issue Confirmed', 'Your confirmation helps security verify conditions faster.');
  }
  renderCommunityFeed();
}

function toggleComments(postId) {
  const sec = document.getElementById(`comments-${postId}`);
  if (sec) {
    sec.style.display = sec.style.display === 'none' ? 'block' : 'none';
  }
}

function addComment(postId) {
  const inp = document.getElementById(`input-${postId}`);
  if (!inp || !inp.value.trim()) return;

  const post = state.communityPosts.find(p => p.id === postId);
  if (!post) return;

  post.comments.push({
    author: state.currentUser.name,
    text: inp.value.trim()
  });

  renderCommunityFeed();
  toggleComments(postId); // Keep open
}

function reportCommunityPost(postId) {
  showToast('Flagged for review', 'Campus moderation will review this content for safety compliance.');
}

// ===================================================================
// SECURITY COMMAND CENTER
// ===================================================================
function renderSecurityAlerts() {
  const container = document.getElementById('secAlerts');
  if (!container) return;

  container.innerHTML = state.incidents.slice(0, 8).map(inc => `
    <div class="sec-alert-card ${inc.priority.toLowerCase()}">
      <div class="sec-alert-info">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem">
          <span style="font-size:1.3rem">${inc.icon}</span>
          <strong>${inc.title}</strong>
          <span class="imh-priority ${inc.priority.toLowerCase()}">${inc.priority}</span>
        </div>
        <span>📍 ${inc.location} · Reporter: <strong style="color:var(--cyan)">👤 ${inc.reporterName || 'Aryan Kashyap'}</strong> (${inc.reporterCourse || 'Student'})</span>
        <div style="font-size:0.75rem;color:var(--text-muted);margin:0.2rem 0">Reported: ${inc.reportedAt} · Status: <strong style="color:var(--cyan)">${inc.status}</strong></div>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:0.35rem">${inc.description}</p>
      </div>
      <div class="sec-alert-actions">
        ${inc.status === 'Reported' || inc.status === 'AI Categorized' ? `
          <button class="btn-primary small" onclick="updateIncidentStatus('${inc.id}', 'Assigned')">Accept / Assign</button>
        ` : ''}
        ${inc.status === 'Assigned' ? `
          <button class="btn-primary small" onclick="updateIncidentStatus('${inc.id}', 'In Progress')">Mark Responding</button>
        ` : ''}
        ${inc.status !== 'Resolved' && inc.status !== 'Verified' ? `
          <button class="btn-green small" onclick="updateIncidentStatus('${inc.id}', 'Resolved')">Resolve</button>
        ` : `
          <span style="color:var(--green);font-size:0.8rem;font-weight:700">✓ Resolved</span>
        `}
        <button class="btn-ghost small" onclick="openIncidentModal('${inc.id}')">View Details</button>
      </div>
    </div>
  `).join('');
}

function securityAction(incId, action) {
  if (action === 'Accept') {
    updateIncidentStatus(incId, 'Assigned');
  } else if (action === 'Responding') {
    updateIncidentStatus(incId, 'In Progress');
  }
}

// ===================================================================
// CAMPUS AI CHATBOT SYSTEM
// ===================================================================
// Chat session context for follow-up questions
if (!state.chatContext) {
  state.chatContext = {
    lastIntent: null,
    lastTopic: null,
    turnCount: 0
  };
}

function openChatbot() {
  navigateTo('campusAI');
}

function handleChatKeydown(event) {
  if (event.key === 'Enter') {
    if (event.shiftKey) {
      // Allow newline if supported
      return;
    }
    event.preventDefault();
    sendAIMessage();
  }
}

function sendAIMessage(presetText) {
  const inputEl = document.getElementById('chatInput');
  const query = (presetText || (inputEl ? inputEl.value : '')).trim();

  // Prevent empty messages from being submitted
  if (!query) return;

  if (inputEl) {
    inputEl.value = '';
  }

  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;

  // Append User Message (keep previous messages visible)
  const userMsgDiv = document.createElement('div');
  userMsgDiv.className = 'chat-msg user';
  userMsgDiv.innerHTML = `
    <div class="msg-avatar user-avatar-msg">${state.currentUser.avatar || 'A'}</div>
    <div class="msg-bubble"><p>${escapeHtml(query)}</p></div>
  `;
  messagesContainer.appendChild(userMsgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Append Temporary AI Loading / Typing Indicator
  const aiMsgDiv = document.createElement('div');
  aiMsgDiv.className = 'chat-msg ai';
  aiMsgDiv.innerHTML = `
    <div class="msg-avatar ai-avatar">🤖</div>
    <div class="msg-bubble">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  messagesContainer.appendChild(aiMsgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Generate contextual AI response after realistic brief delay
  setTimeout(() => {
    const aiResponse = generateAIResponse(query);
    const bubble = aiMsgDiv.querySelector('.msg-bubble');
    if (bubble) {
      bubble.innerHTML = aiResponse;
    }
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 600);
}

function generateAIResponse(query) {
  const rawQ = query.trim();
  const q = rawQ.toLowerCase().replace(/[?!.,;:]/g, '');
  state.chatContext.turnCount++;

  // Helper: check if q contains any of the given phrases
  function has() {
    var words = Array.prototype.slice.call(arguments);
    return words.some(function(w) { return q.includes(w); });
  }

  // -------------------------------------------------------------
  // 1. CONVERSATION CONTEXT & FOLLOW-UP RECOGNITION
  // -------------------------------------------------------------
  var isFollowUp =
    has('what happens after', 'what happens next', 'what next', 'after that',
        'and then', 'how do i track it', 'how to track it',
        'how do i collect it', 'how can i collect it',
        'where do i pick it up', 'where to collect',
        'who is assigned', 'who handles it', 'how long does it take',
        'what should i do today', 'what are my priorities');

  // Context-aware plan follow-up
  var isPlanRequest =
    has('make a plan', 'make me a plan', 'create a plan', 'give me a plan',
        'plan for it', 'plan for this', 'help me plan', 'prepare for it',
        'help me prepare', 'how do i prepare', 'what should i study',
        'make a study plan', 'make me a study plan', 'create a study schedule');

  if (isFollowUp && state.chatContext.lastIntent) {
    var lastIntent = state.chatContext.lastIntent;

    if (lastIntent === 'broken_streetlight' || lastIntent === 'unsafe_area_report' || lastIntent === 'report_issue' || lastIntent === 'maintenance') {
      return '<p><strong>Here is what happens after your report is submitted:</strong></p>' +
        '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
        '<li><strong>AI Categorization & Geotagging:</strong> Campus AI classifies the severity score and tags the campus map location within seconds.</li>' +
        '<li><strong>Department Dispatch:</strong> Urgent hazards route directly to Campus Maintenance and Security Patrol Unit 3.</li>' +
        '<li><strong>Live Progress Updates:</strong> Your ticket transitions: <em>Reported</em> \u2794 <em>Assigned</em> \u2794 <em>In Progress</em>. Monitor it in <a href="javascript:void(0)" onclick="navigateTo(\'campusIssues\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Campus Issues</a>.</li>' +
        '<li><strong>Community Verification:</strong> Once resolved, students and ground staff confirm the repair to officially close the ticket.</li>' +
        '</ol>' +
        '<p>Expected turnaround: <strong>15\u201330 minutes</strong> for safety hazards, <strong>1\u20132 hours</strong> for maintenance requests.</p>';
    }

    if (lastIntent === 'lost_id' || lastIntent === 'lost_found') {
      return '<p><strong>To collect your matched item:</strong></p>' +
        '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
        '<li>Head to the <strong>Central Library Security Counter (Desk #2)</strong>.</li>' +
        '<li>Operating hours: <strong>8:00 AM \u2013 8:00 PM</strong>.</li>' +
        '<li>State your Campus ID <code>STU1001</code> to the officer on duty.</li>' +
        '<li>The officer will verify the item details and perform a secure physical handover.</li>' +
        '</ol>' +
        '<p>\uD83D\uDD12 <em>Your personal phone number was not published or exposed during this match.</em></p>';
    }

    if (lastIntent === 'exam_plan' || lastIntent === 'study_plan' || lastIntent === 'planner') {
      return '<p><strong>Your Top 3 Priorities for Today:</strong></p>' +
        '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
        '<li><strong>Complete Programming Assignment:</strong> Linked Lists & Array operations (1.5 hrs).</li>' +
        '<li><strong>Revise Mathematics Unit 2:</strong> Calculus limits & formula sheet (1 hr).</li>' +
        '<li><strong>DSA Practice:</strong> Solve 3 LeetCode Medium problems (45 mins).</li>' +
        '</ol>' +
        '<p>Check these off in your <a href="javascript:void(0)" onclick="navigateTo(\'planner\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Student Planner</a>!</p>';
    }

    if (lastIntent === 'hackathon') {
      return '<p><strong>Hackathon Day-by-Day Execution Plan:</strong></p>' +
        '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
        '<li><strong>Day 1 (Today):</strong> Finalize problem statement, assign team roles (Frontend, Backend, AI/Data, Pitch).</li>' +
        '<li><strong>Day 2:</strong> Build core MVP \u2014 basic UI wireframes + working backend API endpoints.</li>' +
        '<li><strong>Day 3:</strong> Integrate all modules, fix critical bugs, add real data/demo flows.</li>' +
        '<li><strong>Day 4:</strong> Polish UI, add error handling, prepare demo script and slides.</li>' +
        '<li><strong>Day 5 (Day before):</strong> Full dry run, test all scenarios, rest and review pitch.</li>' +
        '</ol>' +
        '<p>\uD83D\uDCA1 Judges look for a <strong>working demo</strong>, a clear <strong>problem statement</strong>, and a compelling <strong>impact story</strong>.</p>';
    }

    if (lastIntent === 'parking_status') {
      return '<p><strong>Parking Action Guidance:</strong></p>' +
        '<ul>' +
        '<li>If you encounter blocked routes or illegal parking near Gate 2, tap <strong>Quick Report</strong> in <a href="javascript:void(0)" onclick="navigateTo(\'parking\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Parking & Traffic</a>.</li>' +
        '<li>Security Ground Staff will be dispatched to clear the obstruction.</li>' +
        '<li>Gate 1 Parking remains the fastest option with ~75 vacant bays.</li>' +
        '</ul>';
    }

    if (lastIntent === 'emergency_sos') {
      return '<p><strong>During an ongoing emergency:</strong></p>' +
        '<ul>' +
        '<li>Campus Rapid Response Unit reaches any campus zone within <strong>3 to 5 minutes</strong>.</li>' +
        '<li>Stay on the phone with security: <strong>+91 90000 00001</strong> (Demo).</li>' +
        '<li>If you feel unsafe moving, remain inside the nearest guarded building (Library or Academic Block).</li>' +
        '</ul>';
    }

    state.chatContext.lastIntent = 'followup';
    return '<p><strong>Here is what happens next in the CampusPulse workflow:</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li><strong>AI Categorization:</strong> Campus AI classifies severity and tags the campus map location within 60 seconds.</li>' +
      '<li><strong>Automated Dispatch:</strong> Urgent safety reports route directly to Campus Security and Maintenance teams.</li>' +
      '<li><strong>Live Tracking:</strong> You can track ticket progress in real-time under <a href="javascript:void(0)" onclick="navigateTo(\'campusIssues\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Campus Issues</a>.</li>' +
      '<li><strong>Community Verification:</strong> Once resolved, students and staff confirm the fix to verify ticket closure.</li>' +
      '</ol>';
  }

  // Context-aware plan follow-up after discussing a topic
  if (isPlanRequest && state.chatContext.lastIntent) {
    if (state.chatContext.lastIntent === 'hackathon') {
      return '<p>\uD83C\uDFC6 <strong>Hackathon Preparation Plan (5 Days to D-Day):</strong></p>' +
        '<ul>' +
        '<li><strong>Day 1:</strong> Ideation \u2014 define problem, target users, and unique solution.</li>' +
        '<li><strong>Day 2:</strong> Architecture \u2014 tech stack selection, API design, UI wireframes.</li>' +
        '<li><strong>Day 3:</strong> Build \u2014 core features working end-to-end (MVP).</li>' +
        '<li><strong>Day 4:</strong> Polish & Integration \u2014 bug fixes, edge cases, smooth demo flow.</li>' +
        '<li><strong>Day 5 (Hackathon Day):</strong> Pitch deck ready, 3-minute demo rehearsed, backup plan ready.</li>' +
        '</ul>' +
        '<p>\uD83D\uDCA1 Pro Tip: Focus on a <strong>working demo</strong> over a perfect codebase. Judges reward impact and clarity!</p>';
    }
    if (state.chatContext.lastIntent === 'exam_plan' || state.chatContext.lastIntent === 'study_plan') {
      return '<p>\uD83D\uDCDA <strong>Exam Study Plan (7 Days):</strong></p>' +
        '<ul>' +
        '<li><strong>Day 1\u20132:</strong> Review core concepts and formulas. Make summary notes.</li>' +
        '<li><strong>Day 3\u20134:</strong> Solve past-year question papers and practice problems.</li>' +
        '<li><strong>Day 5:</strong> Full timed mock test (simulate exam conditions).</li>' +
        '<li><strong>Day 6:</strong> Revise weak areas and clarify doubts with classmates/faculty.</li>' +
        '<li><strong>Day 7:</strong> Light review, early sleep, stay hydrated.</li>' +
        '</ul>' +
        '<p>\u23F3 Use the <a href="javascript:void(0)" onclick="navigateTo(\'planner\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Student Planner</a> to schedule each session!</p>';
    }
  }

  // -------------------------------------------------------------
  // 2. SPECIFIC INTENT MATCHING (ordered by specificity)
  // -------------------------------------------------------------

  // ── HACKATHON / COMPETITION PLANNING ──
  if (has('hackathon', 'hack-a-thon', 'coding competition', 'tech fest', 'techfest', 'code competition')) {
    state.chatContext.lastIntent = 'hackathon';
    state.chatContext.lastTopic = 'Hackathon Planning';
    var wantsPlan = has('plan', 'prepare', 'preparation', 'schedule', 'roadmap', 'how to', 'strategy', 'tips', 'make', 'create', 'give');
    if (wantsPlan) {
      return '<p>\uD83C\uDFC6 <strong>Hackathon Preparation Plan \u2014 Next Week:</strong></p>' +
        '<ul>' +
        '<li><strong>Day 1 (Today):</strong> Finalize your team and problem domain. Decide on tech stack (React/Node/Python/ML etc.).</li>' +
        '<li><strong>Day 2:</strong> Design wireframes + system architecture. Set up repository and development environment.</li>' +
        '<li><strong>Day 3:</strong> Build core MVP \u2014 make the essential feature work end-to-end.</li>' +
        '<li><strong>Day 4:</strong> Add secondary features, integrate APIs, test edge cases.</li>' +
        '<li><strong>Day 5:</strong> Polish UI, prepare demo dataset, record backup demo video.</li>' +
        '<li><strong>Day 6 (Day before):</strong> Full dry run, prepare 3-minute pitch, rest early.</li>' +
        '<li><strong>Hackathon Day:</strong> Arrive early, set up, stay calm and focused on your working demo.</li>' +
        '</ul>' +
        '<p>\uD83C\uDFC6 <strong>Winning tips:</strong> Clear problem statement \u2192 Working demo \u2192 Strong impact story. Judges reward execution over complexity!</p>' +
        '<p>Want to block time in your <a href="javascript:void(0)" onclick="navigateTo(\'planner\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Student Planner</a>?</p>';
    }
    return '<p>\uD83C\uDFC6 <strong>Hackathon Overview \u2014 What You Need:</strong></p>' +
      '<ul>' +
      '<li><strong>Team Roles:</strong> Frontend, Backend, AI/Data, Design, Pitch Lead.</li>' +
      '<li><strong>Key Phases:</strong> Ideation \u2192 Prototype \u2192 MVP Build \u2192 Polish \u2192 Demo.</li>' +
      '<li><strong>Must-Have:</strong> A live working demo, clear problem statement, and impact pitch.</li>' +
      '</ul>' +
      '<p>Would you like a <strong>day-by-day preparation plan</strong>? Just ask: <em>"Make me a plan for it!"</em></p>';
  }

  // ── MAINTENANCE / BROKEN EQUIPMENT ──
  if (
    (has('fan', 'ac', 'air conditioner', 'projector', 'broken', 'not working', 'damaged', 'repair',
         'maintenance', 'fixture', 'electricity', 'water supply', 'leaking', 'pipe', 'lift', 'elevator',
         'wifi not', 'internet not', 'power cut', 'power outage', 'flush', 'tap', 'washroom', 'toilet') &&
     !has('report unsafe', 'unsafe area', 'women safety', 'reckless'))
  ) {
    state.chatContext.lastIntent = 'maintenance';
    state.chatContext.lastTopic = 'Maintenance / Infrastructure';
    var item = 'equipment';
    if (has('fan')) item = 'classroom fan';
    else if (has('ac', 'air conditioner')) item = 'air conditioner';
    else if (has('projector')) item = 'projector';
    else if (has('wifi', 'internet')) item = 'Wi-Fi/internet connection';
    else if (has('lift', 'elevator')) item = 'elevator';
    else if (has('washroom', 'toilet', 'flush', 'tap')) item = 'washroom facility';
    else if (has('light', 'bulb')) item = 'lighting fixture';
    return '<p>\uD83D\uDD27 <strong>Reporting a broken ' + item + ':</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li>Open the <a href="javascript:void(0)" onclick="navigateTo(\'reportIssue\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Report Issue</a> module.</li>' +
      '<li>Select the <strong>\uD83D\uDD27 Maintenance / Infrastructure</strong> category.</li>' +
      '<li>Enter the exact location (e.g., "Block A, Room 204") and describe the problem clearly.</li>' +
      '<li>Set Priority to <strong>High</strong> if it\'s affecting classes or safety.</li>' +
      '<li>Submit \u2014 the Campus Maintenance team will be notified immediately.</li>' +
      '</ol>' +
      '<p>\uD83D\uDCCB Your complaint will move through: <code>Reported</code> \u2794 <code>AI Categorized</code> \u2794 <code>Assigned</code> \u2794 <code>In Progress</code> \u2794 <code>Resolved</code>.</p>' +
      '<p>Track it anytime in <a href="javascript:void(0)" onclick="navigateTo(\'campusIssues\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Complaint Tracking</a>.</p>';
  }

  // ── UNSAFE AREA / SAFETY REPORTING ──
  if (
    (has('report') && has('unsafe', 'danger', 'hazard', 'safety issue')) ||
    has('unsafe area', 'report unsafe', 'how to report an unsafe', 'unsafe pathway', 'poorly lit', 'isolated area', 'dark area', 'dark pathway')
  ) {
    state.chatContext.lastIntent = 'unsafe_area_report';
    state.chatContext.lastTopic = 'Unsafe Area Reporting';
    return '<p>\uD83D\uDEE1\uFE0F <strong>How to report an unsafe area on campus:</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li>Open the <a href="javascript:void(0)" onclick="navigateTo(\'reportIssue\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Report Issue</a> module.</li>' +
      '<li>Select <strong>\uD83D\uDEE1\uFE0F Safety</strong> or <strong>\uD83D\uDC69 Women\'s Safety</strong> as the category.</li>' +
      '<li>Describe the concern (e.g., <em>"Low visibility near parking exit"</em> or <em>"Isolated pathway behind Block B"</em>).</li>' +
      '<li>Select the campus location and set Priority to <strong>High</strong>.</li>' +
      '<li>Optionally attach a photo for verification.</li>' +
      '</ol>' +
      '<p>CampusPulse operates on <strong>PREVENT \u2192 REPORT \u2192 RESPOND \u2192 VERIFY \u2192 IMPROVE</strong>. Recurring reports trigger structural lighting and security patrol audits.</p>';
  }

  // ── BROKEN STREETLIGHT / LIGHTING ──
  if (
    has('broken streetlight', 'broken light', 'streetlight', 'street light', 'light not working') ||
    (has('light', 'lamp', 'bulb') && has('report', 'broken', 'not working', 'fix', 'dark'))
  ) {
    state.chatContext.lastIntent = 'broken_streetlight';
    state.chatContext.lastTopic = 'Streetlight Reporting';
    return '<p>\uD83D\uDCA1 <strong>Reporting a broken streetlight:</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li>Open the <a href="javascript:void(0)" onclick="navigateTo(\'reportIssue\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Report Issue Wizard</a>.</li>' +
      '<li>Select the <strong>\uD83D\uDCA1 Lighting</strong> category.</li>' +
      '<li>Select the exact pathway (e.g., <em>Girls\' Hostel Road</em> or <em>Academic Block Walkway</em>).</li>' +
      '<li>Hit <strong>Submit Report</strong>.</li>' +
      '</ol>' +
      '<p>\uD83D\uDCCC <em>Active Notice:</em> Ticket <strong>CP-2026-047</strong> (Broken Streetlight \u2014 Girls\' Hostel Road) is currently <strong>In Progress</strong> with the electrical maintenance crew.</p>';
  }

  // ── LOST & FOUND ──
  if (
    has('lost my id', 'lost id card', 'lost id', 'id card', 'lost wallet', 'lost item',
        'lost something', 'found something', 'lost and found', 'lost my phone',
        'lost my bag', 'lost my book', 'lost my key', 'missing item', 'i lost', 'lost my')
  ) {
    state.chatContext.lastIntent = 'lost_id';
    state.chatContext.lastTopic = 'Lost & Found';
    var lostItem = 'item';
    if (has('id card', 'id')) lostItem = 'ID Card';
    else if (has('wallet')) lostItem = 'wallet';
    else if (has('phone')) lostItem = 'phone';
    else if (has('key')) lostItem = 'keys';
    else if (has('book', 'notebook')) lostItem = 'book';
    var matchBox = (lostItem === 'ID Card') ?
      '<div style="background:rgba(0,212,255,0.08);padding:0.75rem;border-radius:8px;border:1px solid rgba(0,212,255,0.25);margin:0.6rem 0"><strong>\uD83C\uDFAF Possible Match Found:</strong> University ID Card \u2014 94% Match<br/><span style="font-size:0.8rem;color:var(--text-secondary)">Found near Library Entrance \u00B7 Submitted to Central Security Desk</span></div>' : '';
    return '<p>\uD83D\uDD0E <strong>Lost & Found \u2014 Reporting a Lost ' + lostItem + ':</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li>Go to the <a href="javascript:void(0)" onclick="navigateTo(\'lostFound\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Lost & Found Module</a>.</li>' +
      '<li>Click <strong>Report Lost Item</strong> and fill in the item name, approximate location, and time.</li>' +
      '<li>Campus AI will automatically scan existing found-item reports for matches.</li>' +
      '<li>If a match is found, you\'ll receive an in-app notification and can initiate a secure contact request.</li>' +
      '<li>Collect your item from the <strong>Campus Security Desk</strong> (Admin Block, Room 102) with your student ID.</li>' +
      '</ol>' +
      matchBox;
  }

  // ── COMPLAINT TRACKING ──
  if (
    has('track my complaint', 'track complaint', 'track my ticket', 'track ticket',
        'my complaints', 'complaint status', 'status of my report', 'where is my complaint',
        'complaint tracking', 'check my complaint', 'complaint progress', 'follow up on complaint')
  ) {
    state.chatContext.lastIntent = 'complaint_tracking';
    state.chatContext.lastTopic = 'Complaint Tracking';
    return '<p>\uD83D\uDCCB <strong>Complaint Tracking:</strong></p>' +
      '<p>Open <a href="javascript:void(0)" onclick="navigateTo(\'campusIssues\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Complaint Tracking</a> to see your report status:</p>' +
      '<p><code>Reported</code> \u2794 <code>AI Categorized</code> \u2794 <code>Assigned</code> \u2794 <code>In Progress</code> \u2794 <code>Resolved</code> \u2794 <code>Verified</code></p>' +
      '<p><strong>Your Active Complaints:</strong></p>' +
      '<ul>' +
      '<li><strong>CP-2026-047:</strong> Broken Streetlight (Girls\' Hostel Rd) \u2014 <strong style="color:var(--orange)">In Progress</strong></li>' +
      '<li><strong>CP-2026-081:</strong> Aggressive Dog (Canteen) \u2014 <strong style="color:var(--cyan)">Assigned</strong></li>' +
      '</ul>' +
      '<p>View full timelines and audit logs in the <a href="javascript:void(0)" onclick="navigateTo(\'campusIssues\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Campus Issues Dashboard</a>.</p>';
  }

  // ── PARKING & TRAFFIC ──
  if (has('parking', 'park my', 'where to park', 'gate 1', 'gate 2', 'crowded', 'congestion', 'parking space', 'two wheeler', 'bike parking')) {
    state.chatContext.lastIntent = 'parking_status';
    state.chatContext.lastTopic = 'Parking Status';
    return '<p>\uD83D\uDE97 <strong>Live Campus Parking Telemetry:</strong></p>' +
      '<ul>' +
      '<li><strong>Gate 1 Parking:</strong> \uD83D\uDFE2 <em>Low Traffic</em> (~25% occupied \u2014 75 spaces available)</li>' +
      '<li><strong>Gate 2 Parking:</strong> \uD83D\uDFE0 <em>Busy</em> (~68% occupied \u2014 moderate delays)</li>' +
      '<li><strong>Academic Block:</strong> \uD83D\uDD34 <em>Heavy Congestion</em> (~92% full \u2014 overflow reported)</li>' +
      '</ul>' +
      '<p>\uD83D\uDCA1 <strong>Recommendation:</strong> Use <strong>Gate 1 Parking</strong> for fastest entry without delay.</p>' +
      '<p>Check the live occupancy bars under <a href="javascript:void(0)" onclick="navigateTo(\'parking\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Parking & Traffic</a>.</p>';
  }

  // ── RECKLESS DRIVING / TRAFFIC SAFETY ──
  if (has('reckless', 'speeding', 'over speed', 'speed limit', 'dangerous driving', 'traffic violation')) {
    state.chatContext.lastIntent = 'report_issue';
    state.chatContext.lastTopic = 'Traffic Safety';
    return '<p>\uD83D\uDEA6 <strong>Reporting a Traffic / Reckless Driving Incident:</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li>Open <a href="javascript:void(0)" onclick="navigateTo(\'reportIssue\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Report Issue</a> and select <strong>\uD83D\uDEA6 Traffic & Safety</strong>.</li>' +
      '<li>Note the vehicle number (if visible), location, and approximate time.</li>' +
      '<li>Set priority to <strong>High</strong> and submit.</li>' +
      '</ol>' +
      '<p>\uD83D\uDCCC Active: <strong>CP-2026-022</strong> \u2014 Reckless driving near Sports Arena (Investigation: In Progress, Speed bump audit requested).</p>' +
      '<p>Campus speed limit is <strong>15 km/h</strong>. Violations are logged and escalated to security.</p>';
  }

  // ── EXAM / STUDY PLAN ──
  if (
    has('exam', 'test next week', 'quiz next', 'assessment next', 'semester exam', 'end term', 'final exam') ||
    has('plan my studies', 'study plan', 'academic plan', 'exam preparation', 'study schedule',
        'midterm', 'planner', 'revision schedule', 'organize my remaining syllabus',
        'create a study schedule', 'upcoming midterm', 'make me a study plan',
        'study for', 'prepare for exam', 'how to study', 'study timetable',
        'i have exams', 'i have an exam')
  ) {
    state.chatContext.lastIntent = 'exam_plan';
    state.chatContext.lastTopic = 'Academic Study Plan';
    var wantsPlanE = has('plan', 'schedule', 'roadmap', 'prepare', 'how to study', 'make', 'create', 'give me', 'timetable');
    if (wantsPlanE) {
      return '<p>\uD83D\uDCDA <strong>7-Day Exam Study Plan:</strong></p>' +
        '<ul>' +
        '<li><strong>Day 1:</strong> Review syllabus outline \u2014 identify high-weightage topics and mark gaps.</li>' +
        '<li><strong>Day 2:</strong> Core concepts revision \u2014 make notes and formula sheets for each subject.</li>' +
        '<li><strong>Day 3:</strong> Solve last 3 years\' question papers (timed practice).</li>' +
        '<li><strong>Day 4:</strong> Focus on weak areas identified in Day 3 practice.</li>' +
        '<li><strong>Day 5:</strong> Full 2-hour timed mock exam simulation.</li>' +
        '<li><strong>Day 6:</strong> Group study / doubts clearance with classmates or faculty.</li>' +
        '<li><strong>Day 7 (Day before exam):</strong> Light review, organize stationery, early sleep.</li>' +
        '</ul>' +
        '<p>\u23F3 <strong>Exam Countdown:</strong> Midterm Examination in <strong>17 Days</strong>.</p>' +
        '<p>Sync with the <a href="javascript:void(0)" onclick="navigateTo(\'planner\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Student AI Planner</a> to block time slots!</p>';
    }
    return '<p>\uD83D\uDCDA <strong>Academic Planning \u2014 Here\'s What I Can Help With:</strong></p>' +
      '<ul>' +
      '<li>\uD83D\uDCC5 Create a personalized <strong>day-by-day study roadmap</strong></li>' +
      '<li>\uD83D\uDCCA Identify <strong>high-priority topics</strong> based on exam weightage</li>' +
      '<li>\u23F0 Schedule <strong>revision sessions</strong> with countdowns</li>' +
      '<li>\uD83D\uDCDD Generate a <strong>mock exam schedule</strong></li>' +
      '</ul>' +
      '<p>Tell me more: <em>"I have an exam next week, make me a study plan"</em> or visit the <a href="javascript:void(0)" onclick="navigateTo(\'planner\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Student Planner</a>.</p>';
  }

  // ── EMERGENCY & SOS ──
  if (
    has('emergency', 'sos', 'urgent help', 'security number', 'call security',
        'ambulance', 'police', 'fire', 'accident', 'medical emergency', 'help me now',
        'what should i do in an emergency', 'emergency contact', 'danger')
  ) {
    state.chatContext.lastIntent = 'emergency_sos';
    state.chatContext.lastTopic = 'Emergency & SOS';
    return '<p>\uD83D\uDEA8 <strong>Immediate Campus Emergency Protocol:</strong></p>' +
      '<ol style="padding-left:1.25rem;margin:0.5rem 0">' +
      '<li><strong>Call Campus Security immediately:</strong><br/>' +
      '\u2022 Campus Security (Demo): <strong>+91 90000 00001</strong><br/>' +
      '\u2022 Emergency Desk (Demo): <strong>+91 90000 00002</strong><br/>' +
      '\u2022 Campus Medical Desk (Demo): <strong>+91 90000 00004</strong></li>' +
      '<li>If using the app, go to <a href="javascript:void(0)" onclick="navigateTo(\'reportIssue\')" style="color:var(--red);font-weight:700;text-decoration:underline">Report Issue</a> and select <strong>\uD83D\uDEA8 Emergency Priority</strong>.</li>' +
      '<li>Move towards the nearest guarded checkpoint (Main Gate, Library Desk, or Hostel Gate).</li>' +
      '<li>Stay calm and stay on the line with security until help arrives.</li>' +
      '</ol>' +
      '<p style="font-size:0.8rem;color:var(--text-muted)"><em>Future Native App scope includes instant power-button hardware SOS with live GPS location sharing.</em></p>';
  }

  // ── WOMEN'S SAFETY ──
  if (has("women's safety", 'women safety', 'female safety', 'sanitary', 'dispenser', 'harassment', 'confidential complaint', 'private grievance', 'safe escort', 'women helpline')) {
    state.chatContext.lastIntent = 'womens_safety';
    state.chatContext.lastTopic = "Women's Safety";
    return '<p>\uD83D\uDFE3 <strong>Women\'s Safety & Grievance Center:</strong></p>' +
      '<p><em>"Safety starts before an emergency."</em></p>' +
      '<ul>' +
      '<li><strong>Confidential Reporting:</strong> Sensitive grievances are encrypted and visible exclusively to authorized female grievance officers and campus security.</li>' +
      '<li><strong>Facilitated Restocks:</strong> Report empty sanitary pad dispensers (Active ticket: <em>CP-2026-032 in Block B</em>).</li>' +
      '<li><strong>Poorly Lit Pathway Audits:</strong> Flag unsafe or unmonitored routes for security patrol allocation.</li>' +
      '<li><strong>24/7 Helpline (Demo):</strong> <strong>+91 90000 00003</strong></li>' +
      '</ul>' +
      '<p>Access the module via <a href="javascript:void(0)" onclick="showWomensSafetyModal()" style="color:#c084fc;font-weight:700;text-decoration:underline">Women\'s Safety Center</a>.</p>';
  }

  // ── FACULTY / SYLLABUS ──
  if (has('syllabus', 'faculty', 'teaching timeline', 'curriculum', 'class schedule', 'organize syllabus', 'lecture', 'professor', 'teacher')) {
    state.chatContext.lastIntent = 'faculty';
    state.chatContext.lastTopic = 'Faculty Hub';
    return '<p>\uD83D\uDC68\u200D\uD83C\uDFEB <strong>Faculty AI Syllabus Timeline:</strong></p>' +
      '<ul>' +
      '<li><strong>Milestones:</strong> Week 1 (Intro), Week 2 (Core Concepts), Week 3 (Advanced), Week 4 (Revision).</li>' +
      '<li><strong>Schedule Conflict Detected:</strong> Thursday Nov 5 Lab submission overlaps with a class period.</li>' +
      '<li><strong>Uncovered Topic Alert:</strong> <em>"Recursion"</em> has not yet been scheduled before the Midterm.</li>' +
      '<li><strong>Revision Window:</strong> 3 days available before Midterm (Oct 17\u201319).</li>' +
      '</ul>' +
      '<p>Inspect the full calendar in the <a href="javascript:void(0)" onclick="navigateTo(\'facultyHub\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Faculty Hub</a>.</p>';
  }

  // ── CAMPUS FACILITIES ──
  if (has('library', 'canteen', 'sports complex', 'gym', 'hostel', 'academic block', 'timings', 'where is', 'opening hours', 'cafeteria', 'medical center', 'clinic', 'lab timing')) {
    state.chatContext.lastIntent = 'facilities';
    state.chatContext.lastTopic = 'Campus Facilities';
    return '<p>\uD83C\uDFDB\uFE0F <strong>Campus Facilities Directory & Timings:</strong></p>' +
      '<ul>' +
      '<li><strong>Central Library:</strong> 8:00 AM \u2013 10:00 PM (Reading halls & digital center)</li>' +
      '<li><strong>Campus Canteen:</strong> 7:30 AM \u2013 11:00 PM (Central courtyard)</li>' +
      '<li><strong>Sports Complex & Gym:</strong> 6:00 AM \u2013 9:00 PM (Grounds & courts)</li>' +
      '<li><strong>Academic Blocks A & B:</strong> 8:00 AM \u2013 6:00 PM</li>' +
      '<li><strong>Medical/Health Center:</strong> 9:00 AM \u2013 5:00 PM (Mon\u2013Sat)</li>' +
      '</ul>' +
      '<p>Locate all facility markers on the interactive <a href="javascript:void(0)" onclick="navigateTo(\'safetyRadar\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Safety Radar Map</a>.</p>';
  }

  // ── SAFETY ALERTS OVERVIEW ──
  if (has('active alerts', 'safety alerts', 'campus status', 'what are the active', 'any alerts', 'current alerts', 'any incidents')) {
    state.chatContext.lastIntent = 'safety_alerts';
    state.chatContext.lastTopic = 'Safety Alerts';
    return '<p>\uD83D\uDEE1\uFE0F <strong>Current Campus Safety Radar:</strong></p>' +
      '<p>Overall Campus Status: <strong style="color:var(--green)">\uD83D\uDFE2 Campus Normal</strong></p>' +
      '<ul>' +
      '<li>\uD83D\uDD34 <strong>High Priority:</strong> Aggressive dog near Canteen (Assigned to Security).</li>' +
      '<li>\uD83D\uDFE0 <strong>Infrastructure:</strong> Broken streetlight on Girls\' Hostel Road (In Progress).</li>' +
      '<li>\uD83D\uDFE1 <strong>Traffic:</strong> Morning congestion at Gate 2 Parking (Monitoring).</li>' +
      '<li>\uD83D\uDFE3 <strong>Women\'s Grievance:</strong> Sanitary dispenser empty in Block B (Assigned).</li>' +
      '</ul>' +
      '<p>Explore real-time pins on the <a href="javascript:void(0)" onclick="navigateTo(\'safetyRadar\')" style="color:var(--cyan);font-weight:700;text-decoration:underline">Safety Radar Map</a>.</p>';
  }

  // ── GREETINGS / CASUAL ──
  if (
    q === 'hello' || q === 'hi' || q === 'hey' ||
    q.startsWith('hello ') || q.startsWith('hi ') || q.startsWith('hey ') ||
    has('good morning', 'good afternoon', 'good evening', 'how are you', 'who are you', 'good night', 'what\'s up', 'whats up')
  ) {
    state.chatContext.lastIntent = 'greeting';
    state.chatContext.lastTopic = 'Greeting';
    var firstName = state.currentUser && state.currentUser.name ? ' ' + state.currentUser.name.split(' ')[0] : '';
    return '<p>Hi' + firstName + '! \uD83D\uDC4B I\'m <strong>Campus AI</strong>, your intelligent campus assistant.</p>' +
      '<p>I can help you with campus safety, grievances, maintenance, lost & found, parking, academics, planning and other campus services. <strong>What would you like help with?</strong></p>' +
      '<ul>' +
      '<li><em>"How do I report an unsafe area?"</em></li>' +
      '<li><em>"I have an exam next week, make me a study plan"</em></li>' +
      '<li><em>"Is parking near Gate 2 crowded?"</em></li>' +
      '<li><em>"I lost my ID card"</em></li>' +
      '<li><em>"next week hackathon is there, make a proper plan"</em></li>' +
      '</ul>';
  }

  // ── CAPABILITIES / WHAT CAN YOU DO ──
  if (
    has('what can you help me with', 'what can you do', 'what do you do', 'what can you',
        'capabilities', 'features', 'how can you help', 'what are you', 'tell me what you can') ||
    q === 'help'
  ) {
    state.chatContext.lastIntent = 'capabilities';
    state.chatContext.lastTopic = 'Capabilities';
    return '<p>\uD83E\uDD16 <strong>I can help you with:</strong></p>' +
      '<ul>' +
      '<li>\uD83D\uDEE1\uFE0F <strong>Safety Radar:</strong> Real-time hazard monitoring, poorly lit spots, and verified alerts.</li>' +
      '<li>\uD83D\uDEA8 <strong>Report & Track Complaints:</strong> Submit issues and track them from <em>Reported</em> to <em>Verified</em>.</li>' +
      '<li>\uD83D\uDD27 <strong>Maintenance Requests:</strong> Broken fans, lights, washrooms, projectors \u2014 report any facility issue.</li>' +
      '<li>\uD83D\uDD0E <strong>Lost & Found:</strong> AI similarity matching without exposing personal contact details.</li>' +
      '<li>\uD83D\uDE97 <strong>Traffic & Parking:</strong> Live occupancy rates across campus gates.</li>' +
      '<li>\uD83D\uDCDA <strong>Academic Planner:</strong> Personalized study plans, exam countdowns, hackathon prep.</li>' +
      '<li>\uD83D\uDFE3 <strong>Women\'s Safety:</strong> Confidential grievance reporting and safe escort requests.</li>' +
      '<li>\uD83D\uDC68\u200D\uD83C\uDFEB <strong>Faculty Hub:</strong> Syllabus milestone mapping and lecture schedule alignment.</li>' +
      '<li>\uD83D\uDEA8 <strong>Emergency Contacts:</strong> Quick-dial campus security and medical numbers.</li>' +
      '</ul>' +
      '<p>Try asking: <em>"next week hackathon is there, make a proper plan"</em> or <em>"my classroom fan is broken"</em>!</p>';
  }

  // -------------------------------------------------------------
  // 3. SMART FALLBACK — uses actual words from the query
  // -------------------------------------------------------------
  state.chatContext.lastIntent = 'unknown';
  state.chatContext.lastTopic = rawQ;

  var words = rawQ.split(/\s+/).filter(function(w) { return w.length > 2; });
  var topicHint = words.slice(0, 6).join(' ');

  return '<p>I understood you\'re asking about: <strong>"' + escapeHtml(topicHint) + (words.length > 6 ? '...' : '') + '"</strong></p>' +
    '<p>I\'m best at helping with campus-specific topics. Here\'s what I can help with:</p>' +
    '<ul>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'How do I report an unsafe area?\')" style="color:var(--cyan)">\uD83D\uDEE1\uFE0F Report an unsafe area</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'I lost my ID card, what should I do?\')" style="color:var(--cyan)">\uD83D\uDD0E Lost & Found assistance</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'How can I track my complaint?\')" style="color:var(--cyan)">\uD83D\uDCCB Complaint tracking</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'Is the parking area crowded?\')" style="color:var(--cyan)">\uD83D\uDE97 Parking status</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'I have exams next week, make me a study plan\')" style="color:var(--cyan)">\uD83D\uDCDA Exam/study planning</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'next week hackathon is there make a proper plan\')" style="color:var(--cyan)">\uD83C\uDFC6 Hackathon preparation</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'My classroom fan is broken\')" style="color:var(--cyan)">\uD83D\uDD27 Maintenance request</a></li>' +
    '<li><a href="javascript:void(0)" onclick="sendAIMessage(\'What should I do in an emergency?\')" style="color:var(--cyan)">\uD83D\uDEA8 Emergency contacts</a></li>' +
    '</ul>' +
    '<p>Could you rephrase your question with more detail? For example: <em>"My classroom fan in Block A Room 201 is broken"</em> or <em>"I have a hackathon next week, make a proper plan"</em>.</p>';
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ===================================================================
// MODALS & OVERLAYS HELPERS
// ===================================================================
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function showNotifications() {
  document.getElementById('notificationsPanel').classList.add('active');
}

// ===================================================================
// TOAST NOTIFICATIONS
// ===================================================================
function showToast(title, message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <strong>${escapeHtml(title)}</strong>
    <p>${escapeHtml(message)}</p>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-30px)';
    setTimeout(() => toast.remove(), 350);
  }, 4200);
}