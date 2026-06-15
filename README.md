# Site estático v2 – Missão Técnica Microsoft Build 2026

## Como visualizar
Abra `index.html` em qualquer navegador moderno.

## Estrutura
- Visão para Diretoria
- Visão para Time Técnico
- Jornada da missão
- Insights
- Galeria com placeholders para fotos
- Próximos passos

## Como adicionar fotos
1. Crie ou use a pasta `assets`.
2. Adicione suas imagens, por exemplo:
   - assets/github-hq.jpg
   - assets/build-2026.jpg
   - assets/waymo.jpg
3. Substitua um bloco como:
   `<div class="photo-placeholder">GitHub HQ</div>`

   por:
   `<img class="photo-img" src="assets/github-hq.jpg" alt="GitHub HQ" />`

4. Adicione no CSS, se quiser:
   `.photo-img { width: 100%; border-radius: 34px; border: 1px solid rgba(255,255,255,.14); }`

## Publicação
Pode ser publicado em:
- GitHub Pages
- Azure Static Web Apps
- Netlify
- Vercel
- qualquer servidor estático
