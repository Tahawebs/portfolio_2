# Muhammad Taha Portfolio

A production-ready animated portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, next-themes, and Lucide React.

## Install and run

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run start
```

## Central content

Edit `config/portfolio.ts`. It contains personal information, hero copy, verified contact links, navigation, skills, capabilities, professional experience, decorative marquee data, projects, and SEO metadata.

## Profile image

Replace `public/images/profile.webp` without changing component code. Recommended: optimized WebP, portrait orientation, about 1200 × 1500, centered subject. The component uses stable 4:5 dimensions, `next/image`, priority loading, high quality, a clip reveal, slow 8px float, five independently drifting badges, and precise-pointer response limited to 8px translation and 1.5 degrees.

To disable pointer response, remove the `onPointerMove` and `onPointerLeave` props from `components/ui/profile-visual.tsx`. Reduced-motion mode already disables pointer response, frame float, and badge drift.

Change the heading line content in `components/motion/text-reveal.tsx`; change the full SEO-facing heading in `portfolio.hero.heading` too.

## Skills

Skill category arrays live under `portfolio.skills`. `skill-tabs.tsx` derives accessible tabs from these keys. Arrow Left/Right, Home, and End move selection and focus. The active background uses a shared `layoutId`, while content uses short transitions and staggered chips.

## Experience

Replace the configuration-only item in `experiences` with verified organization, role, date, location, summary, responsibilities, and technologies. Incomplete starter data is hidden and the general professional overview is shown instead. Once valid entries exist, selectable tabs activate automatically.

Decorative marquee images are independent of employment data. Replace all six files:

- `public/images/experience-1.webp`
- `public/images/experience-2.webp`
- `public/images/experience-3.webp`
- `public/images/experience-4.webp`
- `public/images/experience-5.webp`
- `public/images/experience-6.webp`

Adjust row speeds with `--speed` in `app/globals.css`. Change the `.marquee-bg` rotation to adjust angle. Add or remove `animation-direction: reverse` on row selectors to change direction. To disable the marquee, set `.marquee-bg { display:none }`. Reduced motion freezes the rows into a static diagonal composition.

## Contact and social links

Email and phone are centralized with both readable and normalized href values. GitHub opens safely in a new tab. Add a valid LinkedIn URL to `portfolio.contact.linkedin`; its icon is intentionally hidden while the value is empty. Update email display and `mailto:` together, and update phone display and normalized `tel:` together.

## Projects

Projects use plain URL strings. Add an entry with `name`, `technology`, `href`, and `image`. Preserve each documented image filename to replace screenshots without changing code.

## Theme selector

The compact segmented control supports Light, Dark, and System. `next-themes` persists preference, follows the operating system in System mode, uses class-based tokens, and prevents initial theme transition artifacts.

## Accessibility and motion

The site has semantic landmarks, a skip link, predictable headings, visible focus, keyboard tabs, menu focus containment, body scroll lock, tooltip labels, safe external-link text, stable images, and touch-sized controls. `prefers-reduced-motion` removes continuous float, pointer effects, marquee travel, smooth scrolling, and complex reveals while preserving layout and content.

## Images

Project and experience assets included here are neutral local placeholders. Replace them with approved optimized WebP images. No remote placeholder service is used.

## Vercel

1. Replace `portfolio.seo.canonical` with the production domain.
2. Push the repository to GitHub.
3. Import it into Vercel.
4. Confirm the Next.js preset.
5. Deploy.

No environment variables are required unless an optional form provider is added.
