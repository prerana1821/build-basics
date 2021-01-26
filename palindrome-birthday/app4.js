const birthDate = document.querySelector('#birth-date');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const loader = document.querySelector('#loading');
const reset = document.querySelector('#reset');


btn.addEventListener('click', function() {

    let date = birthDate.value;
    let dateArray = date.split('-');
    let year = dateArray[0];
    let month = dateArray[1];
    let day = dateArray[2];
    let outputdate = dateFormat(year, month, day);
    if (outputdate) {
        loader.className = "show";
        output.className = "hide";
        setTimeout(function() {
            loader.className = loader.className.replace("show", "");
            output.className = output.className.replace("hide", "");
        }, 1000);
        console.log('Palindrome');
        output.innerText = 'Congralulations! \n Your Birthdate ' + outputdate + ' is a Palindrome Date🎉🔥';
    } else {

    }

});


function palindromeNum(number) {
    let reverse = 0;
    let originalNumber = number;
    while (number > 0) {
        let lastDigit = number % 10;
        reverse = reverse * 10 + lastDigit;
        number = parseInt(number / 10);
    }
    if (originalNumber == reverse) {
        return true;
    } else {
        return false;
    }
}

let formats;

function dateFormat(year, month, day) {
    formats = [];

    // YYYY - MM - DD
    // MM - DD - YYYY
    // DD - MM - YYYY
    // YY - MM - DD
    // MM - DD - YY
    // DD - MM - YY

    // console.log(dateArray);
    console.log(year);
    let yearIn2Digits = year.slice(-2);

    let yyyyMMDD = year + month + day
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
            return `${year}-${month}-${day}`;
        case (palindromeNum(mmDDYYYY)):
            return `${month}-${day}-${year}`;
        case (palindromeNum(ddMMYYYY)):
            return `${day}-${month}-${year}`;
        case (palindromeNum(yyMMDD)):
            return `${yearIn2Digits}-${month}-${day}`;
        case (palindromeNum(mmDDYY)):
            return `${month}-${day}-${yearIn2Digits}`;
        case (palindromeNum(ddMMYY)):
            return `${day}-${month}-${yearIn2Digits}`;
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