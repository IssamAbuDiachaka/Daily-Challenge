function isSpam(number) {
  // Strip formatting
  const raw = number.replace(/[^\d]/g, "");
  
  // Extract parts
  const match = number.match(/^\+(\d+)\s\((\d{3})\)\s(\d{3})-(\d{4})$/);
  if (!match) return true; // invalid format counts as spam
  const [_, countryCode, areaCode, ccc, dddd] = match;

  // Country code rule
  if (countryCode.length > 2 || countryCode[0] !== '0') return true;

  // Area code rule
  const area = parseInt(areaCode, 10);
  if (area < 200 || area > 900) return true;

  // Local number sum rule
  const sum = ccc.split("").reduce((a, b) => a + parseInt(b), 0);
  if (dddd.includes(String(sum))) return true;

  // Repetition rule (4 or more consecutive identical digits)
  if (/(.)\1{3,}/.test(raw)) return true;

  return false;
}


