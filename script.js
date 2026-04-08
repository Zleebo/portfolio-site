const PROJECTS = [
  {
    id: 'scrapped',
    title: 'Scrapped',
    category: 'academic',
    badge: 'GP8 / 8 Weeks',
    youtubeId: '-WP-PNvkDtM',
    thumbnail: null,
    role: 'Gameplay Programmer',
    tags: ['UE5', 'AngelScript', 'Co-op'],
    engine: 'Unreal Engine 5',
    duration: '8 Weeks',
    description: 'A split-screen co-op game inspired by It Takes Two, developed in Unreal Engine 5 over 8 weeks using AngelScript. My contributions included charging enemies and moving hazards.'
  },
  {
    id: 'bloom',
    title: 'B.L.O.O.M',
    category: 'academic',
    badge: 'SP7 / 15 Weeks',
    youtubeId: '7pfMT4nNikI',
    thumbnail: 'assets/Bloom.jpg',
    role: 'Gameplay Programmer',
    tags: ['C++', 'Custom Engine', 'FPS'],
    engine: 'TGE (Custom Engine)',
    duration: '15 Weeks',
    description: 'A first-person shooter inspired by Metroid Prime, developed over 15 weeks. I built a behavior tree system for enemy AI, a robot enemy with patrol, seek, and attack states, a Unity path editor for designers, and a configurable laser hazard using editor-defined endpoints.'
  },
  {
    id: 'spite',
    title: 'Spite',
    category: 'academic',
    badge: 'SP6 / 15 Weeks',
    youtubeId: 'lHfOQk_Q4rI',
    thumbnail: 'assets/p6_thumbnail.png',
    role: 'Gameplay Programmer',
    tags: ['C++', 'Custom Engine', 'ARPG'],
    engine: 'TGE (Custom Engine)',
    duration: '15 Weeks',
    description: 'A Diablo-like action RPG developed over 15 weeks. I implemented three enemy types, boid-based flocking to avoid clipping, A* pathfinding with funnel smoothing on NavMesh data, and a six-phase boss with JSON-driven attack patterns for designer iteration.'
  },
  {
    id: 'suspectre',
    title: 'Suspectre',
    category: 'academic',
    badge: 'GP5 / 8 Weeks',
    youtubeId: 'ijQQQ5rgamU',
    thumbnail: null,
    role: 'Gameplay Programmer',
    tags: ['Unity', 'Top-Down', 'Action Adventure'],
    engine: 'Unity',
    duration: '8 Weeks',
    description: 'A Zelda-inspired top-down action-adventure game developed in Unity over 8 weeks. I built slime enemies with multiple variants, including melee, ranged, and split-on-death behavior.'
  },
  {
    id: 'shipwrecked',
    title: 'ShipWrecked',
    category: 'academic',
    badge: 'SP4 / 8 Weeks',
    youtubeId: null,
    thumbnail: 'assets/ShipWrecked.jpg',
    role: 'Gameplay Programmer',
    tags: ['C++', 'TGE2D', 'Platformer'],
    engine: 'TGE2D (Custom Engine)',
    duration: '8 Weeks',
    description: 'A Celeste-inspired platformer built in TGE2D over 8 weeks. My contributions included enemy follow behavior, moving hazards, camera tracking, and loading fixes.'
  },
  {
    id: 'curse-of-decay',
    title: 'Curse of Decay',
    category: 'academic',
    badge: 'SP3 / 8 Weeks',
    youtubeId: 'QrzTsEr8w0A',
    thumbnail: 'assets/CurseOfDecayu.jpg',
    role: 'Gameplay Programmer',
    tags: ['C++', 'TGE2D', 'Bullet Hell'],
    engine: 'TGE2D (Custom Engine)',
    duration: '8 Weeks',
    description: 'A side-scrolling bullet hell game developed in TGE2D over 8 weeks. I was responsible for the boss enemy, enemy loading systems, level select, a damage blink effect, and loading of pickups and player values.'
  },
  {
    id: 'spy-who-blobbed-me',
    title: 'The Spy Who Blobbed Me',
    category: 'academic',
    badge: 'SP2 / 8 Weeks',
    youtubeId: 'Fnrkol5chSs',
    thumbnail: 'assets/SpyWhoBlobbedMePhoto.jpg',
    role: 'Gameplay Programmer',
    tags: ['Unity', 'Mobile', 'Puzzle'],
    engine: 'Unity',
    duration: '8 Weeks',
    description: 'A top-down mobile puzzle game developed in Unity over 8 weeks. I built draggable interactables, touch input handling, enemy and collectable systems, and character animations.'
  },
  {
    id: 'kit-commander',
    title: 'Kit Commander',
    category: 'academic',
    badge: 'SP1 / 8 Weeks',
    youtubeId: 'SWrEKuWJ2Mw',
    thumbnail: 'assets/Projekt1.jpg',
    role: 'Gameplay Programmer',
    tags: ['Unity', 'Shooter'],
    engine: 'Unity',
    duration: '8 Weeks',
    description: 'A Starfox-inspired on-rails shooter developed in Unity over 8 weeks, my first group project at TGA. I worked on UI, a persistent GameManager, collectables, health and damage, wall bounce behavior, and a movement precision bug fix.'
  },
  {
    id: 'custom-engine',
    title: 'Custom C++ Engine & Tooling',
    category: 'solo',
    badge: 'Personal Engine',
    youtubeId: null,
    thumbnail: 'assets/engine-feature-still.png',
    role: 'Engine / Gameplay Programmer',
    tags: ['C++', 'DirectX 11', 'Tools', 'Physics'],
    engine: 'Custom Engine',
    description: 'A personal engine project focused on gameplay prototyping. It includes editor workflow tools, terrain rendering and collision, scene and prefab loading, and debug tooling used to inspect systems across rendering, physics, and gameplay. Vehicle physics is part of the ongoing low-level systems work here, not a finished feature.'
  },
  {
    id: 'tnp6-networking',
    title: 'UDP Gameplay Replication Prototype',
    category: 'solo',
    badge: 'Networking Prototype',
    youtubeId: null,
    thumbnail: 'assets/tnp6-network-preview.png',
    role: 'Gameplay / Network Programmer',
    tags: ['C++', 'UDP', 'Replication', 'Networking'],
    engine: 'TGE / C++',
    description: 'An older networking prototype built to explore UDP gameplay synchronization. It uses sequence numbers, acknowledgements, resend logic, simulated packet loss and latency, proximity-based updates, and client-side interpolation for remote movement.'
  },
  {
    id: 'raytracer',
    title: 'Parallel CPU Raytracer',
    category: 'solo',
    badge: 'Graphics Prototype',
    youtubeId: null,
    thumbnail: 'assets/raytracer-preview.png',
    role: 'Graphics Programmer',
    tags: ['C++', 'Raytracing', 'Rendering', 'Parallelism'],
    engine: 'C++ / CPU Renderer',
    description: 'A small C++ rendering project built to explore CPU raytracing. It loads scenes from text files, renders spheres with directional light, mirror and emissive materials, tone maps the result, and writes PNG output through a parallel render loop.'
  },
  {
    id: 'flocking',
    title: 'Enemy Flocking AI',
    category: 'solo',
    badge: 'From Spite / SP6',
    youtubeId: '8Qy9YFrYkK8',
    thumbnail: null,
    role: 'Isolated Demo',
    tags: ['C++', 'AI', 'Steering Behaviors'],
    from: 'Spite (SP6)',
    description: 'Built in Spite to solve agents walking through each other. Separation, cohesion, and alignment rules produce coordinated movement while keeping enemies and the player from overlapping.'
  },
  {
    id: 'astar-navmesh',
    title: 'A* and NavMesh Navigation',
    category: 'solo',
    badge: 'From Spite / SP6',
    youtubeId: 'sofNZfpBcJg',
    thumbnail: 'assets/PortFolioAStarGifs.gif',
    role: 'Isolated Demo',
    tags: ['C++', 'Pathfinding', 'NavMesh'],
    from: 'Spite (SP6)',
    description: 'Pathfinding system built for Spite. A* finds shortest routes on NavMesh data and a funnel pass smooths paths for cleaner and more natural agent movement, including multi-agent scenarios.'
  },
  {
    id: 'boss-ai',
    title: 'Boss AI, JSON Phases',
    category: 'solo',
    badge: 'From Spite / SP6',
    youtubeId: 'AnT5G6SePOg',
    thumbnail: null,
    role: 'Isolated Demo',
    tags: ['C++', 'AI', 'State Machine'],
    from: 'Spite (SP6)',
    description: 'Six-phase boss system where attack patterns are loaded from JSON. Designers can author and iterate phase behavior without code changes while the boss still reacts to player position in real time.'
  },
  {
    id: 'enemy-tool',
    title: 'Enemy Path Tool',
    category: 'solo',
    badge: 'From B.L.O.O.M / SP7',
    youtubeId: 'rIREfan4TGY',
    thumbnail: null,
    role: 'Isolated Demo',
    tags: ['C#', 'Unity', 'Tools Dev'],
    from: 'B.L.O.O.M (SP7)',
    description: 'A level-design tool built in C# inside Unity, which was the team level editor for B.L.O.O.M. Designers place and reorder patrol waypoints visually and the runtime reads that data directly for enemy behavior.'
  },
  {
    id: 'laser',
    title: 'Laser Hazard System',
    category: 'solo',
    badge: 'From B.L.O.O.M / SP7',
    youtubeId: 'PZyFZwpe9kc',
    thumbnail: null,
    role: 'Isolated Demo',
    tags: ['C++', 'TGE', 'Systems'],
    from: 'B.L.O.O.M (SP7)',
    description: 'A configurable laser hazard for B.L.O.O.M that sweeps between two editor-defined points. The feature is fully data-driven, so level designers can create varied setups without new code.'
  },
  {
    id: 'maze-game',
    title: 'Infinite Maze Game',
    category: 'solo',
    badge: 'Personal',
    youtubeId: '6FdnOi-YNCQ',
    thumbnail: null,
    role: 'Personal Project',
    tags: ['Unity', 'Mobile', 'Procedural Generation'],
    from: null,
    description: 'A hyper-casual infinite maze mobile game used to explore procedural generation. The world streams through chunk spawning and cleanup, with hazards and enemy pressure systems layered on top.'
  }
];

