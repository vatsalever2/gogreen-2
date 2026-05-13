/**
 * Pre-computed base64 SVG blur placeholders for Next.js <Image placeholder="blur">.
 * Works in both Node.js (SSR) and browser (CSR) environments.
 */

function toBase64(str: string): string {
  if (typeof window === "undefined") {
    // Node.js / SSR
    return Buffer.from(str).toString("base64");
  }
  // Browser
  return window.btoa(str);
}

const makeSVG = (fill: string) =>
  `<svg width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" fill="${fill}"/></svg>`;

/** Dark shimmer — use for images on dark/ink backgrounds */
export const blurDark  = `data:image/svg+xml;base64,${toBase64(makeSVG("#1a1a1a"))}`;

/** Light shimmer — use for images on white/light backgrounds */
export const blurLight = `data:image/svg+xml;base64,${toBase64(makeSVG("#e8e8e8"))}`;
