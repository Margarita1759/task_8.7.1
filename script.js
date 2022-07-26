let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));


let result = (minValue<-999) ? (
alert (`Число выходит за пределы диапазона`),
minValue = parseInt(prompt('Минимальное знание числа для игры','-999'))) :
minValue = minValue;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
let result2 = (maxValue>999) ? (
    alert (`Число выходит за пределы диапазона`),
    maxValue = parseInt(prompt('Максимальное значение','999'))) :
    maxValue = maxValue;



alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -999;
    maxValue = 999;
    orderNumber = 0;
    location.reload ();
})




document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
        

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom2 = Math.round( Math.random()*3);
             if (phraseRandom2 === 1) {
                answerField.innerText = `Наверное, это число ${answerNumber}`;
             } else if (phraseRandom2 === 2) {
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
             } else if (phraseRandom2 === 3) {
                answerField.innerText = `Да это легко! Ты загадал ${answerNumber}`;
             
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === -1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom2 = Math.round( Math.random()*3);
             if (phraseRandom2 === 1) {
                answerField.innerText = `Наверное, это число ${answerNumber}`;
             } else if (phraseRandom2 === 2) {
                answerField.innerText = `Вы загадали число ${answerNumber }?`;
             } else if (phraseRandom2 === 3) {
                answerField.innerText = `Да это легко! Ты загадал ${answerNumber}`;
             
            }
            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom3 = Math.round( Math.random()*3);
             if (phraseRandom3 === 1) {
                answerField.innerText = `Я так и знал\n\u{1F60E}`
             } else if (phraseRandom3 === 2) {
                answerField.innerText = `Это было сложно, но я справился\n\u{1F60E}`
             } else if (phraseRandom3 === 3) {
                answerField.innerText = `Ты достойный соперник\n\u{1F60E}`
            }
        gameRun = false;
    }
})

