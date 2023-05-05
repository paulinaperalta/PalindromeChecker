function palindrome(str) {
  const regex = /[a-zA-Z0-9]/gi;
  const found = str.match(regex).join("").toLowerCase();
  const reversedStr = Array.from(found).reverse().join("");

  console.log(found)
  console.log(reversedStr)
  if (found === reversedStr){
    return true
  } else {
    return false
  }
};

