export const getMediaPrefix = (id: string) => `/images/${id}`;

export const getClubMedia = (id: string) => getMediaPrefix(`clubs/${id}`);

export const getDayMedia = (day: string) => getMediaPrefix(`days/${day}.jpeg`);