const gridAcademic = document.getElementById('grid-academic');
const gridSolo = document.getElementById('grid-solo');
const modal = document.getElementById('modal');
const modalDialog = document.querySelector('.modal-dialog');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalMedia = document.getElementById('modal-media-wrap');
const modalTags = document.getElementById('modal-tags-row');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalRole = document.getElementById('modal-role');
const modalDesc = document.getElementById('modal-desc');
const nav = document.getElementById('nav');
const footerYear = document.getElementById('year');
const pageRegions = Array.from(document.querySelectorAll('.site-header, main, footer'));
const heroVideo = document.querySelector('.hero-video');

let revealObserver = null;
let lastFocusedElement = null;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createNode(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (typeof text === 'string') {
    element.textContent = text;
  }
  return element;
}

function getCardThumb(project) {
  if (project.thumbnail) {
    return project.thumbnail;
  }
  if (project.youtubeId) {
    return 'https://img.youtube.com/vi/' + project.youtubeId + '/maxresdefault.jpg';
  }
  return null;
}

function getFallbackThumb(project) {
  return 'https://img.youtube.com/vi/' + project.youtubeId + '/hqdefault.jpg';
}

function getYoutubeEmbed(id) {
  return 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1';
}

function getModalFocusableElements() {
  return Array.from(
    modal.querySelectorAll(
      'a[href], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

function setBackgroundInteractivity(isModalOpen) {
  pageRegions.forEach(function(region) {
    if (isModalOpen) {
      region.dataset.previousAriaHidden = region.getAttribute('aria-hidden') || '';
      region.setAttribute('aria-hidden', 'true');
      region.inert = true;
      return;
    }

    if (region.dataset.previousAriaHidden) {
      region.setAttribute('aria-hidden', region.dataset.previousAriaHidden);
    } else {
      region.removeAttribute('aria-hidden');
    }

    delete region.dataset.previousAriaHidden;
    region.inert = false;
  });
}

function trapModalFocus(event) {
  if (!modal.classList.contains('open') || event.key !== 'Tab') {
    return;
  }

  const focusableElements = getModalFocusableElements();

  if (!focusableElements.length) {
    event.preventDefault();
    modalDialog.focus();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!modal.contains(document.activeElement)) {
    event.preventDefault();
    firstElement.focus();
    return;
  }

  if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === modalDialog)) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function observeReveal(element) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    element.classList.add('visible');
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );
  }

  revealObserver.observe(element);
}

