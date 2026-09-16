# Portfolio Genaro Design System

## Direction
Dark editorial technology portfolio. Asymmetric composition, precise data labels, restrained violet atmosphere, content-first hierarchy.

## Typography
- Display and body: Geist
- Data and labels: Geist Mono
- Display: 40px mobile, up to 76px desktop, tight tracking
- Body: 16-18px, 1.65 line-height, maximum 65 characters

## Color
- Background: `#090312`
- Surface: `#120A22`
- Elevated surface: `#170F2B`
- Foreground: `#F5F3FA`
- Secondary text: `#C5BDD6`
- Muted text: `#948BA8`
- Accent: `#9B7AEE`
- Border: `#302342`

## Layout
- Maximum width: 1180px
- Mobile gutter: 20px; desktop gutter: 32px
- Hero: asymmetric 7/5 grid with profile copy and capability index
- Hero proof strip: derived counts for experience, projects, and skill domains
- Experience: vertical editorial records
- Featured projects: alternating two-column case studies
- Project visuals: distinct abstract system diagrams per featured case study
- Supporting content: compact lists and asymmetric grids
- About: three-frame portrait collage balancing academic and candid context
- Hero: formal portrait as the central identity mark within the capability orbit
- Leadership: documentary photography paired directly with each verified event record
- Projects: five equal-depth case studies followed by a dedicated GitHub archive callout
- Skills: compact labeled chips use verified software brand marks only; conceptual capabilities remain typographic
- Interface chrome: native controls and restrained text links replace generic component-library and icon-heavy patterns
- Spacing: a shared 8px-based token scale controls primary gaps and padding
- Content hierarchy: descriptive titles stand alone without decorative numbering, field-note labels, or organization badges

## Imagery
- Real photographs only; keep natural color and visible event context
- Portrait collage uses varied crops to feel personal; the formal portrait anchors the hero
- Leadership photographs use descriptive alt text and preserve identifying event signage where possible
- Use restrained borders and captions instead of decorative overlays

## Motion
- CSS transitions use `cubic-bezier(0.16, 1, 0.3, 1)`
- Only transform and opacity animate
- Motion disabled under `prefers-reduced-motion`

## Project bans
- No fabricated links, screenshots, metrics, or profile imagery
- No gradients in headline text
- No centered hero
- No three equal feature cards
- No `h-screen`
- No emoji icons
- No skill percentages

## Accessibility floor
- WCAG AA contrast for all body text
- 44px minimum touch targets
- Visible focus rings
- Semantic headings and landmarks
- Sticky navigation never covers anchor targets

## Last updated
2026-09-15 - Initial portfolio build from CV and PRD.
2026-09-15 - Added distinct project artwork, proof strip, layered surfaces, and refined motion.
2026-09-16 - Added documentary event photography and a four-frame personal portrait story.
2026-09-16 - Replaced project diagrams with real mockups, added verified links, and moved the formal portrait into the hero.
2026-09-16 - Promoted all five projects to full case studies, enlarged the hero portrait, and added HRD documentation.
2026-09-16 - Added software brand marks and consistent capability icons to the skills section.
2026-09-16 - Removed unused Shadcn UI, Lucide decoration, glass blur, status badges, colored card borders, and normalized primary spacing.
2026-09-16 - Removed decorative indexing across sections and records, merged roles with organizations, and added the PMO HMSI award.
