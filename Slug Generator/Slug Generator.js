// ** start of script.js **
function generateSlug(str) {
  const trimed = str.trim()
  const lowerCase = trimed.toLowerCase();
  const removeCharacters = lowerCase.replace(/[^a-zA-Z0-9 ]/g, "");
  const replaceSpaces = removeCharacters.replace(/\s+/g, "%20");

  return replaceSpaces;
}

