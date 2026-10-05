const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];
let width, height;
const STAR_COUNT = 200;
const SPEED = 0.6; // base speed — change to make stars move faster/slower

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      speed: Math.random() * SPEED + 0.1,
      opacity: Math.random() * 0.7 + 0.3,
    });
  }
}

function update() {
  for (const star of stars) {
    star.y += star.speed; // drift downward — swap axis or sign for other directions
    if (star.y > height) {
      star.y = 0;
      star.x = Math.random() * width;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  }
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resize();
  createStars();
});

resize();
createStars();
animate();

/* ---------- Projects ---------- */
const projects = [
  { name: 'B-Minds', type: 'Web', cats: ['webpage'], desc: 'An interactive web experiment blending motion and design into a playful, single-page experience.', links: [{ label: 'Site', url: 'https://imbhuvanesh.github.io/B-minds/' }] },
  { name: 'DIGI NEXUZ', type: 'Web', cats: ['webpage'], desc: 'A digital presence built for a modern brand, featuring a clean layout, bold visuals, and smooth interactions.', links: [{ label: 'Site', url: 'https://imbhuvanesh.github.io/DG/' }] },
  { name: 'IFIXON', type: 'Web', cats: ['webpage'], desc: 'A repair-services website designed to turn a busy industry into a simple and trustworthy online experience.', links: [{ label: 'Site', url: 'https://imbhuvanesh.github.io/ifixon/' }] },
  { name: 'Bills', type: 'Android', cats: ['mobile'], desc: 'A Flutter app for splitting and tracking expenses between friends, designed to be simple, fast, and offline-first.', links: [{ label: 'APK', url: 'https://www.mediafire.com/file/o8a3hwfd9fag5mj/bills.apk/file' }, { label: 'GitHub', url: 'https://github.com/imbhuvanesh/Bills' }] },
  { name: 'Draft', type: 'Android', cats: ['mobile'], desc: 'A clean and minimal note-taking companion designed to make capturing ideas effortless.', links: [{ label: 'APK', url: 'https://www.mediafire.com/file/8ai8zeqvgpysu87/draft.apk/file' }, { label: 'GitHub', url: 'https://github.com/imbhuvanesh/Draft' }] },
  { name: 'Mindful', type: 'Android', cats: ['mobile'], desc: 'A calm companion for focus and reflection, with gentle reminders designed to help users slow down and breathe.', links: [{ label: 'APK', url: 'https://www.mediafire.com/file/cgq7d67f4kkmudh/Mindful.apk/file' }, { label: 'GitHub', url: 'https://github.com/imbhuvanesh/Mindful' }] },
  { name: 'Blue Dangle', type: 'Web & Desktop', cats: ['windows', 'webpage'], desc: 'A playful product experience combining a brand website with a packaged desktop application.', links: [{ label: 'Web', url: 'https://imbhuvanesh.github.io/Bluedangle.in/' }, { label: 'Desktop', url: 'https://www.mediafire.com/file/kd3iomwy4ohb0qm/Blue-Dangle-Setup-1.0.0.exe/file' }] },
  { name: 'DUCK', type: 'Web & Desktop', cats: ['windows', 'webpage'], desc: 'A lightweight Windows app that automatically organises your files.', links: [{ label: 'Web', url: 'https://imbhuvanesh.github.io/Duck.app/' }, { label: 'Desktop', url: 'https://www.mediafire.com/file/rjrpsbuz8td251v/duck.exe/file' }] },
];

const container = document.getElementById('projects');

const icons = {
  web: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .3.2.67.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  mobile: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>',
  desktop: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 1.99-.9 1.99-2L23 4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>',
};

function iconFor(label) {
  const l = label.toLowerCase();
  if (l === 'github') return icons.github;
  if (l === 'apk' || l === 'mobile') return icons.mobile;
  if (l === 'desktop') return icons.desktop;
  return icons.web; // Site, Web, etc.
}

const cards = [];

projects.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'card project-card';
  card.dataset.cats = p.cats.join(' ');
  card.innerHTML = `
    <span class="index">${String(i + 1).padStart(2, '0')}</span>
    <h2>${p.name}</h2>
    <span class="type">${p.type === 'Android' ? icons.mobile : p.type === 'Web & Desktop' ? icons.web + icons.desktop : icons.web} ${p.type}</span>
    <p>${p.desc}</p>
    <div class="links">
      ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${iconFor(l.label)} ${l.label}</a>`).join('')}
    </div>
  `;
  container.appendChild(card);
  cards.push(card);
});

const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = card.dataset.cats.split(' ').includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

// Show Windows projects by default
document.querySelector('.filter-btn.active').click();
