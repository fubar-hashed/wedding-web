export type ViewKey = 'public' | 'extended' | 'develop';

export const linkViews: Record<ViewKey, { label: string; eventIds: string[] }> = {
  public: {
    label: 'Baraat + Reception',
    eventIds: ['baraat-reception'],
  },
  extended: {
    label: 'All celebrations',
    eventIds: ['sangeet-engagement', 'haldi', 'baraat-reception'],
  },
  develop: {
    label: 'Development preview',
    eventIds: ['sangeet-engagement', 'haldi', 'baraat-reception'],
  },
};
