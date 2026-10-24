"use strict";
document.addEventListener('DOMContentLoaded', () => {
  const source = window.MasMailPortfolioData;
  const $ = id => document.getElementById(id);
  const overlay = $('portfolioDetail');
  if (!source?.data || !overlay) { console.error('Portfolio: data atau overlay tidak ditemukan.'); return; }
  const data = source.data;
  const track = $('portfolioDetailMediaTrack');
  const dots = $('portfolioDetailMediaIndicators');
  const prev = $('portfolioDetailMediaPrev');
  const next = $('portfolioDetailMediaNext');
  const counter = $('portfolioDetailMediaCounter');
  const sheet = overlay.querySelector('.portfolio-detail-sheet');
  const content = overlay.querySelector('.portfolio-detail-content');
  if (!track || !dots || !sheet) { console.error('Portfolio: elemen galeri tidak lengkap.'); return; }
  let activeId = null, media = [], index = 0, timer = null, previousFocus = null, startX = 0, startY = 0;
  const setText = (id, value) => { const el = $(id); if (el) el.textContent = value || ''; };
  const safeUrl = value => { try { const u = new URL(value, location.href); return ['https:','http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } };
  function youtubeId(m) {
    if (m.id && /^[\w-]{11}$/.test(m.id)) return m.id;
    try {
      const u = new URL(m.url);
      if (!['youtube.com','www.youtube.com','m.youtube.com','youtu.be','www.youtube-nocookie.com'].includes(u.hostname)) return '';
      const id = u.hostname === 'youtu.be' ? u.pathname.slice(1).split('/')[0] : (u.searchParams.get('v') || u.pathname.split('/').filter(Boolean).pop());
      return /^[\w-]{11}$/.test(id) ? id : '';
    } catch { return ''; }
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }
  function stopPlayback() {
    track.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
    track.querySelectorAll('iframe').forEach(f => f.remove());
    // YouTube thumbnail dikembalikan saat berpindah slide
   track.querySelectorAll('.portfolio-detail-youtube').forEach(w => {const b = w.querySelector('button');if (b) b.hidden = false;w.classList.remove('is-playing');});
  }
  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    if (counter) counter.textContent = `${media.length ? index + 1 : 0} / ${media.length}`;
    dots.querySelectorAll('button').forEach((d,i) => { d.classList.toggle('is-active', i===index); d.setAttribute('aria-current',String(i===index)); });
    [prev,next].forEach(b => { if (b) { b.disabled = media.length <= 1; b.hidden = media.length <= 1; } });
    dots.hidden = media.length <= 1;
    if (counter) counter.hidden = media.length <= 1;
  }
function startTimer() {
    stopTimer();
    if (media.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const activeSlide = track.children[index];
    if (activeSlide?.querySelector('iframe, video')) return;
    timer = setInterval(() => {
        show(index + 1);
    }, 5000);
 }
  function show(n) {
    if (!media.length) return;
    stopPlayback();
    index = (n + media.length) % media.length;
    update(); startTimer();
  }
  function renderMedia(item) {
    stopTimer(); stopPlayback(); track.replaceChildren(); dots.replaceChildren();
    media = Array.isArray(item.media) ? item.media : [];
    index = 0;
    if (!media.length) { const p = document.createElement('p'); p.textContent = 'Media belum tersedia.'; p.className = 'portfolio-media-empty'; track.append(p); update(); return; }
    media.forEach((m,i) => {
      const slide = document.createElement('div'); slide.className = 'portfolio-detail-media-slide';
  
if (m.type === 'youtube') {
 const id = youtubeId(m);
    const wrap = document.createElement('div');
    wrap.className = 'portfolio-detail-youtube';
    if (id) {
        // THUMBNAIL VIDEO YOUTUBE
        const thumb = document.createElement('img');
        thumb.src = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        thumb.alt = m.title || 'Thumbnail video YouTube';
        thumb.loading = 'lazy';
        // Jika thumbnail resolusi tinggi tidak tersedia,
        // gunakan ukuran standar YouTube.
        thumb.onerror = function () {
            if (this.dataset.fallback) return;
            this.dataset.fallback = 'true';
            this.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        };
        wrap.appendChild(thumb);
        // TOMBOL PLAY PREMIUM
        const play = document.createElement('button');
        play.type = 'button';
        play.className = 'portfolio-detail-youtube-play';
        play.innerHTML = `
            <span class="premium-play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5.5v13l11-6.5z"/>
                </svg>
            </span>
        `;
        play.setAttribute(
            'aria-label',
            'Putar video YouTube'
        );
        // KETIKA TOMBOL PLAY DIKLIK
        play.addEventListener('click', () => {
            stopTimer();
            wrap.classList.add('is-playing');
            play.hidden = true;
            const iframe = document.createElement('iframe');
            iframe.src =
                `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
            iframe.title =
                m.title || 'Video portofolio';
            iframe.allow =
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            wrap.appendChild(iframe);
        });
        wrap.appendChild(play);
    } else {
        wrap.textContent = 'Link YouTube tidak valid.';
    }
    slide.appendChild(wrap);
}      
      else if (m.type === 'video') {
        const video = document.createElement('video'); video.controls = true; video.playsInline = true; video.preload = 'metadata'; video.src = m.src || ''; if (m.poster) video.poster = m.poster; video.setAttribute('aria-label',m.title || 'Video portofolio'); video.addEventListener('play',stopTimer); slide.append(video);
      } else {
        const img = document.createElement('img'); img.src = m.src || ''; img.alt = m.alt || item.title || 'Gambar portofolio'; img.loading = i ? 'lazy' : 'eager'; slide.append(img);
      }
      track.append(slide);
      const dot = document.createElement('button'); dot.type='button'; dot.className='portfolio-detail-media-indicator'; dot.setAttribute('aria-label',`Lihat media ${i+1}`); dot.addEventListener('click',()=>show(i)); dots.append(dot);
    });
    update(); startTimer();
  }
  function setLink(el, url, label) {
    if (!el) return;
    const valid = safeUrl(url); el.hidden = !valid; el.style.display = valid ? '' : 'none';
    if (valid) el.href = valid;
    const labelEl = el.querySelector('span'); if (labelEl) labelEl.textContent = label;
  }
  function render(item) {
    setText('portfolioDetailCategory',item.categoryLabel || item.category);
    setText('portfolioDetailTitle',item.title);
    setText('portfolioDetailDescription',item.description || item.cardDescription);
    setText('portfolioDetailAbout',item.about);
    const meta = $('portfolioDetailMeta'); if (meta) { meta.replaceChildren(); const values = Array.isArray(item.meta) ? item.meta : (item.meta ? [item.meta] : []); if (item.type==='website') values.push('Responsive Mobile & Desktop'); values.forEach(v=>{ const span=document.createElement('span'); span.className='portfolio-detail-meta-item'; span.textContent=v; meta.append(span); }); meta.hidden = !values.length; }
    const list = $('portfolioDetailHighlights'), section = $('portfolioDetailHighlightsSection'); if (list) { list.replaceChildren(); (item.highlights || []).forEach(v=>{const li=document.createElement('li');li.textContent=v;list.append(li);}); } if(section) section.hidden = !(item.highlights?.length);
    const wa = source.createWhatsAppUrl(item.whatsappMessage);
    const primary = $('portfolioDetailAction'), secondary = $('portfolioDetailConsultation');
    if (item.type === 'website') { setLink(primary,item.websiteUrl,'Kunjungi Website'); setLink(secondary,wa,'Konsultasi'); }
   else if (item.type === 'template') {setLink(primary, item.purchaseUrl || '', item.actionText || 'Gunakan Template');setLink(secondary, wa, item.consultationText || 'Konsultasi');}
    else { setLink(primary,wa,'Konsultasi'); setLink(secondary,'',''); }
    renderMedia(item); if(content) content.scrollTop=0;
  }
  function open(id, changeUrl=true) {
    const item=data[id]; if(!item) { console.warn('Karya tidak ditemukan:',id); return; }
    if(!overlay.classList.contains('is-open')) previousFocus=document.activeElement;
    activeId=id; render(item); overlay.classList.add('is-open'); overlay.setAttribute('aria-hidden','false'); document.body.classList.add('portfolio-detail-open');
    if(changeUrl) { const u=new URL(location.href); u.searchParams.set('karya',id); history.pushState({portfolio:id},'',u); }
    $('portfolioDetailClose')?.focus({preventScroll:true});
  }
  function close(changeUrl=true) {
    stopTimer(); stopPlayback(); overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden','true'); document.body.classList.remove('portfolio-detail-open'); activeId=null;
    if(changeUrl) { const u=new URL(location.href); u.searchParams.delete('karya'); history.replaceState({},'',u); }
    if(previousFocus?.isConnected) previousFocus.focus({preventScroll:true});
  }
  // Event delegation: aman meskipun digital.js membuat ulang seluruh kartu.
  document.addEventListener('click',e=>{
    const trigger=e.target.closest('.portfolio-detail-trigger'); if(!trigger) return;
    const id=trigger.dataset.portfolioId || trigger.dataset.portfolio || trigger.closest('.digital-portfolio-card')?.dataset.portfolioId || trigger.closest('.digital-portfolio-card')?.dataset.portfolio;
    if(data[id]) { e.preventDefault(); open(id); }
  });
  $('portfolioDetailBack')?.addEventListener('click',()=>close());
  $('portfolioDetailClose')?.addEventListener('click',()=>close());
  $('portfolioDetailBackdrop')?.addEventListener('click',()=>close());
  prev?.addEventListener('click',()=>show(index-1)); next?.addEventListener('click',()=>show(index+1));
  const viewport=$('portfolioDetailMediaViewport');
  viewport?.addEventListener('touchstart',e=>{ startX=e.changedTouches[0].clientX; startY=e.changedTouches[0].clientY; },{passive:true});
  viewport?.addEventListener('touchend',e=>{ if(e.target.closest('iframe,video,button')) return; const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY; if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy) && media.length>1) show(index+(dx<0?1:-1)); },{passive:true});
  document.addEventListener('keydown',e=>{ if(!activeId) return; if(e.key==='Escape') close(); else if(e.key==='ArrowLeft' && media.length>1) show(index-1); else if(e.key==='ArrowRight' && media.length>1) show(index+1); });
  window.addEventListener('popstate',()=>{const id=new URLSearchParams(location.search).get('karya'); if(id && data[id]) open(id,false); else close(false);});
  const initial=new URLSearchParams(location.search).get('karya'); if(initial && data[initial]) open(initial,false);
  window.MasMailPortfolio={open,close,data};
});
