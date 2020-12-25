const anglesToMakeTriangle = document.querySelectorAll('.angles');
const btnCheck1 = document.querySelector('#btn-check1');
const output1 = document.querySelector('#output-1');

const generateAngles = document.querySelector('#generate-angles');



btnCheck1.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < anglesToMakeTriangle.length; i++) {
        sum = sum + Number(anglesToMakeTriangle[i].value);
    }
    console.log(sum);
    if (sum === 180) {
        console.log('These angles make a triangle');
    } else {
        console.log('These angles not make a triangle');
    }
});

generateAngles.addEventListener('click', function() {
    // let angles = [];
    // let sum = 0;
    // for (let i = 0; i < 3; i++) {
    //     angles.push(Math.floor(Math.random() * 180) + 1);
    //     // sum = sum + Math.floor(Math.random() * 180) + 1;
    // }
    // let sum = angles.reduce((a, b) => a + b, 0);
    // console.log(sum);
    // if (sum === 180) {
    //     // angles.push()
    //     console.log('Yes');
    // }
    // console.log(angles);

    // let sum = 0;
    // while (sum !== 180) {
    //     for (let i = 0; i < 3; i++) {
    //         angles.push(Math.floor(Math.random() * 180) + 1);
    //         // sum = sum + Math.floor(Math.random() * 180) + 1;
    //     }
    //     let sum = angles.reduce((a, b) => a + b, 0);
    //     console.log(sum);
    // }
})


function count_of_ways(n) {
    let count = 0;
    for (let i = 0; i <= n; i++)
        for (let j = 0; j <= n; j++)
            for (let k = 0; k <= n; k++)
                if (i + j + k === n)
                    count++;
    return count;
}

let angles = count_of_ways(180);
console.log(angles);