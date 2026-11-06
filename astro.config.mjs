// @ts-check
import { defineConfig } from 'astro/config';

// TODO(deploy): set `site` to the real Vercel origin. That is the only step left:
// BaseLayout.astro already builds <link rel="canonical">, og:url and an absolute
// og:image from it, each guarded on `Astro.site`, so all three start appearing the
// moment this is set. Until then `site` stays unset rather than guessed — a wrong
// absolute URL in an og:image is worse than an absent one.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
  /*
   * Content Security Policy. Astro emits a <meta http-equiv> policy per page
   * with SHA-256 hashes for every script and style it processes, so no hash is
   * maintained by hand and no 'unsafe-inline' is needed.
   *
   * The one rule this imposes on the source: component scripts must not use
   * `is:inline`. Astro does not process those, so it cannot hash them and the
   * policy blocks them. See the header comment in WebWorkGroup.astro.
   */
  security: {
    csp: true,
  },
});
