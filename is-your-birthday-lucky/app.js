const birthdate = document.querySelector('#birthdate');
const luckyNum = document.querySelector('#lucky-num');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const tweet = document.querySelector('#tweet');
const policy = document.querySelector('#policy');
const policyCard = document.querySelector("#policy-card");


btn.addEventListener('click', function() {
    // console.log(birthdate.value);
    let date = birthdate.value;
    if (date === '') {
        alert('Please, Enter your Birth Date!')
    } else {
        let dateInt = parseInt(date.replaceAll('-', ''));
        let number = luckyNum.value;
        if (number === '') {
            alert('Please, Enter your Lucky Number!')
        } else {
            sumOfDigitsNDivisible(dateInt, number);
        }
    }
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
        // console.log('Your Birthday is Lucky');
        output.innerText = 'Congratulations, your Birthday is a Lucky day!💯🎉';
    } else {
        // console.log('Your Birthday is not Lucky');
        output.innerText = 'Sorry, your birthday is not a lucky day!😉🤗';
    }
}

reset.addEventListener('click', function() {
    birthdate.value = '';
    output.innerText = '';
    luckyNum.value = '';
});

tweet.addEventListener('click', function() {
    let message = output.textContent;
    // console.log(message);
    if (message === '') {
        output.innerText = `Please Enter a Birth Date!`;
        // alert('Please Enter the Birth Date!');
    } else {
        let twitterUrl = `https://twitter.com/intent/tweet?text=${message}`;
        window.open(twitterUrl, '_blank')
    }
});

policy.addEventListener('click', function() {
    policyCard.className = "show";
    setTimeout(function() { policyCard.className = policyCard.className.replace("show", ""); }, 3000);
})