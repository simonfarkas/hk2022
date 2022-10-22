// if there is an error, change unix type to number
export const useTime = (unix: string) => {
  const a = new Date(unix);

  const year = a.getFullYear();
  const month = a.getMonth() + 1;
  const date = a.getDate();
  return date + "." + month + "." + year;
};
