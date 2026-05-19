# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # Dev server on port 2103 (clears .data/content first)
npm run build        # Production build (Cloudflare Workers)
npm run typecheck    # TypeScript type check
```

Dependencies are managed with **npm** (not pnpm/yarn).

## Architecture

**Nuxt 4** app with `@nuxt/content` v3 for Markdown-based content. Production runs on **Cloudflare Workers** via `nitro` preset `cloudflare_module`.

### Routing

Two catch-all routes handle all content:

- `app/pages/blog/[[slug]].vue` — resolves `/blog/*` paths: blog index → category → article (in that priority order)
- `app/pages/[...slug].vue` — resolves everything else: page → community

Collections are queried via `queryCollection()` from `@nuxt/content`.

### Content collections (`content.config.ts`)

| Collection | Source dir | Path prefix |
|---|---|---|
| `blogArticles` | `content/blog-articles/` | `/blog` |
| `blogCategories` | `content/blog-categories/` | `/blog` |
| `communities` | `content/communities/` | `/` |
| `pages` | `content/pages/` | `/` |
| `people` | `content/people/` | *(none)* |

Blog article filenames follow `YYYYMMDD.slug.md` — the date is extracted by `shared/blogArticlesTransformer.ts` into the `published` field. **Order blog articles by `id`** (not `published`).

`redirect_from` frontmatter field in blog articles triggers 301 redirects via `shared/contentRedirectsModule.ts`.

### Key conventions

- Use **Nuxt UI** components (`@nuxt/ui`) — never write custom HTML where a UI component exists. Theme: primary `orange`, gray `cool`.
- Shared composables for content queries are in `app/composables/content.ts` — use them instead of writing raw `queryCollection` calls in pages.
- Components used in page templates follow the `Page*` naming convention (e.g. `PageBlogArticle`, `PageBlogCategory`, `PageCommunity`), stored in `app/components/page/`. Layout components (navbar, footer, logo) live in `app/components/app/`.
- `CommunityMap.client.vue` uses Leaflet (`@vue-leaflet/vue-leaflet`) and an embedded SVG map of Czech regions — keep it client-only.
- Do **not** run any git commands (`commit`, `push`, `merge`, `rebase`, `reset`).

### Infrastructure

- **`@nuxthub/core`** — provides a Cloudflare D1 SQLite database (binding `DB`, database `web`) used at runtime.
- **`nuxt-studio`** — CMS integration for content editing; branch defaults to `master` via env `STUDIO_BRANCH_NAME`.
- Analytics collected via `/cntrsclc` route (proxied to avoid blockers) using `@counterscale/tracker`.

### NixOS / dev environment

The flake patches the `workerd` binary on shell entry (pre-built Cloudflare binary needs `patchelf` on NixOS). Enter the dev shell with `nix develop` before running npm commands.
