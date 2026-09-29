// @ts-check
import { defineConfig } from 'astro/config';

// TODO(deploy): once Cloudflare Pages is configured, set `site` to the real origin
// and add the two tags in BaseLayout.astro that depend on it:
//   1. site: 'https://<domain>'
//   2. <link rel="canonical">
//   3. absolute <meta property="og:image"> (Astro resolves it from `site`)
// Until then `site` stays unset rather than guessed — a wrong absolute URL in an
// og:image is worse than an absent one.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
});
