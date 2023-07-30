export const capitalizeFirstLetter = (query) => {
  return query.charAt(0).toUpperCase() + query.substring(1);
};

export function formatFecha(fecha) {
  const [year, month, day] = fecha.split("-");
  return `${day}/${month}/${year}`;
}
