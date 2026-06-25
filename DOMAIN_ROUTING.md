# Domain Routing For `sonovia.de/yousician`

Current state checked on 2026-06-25:

- `https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/` serves the current Yousician dashboard.
- `https://sonovia.de/yousician` serves the Sonovia Lyris SPA fallback.
- `https://sonovia.de/yousician/index.html` returns `404`.
- The Sonovia domain is behind Cloudflare and appears to serve a separate Lovable/Vite build, not this GitHub Pages repo.

## Target

Route:

```text
https://sonovia.de/yousician
```

to:

```text
https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204
```

## Recommended Cloudflare Redirect Rule

If Cloudflare is controlling `sonovia.de`, add a Redirect Rule:

```text
When incoming requests match:
  Hostname equals sonovia.de
  AND URI Path starts with /yousician

Then:
  Static redirect URL:
  https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204

Status code:
  302 while testing, 301 after approval

Preserve query string:
  No
```

Use `302` first so cache mistakes are reversible.

## If The Host Is Vercel

Add or merge this into `vercel.json` in the Sonovia website project:

```json
{
  "redirects": [
    {
      "source": "/yousician",
      "destination": "https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204",
      "permanent": false
    },
    {
      "source": "/yousician/:path*",
      "destination": "https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204",
      "permanent": false
    }
  ]
}
```

## If The Host Is Netlify

Add to `_redirects`:

```text
/yousician       https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204 302
/yousician/*     https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=market-signals-v204 302
```

## If Editing Lovable Routing

Add a route or page at `/yousician` that redirects the browser to the GitHub Pages URL above. Keep the Sonovia home page fallback below that route so `/yousician` does not render the Lyris landing page.

