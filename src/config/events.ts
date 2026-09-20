export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  attire: string;
  note?: string;
};

export const weddingEvents: WeddingEvent[] = [
  {
    id: 'sangeet-engagement',
    title: 'Sangeet + Engagement',
    date: '26 January 2027',
    time: 'Evening · Timing to be announced',
    description: 'An evening of music, celebration, and the beginning of this beautiful chapter.',
    attire: 'Festive attire',
  },
  {
    id: 'haldi',
    title: 'Haldi',
    date: '27 January 2027',
    time: 'Afternoon · Timing to be announced',
    description: 'A bright and joyful afternoon with the people closest to us.',
    attire: 'Comfortable festive attire',
  },
  {
    id: 'baraat-reception',
    title: 'Baraat + Reception',
    date: '27 January 2027',
    time: 'Evening · Timing to be announced',
    description: 'Join us as we celebrate together into the evening.',
    attire: 'Festive formal',
  },
];
