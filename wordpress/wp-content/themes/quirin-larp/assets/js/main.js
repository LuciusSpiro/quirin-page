(function () {
  'use strict';

  // ── Header: scroll shadow ──
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Header: mobile drawer ──
  var burger = document.querySelector('.site-header .burger');
  var drawer = document.querySelector('.site-header .drawer');
  if (burger && drawer) {
    var closeDrawer = function () {
      burger.classList.remove('is-open');
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ── Header: dropdown (click/tap support in addition to CSS :hover) ──
  document.querySelectorAll('.site-header .nav-item-wrap').forEach(function (wrap) {
    var trigger = wrap.querySelector(':scope > .nav-link');
    if (!trigger || !wrap.querySelector('.dropdown')) return;
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) return; // drawer handles mobile
      var isOpen = wrap.classList.contains('is-open');
      document.querySelectorAll('.site-header .nav-item-wrap.is-open').forEach(function (w) {
        w.classList.remove('is-open');
      });
      if (!isOpen) {
        e.preventDefault();
        wrap.classList.add('is-open');
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header .nav-item-wrap')) {
      document.querySelectorAll('.site-header .nav-item-wrap.is-open').forEach(function (w) {
        w.classList.remove('is-open');
      });
    }
  });

  // ── Geschichte: timeline filter + expand ──
  var timelineFilters = document.querySelector('[data-timeline-filters]');
  var timeline = document.querySelector('[data-timeline]');
  if (timelineFilters && timeline) {
    var emptyMsg = document.querySelector('.timeline-empty');
    var items = timeline.querySelectorAll('.ereignis');

    timelineFilters.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      timelineFilters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      var visibleCount = 0;
      items.forEach(function (item) {
        var match = filter === 'alle' || item.getAttribute('data-typ') === filter;
        item.classList.toggle('is-hidden', !match);
        if (match) visibleCount++;
      });
      if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    });

    timeline.addEventListener('click', function (e) {
      var card = e.target.closest('[data-ereignis-toggle]');
      if (!card) return;
      card.classList.toggle('is-open');
    });
    timeline.addEventListener('keydown', function (e) {
      var card = e.target.closest('[data-ereignis-toggle]');
      if (!card || e.key !== 'Enter') return;
      card.classList.toggle('is-open');
    });
  }

  // ── Galerie: filter + lightbox ──
  var galerieFilters = document.querySelector('[data-galerie-filters]');
  var galerieGrid = document.querySelector('[data-galerie-grid]');
  if (galerieFilters && galerieGrid) {
    var galerieItems = galerieGrid.querySelectorAll('[data-galerie-item]');
    galerieFilters.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      galerieFilters.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galerieItems.forEach(function (item) {
        var match = filter === 'Alle' || item.getAttribute('data-kategorie') === filter;
        item.classList.toggle('is-hidden', !match);
      });
    });
  }

  var lightbox = document.querySelector('[data-lightbox]');
  if (lightbox && galerieGrid) {
    var lightboxImg = lightbox.querySelector('[data-lightbox-img]');
    var openLightbox = function (src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('is-open');
    };
    var closeLightbox = function () {
      lightbox.classList.remove('is-open');
      lightboxImg.src = '';
    };
    galerieGrid.addEventListener('click', function (e) {
      var item = e.target.closest('[data-galerie-item]');
      if (!item) return;
      openLightbox(item.getAttribute('data-src'), item.getAttribute('data-alt'));
    });
    galerieGrid.addEventListener('keydown', function (e) {
      var item = e.target.closest('[data-galerie-item]');
      if (!item || e.key !== 'Enter') return;
      openLightbox(item.getAttribute('data-src'), item.getAttribute('data-alt'));
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.closest('[data-lightbox-close]')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ── FAQ: accordion ──
  var faqAccordion = document.querySelector('[data-faq-accordion]');
  if (faqAccordion) {
    faqAccordion.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-faq-trigger]');
      if (!trigger) return;
      var item = trigger.closest('.item');
      var open = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
