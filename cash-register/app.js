const bill = document.querySelector('#bill-amt');
const cash = document.querySelector('#cash');
const btnCheck = document.querySelector('#btn-check');
const noOfNotes = document.querySelectorAll('.noOfNotes')


let notes = [2000, 500, 100, 20, 10, 5, 1];
let returnNotes = [];

btnCheck.addEventListener('click', function() {
    let billAmt = bill.value;
    let cashAmt = cash.value;
    for (const notes of noOfNotes) {
        notes.innerText = '';
    }

    if (billAmt === '') {
        alert('Please, Enter Billing Amount!');
    } else if (cashAmt === '') {
        alert('Please, Enter Cash Amount!');
    } else if (billAmt < cashAmt) {
        alert('Unsufficient cash, please enter adequate cash amount!');
    } else if (cashAmt === billAmt) {
        alert('No Change!');
    } else {
        let returnAmount = parseInt(cashAmt) - parseInt(billAmt);
        console.log(returnAmount);

        for (let i = 0; i < notes.length; i++) {
            returnNotes[i] = Math.floor(returnAmount / notes[i]);
            returnAmount = returnAmount - notes[i] * returnNotes[i];
            noOfNotes[i].innerText = returnNotes[i];
            if (returnAmount === 0) {
                break;
            }
        }

        for (const notes of noOfNotes) {
            if (notes.innerText == '0') {
                notes.innerText = '';
            }
        }

        console.log(returnNotes);
        console.log(noOfNotes);

        returnNotes = [];
    }
});