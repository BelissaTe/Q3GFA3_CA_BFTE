var randomNumber = Math.floor(Math.random()*1001);
console.log(randomNumber);

document.write('Randomly generated number: ' + randomNumber);

var hundreds = Math.floor(randomNumber / 100);
var tens = Math.floor((randomNumber % 100) / 10);
var ones = randomNumber % 10;

if (tens == 0) {
    document.write(' <br> Breakdown: ' + hundreds + '00, ' + tens + ', ' + ones);
}

else if (hundreds == 0) {
    document.write(' <br> Breakdown: ' + hundreds + ', ' + tens + '0, ' + ones);
}

else if (tens!=0&&hundreds!=0) {
    document.write(' <br> Breakdown: ' + hundreds + '00, ' + tens + '0, ' + ones);
}

var datepart=new Date();
document.write('<br>' + '<br>' + datepart);