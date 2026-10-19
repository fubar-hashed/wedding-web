export const siteConfig = {
  theme: 'contemporary-festive' as
    | 'minimal'
    | 'contemporary-festive'
    | 'earthy-handcrafted'
    | 'modern-editorial'
    | 'pastel-garden',
  couple: 'Aayush and Dewanshi',
  location: 'Jabalpur, Madhya Pradesh',
  dates: '26–27 January 2027',
  rsvpUrl: 'https://form.typeform.com/to/qXJO9p9j',
  rsvpLabel: 'Please let us know',
  venue: {
    name: 'Shawn Elizey',
    address: 'Jabalpur, Madhya Pradesh',
    mapUrl: 'https://maps.app.goo.gl/6obBc4dp69bgPLvn9',
    note: 'Use the map link below for directions to the venue.',
  },
  accommodation: {
    title: 'Accommodation details coming soon',
    body: 'Accommodation information and the family contact for stay-related questions will be added here.',
  },
  contact: 'For any questions, please reach out to the family directly.',
} as const;
