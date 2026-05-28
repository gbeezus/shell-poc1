# shell-poc1 — CSS-overlay rebrand (POC 1)

Proof of concept for rebranding a third-party Next.js tool from outside its
codebase, without modifying their source. Two mechanisms are demonstrated
side-by-side so the proposal can engage with the third party's preferred
approach on equal footing.

This is one of four repos in the POC set:

| Repo | Role | Port |
|---|---|---|
| `shell-poc1` (this) | Shell application — owns brand, chrome, admin | 3000 |
| `third-party-poc1` | Third-party tool simulator | 3001 |
| `shell-poc2` | Module Federation host (POC 2) | 3010 |
| `third-party-poc2` | Module Federation remote (POC 2) | 3011 |

The Forum One Next.js starter is used as the third-party stand-in because it
already has a CSS-custom-property design-token architecture organized in
`@layer config, global, vendor, layouts, components, utility` — exactly the
architecture the brief said to assume.

The original Forum One starter docs are at [`README.nextjs.md`](README.nextjs.md)
and [`README.project.md`](README.project.md).

## The two mechanisms

### Mechanism A — JSON theme upload (third party's proposal)

The shell `POST`s a [DTCG-formatted](https://tr.designtokens.org/format/) JSON
bundle to a third-party endpoint at `POST /api/theme`. The third party
validates, persists to disk (`.data/current-theme.json`), and on every render
emits the bundle as inline `<style id="dtcg-theme">:root { ... }</style>` in
the document head.

Try it:
1. Start `third-party-poc1` with `NEXT_PUBLIC_THEME_MODE=json npm run dev`.
2. Start `shell-poc1` with `npm run dev`.
3. Visit `http://localhost:3000/admin/themes` → click "Apply USWDS (default)".
4. Reload `http://localhost:3001/` directly or `http://localhost:3000/tool`
   (which embeds it in an iframe). The third-party tool now renders with the
   USWDS palette.
5. Click "Apply USWDS Mint (alt)" → reload → palette swaps.

### Mechanism B — Shell-hosted CSS link

The third party adds **one `<link>`** to their root layout pointing at a
stylesheet hosted by the shell. The shell owns the file and its contents.

Try it:
1. Start `third-party-poc1` with
   `NEXT_PUBLIC_THEME_MODE=link NEXT_PUBLIC_SHELL_BRAND_URL=http://localhost:3000/brand/overrides.css npm run dev`.
2. Start `shell-poc1`.
3. Visit `http://localhost:3001/` directly → tool renders with USWDS palette,
   served from the shell-hosted stylesheet.
4. Edit `public/brand/overrides.css` (or regenerate it from a new DTCG bundle
   via `node scripts/dtcg-to-css.mjs`) → reload → palette swaps with no
   third-party code change.

## Why both mechanisms work

CSS custom properties cascade through the document. The Forum One starter
defines its palette tokens at `@layer config` (e.g.
`--brand-blue-base: #0071bc`). Both mechanisms produce unlayered `:root { ... }`
overrides that win the cascade because unlayered styles outrank layered
styles by spec.

`--font-family-primary` is the one exception: it is bound by `next/font/google`
on the `<html class="…">` className (specificity 0,1,0) which beats `:root`
(0,0,1). The DTCG bundles work around this by emitting a fallback chain that
references a separately loaded font variable (`var(--font-public-sans)`) the
third-party layout also loads. If the third party doesn't load the same font,
the value falls through to Source Sans Pro or the system stack — the override
applies in concept regardless.

## Tradeoffs

|  | Mechanism A (JSON upload) | Mechanism B (CSS link) |
|---|---|---|
| Third-party build cost | Endpoint + persistence + DTCG flattener + render injection | Add one `<link>` tag |
| Schema ownership | Third party (can reject unknown keys) | Shell (can override any var that exists) |
| Update flow | API call → next render | Edit CSS file → next HTTP request |
| Multi-tenancy | Natural (one theme record per tenant) | Per-tenant URL or query param needed |
| Failure mode | API down → fall back to last persisted theme | URL down → browser caches last good or fails open |
| Auditability | API request logs are first-class | Need separate CSS file versioning |
| Federal/compliance fit | Strong — DTCG is a W3C draft, third party retains control surface | Adequate — pure CSS, no provenance trail without extra tooling |
| What it constrains the shell to | Only tokens in the third party's accepted JSON schema | Only tokens they actually use in CSS |

## Mechanisms considered but not built

- **Reverse proxy with HTML rewrite**: shell proxies the third-party HTML via
  Next.js `rewrites` + middleware injecting a `<link>` into the response. No
  third-party change at all. Doesn't survive RSC streaming reliably and breaks
  on client navigations; not worth POC effort.
- **Iframe with same-origin `<style>` injection**: only works same-origin;
  cross-origin collapses back to Mechanism B.

## Limitations (apply to both mechanisms)

- Reaches only what the third party exposes as CSS custom properties.
  Hardcoded hex values, inline styles, and styled-component literals are out
  of reach.
- Cannot restructure layout, change icon assets, or alter component
  composition.
- If the third party renames a token (`--color-primary` → `--brand-primary`),
  Mechanism B breaks silently; Mechanism A surfaces it as a validation error
  if the third party rejects unknown keys (a small point in favor of A).
- No control over interactive states the third party doesn't tokenize
  (e.g., focus rings hardcoded to a hex value).

## Layout

```
shell-poc1/
├── app/
│   ├── admin/themes/      ← Mechanism A admin UI
│   ├── tool/              ← iframe wrapping third-party-poc1
│   ├── layout.tsx         ← loads /brand/overrides.css for the shell's own chrome
│   └── page.tsx           ← POC landing
├── lib/themes/
│   ├── uswds.json         ← DTCG bundle: USWDS default brand
│   └── uswds-alt.json     ← DTCG bundle: USWDS Mint variant
├── public/brand/
│   ├── overrides.css      ← generated from uswds.json
│   └── overrides-alt.css  ← generated from uswds-alt.json
└── scripts/
    └── dtcg-to-css.mjs    ← generator (run after editing bundles)
```

## Render.com deploy

`render.yaml` is committed. To deploy, push to GitHub, connect the repo in
Render, accept the blueprint. Update `NEXT_PUBLIC_THIRDPARTY_URL` and
`NEXT_PUBLIC_THIRDPARTY_API` in Render env to point at the deployed
`third-party-poc1` URL.
