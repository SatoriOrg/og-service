import { html } from "hono/html";

export const getDefaultTemplate = () => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OG Service</title>
        <style>
          :root { --bg: #000; --text: #fff; --dim: #888; }
          body {
            font-family: Roboto, Helvetica, Arial, sans-serif;
            background: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .card {
            text-align: center;
            padding: 2rem;
            max-width: 400px;
          }
          h1 { font-size: 1.5rem; font-weight: 500; margin: 0 0 0.5rem; }
          p { font-size: 0.9rem; color: var(--dim); line-height: 1.5; margin-bottom: 2rem; }
          .link {
            color: var(--text);
            text-decoration: none;
            font-size: 0.9rem;
            border: 1px solid #333;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            transition: border-color 0.2s;
          }
          .link:hover { border-color: #666; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>OG Service</h1>
          <p>Dynamic image generation.</p>
          <a href="/api/og?title=Hello" class="link">Explore API</a>
        </div>
      </body>
    </html>
  `;
}
