let num = Number(prompt('son kiriting'));
let yigindi = 0

do {
    if ((num % 2) == 0) {
        yigindi += num
    }
    
    num = Number(prompt('son kiriting'));
} while(num > 0 && num !== 0);

console.log('yigindi ' + yigindi);