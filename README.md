
# Configuração rápida (plug-and-play)

1) **Abra `config.js`** e personalize:
- `siteName` e o objeto `brand` (nome que aparece no cabeçalho/rodapé)
- `whatsappNumber`, `addressHtml` e `openingHours`
- Blocos `navigation`, `hero`, `services`, `plans`, `testimonials`, `gallery`, `faq`, `contact` e `footer` para trocar textos, botões e listas
- `thankYouPage` → título, texto e botão da página thanks.html (Netlify usa essa tela após cada envio)
- Para **esconder seções sem editar HTML**, coloque `enabled: false` nos blocos:
  - `hero.promo.enabled`
  - `services.enabled`
  - `plans.enabled`
  - `testimonials.enabled`
  - `gallery.enabled`
  - `faq.enabled`
  - `contact.enabled`
- `form.provider` → `"whatsapp"` (recomendado), `"netlify"`, `"formspree"`, `"emailjs"`
- `pixels` (GA4, Facebook, TikTok) e `seo` (título, descrição, favicon emoji, imagem de compartilhamento)

2) **Troque as fotos (opcional)**:
O repositório já inclui placeholders leves em `assets/images/`. Basta substituir os arquivos existentes pelos seus definitivos:
```
assets/images/hero.jpg               (1920x1280 recomendado)
assets/images/gallery/gallery-1.jpg  (1200x1200)
...
assets/images/gallery/gallery-8.jpg  (1200x1200)
```

3) **Publicar**: Netlify (arrastar pasta), Vercel, GitHub Pages ou Cloudflare Pages.

> **Dica:** Ao usar o Netlify com o formulário nativo, personalize `thankYouPage` no `config.js`. Essa tela (`thanks.html`) é aberta automaticamente depois de cada envio.

> **Observação:** O design original foi mantido. Este pacote só adiciona configuração por arquivo e troca simples de imagens.
