# RTM — Resist the Matrix: Design System

Video graphics for Resist the Matrix. Every value lives once, in the block below. Everything else points at it.

```css
/* Font files: Google Fonts, all SIL Open Font License 1.1, free for commercial use */
@import url("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;600&display=swap");

:root {
  /* Color */
  --deep:   #030806;   /* frame background */
  --base:   #0A120E;   /* card fill */
  --mid:    #15241C;   /* borders, grid, dividers */
  --light:  #4E6B5A;   /* labels, secondary text */
  --text:   #E6EFE8;   /* headlines, body */
  --accent: #3DFF7A;   /* ONE word, number, or mark per frame */

  /* Fonts */
  --font-display: "Archivo", "Arial Narrow", Arial, sans-serif;     /* headlines, lists, big numbers */
  --font-accent:  "Instrument Serif", Georgia, serif;                 /* one italic word, sublines */
  --font-label:   "JetBrains Mono", ui-monospace, Menlo, monospace;  /* corner tags, kickers, list numbers */
  --display-width:  62%;    /* condensed */
  --display-weight: 900;
  --label-spacing:  0.14em;

  /* Text sizes (1920 x 1080 frame) */
  --size-number:   320px;   /* big number, in --accent */
  --size-headline: 160px;   /* title card, 1-4 words, caps */
  --size-list:      80px;   /* list items, 3 max */
  --size-sub:       72px;   /* italic subline */
  --size-caption:   64px;   /* on-screen captions, key words only */
  --size-label:     32px;   /* system labels, caps */

  /* Shape */
  --radius: 4px;            /* every card */
  --border: 1px solid var(--mid);

  /* Safe margins */
  --safe-x: 96px;           /* left and right frame edge */
  --safe-y: 56px;           /* top and bottom frame edge */
  --face-zone: 50%;         /* left half belongs to the face; graphics live on the right */

  /* Motion */
  --ease:     cubic-bezier(0.22, 1, 0.36, 1);   /* the only curve */
  --dur-in:   900ms;
  --dur-out:  600ms;
  --stagger:  150ms;
  --hold-min: 2s;
}
```

## Taste rules

1. **Few graphics.** One graphic per idea. If the line doesn't carry a claim, a number, or a turn, it gets nothing.
2. **Slow and soft.** Everything glides in and settles. No bounces, no spins, no zoom punches. Hold it still before it leaves.
3. **One green per frame.** The accent goes on the single word or number that matters. Two accents means delete one.
4. **Big type, tiny labels.** Headlines are huge, condensed, and in caps. Numbers are bigger. Everything else whispers in small mono.
5. **The face is sacred.** The left half is mine. Graphics stay right and never touch the face.
6. **Dark and clean, not cartoon.** The RTM green and the hood live on, but flat and sharp. No 3D metal, no bevels, no clutter.
