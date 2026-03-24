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
   category  : 'academic' = TGA group projects
               'solo'     = feature demos + personal projects
   badge     : card top-left label
   engine    : shown in modal meta row
   duration  : shown in modal meta row
   from      : for solo demos, which project they came from
   youtubeId : YouTube video ID — add after uploading as Unlisted.
               Card will use YouTube thumbnail automatically.
               Modal will autoplay the YouTube embed.
               Example: 'dQw4w9WgXcQ' from youtube.com/watch?v=dQw4w9WgXcQ
   thumbnail : local image override (used if set, else YouTube thumb)
   ══════════════════════════════════════════════════════════════ */
const PROJECTS = [

  /* TGA Group Projects (reverse chronological) */

  {
    id:          'scrapped',
    title:       'Scrapped',
    category:    'academic',
    badge:       'GP8 · 8 Weeks',
    youtubeId:   '-WP-PNvkDtM',
    thumbnail:   null,
    role:        'Gameplay Programmer',
    tags:        ['UE5', 'AngelScript', 'Co-op'],
    engine:      'Unreal Engine 5',
    duration:    '8 Weeks',
    description: 'A split-screen co-op game inspired by It Takes Two, developed in Unreal Engine 5 over 8 weeks using AngelScript. My contributions included charging enemies and hazard movables, among other gameplay systems.'
  },
  {
    id:          'bloom',
    title:       'B.L.O.O.M',
    category:    'academic',
    badge:       'SP7 · 15 Weeks',
    youtubeId:   '7pfMT4nNikI',
    thumbnail:   'assets/Bloom.jpg',
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
    youtubeId:   'lHfOQk_Q4rI',
    thumbnail:   'assets/p6_thumbnail.png',
    role:        'Gameplay Programmer',
    tags:        ['C++', 'Custom Engine', 'ARPG'],
    engine:      'TGE (Custom Engine)',
    duration:    '15 Weeks',
    description: 'A Diablo-like action RPG developed over 15 weeks. I implemented three enemy types (melee attacker, a large stomp enemy, and a ranged attacker), a boid-based flocking system to prevent enemies and the player from clipping through each other, A* pathfinding with a funnel algorithm across the NavMesh for smooth agent movement, and a six-phase boss whose attack patterns are loaded from JSON files, letting level designers create and modify them without code changes.'
  },
  {
    id:          'suspectre',
    title:       'Suspectre',
    category:    'academic',
    badge:       'GP5 · 8 Weeks',
    youtubeId:   'ijQQQ5rgamU',
    thumbnail:   null,
    role:        'Gameplay Programmer',
    tags:        ['Unity', 'Action-Adventure', 'Top-Down'],
    engine:      'Unity',
    duration:    '8 Weeks',
    description: 'A Zelda-inspired top-down action-adventure game developed in Unity over 8 weeks. Among my contributions were slime enemies with multiple variants: melee, ranged, and a divide behaviour that splits a slime into smaller ones on death.'
  },
  {
    id:          'shipwrecked',
    title:       'ShipWrecked',
    category:    'academic',
    badge:       'SP4 · 8 Weeks',
    youtubeId:   null,
    thumbnail:   'assets/ShipWrecked.jpg',
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
    youtubeId:   'QrzTsEr8w0A',
    thumbnail:   'assets/CurseOfDecayu.jpg',
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
    youtubeId:   'Fnrkol5chSs',
    thumbnail:   'assets/SpyWhoBlobbedMePhoto.jpg',
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
    youtubeId:   'SWrEKuWJ2Mw',
    thumbnail:   'assets/Projekt1.jpg',
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
    youtubeId:   '8Qy9YFrYkK8',
    thumbnail:   null,
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
    youtubeId:   'sofNZfpBcJg',
    thumbnail:   'assets/PortFolioAStarGifs.gif',
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
    youtubeId:   'AnT5G6SePOg',
    thumbnail:   null,
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
    youtubeId:   'rIREfan4TGY',
    thumbnail:   null,
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
    youtubeId:   'PZyFZwpe9kc',
    thumbnail:   null,
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
    youtubeId:   '6FdnOi-YNCQ',
    thumbnail:   null,
    role:        'Personal Project',
    tags:        ['Unity', 'Mobile', 'Procedural Gen'],
    description: 'A hyper-casual infinite maze mobile game built to explore maze generation algorithms. The maze generates from a 2D array of 1s and 0s converted to geometry, using a chunk system that spawns sections ahead and removes them behind the player. Features a pursuing black fog that kills both the player and enemies, and time-activated spike hazards.'
  }

];

