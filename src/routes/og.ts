import { Hono } from 'hono';
import { ImageResponse } from '@vercel/og';
import { getOgTemplate as ghStyleOg } from '../templates/GithubStyleOg';

const ogRouter = new Hono();

let fontBuffer: ArrayBuffer | null = null;
let logoBase64: string | null = null;

ogRouter.get('/', async (c) => {
  const { req } = c;
  const url = new URL(req.url);

  // In-memory caching:
  if (!fontBuffer) {
    const res = await fetch(new URL('../assets/fonts/Outfit-Regular.ttf', import.meta.url));
    if (!res.ok) throw new Error(`Failed to fetch font: ${res.status} ${res.statusText}`)
    fontBuffer = await res.arrayBuffer();
  }
  if (!logoBase64) {
    const res = await fetch(new URL('../assets/favicon.svg', import.meta.url));
    if (!res.ok) throw new Error(`Failed to fetch logo: ${res.status} ${res.statusText}`)
    const buf = await res.arrayBuffer();
    logoBase64 = `data:image/svg+xml;base64,${Buffer.from(buf).toString('base64')}`;
  }

  const title = url.searchParams.get('title') || 'Page Title';
  const subtitle = url.searchParams.get('subtitle') || 'Fast, Reliable, and Beautiful';
  const portalLink = url.searchParams.get('portalLink') || url.host;
  const rank = url.searchParams.get('rank') || null;
  const section = url.searchParams.get('section') || 'Section Name';
  const type = url.searchParams.get('type') || null;

  const displayType = (!type || type === 'default') ? 'Portal' : type;

  return new ImageResponse(
    ghStyleOg({
      title,
      subtitle,
      portalLink,
      section,
      displayType,
      rank,
      logoBase64,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Outfit',
          data: fontBuffer,
          weight: 400,
          style: 'normal',
        },
      ],
      headers: {
        // Cache: Browser 1 day, CDN 1 year, Stale 1 year
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=31536000',
      },
    }
  );
});

export { ogRouter };
