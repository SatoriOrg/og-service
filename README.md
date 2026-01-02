# OG Service

This repository contains the Open Graph (OG) image generation service. It is built as a Vercel Edge Function using the Hono framework.

## Overview

The service dynamically generates social media preview images based on query parameters.

## Technology Stack

- **Framework:** [Hono](https://hono.dev/)
- **Image Generation:** [@vercel/og](https://vercel.com/docs/functions/edge-functions/og-image-generation)
- **Development Tooling:** [Bun](https://bun.sh/)

## API Endpoint

### `GET /api/og`

Generates a PNG image based on the provided query parameters.

| Parameter  | Description                                      | Default                               |
| :--------- | :----------------------------------------------- | :------------------------------------ |
| `title`    | The main heading text.                           | "Page Title"                         |
| `subtitle` | The secondary descriptive text.                  | "Fast, Reliable, and Beautiful" |
| `rank`     | An optional rank number to display (e.g., "1"). | `null`                                |
| `section`  | The section name (e.g., "Category").     | "Section Name"                         |
| `type`     | The context type (e.g., "Article").           | "Portal"                              |
| `portalLink` | Link to be displayed at the bottom   | `url` |

**Example Usage:**

```http
GET /api/og?title=Hello%20World&rank=1&section=Blog
```

## Development

This project uses **Bun** for package management and running scripts.

### Installation

Install the project dependencies:

```bash
bun install
```

### Local Development

Start the local development server with hot reloading:

```bash
bun run dev
```

The service will be available at `http://localhost:3000`.
