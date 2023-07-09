function formatDate(inputDate) {
  const parts = inputDate.split(" ");
  const datePart = parts[0];

  const dateParts = datePart.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];

  return `${day}-${month}-${year}`;
}
