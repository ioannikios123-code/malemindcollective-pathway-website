# Project rules
- Keep owner-approved offer values in a single frontend module so package details and credibility figures remain consistent.
- Use the booking-request Cloud function for public coaching inquiries; it validates and rate-limits requests, stores them privately, and records owner-notification results.
- Serve the prebuilt mindset guide from public/downloads so visitors receive a same-origin PDF without email delivery dependencies.