// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adcortes.vercel.app',
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
