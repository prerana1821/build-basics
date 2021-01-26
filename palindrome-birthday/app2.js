const birthDate = document.querySelector('#birth-date');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const loader = document.querySelector('#loading');
const reset = document.querySelector('#reset');

btn.addEventListener('click', function() {
    let date = birthDate.value;
    // console.log(date);
    if (date === '') {
        alert('Please, Enter your birthdate!')
    } else {
        let formats = dateFormat(date);
        // console.log(formats);
        // let formats = ['123', '190', '021', '876'];
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
                console.log('True');
                loader.className = "show";
                output.className = "hide";
                setTimeout(function() {
                    loader.className = loader.className.replace("show", "");
                    output.className = output.className.replace("hide", "")
                }, 1000);
                output.innerText = 'Congralulations! \n Your Birthdate is a Palindrome Date🎉🔥';
            }
        }



        setTimeout(function() {
            if (output.innerText === undefined || output.innerText.indexOf('a') === -1) {
                // // console.log('Hello');
                // for (let i = 0; i < formats.length; i++) {
                //     const element = array[i];

                // }
                let nearest = nearestPalindromeNum(formats[0]);
                console.log(formats[0]);
                console.log(nearest);
                let nearestString = nearest.toString();
                // let nearestYear = nearestString.slice(0, 4);
                // let nearestMonth = nearestString.slice(4, 6);
                // let nearestDate = nearestString.slice(6, 8);

                let dateTemp1 = `${formats[0].slice(0, 4)}/${formats[0].slice(4, 6)}/${formats[0].slice(6, 8)}`;
                console.log(dateTemp1);

                let dateTemp2 = `${nearestString.slice(0, 4)}/${nearestString.slice(4, 6)}/${nearestString.slice(6, 8)}`;
                console.log(dateTemp2);


                let date1 = new Date(dateTemp1);
                let date2 = new Date(dateTemp2);
                let diffTime = Math.abs(date2 - date1);
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                console.log(diffDays + " days");

                loader.className = "show";
                output.className = "hide";
                setTimeout(function() {
                    loader.className = loader.className.replace("show", "");
                    output.className = output.className.replace("hide", "")
                }, 1000);
                output.innerText = `Sorry, your birthdate is not a palindrome date but the nearest Paindrome date is ${dateTemp2}. You are ${diffDays} days ahead of it!`;
            }
        }, 1500);

    }
});

// palindromeNum(1001);

function nearestPalindromeNum(num) {
    let low = num - 1;
    // console.log(low);
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
        console.log(low);
        return low;
    } else {
        console.log(high);
        return high;
    }
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