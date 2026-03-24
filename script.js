/* ═══════════════════════════════════════════════════════════
   Hugo Ehrman Portfolio
   ═══════════════════════════════════════════════════════════ */

/* ── Asset path encoder ─────────────────────────────────────── */
function asset(filename) {
  return 'assets/' + filename
    .replace(/ /g,  '%20')
    .replace(/#/g,  '%23')
    .replace(/\?/g, '%3F');
}

/* ══════════════════════════════════════════════════════════════
   PROJECT DATA
   category : 'academic' = TGA group projects
              'solo'     = feature demos + personal projects
   badge    : card top-left label
   engine   : shown in modal meta row
   duration : shown in modal meta row
   from     : for solo demos, which project they came from
   ══════════════════════════════════════════════════════════════ */
const PROJECTS = [

  /* TGA Group Projects (reverse chronological) */

  {
    id:          'bloom',
    title:       'B.L.O.O.M',
    category:    'academic',
    badge:       'SP7 · 15 Weeks',
    thumbnail:   'assets/Bloom.jpg',
    video:       asset('21 - EnemyTool.mp4'),
    role:        'Gameplay Programmer',
    tags:        ['C++', 'Custom Engine', 'FPS'],
    engine:      'TGE (Custom Engine)',
    duration:    '15 Weeks',
    description: 'A first-person shooter inspired by Metroid Prime, developed over 15 weeks. My contributions: a behaviour tree system driving complex enemy AI logic; a robot enemy with patrol, seek, and attack states; a level-designer-friendly path editor tool built in C# inside Unity (the team\'s level editor) so designers could create and visualise patrol routes without needing to touch code; and a configurable laser hazard that reads its two endpoints from the editor data.'
  },
  {
    id:          'spite',
    title:       'Spite',
    category:    'academic',
    badge:       'SP6 · 15 Weeks',
    thumbnail:   'assets/p6_thumbnail.png',
    video:       asset('25 - GamePlay.mp4'),
    role:        'Gameplay Programmer',
    tags:        ['C++', 'Custom Engine', 'ARPG'],
    engine:      'TGE (Custom Engine)',
    duration:    '15 Weeks',
    description: 'A Diablo-like action RPG developed over 15 weeks. I implemented three enemy types (melee attacker, a large stomp enemy, and a ranged attacker), a boid-based flocking system to prevent enemies and the player from clipping through each other, A* pathfinding with a funnel algorithm across the NavMesh for smooth agent movement, and a six-phase boss whose attack patterns are loaded from JSON files, letting level designers create and modify them without code changes.'
  },
  {
    id:          'shipwrecked',
    title:       'ShipWrecked',
    category:    'academic',
    badge:       'SP4 · 8 Weeks',
    thumbnail:   'assets/ShipWrecked.jpg',
    video:       null,
    role:        'Gameplay Programmer',
    tags:        ['C++', 'TGE2D', 'Platformer'],
    engine:      'TGE2D (Custom Engine)',
    duration:    '8 Weeks',
    description: 'A Celeste-inspired platformer built in TGE2D over 8 weeks. My contributions included the enemy follow behaviour, back-and-forth hazard movement, camera tracking, and fixing loading issues.'
  },
  {
    id:          'curse-of-decay',
    title:       'Curse of Decay',
    category:    'academic',
    badge:       'SP3 · 8 Weeks',
    thumbnail:   'assets/CurseOfDecayu.jpg',
    video:       asset('07 - TGA21_-_Stockholm_-_Game_Project_#3_-_Curse_of_Decay_Trailer.mp4'),
    role:        'Gameplay Programmer',
    tags:        ['C++', 'TGE2D', 'Bullet Hell'],
    engine:      'TGE2D (Custom Engine)',
    duration:    '8 Weeks',
    description: 'A side-scrolling bullet hell game developed in TGE2D over 8 weeks. I was responsible for the boss enemy, the enemy loading system, level select, a damage blink effect, and the loading systems for pickups and player values.'
  },
  {
    id:          'spy-who-blobbed-me',
    title:       'The Spy Who Blobbed Me',
    category:    'academic',
    badge:       'SP2 · 8 Weeks',
    thumbnail:   'assets/SpyWhoBlobbedMePhoto.jpg',
    video:       asset('09 - SP2_Grupp_5_Trailer_theSpyWhoBlobbedMe.mp4'),
    role:        'Gameplay Programmer',
    tags:        ['Unity', 'Mobile', 'Puzzle'],
    engine:      'Unity',
    duration:    '8 Weeks',
    description: 'A top-down mobile puzzle game developed in Unity over 8 weeks, where the player navigates levels and solves puzzles to eliminate a target. My contributions included draggable interactables, touch input handling, enemy and collectable systems, and character animations.'
  },
  {
    id:          'kit-commander',
    title:       'Kit Commander',
    category:    'academic',
    badge:       'SP1 · 8 Weeks',
    thumbnail:   'assets/Projekt1.jpg',
    video:       asset('02 - spelprojekt1_grupp6_kitCommander_trailerKompliterad.mp4'),
    role:        'Gameplay Programmer',
    tags:        ['Unity', 'Shooter'],
    engine:      'Unity',
    duration:    '8 Weeks',
    description: 'A Starfox-inspired on-rails shooter developed in Unity over 8 weeks, my first group project at TGA. My contributions included the UI, a GameManager that persists player data across levels, collectable systems, health and damage, bouncing off walls, and a fix for a floating-point precision error affecting movement over time.'
  },

  /* Solo Work: Feature Demos and Personal Projects */

  {
    id:          'flocking',
    title:       'Enemy Flocking AI',
    category:    'solo',
    badge:       'From Spite · SP6',
    thumbnail:   null,
    video:       asset('10 - EnemyFlocking.mp4'),
    role:        'Isolated Demo',
    tags:        ['C++', 'AI', 'Steering Behaviours'],
    from:        'Spite (SP6)',
    description: 'Built in Spite to solve enemies and the player walking through each other. Three boid steering rules (separation, cohesion, and alignment) produce coordinated group movement for enemy squads while keeping entities from overlapping. The system runs on both enemies and the player simultaneously.'
  },
  {
    id:          'astar-navmesh',
    title:       'A* and NavMesh Navigation',
    category:    'solo',
    badge:       'From Spite · SP6',
    thumbnail:   'assets/PortFolioAStarGifs.gif',
    video:       asset('26 - NAVMESHNAVIGATIOn.mp4'),
    role:        'Isolated Demo',
    tags:        ['C++', 'Pathfinding', 'NavMesh'],
    from:        'Spite (SP6)',
    description: 'Pathfinding system built for Spite. A* finds the shortest route across the NavMesh, and a string-pulling funnel algorithm smooths the resulting path for natural, fluid agent movement. Handles multiple simultaneous agents navigating complex environments.'
  },
  {
    id:          'boss-ai',
    title:       'Boss AI, JSON Phases',
    category:    'solo',
    badge:       'From Spite · SP6',
    thumbnail:   null,
    video:       asset('22 - Boss.mp4'),
    role:        'Isolated Demo',
    tags:        ['C++', 'AI', 'State Machine'],
    from:        'Spite (SP6)',
    description: 'Six-phase boss for Spite where each phase\'s attack patterns are loaded from JSON files, allowing level designers to author and iterate on patterns without touching code. The boss evaluates player position to select appropriate attacks, keeping each phase distinct.'
  },
  {
    id:          'enemy-tool',
    title:       'Enemy Path Tool',
    category:    'solo',
    badge:       'From B.L.O.O.M · SP7',
    thumbnail:   null,
    video:       asset('21 - EnemyTool.mp4'),
    role:        'Isolated Demo',
    tags:        ['C#', 'Unity', 'Tools Dev'],
    from:        'B.L.O.O.M (SP7)',
    description: 'A level-design tool built in C# inside Unity, which was the team\'s level editor for B.L.O.O.M. Designers place and reorder patrol waypoints visually in Unity; the path data is then read into TGE at runtime so the enemy follows the configured route. No programmer involvement needed to create or adjust patrol paths.'
  },
  {
    id:          'laser',
    title:       'Laser Hazard System',
    category:    'solo',
    badge:       'From B.L.O.O.M · SP7',
    thumbnail:   null,
    video:       asset('11 - Laser.mp4'),
    role:        'Isolated Demo',
    tags:        ['C++', 'TGE', 'Systems'],
    from:        'B.L.O.O.M (SP7)',
    description: 'A configurable laser hazard for B.L.O.O.M that sweeps between two positions defined in the Unity level editor. Fully data-driven: level designers place and configure each instance independently, allowing the same code to produce unique setups across different rooms.'
  },
  {
    id:          'maze-game',
    title:       'Infinite Maze Game',
    category:    'solo',
    badge:       'Personal',
    thumbnail:   null,
    video:       asset('15 - MazeGame.mp4'),
    role:        'Personal Project',
    tags:        ['Unity', 'Mobile', 'Procedural Gen'],
    description: 'A hyper-casual infinite maze mobile game built to explore maze generation algorithms. The maze generates from a 2D array of 1s and 0s converted to geometry, using a chunk system that spawns sections ahead and removes them behind the player. Features a pursuing black fog that kills both the player and enemies in the level, and time-activated spike hazards.'
  }

];

/* ── DOM refs ───────────────────────────────────────────────── */
const gridAcademic  = document.getElementById('grid-academic');
const gridSolo      = document.getElementById('grid-solo');
const modal         = document.getElementById('modal');
const modalClose    = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalMedia    = document.getElementById('modal-media-wrap');
const modalTags     = document.getElementById('modal-tags-row');
const modalTitle    = document.getElementById('modal-title');
const modalMeta     = document.getElementById('modal-meta');
const modalRole     = document.getElementById('modal-role');
const modalDesc     = document.getElementById('modal-desc');
const nav           = document.getElementById('nav');

let activeVideo = null;

/* ── Card factory ───────────────────────────────────────────── */
function makeCard(p) {
  const isAcademic = p.category === 'academic';
  const tagClass   = isAcademic ? 'card-tag--purple' : 'card-tag--blue';
  const badgeClass = isAcademic ? 'card-badge--purple' : 'card-badge--blue';

  const card = document.createElement('article');
  card.className = 'project-card fade-up';
  card.dataset.category = p.category;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Open ' + p.title);

  const isGif    = p.thumbnail && p.thumbnail.toLowerCase().endsWith('.gif');
  const hasVideo = !!p.video;
  let mediaHtml  = '';

  if (isGif) {
    mediaHtml = '<img src="' + p.thumbnail + '" alt="' + p.title + '" loading="lazy" />';
  } else if (hasVideo) {
    const poster = p.thumbnail ? 'poster="' + p.thumbnail + '"' : '';
    mediaHtml = '<video src="' + p.video + '" ' + poster + ' muted loop playsinline preload="none"></video>';
  } else if (p.thumbnail) {
    mediaHtml = '<img src="' + p.thumbnail + '" alt="' + p.title + '" loading="lazy" />';
  }

  const tagHtml = p.tags.slice(0, 2)
    .map(function(t) { return '<span class="card-tag ' + tagClass + '">' + t + '</span>'; })
    .join('');

  card.innerHTML =
    '<div class="card-media">' +
      mediaHtml +
      '<span class="card-badge ' + badgeClass + '">' + p.badge + '</span>' +
      '<div class="card-overlay">' +
        '<div class="play-btn">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="card-info">' +
      '<div class="card-tags">' + tagHtml + '</div>' +
      '<h3 class="card-title">' + p.title + '</h3>' +
      '<p class="card-role">' + p.role + '</p>' +
    '</div>';

  if (hasVideo && !isGif) {
    const vid = card.querySelector('video');
    if (vid) {
      card.addEventListener('mouseenter', function() { vid.play().catch(function() {}); });
      card.addEventListener('mouseleave', function() { vid.pause(); vid.currentTime = 0; });
    }
  }

  card.addEventListener('click', function() { openModal(p); });
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p); }
  });

  return card;
}

