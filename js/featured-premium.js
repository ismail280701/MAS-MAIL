'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('featuredTrack');
  const prev = document.getElementById('featuredPrev');
  const next = document.getElementById('featuredNext');
  const dots = document.getElementById('featuredDots');
  const system = window.MasMailPortfolioData;
  const config = window.MasMailFeaturedConfig;
  if (!track || !prev || !next || !dots || !system || !config) return;

  // Gunakan objek data yang SAMA agar panel detail portofolio mengenali produk khusus.
  Object.entries(config.standaloneProducts || {}).forEach(([id, item]) => {
    if (!system.data[id]) system.data[id] = item;
  });

  const products = (config.featured || [])
    .map(entry => ({ ...entry, product: system.data[entry.id] }))
    .filter(entry => {
      if (entry.product) return true;
      console.warn('Produk unggulan tidak ditemukan:', entry.id);
      return false;
    });

  track.replaceChildren();
  dots.replaceChildren();
  const labelFor = item => item.cardActionText || item.actionText ||
    (item.type === 'website' ? 'Kunjungi Website' : item.type === 'template' ? 'Gunakan Template' : 'Konsultasi');
  const urlFor = item => item.type === 'website' ? item.websiteUrl :
    (item.purchaseUrl || (item.type === 'service' ? system.createWhatsAppUrl(item.whatsappMessage) : ''));
  const safeHref = url => {
    try { const u = new URL(url, location.href); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; }
    catch { return ''; }
  };

  products.forEach(({ id, badge, product: item }, i) => {
    const card = document.createElement('article');
    card.className = 'digital-featured-card featured-premium-card';
    const media = (item.media || []).find(m => m.type === 'image' && m.src);
    const image = document.createElement('div'); image.className = 'digital-featured-image';
    if (media || item.image) {
      const img = document.createElement('img'); img.src = media?.src || item.image;
      img.alt = media?.alt || item.title || 'Produk digital'; img.loading = 'lazy';
      image.append(img);
    }
    if (badge) { const b = document.createElement('span'); b.className = 'digital-featured-badge'; b.textContent = badge; image.append(b); }
    const body = document.createElement('div'); body.className = 'digital-featured-content';
    const cat = document.createElement('span'); cat.className = 'digital-featured-category'; cat.textContent = item.categoryLabel || item.category || 'PRODUK DIGITAL';
    const h = document.createElement('h3'); h.textContent = item.title || id;
    const p = document.createElement('p'); p.textContent = item.cardDescription || item.description || '';
    const actions = document.createElement('div'); actions.className = 'featured-premium-actions';
    const detail = document.createElement('a'); detail.className = 'featured-premium-detail portfolio-detail-trigger';
    detail.href = '?karya=' + encodeURIComponent(id); detail.dataset.portfolioId = id; detail.textContent = 'Lihat Detail';
    actions.append(detail);
    const link = safeHref(urlFor(item));
    if (link) { const buy = document.createElement('a'); buy.className = 'featured-premium-buy';
      buy.href = link; buy.target = '_blank'; buy.rel = 'noopener noreferrer'; buy.textContent = labelFor(item) + ' ↗'; actions.append(buy); }
    body.append(cat, h, p, actions); card.append(image, body); track.append(card);
    const dot = document.createElement('button'); dot.type = 'button'; dot.className = 'digital-featured-dot';
    dot.setAttribute('aria-label', 'Lihat produk ' + (i + 1));
    dot.addEventListener('click', () => go(i)); dots.append(dot);
  });

  const cards = Array.from(track.children);
  let current = 0;
  const getStep = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : (cards[0]?.offsetWidth || 1);
  const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
  const update = () => {
    const maxIndex = cards.length ? Math.min(cards.length - 1, Math.ceil(maxScroll() / Math.max(1, getStep()))) : 0;
    current = Math.min(current, maxIndex);
    Array.from(dots.children).forEach((dot, i) => { dot.classList.toggle('active', i === current); dot.setAttribute('aria-current', String(i === current)); });
    prev.disabled = current <= 0; next.disabled = current >= maxIndex;
    dots.hidden = cards.length <= 1;
  };
  function go(index) {
    if (!cards.length) return;
    current = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({ left: Math.min(cards[current].offsetLeft - cards[0].offsetLeft, maxScroll()), behavior: 'smooth' });
    update();
  }
  prev.addEventListener('click', () => go(current - 1));
  next.addEventListener('click', () => go(current + 1));
  let scrollRaf = 0;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(() => { current = Math.round(track.scrollLeft / Math.max(1, getStep())); update(); });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
});
