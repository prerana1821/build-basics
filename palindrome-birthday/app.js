const birthDate = document.querySelector('#birth-date');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', function() {
    // let date = birthDate.value;
    // console.log(date);
    // let formats = dateFormat(date);
    // console.log(formats);
    let formats = ['123', '190', '021', '876'];
    // let formats = ['123', '223', '121', '876'];
    // console.log(output.value);
    // formats.forEach(date => {
    //     // console.log(date);
    //     //  palindromeNum(date);
    //     if (palindromeNum(date)) {
    //         console.log('True');
    //         output.innerText = 'Palindrome';
    //         return;
    //     }
    //     // else {
    //     //     console.log('false');
    //     // }
    // });

    for (let i = 0; i < formats.length; i++) {
        if (palindromeNum(formats[i])) {
            // console.log(formats[i]);
            console.log('True');
            output.innerText = 'Palindrome';
        }
        // else {
        //     console.log('false');
        //     output.innerText = 'Not Palindrome';
        // }
    }


    if (output.innerText === undefined || output.innerText.indexOf('') === -1) {
        // if (typeof(output.value) === undefined) {
        console.log('19');
        console.log(output.value);
        console.log('Hello');
        // }
        // console.log('Hii');

    }
    // else if (output.value !== undefined) {
    //     console.log(output.value);
    //     console.log('Hello');
    // }

});

// palindromeNum(1001);

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