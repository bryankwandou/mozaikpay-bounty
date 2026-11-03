# Plantilla de subtítulos MozaikPay (Remotion)

Toma una **grabación de pantalla real del teléfono** del dueño de la cuenta y le pone encima los textos del guion
(versión solo texto, sin voz), más la línea fija **#publicidad**. Formato 1080×1920, 30 fps.

> El clip `public/placeholder.mp4` es solo un **PLACEHOLDER** (fondo gris con texto). No es la interfaz de MozaikPay.
> El render demo lo dice en pantalla. Para el video real hay que usar una grabación real de la app.

## Requisitos
- Node 18+ y `npm install` en esta carpeta.
- Microsoft Edge instalado. Los scripts lo usan como navegador (`browserExecutable`); se puede cambiar con la variable `BROWSER_EXECUTABLE`.

## Uso rápido (para quien grabó la app)
1. Graba la pantalla del teléfono (vertical) siguiendo las tomas de [../SCRIPTS.md](../SCRIPTS.md).
2. Copia el video a `public/mi-grabacion.mp4`.
3. Abre `captions/guion1-sueldo-dolares.json` (o guion2 / guion3) y:
   - reemplaza todo lo que esté entre `[corchetes]` con tus datos reales,
   - ajusta `from`/`to` (segundos) para que cada texto coincida con tu grabación,
   - ajusta `durationSec` a la duración de tu clip (30–60 s).
4. Renderiza:
   ```bash
   npm run render -- captions/guion1-sueldo-dolares.json out/guion1.mp4
   ```
5. Revisa el resultado (el clip sale sin audio), agrega música desde la biblioteca comercial de TikTok/IG y publica desde **tu** cuenta con #publicidad y el interruptor de contenido pagado.

## Con la CLI de Remotion
```bash
npx remotion render src/index.ts Overlay out/demo.mp4 --props=captions/demo-placeholder.json --browser-executable="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
```
Vista previa interactiva: `npm run studio` (también acepta `--browser-executable`).

## PNG transparentes (para CapCut u otro editor)
```bash
npm run pngs
```
Genera `out/pngs/<guion>/NN.png` (1080×1920, fondo transparente), uno por texto de cada guion, más `out/pngs/captions-extra/`
con textos sueltos (#publicidad, "La comisión aparece antes de confirmar", etc.). Se colocan encima del clip en el editor.
Los PNG incluidos en esta carpeta todavía tienen los `[corchetes]`: vuelve a correr `npm run pngs` después de editar los JSON.

## Estilo
- Caja rectangular con esquinas suaves, texto blanco sobre fondo oscuro; el último texto en caja clara.
- Ubicación en el tercio superior, lejos de los botones de TikTok/Reels (abajo y a la derecha).
- Sin badges tipo píldora ni puntos de estado.

## Archivos
| Ruta | Qué es |
|---|---|
| `src/Overlay.tsx` | Composición `Overlay`: clip + subtítulos temporizados + #publicidad |
| `src/Caption.tsx` | Estilo de la caja de texto |
| `captions/*.json` | Textos y tiempos de cada guion; `demo-placeholder.json` es la demo |
| `scripts/render.mjs` | Render MP4 con Edge |
| `scripts/make-pngs.mjs` | PNG transparentes |
| `out/demo-placeholder.mp4` | Render demo con el clip placeholder |
