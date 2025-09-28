function getHeadings(csv) {
  return csv.split(",").map(h => h.trim());
}