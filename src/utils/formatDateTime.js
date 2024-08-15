export function formatDateTime(data) {
  let date = new Date(data);

  let formattedDate = date.toLocaleDateString("pt-br");
  let formattedTime = date.toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
  });

  let finalDate = `${formattedDate} às ${formattedTime}`;
  return finalDate;
}
