export const getClubMedia = (id: string) => getMedia(`clubs%2F${id}`);

export const getMedia = (id: string) =>
  `https://firebasestorage.googleapis.com/v0/b/donversity-2021.appspot.com/o/${id}?alt=media`;
