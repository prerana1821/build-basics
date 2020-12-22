const birthdate = document.querySelector('#birthdate');
const luckyNum = document.querySelector('#lucky-num');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', function() {
    // console.log(birthdate.value);
    let date = birthdate.value;
    let dateInt = parseInt(date.replaceAll('-', ''));
    let number = luckyNum.value;
    sumOfDigitsNDivisible(dateInt, number);
});

// sumOfDigits(123);

function sumOfDigitsNDivisible(date, number) {
    // console.log(date);
    let sum = 0;
    while (date > 0) {
        let lastDigit = date % 10;
        sum = sum + lastDigit;
        date = date / 10;
    }
    // console.log(parseInt(sum));

    let sumOfDigits = parseInt(sum);

    if (sumOfDigits % number == 0) {
        console.log('Your Birthday is Lucky');
        output.innerText = 'Your Birthday is Lucky';
    } else {
        console.log('Your Birthday is not Lucky');
        output.innerText = 'Your Birthday is not Lucky';
    }
}