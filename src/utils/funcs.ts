export const getClubMedia = (id: string) => getMediaPrefix("clubs", id);

export const getMediaPrefix = (prefix: string, id: string) =>
  getMedia(`${prefix}%2F${id}`);

export const getMedia = (id: string) =>
  `https://firebasestorage.googleapis.com/v0/b/donversity-2021.appspot.com/o/${id}?alt=media`;
