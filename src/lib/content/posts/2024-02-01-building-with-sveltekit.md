---
title: "Building a Static Blog with SvelteKit"
description: "A guide to creating a performant static blog using SvelteKit and markdown"
date: "2024-02-01"
author: "Maksym Yarmolenko"
tags: ["sveltekit", "tutorial", "static-site"]
published: true
---

# Building a Static Blog with SvelteKit

SvelteKit is an excellent choice for building static blogs. It combines the simplicity of static site generation with the power of a modern framework.

## Why SvelteKit?

Here are some reasons why SvelteKit stands out for static blogs:

- **Performance**: Minimal JavaScript shipped to the browser
- **Developer Experience**: Great tooling and hot module replacement
- **Flexibility**: Easy to extend and customize
- **SEO-Friendly**: Server-side rendering and static generation
- **Modern**: Built on Vite for fast builds

## Setting Up Content

With SvelteKit, you can author content in Markdown using mdsvex:

```bash
npm install -D mdsvex
```

Then configure it in your `svelte.config.js`:

```javascript
import { mdsvex } from 'mdsvex';

const config = {
  preprocess: [mdsvex()],
  extensions: ['.svelte', '.svx', '.md']
};
```

## Loading Content

Use `import.meta.glob` to load all markdown files at build time:

```typescript
const modules = import.meta.glob('./posts/*.md', { eager: true });
```

This approach ensures all content is loaded during the build process, resulting in a fully static site.

## Styling Markdown

Create a `.prose` class to style your markdown content beautifully:

```css
.prose {
  max-width: 65ch;
  line-height: 1.7;
}

.prose h1 {
  font-size: 2.5rem;
  margin-top: 2rem;
}
```

## Deployment

Deploy your static blog to any hosting provider:

- **Vercel**: Zero configuration
- **Netlify**: Drag and drop
- **GitHub Pages**: Free hosting
- **Cloudflare Pages**: Fast global CDN

## Conclusion

SvelteKit makes it easy to create fast, maintainable static blogs. The combination of markdown authoring and modern tooling provides an excellent developer experience while delivering top-notch performance to readers.
