"use strict";
/* Upgrade tambahan: fullscreen gambar, bagikan karya, dan pencarian.
   Tidak mengganti sistem detail atau data yang sudah bekerja. */
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('portfolioDetail');
  const grid = document.querySelector('.digital-portfolio-grid');
  const filter = document.querySelector('.digital-portfolio-filter');
  if (!overlay || !grid || !window.MasMailPortfolioData) return;

  // Bagikan karya di dalam panel detail.
  const cta = document.getElementById('portfolioDetailCta');
  if (cta && !document.getElementById('portfolioPremiumShare')) {
    const share = document.createElement('button');
    share.type = 'button'; share.id = 'portfolioPremiumShare';
    share.className = 'portfolio-premium-share';
    share.textContent = '↗  Bagikan Karya';
    share.addEventListener('click', async () => {
      const url = new URL(location.href);
      const id = url.searchParams.get('karya');
      if (!id) return;
      const title = window.MasMailPortfolioData.data[id]?.title || 'Portofolio Mas Mail Digital';
      try {
        if (navigator.share) await navigator.share({title, url: url.href});
        else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(url.href); share.textContent = '✓ Link tersalin'; setTimeout(() => share.textContent = '↗  Bagikan Karya', 2200); }
        else window.prompt('Salin link karya:', url.href);
      } catch (error) { if (error.name !== 'AbortError') window.prompt('Salin link karya:', url.href); }
    });
    cta.insertAdjacentElement('afterend', share);
  }

  // Pencarian karya: bekerja bersama filter kategori.
  if (filter && !document.getElementById('portfolioPremiumSearch')) {
    const wrap = document.createElement('div'); wrap.className = 'portfolio-premium-search-wrap';
    const input = document.createElement('input'); input.type = 'search';
    input.id = 'portfolioPremiumSearch'; input.placeholder = 'Cari karya atau kategori...';
    input.setAttribute('aria-label', 'Cari karya portofolio');
    wrap.append(input); filter.insertAdjacentElement('afterend', wrap);
    const apply = () => {
      const query = input.value.trim().toLocaleLowerCase('id');
      const active = filter.querySelector('.portfolio-filter.active')?.dataset.filter || 'all';
      let visible = 0;
      grid.querySelectorAll('.digital-portfolio-card').forEach(card => {
        const id = card.dataset.portfolioId || card.dataset.portfolio;
        const item = window.MasMailPortfolioData.data[id] || {};
        const text = [item.title, item.categoryLabel, item.description, item.cardDescription, item.category].join(' ').toLocaleLowerCase('id');
        const match = (active === 'all' || card.dataset.category === active) && text.includes(query);
        card.classList.toggle('is-hidden', !match);
        if (match) visible++;
      });
      const empty = document.querySelector('.digital-portfolio-empty');
      if (empty) empty.classList.toggle('is-visible', visible === 0);
    };
    input.addEventListener('input', apply);
    filter.addEventListener('click', event => {
      if (event.target.closest('.portfolio-filter')) setTimeout(apply, 0);
    });
  }

  // Lightbox gambar, tanpa mengganggu video atau carousel.
  const lightbox = document.createElement('div');
  lightbox.className = 'portfolio-premium-lightbox'; lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog'); lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Lihat gambar ukuran besar');
  const img = document.createElement('img'); img.alt = 'Pratinjau gambar karya';
  const close = document.createElement('button'); close.type = 'button';
  close.className = 'portfolio-premium-lightbox-close'; close.textContent = '×';
  close.setAttribute('aria-label', 'Tutup gambar');
  lightbox.append(img, close); document.body.append(lightbox);
  let oldFocus = null;
  function closeLightbox() { if (lightbox.hidden) return; lightbox.hidden = true; img.removeAttribute('src'); oldFocus?.focus?.({preventScroll:true}); }
  close.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.hidden && e.key === 'Escape') { e.stopImmediatePropagation(); closeLightbox(); }
  }, true);
  overlay.addEventListener('click', e => {
    const image = e.target.closest('.portfolio-detail-media-slide img');
    if (!image || image.closest('.portfolio-detail-youtube')) return;
    oldFocus = document.activeElement;
    img.src = image.currentSrc || image.src; img.alt = image.alt;
    lightbox.hidden = false; close.focus({preventScroll:true});
  });
  new MutationObserver(() => { if (!overlay.classList.contains('is-open')) closeLightbox(); })
    .observe(overlay, {attributes:true, attributeFilter:['class']});
});
