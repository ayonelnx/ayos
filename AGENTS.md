# ayos-website

React + Vite + Tailwind CSS website, built as a static site for GitHub Pages.

## Development Server

```bash
pnpm install
pnpm dev      # http://localhost:5173 (PORT overrides the port)
```

- Hot reload: Changes to source files are reflected immediately
- Production build: `pnpm build` writes the deployable site into `docs/`

## Deployment

GitHub Pages serves static files only, so `docs/` is committed and published either by
`.github/workflows/deploy.yml` or through Settings → Pages (branch + `/docs`). Never point
Pages at the repository root: the root `index.html` loads `src/main.tsx`, which a browser
cannot run without a build.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `src/assets/` - Images imported by `src/App.tsx` and `src/index.css` (hashed at build time)
- `vite.config.ts` - Vite configuration: React, Tailwind CSS v4, relative `base`, build output `docs`, `@` alias for `src`
- `docs/` - Generated GitHub Pages output; do not edit by hand, re-run `pnpm build`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.
