export const useTime = (unix: number) => {
  const a = new Date(unix);

  const year = a.getFullYear();
  const month = a.getMonth() + 1;
  const date = a.getDate();
  return date + "." + month + "." + year;
};
