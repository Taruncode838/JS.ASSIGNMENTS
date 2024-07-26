function sumOfProductOfDigits(n1, n2) {

    let str1 = n1.toString();
    let str2 = n2.toString();
    
   
    let maxLength = Math.max(str1.length, str2.length);
    

    str1 = str1.padStart(maxLength, '0');
    str2 = str2.padStart(maxLength, '0');
    
  
    let sum = 0;
    
   
    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(str1[i]);
        let digit2 = parseInt(str2[i]);
        sum += digit1 * digit2;
    }
    
    return sum;
}