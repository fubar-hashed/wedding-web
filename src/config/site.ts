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
  rsvpUrl: 'https://forms.google.com/',
  rsvpLabel: 'Please let us know',
  venue: {
    name: 'Venue details coming soon',
    address: 'Jabalpur, Madhya Pradesh',
    mapUrl: '#',
    note: 'The venue address and arrival instructions will be updated here shortly.',
  },
  accommodation: {
    title: 'Accommodation details coming soon',
    body: 'Accommodation information and the family contact for stay-related questions will be added here.',
  },
  contact: 'For any questions, please reach out to the family directly.',
} as const;
