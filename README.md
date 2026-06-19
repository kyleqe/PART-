"# PART-" 
# WEDE5020 POE — KH Training Co. Website

**Name:** kyle hove
- **Student Number:** ST10537068
- **Module:** Web Development (Introduction) — WEDE5020


## Project Overview
A fully functional, responsive, and SEO-optimised website built for **KH Training Co.**  a Cape Town-based personal training business owned by head coach Kyle Hove. 

## Website Goals and Objectives
- Establish a professional online presence for KH Training Co.
- Generate new client leads through a free consultation booking form
- Clearly showcase all training packages and pricing
- Build credibility through qualifications and client testimonials
- Ensure full mobile responsiveness for smartphone users
- Optimise for local SEO (Cape Town personal trainer)

## Key Features and Functionality
- 5-page responsive website built with HTML, CSS, and JavaScript
- Sticky navigation bar with mobile hamburger menu
- Hero section with call to action buttons
- Services and pricing page with comparison cards
- Enquiry form
- Contact page with 2 Cape Town locations
- Google Maps embed showing both locations
- SEO meta tags and alt text on all images

## Timeline and Milestones

| Milestone | Target Date |
|-----------|-------------|
| Content research and assets sourced | Week 4 
| HTML structure complete (all 5 pages) | Week 5 |
| Part 1 submitted | 20 April |
| CSS styling and responsive design complete | Week 7 |
| Part 2 submitted |  |
| JavaScript functionality added | Week 8 |
| SEO optimisation complete | Week 9 |
| Final testing and debugging | Week 9–10 |
| Part 3 final submission |  |

## Part 1 Details
- **Organisation:** KH Training Co. (Personal training business)
- **Owner/Head Coach:** Kyle Hove
- **Location:** Green Point Studio & Camps Bay Outdoor Sessions, Cape Town
- **Pages created:** index.html, about.html, services.html, enquiry.html, contact.html
- **Technologies used:** HTML5, CSS3 (Part 1), JavaScript (Part 3)

## Sitemap
KH Training Co. Website
index.html         - Homepage (hero, services overview, testimonials)
about.html         - About Kyle Hove (bio, philosophy, qualifications)
services.html      - Services & Pricing (all packages, FAQ)
enquiry.html       - Book a Free Consultation (enquiry form)
contact.html       - Contact & Locations (2 CT locations, contact form, map)

[site mape](sitemap.png)

# File Structure
PART 1/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── README.md 
├── css/
    └── style.css
├── js/
   └──
├── images/
    └──

## Test and iterate

- [Desktop size](Screenshot_29-5-2026_15413_-1-1.jpeg)

- [Tablet size](Screenshot_29-5-2026_15337_-1.jpeg)

- [Mobile size](Screenshot_29-5-2026_1531_-1.jpeg)

## Changelog

### Part 1 Initial Submission — [20 April]
- Project repository initialised
- File and folder structure created
- All 5 HTML pages created with semantic structure
- README.md created with full project documentation
- Navigation linking all pages — tested and functional
- updated the project proposal
- created a  proper budget for the project
- created a  wireframe