/* ── Render sections ────────────────────────────────────────── */
function renderSection(container, category) {
  container.innerHTML = '';
  PROJECTS
    .filter(function(p) { return p.category === category; })
    .forEach(function(p, i) {
      var card = makeCard(p);
      card.style.setProperty('--delay', (i * 0.06) + 's');
      container.appendChild(card);
    });
  container.querySelectorAll('.fade-up').forEach(function(el) { revealObserver.observe(el); });
}

/* ── Modal open ─────────────────────────────────────────────── */
function openModal(p) {
  modalMedia.innerHTML = '';

  if (p.video) {
    var v = document.createElement('video');
    v.src = p.video;
    v.controls = true;
    v.muted = true;
    v.autoplay = true;
    v.playsinline = true;
    modalMedia.appendChild(v);
    activeVideo = v;
  } else if (p.thumbnail) {
    var img = document.createElement('img');
    img.src = p.thumbnail;
    img.alt = p.title;
    modalMedia.appendChild(img);
  }

  var tagClass = p.category === 'academic' ? 'card-tag--purple' : 'card-tag--blue';
  modalTags.innerHTML = p.tags
    .map(function(t) { return '<span class="card-tag ' + tagClass + '">' + t + '</span>'; })
    .join('');

  modalTitle.textContent = p.title;

  var metas = [];
  if (p.engine)   metas.push(p.engine);
  if (p.duration) metas.push(p.duration);
  if (p.from)     metas.push('Part of ' + p.from);
  modalMeta.innerHTML = metas
    .map(function(m) { return '<span class="modal-meta-item">' + m + '</span>'; })
    .join('');

  modalRole.textContent = p.role;
  modalDesc.textContent = p.description;

  modal.classList.toggle('academic', p.category === 'academic');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(function() { modalClose.focus(); });
}

/* ── Modal close ────────────────────────────────────────────── */
function closeModal() {
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (activeVideo) { activeVideo.pause(); activeVideo = null; }
  setTimeout(function() { modalMedia.innerHTML = ''; }, 380);
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

/* ── Intersection Observer ──────────────────────────────────── */
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(function(el) { revealObserver.observe(el); });

/* ── Nav scroll ─────────────────────────────────────────────── */
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Init ───────────────────────────────────────────────────── */
renderSection(gridAcademic, 'academic');
renderSection(gridSolo,     'solo');
