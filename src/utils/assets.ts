const base = import.meta.env.BASE_URL;

export const img = (path: string) => `${base}${path.replace(/^\//, '')}`;