## Part 2 intial submission - [29 May]
- Applied full CSS stylesheet across all 5 pages
- Implemented navy (#1A3C5E) and orange (#E8610A) colour scheme
- Added Google Fonts — Montserrat (headings) and Open Sans (body)
- Built responsive layout using CSS Flexbox and Grid
- Added @media (max-width: 900px) breakpoint for tablet layout
- Added @media (max-width: 680px) breakpoint for mobile layout
- Implemented sticky navigation bar across all pages
- Added hover animations on cards, buttons, and nav links
- Styled hero section with 2-column desktop layout
- Styled service cards with 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Styled pricing table with featured card highlight
- Styled enquiry and contact forms with input focus states
- Added CSS variables for consistent colour usage throughout
- Styled footer with 3-column grid layout
- Compressed and optimised all images for faster load times
- Cross-browser tested on Chrome, Firefox, and Edge

## Part 3 Initial Submission — [19 June]

### JavaScript Functionality
- Created js/main.js with full Part 3 functionality
- Implemented mobile hamburger menu toggle with animated icon transform
- Added active nav-link highlighting based on current page
- Added sticky header shadow effect on scroll
- Implemented scroll-reveal animations on cards, testimonials, pricing
  cards, stats, FAQ items, and gallery items using IntersectionObserver

### Form Validation
- Built custom client-side validation engine (no external libraries)
- Required field checks on all enquiry and contact form inputs
- Email format validation using regex pattern matching
- South African phone number format validation
- Live validation on blur and on input (real-time error clearing)
- Inline error messages displayed under each invalid field
- Focus automatically moves to the first invalid field on failed submit
### AJAX Form Submission
- Integrated Formspree as a serverless form backend
- Forms submit via the Fetch API — no page reload on submission
- Loading state on submit button ("Sending...") with disabled state
  during request
- Success banner displayed on successful submission, form auto-resets
- Error banner displayed on network failure or server-side rejection
- Both the enquiry form (enquiry.html) and contact form (contact.html)
  wired up with AJAX submission

### Gallery and Lightbox
- Added a Studio & Training Gallery section to about.html
- Built a custom JavaScript lightbox (no external libraries)
- Click or keyboard (Enter/Space) opens any gallery image full-screen
- Previous/Next navigation via on-screen buttons and arrow keys
- Escape key and background click close the lightbox
- Full keyboard accessibility with focus management and aria-labels

### Site-Wide Search
- Implemented a JavaScript-powered search bar, auto-injected into the
  navigation bar on every page
- Built a searchable content index covering all 5 pages and key
  sections (services, qualifications, FAQ, gallery, contact details)
- Live filtering of results as the user types
- Keyboard navigation through results (arrow keys, Enter, Escape)
- Clicking a result navigates directly to the relevant page/section

### SEO Optimisation
- Added unique meta description and meta keywords to every page
- Added Open Graph tags (og:title, og:description, og:image, og:type,
  og:url) for improved link previews on social media and messaging apps
- Added Twitter Card meta tags
- Added canonical URL tags to prevent duplicate content issues
- Added descriptive alt text to all images, including gallery photos
- Added role="img" and aria-label to all decorative icon divs
- Fixed invalid width="350rem" attribute to width="350" on image tags
- Added loading="lazy" to all images for improved page speed

### Page Speed
- Added loading="lazy" attribute to all images
- Documented image compression workflow

### Security
- Added X-Content-Type-Options: nosniff meta tag
- Added Referrer-Policy: strict-origin-when-cross-origin meta tag
- Verified all external links (WhatsApp, Instagram) use
  rel="noopener" to prevent tab-napping vulnerabilities
- Confirmed HTTPS is enforced automatically via GitHub Pages
- Documented _headers reference file for future migration to a host
  that supports custom HTTP security headers
- No API keys, secrets, or sensitive data exposed in client-side code

### External Services Integration
- Embedded Google Maps iframe in contact.html showing both the
  Green Point studio and Camps Bay Promenade locations
- Integrated Formspree as the form submission backend

### Testing and Debugging
- Tested mobile menu open/close behaviour across breakpoints
- Tested form validation with empty fields, invalid email formats,
  and invalid phone number formats
- Tested AJAX submission success and error states
- Tested gallery lightbox keyboard navigation and screen reader labels
- Tested site search across all indexed pages and sections
- Cross-browser tested on Chrome, Firefox, and Edge
- Verified all internal links and anchors resolve correctly

### Off-Page SEO
- Created sitemap.xml listing all 5 pages with priority and change
  frequency for search engine crawlers
- Created robots.txt to guide search engine indexing and point to
  the sitemap

### Documentation
- Updated README.md with full Part 3 changelog
- Updated README.md references section with new sources


## References
- REPSSA. 2024. *Register of Exercise Professionals South Africa.* [Online]. Available at: https://www.repssa.com [Accessed: 9 April 2026].
- MDN Web Docs. 2024. *HTML5 semantic elements reference.* [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed: 9 April 2026].
- Google. 2026. *KH Training Co. trainer in professional gym setting* [AI-generated image]. Google Gemini. Generated: 19 April 2026. Available at: https://gemini.google.com [Accessed: 19 April 2026].
- GitHub. 2024. *GitHub Pages documentation.* [Online]. Available at: https://docs.github.com/en/pages [Accessed: 17 April 2026].
- City of Cape Town. 2024. *Green Point neighbourhood information.* [Online]. Available at: https://www.capetown.gov.za [Accessed: 9 April 2026].
- Google Fonts. 2024. *Montserrat and Open Sans font families.* [Online]. Available at: https://fonts.google.com [Accessed: 9 April 2026].
- Dixon and Moe. 2025. *HTML Color Codes.* [Online]. Available at: https://htmlcolorcodes.com [Accessed: 9 April 2026].
- Slaying The Dragon. (2024) *Learn CSS Variables In 7 Minutes*[Youtube]. Available at: https://www.youtube.com/watch?v=5wLrz_zUwoU 
[Accessed: 9 May 2026].
- Coding2GO. (2025) *Learn CSS Flexbox in 20 Minutes (Course)*[Youtube]. Available at:https://www.youtube.com/watch?v=wsTv9y931o8 [Accessed: 9 May 2026].
- Google. 2026. *KH Training Co. studio and bootcamp gallery images*[AI-generated images, 5x]. Google Gemini. Generated: [9 June 2026]. Available at: https://gemini.google.com [Accessed: 9 June 2026].
- Formspree. 2024. *Formspree — HTML form backend service.*  [Online]. Available at: https://formspree.io   [Accessed: [18 june 2026]].




