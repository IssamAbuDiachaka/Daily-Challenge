function formatNumber(number) {
let str = String(number);
  return `+${str[0]} (${str.slice(1, 4)}) ${str.slice(4, 7)}-${str.slice(7)}`;
}