/* ── Helpers ────────────────────────────────────────────────── */

/* Card thumbnail: local image > YouTube thumbnail > null */
function cardThumb(p) {
  if (p.thumbnail) return p.thumbnail;
  if (p.youtubeId) return 'https://img.youtube.com/vi/' + p.youtubeId + '/maxresdefault.jpg';
  return null;
}

/* YouTube embed URL with autoplay */
function ytEmbed(id) {
  return 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0';
}

/* ── DOM refs ───────────────────────────────────────────────── */
var gridAcademic  = document.getElementById('grid-academic');
var gridSolo      = document.getElementById('grid-solo');
var modal         = document.getElementById('modal');
var modalClose    = document.getElementById('modal-close');
var modalBackdrop = document.getElementById('modal-backdrop');
var modalMedia    = document.getElementById('modal-media-wrap');
var modalTags     = document.getElementById('modal-tags-row');
var modalTitle    = document.getElementById('modal-title');
var modalMeta     = document.getElementById('modal-meta');
var modalRole     = document.getElementById('modal-role');
var modalDesc     = document.getElementById('modal-desc');
var nav           = document.getElementById('nav');

/* ── Card factory ───────────────────────────────────────────── */
function makeCard(p) {
  var isAcademic = p.category === 'academic';
  var tagClass   = isAcademic ? 'card-tag--purple' : 'card-tag--blue';
  var badgeClass = isAcademic ? 'card-badge--purple' : 'card-badge--blue';

  var card = document.createElement('article');
  card.className = 'project-card fade-up';
  card.dataset.category = p.category;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Open ' + p.title);

  /* Thumbnail: local image > YouTube thumbnail > empty */
  var thumb = cardThumb(p);
  var mediaHtml = thumb
    ? '<img src="' + thumb + '" alt="' + p.title + '" loading="lazy" />'
    : '';

  var tagHtml = p.tags.slice(0, 2)
    .map(function(t) { return '<span class="card-tag ' + tagClass + '">' + t + '</span>'; })
    .join('');

  card.innerHTML =
    '<div class="card-media' + (thumb ? '' : ' card-media--empty') + '">' +
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
  container.querySelectorAll('.fade-up').forEach(function(el) {
    revealObserver.observe(el);
  });
}

/* ── Modal open ─────────────────────────────────────────────── */
function openModal(p) {
  modalMedia.innerHTML = '';

  if (p.youtubeId) {
    /* YouTube embed — autoplays after user click */
    var iframe = document.createElement('iframe');
    iframe.src = ytEmbed(p.youtubeId);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    modalMedia.appendChild(iframe);
  } else {
    /* Fallback: show thumbnail or placeholder */
    var thumb = cardThumb(p);
    if (thumb && !thumb.toLowerCase().endsWith('.gif')) {
      var img = document.createElement('img');
      img.src = thumb;
      img.alt = p.title;
      img.style.opacity = '0.5';
      modalMedia.appendChild(img);
    }
    /* Show "upload to YouTube" notice */
    var notice = document.createElement('div');
    notice.className = 'modal-no-video';
    notice.textContent = 'Video coming soon';
    modalMedia.appendChild(notice);
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
  /* Destroy iframe to stop playback */
  setTimeout(function() { modalMedia.innerHTML = ''; }, 380);
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

/* ── Intersection Observer ──────────────────────────────────── */
var revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up').forEach(function(el) {
  revealObserver.observe(el);
});

/* ── Nav scroll ─────────────────────────────────────────────── */
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Init ───────────────────────────────────────────────────── */
renderSection(gridAcademic, 'academic');
renderSection(gridSolo,     'solo');
