import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const ASSETS = [
  // Fonts - Switzer
  { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/5SZVFDB7V52TI6ULVC6J3WQZQCIZVDV5/ODYPSTCUDMKSTYIPTV4CLQ7URIK7XYBJ/YS3VPNVO4B3TOJMEXDGFZQ4TLZGGSRZC.woff2', dest: 'fonts/switzer-600.woff2' },
  { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/A54N3N7J5AY6YOPYJKLHF5VH7G7HSSUN/ERWIWIB434FMFHQFSSBD233EP3C62HOI/TOHQHMLIEIPKVF2JPM6SVKXFYGO5G2TJ.woff2', dest: 'fonts/switzer-900.woff2' },
  { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/OYB4CXKJQXKTNSLJMTDQOIVUL2V5EL7S/WYO2P7DQVV5RNXGMCUO2HL4RJP4VFUAS/6XPIMU23OJVRY676OG5YVJMWEHWICATX.woff2', dest: 'fonts/switzer-500.woff2' },

  // Favicon
  { url: 'https://framerusercontent.com/images/Wg7q9IREdgstBg6HIJnpn11hY.svg', dest: 'seo/favicon.svg' },
  { url: 'https://framerusercontent.com/images/gRnhI1cAe7Ze5xVavM11TTj3Y.png', dest: 'seo/apple-touch-icon.png' },
  { url: 'https://framerusercontent.com/images/sSaHokO18xSkbBHg2FtEE57HVU.png', dest: 'seo/og-image.png' },

  // Hero images
  { url: 'https://framerusercontent.com/images/pKKKvDTDIMbGXt4SKNGc5PEgrkU.jpg', dest: 'images/avatar.jpg' },
  // Hero mockup images (3 stacked browser screenshots)
  { url: 'https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg', dest: 'images/hero-mockup-1.jpg' },
  { url: 'https://framerusercontent.com/images/tBF8hMQFxONWA4CXtHf3R4.jpg', dest: 'images/hero-mockup-2.jpg' },
  { url: 'https://framerusercontent.com/images/AZe7hFsRlGAWp9spF25RMEwS0gA.jpg', dest: 'images/hero-mockup-3.jpg' },
  { url: 'https://framerusercontent.com/images/q3ruKmoVYmFXP9EeyZlQPnTDuVw.jpg', dest: 'images/hero-mockup-4.jpg' },

  // Works grid project images
  // These are the 4 project thumbnail images (1600x1200)
  // Kora
  { url: 'https://framerusercontent.com/images/wn56GiYIGN9okbMTZQ8fV2UQ0.jpg?width=1600&height=1200', dest: 'images/project-kora.jpg' },
  // KYMA
  { url: 'https://framerusercontent.com/images/tBF8hMQFxONWA4CXtHf3R4.jpg?width=1600&height=1200', dest: 'images/project-kyma.jpg' },
  // Mugen
  { url: 'https://framerusercontent.com/images/AZe7hFsRlGAWp9spF25RMEwS0gA.jpg?width=1600&height=1200', dest: 'images/project-mugen.jpg' },
  // Axiom
  { url: 'https://framerusercontent.com/images/q3ruKmoVYmFXP9EeyZlQPnTDuVw.jpg?width=1600&height=1200', dest: 'images/project-axiom.jpg' },

  // About portrait
  { url: 'https://framerusercontent.com/images/qtdLa7QbKqPky8NoUcgNPzcmgCU.png?width=768&height=1024', dest: 'images/joseph-portrait.png' },

  // Pricing - lightning bolt 3D asset
  { url: 'https://framerusercontent.com/images/bwCVICcrKWXkOTrVdIrYz2EsNc.png?width=2550&height=2550', dest: 'images/lightning-bolt-3d.png' },

  // Social/testimonial avatars
  { url: 'https://framerusercontent.com/images/ARmQOa71EvidN3oYWq9jWzn9OE.jpg?width=76&height=76', dest: 'images/avatar-1.jpg' },
  { url: 'https://framerusercontent.com/images/W7oQ4BScxWhGC5oVOzKGxVGAD4.jpg?width=76&height=76', dest: 'images/avatar-2.jpg' },
  { url: 'https://framerusercontent.com/images/UqrSyX3j0KDY0YY2JZCQuc7Wzzg.jpg?width=76&height=76', dest: 'images/avatar-3.jpg' },
  { url: 'https://framerusercontent.com/images/wFJgmAuVHn37SCJR5MDBtfbFdY.jpg?width=76&height=76', dest: 'images/avatar-4.jpg' },
  { url: 'https://framerusercontent.com/images/3IIKOQ9VkCZyf0KlL2N5yBg1cQ.jpg?width=76&height=76', dest: 'images/avatar-5.jpg' },
  { url: 'https://framerusercontent.com/images/9GxBhKhBKO9rBguUErEAr1S5msg.jpg?width=76&height=76', dest: 'images/avatar-6.jpg' },
  { url: 'https://framerusercontent.com/images/Ua8czSsCWvNqdtO61P3LQNscwQo.jpg?width=76&height=76', dest: 'images/avatar-7.jpg' },
  { url: 'https://framerusercontent.com/images/lAY61a3VYJBYnJJvnRiHal534g.jpg?width=76&height=76', dest: 'images/avatar-8.jpg' },
  { url: 'https://framerusercontent.com/images/v6i3NQRMklaSho2NutbJ0C5YGtA.jpg?width=76&height=76', dest: 'images/avatar-9.jpg' },

  // Joseph small avatar (for FAQ card)
  { url: 'https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?width=6220&height=6220', dest: 'images/joseph-small.jpg' },

  // Blog post images
  { url: 'https://framerusercontent.com/images/d0BwZFrtELCoWDdpc1wN5g0q070.jpeg?width=1920&height=2400', dest: 'images/blog-post-1.jpg' },
  { url: 'https://framerusercontent.com/images/dVqbMbuH3GY6mRNJHUM7kJzzaUw.jpeg?width=1600&height=791', dest: 'images/blog-post-2.jpg' },
  { url: 'https://framerusercontent.com/images/RdmIayKtrkKr800oZG5FkWDoJQw.jpeg?width=1600&height=1377', dest: 'images/blog-post-3.jpg' },

  // Signature
];

async function downloadAsset(url, dest) {
  const fullPath = join(PUBLIC, dest);
  await mkdir(dirname(fullPath), { recursive: true });

  try {
    const cleanUrl = url.split('?')[0]; // remove query params for download
    const res = await fetch(cleanUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    await writeFile(fullPath, Buffer.from(buf));
    console.log(`✓ ${dest}`);
  } catch (err) {
    console.error(`✗ ${dest}: ${err.message}`);
  }
}

// Batch downloads (4 at a time)
async function downloadAll() {
  const chunks = [];
  for (let i = 0; i < ASSETS.length; i += 4) {
    chunks.push(ASSETS.slice(i, i + 4));
  }
  for (const chunk of chunks) {
    await Promise.all(chunk.map(a => downloadAsset(a.url, a.dest)));
  }
  console.log('Done!');
}

downloadAll();
