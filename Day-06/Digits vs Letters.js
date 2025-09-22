function digitsOrLetters(str) {
  let digitCount = str.match(/[0-9]/g).length;
  let letterCount = str.match(/[A-Za-z]/g).length;

  if (digitCount>letterCount){
    return "digits";
  } else if (letterCount>digitCount){
    return "letters";
  }else {
    return "tie";
    }
}
