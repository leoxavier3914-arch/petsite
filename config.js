// ===============================================
// INSTRUÇÕES RÁPIDAS: este arquivo já está pronto.
// • Se você NÃO é programador(a), edite apenas o arquivo config.js
// • Para trocar fotos, coloque imagens em assets/images (veja TUTORIAL.txt)
// • Não precisa instalar nada. É só publicar a pasta no Netlify ou Vercel.
// ===============================================


/* =======================
   CONFIGURAÇÃO RÁPIDA (plug-and-play)
   ======================= */
window.SITE_CONFIG = {
  siteName: "AuMiau Petshop",
  tagline: "Banho & Tosa, Veterinário e muito carinho.",
  description: "Cuidamos do seu pet com carinho e profissionalismo. Agende online!",
  whatsappNumber: "5511999999999", // DDI+DDD+número (somente dígitos)
  addressHtml: "Rua dos Pets, 123 — Centro<br/>Sua Cidade • SP",
  openingHours: [
    { day: "Seg–Sex:", hours: "9h às 19h" },
    { day: "Sábado:",  hours: "9h às 16h" },
    { day: "Domingo:", hours: "plantão veterinário" }
  ],
  social: {
    instagram: "",
    tiktok: ""
  },
  form: {
    provider: "whatsapp", // "whatsapp" | "netlify" | "formspree" | "emailjs" | "disabled"
    formspreeEndpoint: "", // ex: https://formspree.io/f/xxxxxxx
    emailjs: { publicKey: "", serviceId: "", templateId: "" }
  },
  pixels: {
    ga4: "",        // G-XXXXXXXXXX
    facebook: "",   // 1234567890
    tiktok: ""      // TTP123abc...
  },
  seo: {
    ogImage: "", // URL absoluta 1200x630 (opcional)
    faviconEmoji: "🐾"
  }
};
