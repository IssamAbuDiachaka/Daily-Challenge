function isPerfectSquare(n) {
 
  let result = n % Math.sqrt(n)

  if (n == 0){
    return Number.isInteger(0);
  }else{  
    return Number.isInteger(result) ;
  }
}