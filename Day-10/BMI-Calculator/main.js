let weight = document.getElementById('weight');
let height = document.getElementById('height');
let answer = document.getElementById('answer');
let others = document.getElementById('others');
let calculate = document.getElementById('calculate');




function calculated() {

    console.log('this is working');
    let w = weight.value;
    let h = height.value;
    let ans = w / (h * h);
    console.log(ans);

    answer.innerHTML = `Your BMI is: ${ans}`;

    if (ans < 18.6) {
        others.innerHTML = 'You are Under Age';
    } else if (ans >= 18.6 && ans <= 24.9) {
        others.innerHTML = 'Normal Range';
    } else {
        others.innerHTML = 'Overweight';

    }


}


calculate.addEventListener('click', calculated)







