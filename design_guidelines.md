# Carbay Co., Ltd. Website Design Guidelines

## Design Approach
**Reference-Based: Japanese Corporate Excellence**
Drawing inspiration from premium Japanese corporate websites (Sony, Recruit, Rakuten corporate sites) combined with modern SaaS clarity. The design emphasizes trust, professionalism, and technological innovation through clean layouts, careful typography, and purposeful whitespace.

**Key Principles:**
- Minimalist elegance with purposeful information density
- Trust through transparency and clarity
- Professional sophistication without sterility
- Technological innovation conveyed through modern UI patterns

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 220 15% 20% (Deep charcoal blue - professional, trustworthy)
- Secondary: 220 10% 50% (Medium gray - supporting text)
- Accent: 210 100% 45% (Vibrant blue - CTAs, links, innovation)
- Background: 0 0% 98% (Off-white - clean, spacious)
- Surface: 0 0% 100% (Pure white - cards, panels)
- Success: 145 65% 45% (Muted green - positive actions)

**Dark Mode:**
- Primary: 220 20% 95% (Soft white - main text)
- Secondary: 220 10% 70% (Light gray - supporting text)
- Accent: 210 100% 60% (Bright blue - CTAs, links)
- Background: 220 15% 10% (Very dark blue-gray)
- Surface: 220 15% 15% (Slightly lighter - cards, panels)
- Success: 145 50% 55% (Softer green for dark mode)

### B. Typography

**Font Families:**
- Primary (Japanese): 'Noto Sans JP' (Google Fonts) - clean, highly readable
- Primary (English): 'Inter' (Google Fonts) - modern, professional
- Accent/Headers: 'Zen Kaku Gothic New' (Google Fonts) - elegant Japanese aesthetic

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Titles: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, font-normal
- Small/Caption: text-sm, font-normal

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-4, gap-8, my-12, py-20)

**Container Strategy:**
- Max-width: max-w-7xl for most sections
- Content: max-w-4xl for text-heavy areas
- Padding: px-4 sm:px-6 lg:px-8

**Grid Patterns:**
- Features/Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Stats/Metrics: grid-cols-2 lg:grid-cols-4
- Company Info Tables: Asymmetric 2-column (label + value)

### D. Component Library

**Navigation:**
- Fixed header with blur background (backdrop-blur-md bg-white/90 dark:bg-gray-900/90)
- Horizontal menu on desktop, hamburger on mobile
- Language toggle (JP/EN flags) and theme toggle (sun/moon icons) in header
- Smooth scroll behavior for anchor links

**Hero Sections:**
- Large hero image with gradient overlay (from transparent to background color)
- Centered headline with subtle fade-in animation
- Primary CTA button with secondary outline button
- Height: min-h-[600px] md:min-h-[700px]

**Cards:**
- Rounded corners: rounded-xl
- Subtle shadow: shadow-lg hover:shadow-xl transition
- Padding: p-6 md:p-8
- Border: 1px border in dark mode (border-gray-800)

**Buttons:**
- Primary: Solid accent color, px-8 py-3, rounded-lg, font-semibold
- Secondary: Outline style with backdrop-blur for image overlays
- Hover states: Slight scale (hover:scale-105) and shadow changes

**Forms:**
- Clean input fields: border-2 border-gray-300 dark:border-gray-700, rounded-lg, px-4 py-3
- Focus states: ring-2 ring-accent
- Labels: text-sm font-semibold mb-2
- Validation: Red border for errors with error message below

**Tables (Company Profile):**
- Striped rows for readability
- Left-aligned labels (bold), right-aligned values
- Responsive: Stack on mobile, side-by-side on desktop

**Footer:**
- Dark background (bg-gray-900 dark:bg-black)
- Multi-column layout on desktop (4 columns), stacked on mobile
- Company details prominently displayed
- Social links with icon-only buttons
- Copyright and links at bottom

### E. Page-Specific Layouts

**Homepage:**
1. Hero with company mission statement
2. 3-column strengths section with icons
3. Mission/Vision cards (side-by-side)
4. CTA section for document request
5. Featured business content preview

**Business Page:**
- Service cards in 2-column grid
- Icon + Title + Description pattern
- CTA buttons for each service

**Company Information:**
- President's message with photo (2-column layout)
- Company profile table
- Interactive map embed for office location
- Timeline for company history (vertical on mobile, horizontal on desktop)

**Philosophy Page:**
- Large typography for key statements
- 4 values in card grid
- Credo section with background image
- CEO message with signature

**Contact Page:**
- 2-column layout: Form (left) + Contact info/map (right)
- Full-width on mobile

## Images

**Hero Images:**
- Homepage: Modern office or technology imagery with blue tones
- Business Page: Professional automotive/data visualization imagery
- Company Page: Team/office environment
- Philosophy Page: Abstract concept imagery (innovation, growth)

**Supporting Images:**
- President photo: Professional headshot
- Office photos: Clean, modern workspace
- Icon illustrations: Use Heroicons for consistency

**Image Treatment:**
- Subtle overlay gradients for text readability
- Border radius: rounded-xl for contained images
- Aspect ratios: 16:9 for heroes, 4:3 for cards

## Animation & Interactions

**Minimal, purposeful animations:**
- Fade-in on scroll for sections (intersection observer)
- Smooth page transitions (300ms ease)
- Hover scale for interactive elements (scale-105)
- Theme toggle with smooth color transitions

**NO distracting animations** - keep professional and subtle

## Accessibility & Responsive Behavior

- All interactive elements have proper focus states
- Dark mode fully implemented across all inputs and components
- Mobile-first responsive design
- Japanese and English language support throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images