// Lucide-style outline icons (stroke currentColor)
const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Calendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
)
export const Clock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const Wifi = (p) => (
  <svg {...base} {...p}><path d="M5 12.55a11 11 0 0 1 14 0M8.5 16.1a6 6 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0" /><circle cx="12" cy="20" r="0.5" /></svg>
)
export const Tag = (p) => (
  <svg {...base} {...p}><path d="M12.6 3H6a3 3 0 0 0-3 3v6.6a2 2 0 0 0 .6 1.4l7.4 7.4a2 2 0 0 0 2.8 0l6.6-6.6a2 2 0 0 0 0-2.8L13 3.6A2 2 0 0 0 12.6 3Z" /><circle cx="7.5" cy="7.5" r="1.2" /></svg>
)
export const Check = (p) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
)
export const X = (p) => (
  <svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
)
export const Users = (p) => (
  <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
)
export const Scale = (p) => (
  <svg {...base} {...p}><path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a4 4 0 0 0 6 0L5 7Zm14 0-3 7a4 4 0 0 0 6 0l-3-7Z" /></svg>
)
export const Layers = (p) => (
  <svg {...base} {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></svg>
)
export const Rocket = (p) => (
  <svg {...base} {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 8-10c2 2 2 6 0 10l-5 3ZM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
)
export const Sprout = (p) => (
  <svg {...base} {...p}><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-1.5.2-2.9 0-3.9-.8-1.1-.8-1.8-2.2-2.3-3.7 1.5-.2 2.9 0 3.9.8ZM14.1 6c-.5 1.5-1.2 2.9-2.3 3.7 0-1.5.5-3 1.2-4.2 1.1-1.7 3-2.5 3-2.5s.2 2.2-1.9 3Z" /></svg>
)
export const ShieldAlert = (p) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M12 8v4M12 16h.01" /></svg>
)
export const Whatsapp = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.88.86-.88 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
)
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)
export const Sparkle = (p) => (
  <svg {...base} {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="3" /></svg>
)
export const AlertTriangle = (p) => (
  <svg {...base} {...p}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></svg>
)
export const FileSearch = (p) => (
  <svg {...base} {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><circle cx="16.5" cy="16.5" r="3" /><path d="m21 21-1.6-1.6" /></svg>
)
export const TrendingDown = (p) => (
  <svg {...base} {...p}><path d="M22 17 13.5 8.5 9 13 2 6" /><path d="M16 17h6v-6" /></svg>
)
export const Target = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
)
export const Award = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="6" /><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6" /></svg>
)
export const ChevronDown = (p) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
)
export const Quote = (p) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7.5 5C5 5 3 7 3 9.5c0 2.3 1.8 4.2 4 4.4-.2 2-1.4 3.3-3.3 4 .9.6 1.8.6 1.8.6 3-.6 5.2-3.3 5.2-7V9.5C10.7 6.5 9 5 7.5 5Zm10 0C15 5 13 7 13 9.5c0 2.3 1.8 4.2 4 4.4-.2 2-1.4 3.3-3.3 4 .9.6 1.8.6 1.8.6 3-.6 5.2-3.3 5.2-7V9.5C20.7 6.5 19 5 17.5 5Z" /></svg>
)
export const MapPin = (p) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
)
