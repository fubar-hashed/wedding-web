export type ViewKey = 'public' | 'extended';

export const linkViews: Record<ViewKey, { label: string; eventIds: string[] }> = {
  public: {
    label: 'Baraat + Reception',
    eventIds: ['baraat-reception'],
  },
  extended: {
    label: 'All celebrations',
    eventIds: ['sangeet-engagement', 'haldi', 'baraat-reception'],
  },
};
