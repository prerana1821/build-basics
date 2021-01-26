const findNearestPalindrome = num => {
    const strNum = String(num);
    console.log('strNum', strNum);
    const half = strNum.substring(0, Math.floor(strNum.length / 2));
    // console.log('sub', strNum.substring(0, 1));
    console.log(Math.floor(strNum.length / 2));
    console.log('half', half);
    const reversed = half.split("").reverse().join("");
    console.log('reversed', reversed);
    const first = strNum.length % 2 === 0 ? half : strNum.substring(0, Math.ceil(strNum.length / 2));
    console.log(strNum.substring(0, Math.ceil(strNum.length / 2)));
    console.log('first', first);
    return +(first + reversed);
};
console.log(findNearestPalindrome(235));
// console.log(findNearestPalindrome(23534));
// console.log(findNearestPalindrome(121));
// console.log(findNearestPalindrome(1221));
// console.log(findNearestPalindrome(45));