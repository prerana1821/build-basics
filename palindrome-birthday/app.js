const birthDate = document.querySelector('#birth-date');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const loader = document.querySelector('#loading');
const reset = document.querySelector('#reset');

let dateFormats;
btn.addEventListener('click', function() {
    // console.log(birthDate.value);
    dateFormats = dateFormat(birthDate.value);
    // let dateFormats = ['119', '201', '1981', '876']
    // console.log(dateFormats[0]);
    let result = 0;
    for (let i = 0; i < dateFormats.length; i++) {
        if (palindromeNum(dateFormats[i])) {
            // console.log('true');
            result = result + 1;
            loader.className = "show";
            output.className = "hide";
            setTimeout(function() {
                loader.className = loader.className.replace("show", "");
                output.className = output.className.replace("hide", "")
            }, 1000);
            console.log('Palindrome');
            output.innerText = 'Congralulations! \n Your Birthdate is a Palindrome Date🎉🔥';
        }
    }
    if (result === 0) {
        // console.log('Hello');
        let nearestDate = nearestPalindromeNum(dateFormats[0]);
        console.log(nearestDate);
    }
});


function nearestPalindromeNum(num) {
    const strNum = String(num);
    const half = strNum.substring(0, Math.floor(strNum.length / 2));
    const reversed = half.split("").reverse().join("");
    const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
        Math.ceil(strNum.length / 2))

    let sum = first + reversed;
    // console.log(sum);
    // console.log(sum.slice(4, 6));
    // console.log(sum.slice(6, 8));
    if (sum.slice(4, 6) <= 12 && sum.slice(6, 8) <= 31) {
        return sum;
    } else {
        nearestPalindromeNum(sum);
    }
    // return +(first + reversed);
    // validate(first + reversed);
}

function validate(date) {
    let dateString = date.toString();
    let dateTemp1 = `${dateString.slice(0, 4)}/${dateString.slice(4, 6)}/${dateString.slice(6, 8)}`;
    // console.log(dateTemp1);
    let isValidDate = Date.parse(dateTemp1);
    if (isNaN(isValidDate)) {
        // when is not valid date logic
        // return false;
        // console.log('Hello');
        nearestPalindromeNum(date);
        // differnce date 
    } else {
        console.log('Hii');
        console.log(date);
    }
}

// console.log(findNearestPalindrome('20170723'));

//YYYY-MM-DD
// function nearestPalindromeNum(num) {
//     // console.log(num);
//     let low = num - 1;
//     while (!palindromeNum(low)) {
//         low = low - 1;
//     }
//     // console.log(low);

//     let high = parseInt(num) + 1;
//     while (!palindromeNum(high)) {
//         high = high + 1;
//     }
//     // console.log(high);

//     // dhigh = new Date(high);
//     // console.log(dhigh.isValid());
//     // console.log(high.getDate());

//     if (low < high) {
//         // console.log(low);
//         validate(low);
//         // return low;
//     } else {
//         // console.log(high);
//         // return high;
//         validate(high);

//     }
// }

// let dateTemp1 = `${low[0].slice(0, 4)}/${low[0].slice(4, 6)}/${low[0].slice(6, 8)}`;
// console.log(dateTemp1);

// let isValidDate = Date.parse('1980/02/29');

// let isValidDate = Date.parse('2016/61/02');
// if (isNaN(isValidDate)) {
//     // when is not valid date logic
//     // return false;
//     console.log('Hello');
// } else {
//     console.log('Hii');
// }

// console.log(palindromeNum(123021));

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

function dateFormat(date) {
    let formats = [];
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
    // console.log(dateArray);

    let yyyyMMDD = date.replaceAll('-', '')
        // console.log(yyyyMMDD);
    formats.push(yyyyMMDD);

    let mmDDYYYY = month + day + year;
    // console.log(mmDDYYYY);
    formats.push(mmDDYYYY);

    let ddMMYYYY = day + month + year;
    // console.log(ddMMYYYY);
    formats.push(ddMMYYYY);

    let yearIn2Digits = year.slice(-2);

    let yyMMDD = yearIn2Digits + month + day;
    // console.log(yyMMDD);
    formats.push(yyMMDD);

    let mmDDYY = month + day + yearIn2Digits;
    // console.log(mmDDYY);
    formats.push(mmDDYY);
    let ddMMYY = day + month + yearIn2Digits;
    // console.log(ddMMYY);
    formats.push(ddMMYY);

    // console.log(formats);
    return formats;
}

reset.addEventListener('click', function() {
    birthDate.value = '';
    output.innerText = '';
});