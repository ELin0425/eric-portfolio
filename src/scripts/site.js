// Mobile nav toggle + sticky nav scroll border
const nav = document.getElementById('site-nav');
const menuBtn = document.getElementById('nav-menu-btn');
const panel = document.getElementById('nav-panel');

if (menuBtn && panel) {
  menuBtn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.textContent = isOpen ? 'Close' : 'Menu';
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      panel.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
    });
  });
}

if (nav) {
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Project category filter
const filter = document.getElementById('project-filter');
const grid = document.getElementById('project-grid');
const emptyState = document.getElementById('project-empty-state');

if (filter && grid) {
  const chips = Array.from(filter.querySelectorAll('.filter-chip'));
  const cards = Array.from(grid.querySelectorAll('[data-category]'));

  filter.addEventListener('click', (event) => {
    const chip = event.target.closest('.filter-chip');
    if (!chip) return;

    chips.forEach((c) => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-pressed', String(c === chip));
    });

    const selected = chip.dataset.filter;
    let visibleCount = 0;
    cards.forEach((card) => {
      const matches = selected === 'all' || card.dataset.category === selected;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount > 0;
    }
  });
}

// Scroll reveals: section headers and project cards only
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const headers = Array.from(document.querySelectorAll('[data-reveal]'));
  const cards = Array.from(document.querySelectorAll('[data-reveal-item]'));

  headers.forEach((el) => el.classList.add('js-reveal'));
  cards.forEach((el) => el.classList.add('js-reveal'));

  const cardDelay = new Map(cards.map((el, i) => [el, Math.min(i * 60, 240)]));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = cardDelay.get(el) ?? 0;
        setTimeout(() => el.classList.add('is-visible'), delay);
        obs.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );

  [...headers, ...cards].forEach((el) => observer.observe(el));
}
