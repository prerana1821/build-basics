const birthDate = document.querySelector('#birth-date');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const loader = document.querySelector('#loading');
const reset = document.querySelector('#reset');


btn.addEventListener('click', function() {
    // console.log(birthDate.value);
    let date = dateFormat(birthDate.value);
    if (date) {
        loader.className = "show";
        output.className = "hide";
        setTimeout(function() {
            loader.className = loader.className.replace("show", "");
            output.className = output.className.replace("hide", "");
        }, 1000);
        console.log('Palindrome');
        output.innerText = 'Congralulations! \n Your Birthdate is a Palindrome Date🎉🔥';
    } else {
        let nearestDate = nearestPalindromeNum(birthDate.value);
        setTimeout(function() {
            loader.className = loader.className.replace("show", "");
            output.className = output.className.replace("hide", "")
        }, 1000);
        let dateTemp1 = `${nearestDate.slice(0, 4)}-${nearestDate.slice(4, 6)}-${nearestDate.slice(6, 8)}`;
        let date1 = new Date(birthDate.value);
        let date2 = new Date(dateTemp1);
        let diffTime = Math.abs(date2 - date1);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays + " days");
        output.innerText = `Sorry, your birthdate is not a palindrome date but the nearest paindrome date is ${dateTemp1}. 
        You are ${diffDays} ahead of it!
        `;
    }
});


function validate(date) {
    let dateString = date.toString();
    let dateTemp1 = `${dateString.slice(0, 4)}/${dateString.slice(4, 6)}/${dateString.slice(6, 8)}`;
    // console.log(dateTemp1);
    let isValidDate = Date.parse(dateTemp1);
    // if (!isNaN(isValidDate)) {
    //     return date;
    // }
    if (!isNaN(isValidDate)) {
        return true;
    } else {
        return false;
    }
}

// function nearestPalindromeNum(num) {
//     const strNum = String(num);
//     const half = strNum.substring(0, Math.floor(strNum.length / 2));
//     const reversed = half.split("").reverse().join("");
//     const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
//         Math.ceil(strNum.length / 2));

//     let sum = first + reversed;
//     if (validate(sum)) {
//         return sum;
//     } else {
//         nearestPalindromeNum(sum);
//     }
// }

function nearestPalindromeNum(num) {
    let low = num - 1;
    console.log('Hello');
    while (!palindromeNum(low)) {
        low = low - 1;
    }
    // console.log(low);

    let high = parseInt(num) + 1;
    // console.log(high);
    while (!palindromeNum(high)) {
        high = high + 1;
    }
    // console.log(high);

    if (low < high) {
        // console.log(low);
        if (validate(low)) {
            return low;
        } else {
            nearestPalindromeNum(low)
        }
    } else {
        // console.log(high);
        if (validate(high)) {
            return high;
        } else {
            nearestPalindromeNum(high)
        }
    }
}

function palindromeNum(number) {
    let reverse = 0;
    let originalNumber = number;
    while (number > 0) {
        let lastDigit = number % 10;
        reverse = reverse * 10 + lastDigit;
        number = parseInt(number / 10);
    }
    if (originalNumber == reverse) {
        // console.log('Palindrome');
        return true;
    } else {
        // console.log('Not Palindrome');
        return false;
    }
}

let formats;

function dateFormat(date) {
    formats = [];

    // YYYY - MM - DD
    // MM - DD - YYYY
    // DD - MM - YYYY
    // YY - MM - DD
    // MM - DD - YY
    // DD - MM - YY
    let dateArray = date.split('-');
    let year = dateArray[0];
    let month = dateArray[1];
    let day = dateArray[2];
    let yearIn2Digits = year.slice(-2);
    // console.log(dateArray);

    let yyyyMMDD = date.replaceAll('-', '')
    let mmDDYYYY = month + day + year;
    let ddMMYYYY = day + month + year;
    let yyMMDD = yearIn2Digits + month + day;
    let mmDDYY = month + day + yearIn2Digits;
    let ddMMYY = day + month + yearIn2Digits;

    formats.push(yyyyMMDD);
    formats.push(mmDDYYYY);
    formats.push(ddMMYYYY);
    formats.push(yyMMDD);
    formats.push(mmDDYY);
    formats.push(ddMMYY);
    console.log(formats);

    switch (true) {
        case (palindromeNum(yyyyMMDD)):
            return yyyyMMDD;
        case (palindromeNum(mmDDYYYY)):
            return mmDDYYYY;
        case (palindromeNum(ddMMYYYY)):
            return ddMMYYYY;
        case (palindromeNum(yyMMDD)):
            return yyMMDD;
        case (palindromeNum(mmDDYY)):
            return mmDDYY;
        case (palindromeNum(ddMMYY)):
            return ddMMYY;
    }

    // console.log(yyyyMMDD);
    // console.log(mmDDYYYY);
    // console.log(ddMMYYYY);
    // // console.log(yyMMDD);
    // // console.log(mmDDYY);
    // // console.log(ddMMYY);
    // return formats;
}

reset.addEventListener('click', function() {
    birthDate.value = '';
    output.innerText = '';
});