function buildProjectCard(project, index) {
  const card = createNode('article', 'project-card project-card--' + project.category + ' fade-up');
  const serial = String(index + 1).padStart(2, '0');
  const thumb = getCardThumb(project);

  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', 'Open project details for ' + project.title);
  card.style.setProperty('--delay', Math.min(index * 0.05, 0.3) + 's');

  const media = createNode('div', 'project-card__media');
  if (!thumb) {
    media.classList.add('project-card__media-fallback');
  }

  if (thumb) {
    const image = createNode('img', 'project-card__image');
    image.src = thumb;
    image.alt = project.title;
    image.loading = 'lazy';

    if (project.youtubeId && !project.thumbnail) {
      image.addEventListener('error', function() {
        image.src = getFallbackThumb(project);
      }, { once: true });
    }

    media.appendChild(image);
  }

  const badge = createNode('span', 'project-card__badge', project.badge);
  const play = createNode('span', 'project-card__play');
  play.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>';

  media.appendChild(badge);
  media.appendChild(play);

  const body = createNode('div', 'project-card__body');
  const meta = createNode('div', 'project-card__meta');
  const serialNode = createNode('span', 'project-card__serial', serial);
  const roleNode = createNode('span', 'project-card__role', project.role);
  const title = createNode('h3', 'project-card__title', project.title);
  const tags = createNode('div', 'project-card__tags');

  project.tags.slice(0, 3).forEach(function(tag) {
    tags.appendChild(createNode('span', 'project-card__tag', tag));
  });

  meta.appendChild(serialNode);
  meta.appendChild(roleNode);
  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(tags);

  card.appendChild(media);
  card.appendChild(body);

  card.addEventListener('click', function() {
    openModal(project);
  });

  card.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(project);
    }
  });

  observeReveal(card);

  return card;
}

