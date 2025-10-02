// ===============================================
// INSTRUÇÕES RÁPIDAS: este arquivo já está pronto.
// • Se você NÃO é programador(a), edite apenas o arquivo config.js
// • Para trocar fotos, coloque imagens em assets/images (veja TUTORIAL.txt)
// • Não precisa instalar nada. É só publicar a pasta no Netlify ou Vercel.
// ===============================================


/* Liga o config.js ao HTML mantendo o design original */
(function(){
  const C = window.SITE_CONFIG || {};

  // Favicon emoji
  if (C.seo && C.seo.faviconEmoji){
    const link = document.createElement('link'); link.rel="icon";
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>${encodeURIComponent(C.seo.faviconEmoji)}</text></svg>`;
    document.head.appendChild(link);
  }
  // og:image
  if (C.seo && C.seo.ogImage){
    const og = document.createElement('meta'); og.setAttribute('property','og:image'); og.content = C.seo.ogImage; document.head.appendChild(og);
  }

  // Atualiza nome da marca (em todos os locais comuns)
  const replaceTextAll = (selectorList, text) => {
    (selectorList || []).forEach(sel => { document.querySelectorAll(sel).forEach(el => el.textContent = text) })
  };
  if (C.siteName){
    replaceTextAll(['.brand', '.brand b', 'header .brand', 'footer .brand', 'h1 .brand', 'h1 .site-name', '.site-name'], C.siteName);
    // também tenta no <title>
    const title = document.querySelector('title'); if (title && !title.dataset.lock) title.textContent = C.siteName + " • Petshop";
  }
  if (C.tagline){
    const el = document.querySelector('.hero-copy .highlight'); if (el) el.textContent = C.tagline;
  }
  if (C.description){
    // procura o primeiro parágrafo dentro do hero copy que não seja CTA
    const p = document.querySelector('.hero-copy p'); if (p) p.textContent = C.description;
  }

  // Endereço
  if (C.addressHtml){
    const aside = document.querySelector('#contato aside');
    if (aside){
      const p = aside.querySelector('p');
      if (p) p.innerHTML = C.addressHtml;
    }
  }
  // Horários
  if (Array.isArray(C.openingHours)){
    const ul = document.querySelector('#contato .hours');
    if (ul){
      ul.innerHTML = C.openingHours.map(h => `<li><strong>${h.day}</strong> ${h.hours}</li>`).join('');
    }
  }

  // Sociais
  if (C.social){
    const ig = document.querySelector('a[href*="instagram.com"]'); if (ig && C.social.instagram) ig.href = C.social.instagram;
    const tt = document.querySelector('a[href*="tiktok.com"]');    if (tt && C.social.tiktok)    tt.href = C.social.tiktok;
  }

  // Pixels
  if (C.pixels && C.pixels.ga4){
    const s = document.createElement('script'); s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${C.pixels.ga4}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date()); gtag('config', C.pixels.ga4);
  }
  if (C.pixels && C.pixels.facebook){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', C.pixels.facebook); fbq('track', 'PageView');
  }
  if (C.pixels && C.pixels.tiktok){
    !function (w, d, t) { w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
    ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
    ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) { for (var e = ttq._i = ttq._i || {}, n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e[t] = [], ttq.methods[n]); return e[t] };
    ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._t = ttq._t || []; ttq._t.push([e, n]); var a = d.createElement("script"); a.type = "text/javascript";
    a.async = !0; a.src = i; var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(a, s) };
    ttq.load(C.pixels.tiktok); ttq.page(); }(window, document, 'ttq');
  }
})();