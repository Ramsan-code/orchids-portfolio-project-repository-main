# Hero motion video (Remotion)

Source for `public/hero/motion-reel.*`, the looping video in the portfolio hero. It's built with
[Remotion](https://www.remotion.dev): every scene is a React component in `src/scenes.tsx`, animated with springs.

Content comes from the site itself, so re-rendering picks up changes automatically:

- `src/data/profile.ts`: name, role, location, email, core stack
- `src/data/portfolio.ts`: the flagship projects (name, categories, stack, live URL, screenshots)
- `public/`: project screenshots

| Scene | Length |
|---|---|
| Intro: monogram, name, role | 3s |
| Core stack with brand logos | 3.5s |
| One slide per project (browser + phone mockups) | 2.5s each |
| How I work | 2.7s |
| Contact card, then fade to the intro's first frame so the loop is seamless | 3.5s |

## Commands

```bash
cd video
npm install
npm run studio   # live preview in the browser, scrub the timeline
npm run render   # writes motion-reel.webm, motion-reel.mp4 and motion-reel-poster.jpg to ../public/hero/
```

Remotion downloads its own headless Chrome on first render. To use one you already have, set
`REMOTION_BROWSER=/path/to/chrome-headless-shell` before `npm run render`.

Timings live at the top of `src/Showreel.tsx`; colours and fonts (shared with `src/app/globals.css`)
in `src/theme.ts`.

Remotion is free for individuals and companies of up to three people; larger companies need a
[company license](https://www.remotion.dev/license).