function renderSection(container, category) {
  if (!container) {
    return;
  }

  const fragment = document.createDocumentFragment();
  const sectionProjects = PROJECTS.filter(function(project) {
    return project.category === category;
  });

  sectionProjects.forEach(function(project, index) {
    fragment.appendChild(buildProjectCard(project, index));
  });

  container.innerHTML = '';
  container.appendChild(fragment);
}

function buildModalMedia(project) {
  modalMedia.innerHTML = '';

  if (project.youtubeId) {
    const iframe = document.createElement('iframe');
    iframe.src = getYoutubeEmbed(project.youtubeId);
    iframe.title = project.title + ' video';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    modalMedia.appendChild(iframe);
    return;
  }

  const thumb = getCardThumb(project);
  if (thumb) {
    const image = createNode('img', '', null);
    image.src = thumb;
    image.alt = project.title;
    modalMedia.appendChild(image);
    return;
  }

  const message = createNode('div', 'modal-no-video', 'Video Coming Soon');
  modalMedia.appendChild(message);
}

function openModal(project) {
  lastFocusedElement = document.activeElement;

  buildModalMedia(project);

  modalTags.innerHTML = '';
  project.tags.forEach(function(tag) {
    const tagNode = createNode('span', 'modal-tag', tag);
    tagNode.classList.add(project.category === 'academic' ? 'modal-tag--academic' : 'modal-tag--solo');
    modalTags.appendChild(tagNode);
  });

  modalTitle.textContent = project.title;

  const metaItems = [];
  if (project.engine) {
    metaItems.push(project.engine);
  }
  if (project.duration) {
    metaItems.push(project.duration);
  }
  if (project.from) {
    metaItems.push('Part of ' + project.from);
  }

  modalMeta.innerHTML = '';
  metaItems.forEach(function(item) {
    modalMeta.appendChild(createNode('span', 'modal-meta-item', item));
  });

  modalRole.textContent = project.role;
  modalDesc.textContent = project.description;

  modal.classList.toggle('academic', project.category === 'academic');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setBackgroundInteractivity(true);

  window.requestAnimationFrame(function() {
    modalClose.focus();
  });
}

function closeModal() {
  if (!modal.classList.contains('open')) {
    return;
  }

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  setBackgroundInteractivity(false);

  window.setTimeout(function() {
    modalMedia.innerHTML = '';
  }, 260);

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function initNavigationState() {
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links
    .map(function(link) {
      const id = link.getAttribute('href').slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  function updateHeaderState() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  function updateActiveLink() {
    const currentY = window.scrollY + window.innerHeight * 0.36;
    let activeId = sections.length ? sections[0].id : '';

    sections.forEach(function(section) {
      if (section.offsetTop <= currentY) {
        activeId = section.id;
      }
    });

    links.forEach(function(link) {
      const isActive = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('is-active', isActive);
    });
  }

  window.addEventListener('scroll', function() {
    updateHeaderState();
    updateActiveLink();
  }, { passive: true });

  window.addEventListener('resize', updateActiveLink);

  updateHeaderState();
  updateActiveLink();
}

function initStaticReveals() {
  document.querySelectorAll('.fade-up').forEach(function(element) {
    observeReveal(element);
  });
}

function initFooterYear() {
  if (!footerYear) {
    return;
  }
  footerYear.textContent = String(new Date().getFullYear());
}

function initHeroVideo() {
  if (!heroVideo) {
    return;
  }

  heroVideo.addEventListener('loadedmetadata', function() {
    try {
      if (heroVideo.currentTime < 0.1) {
        heroVideo.currentTime = 0.1;
      }
    } catch (error) {
      return;
    }
  }, { once: true });

  heroVideo.play().catch(function() {
    return;
  });
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
    return;
  }

  trapModalFocus(event);
});

renderSection(gridAcademic, 'academic');
renderSection(gridSolo, 'solo');
initStaticReveals();
initNavigationState();
initFooterYear();
