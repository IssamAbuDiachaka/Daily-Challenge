function isMirror(str1, str2) {
  // Remove all non-letters, but preserve case
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  str2 = str2.replace(/[^a-zA-Z]/g, "");

  // Compare str1 with the reverse of str2
  return str1 === str2.split("").reverse().join("");
}
