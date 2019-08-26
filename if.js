let number = [];
number = [1,2,1,5,2,5,6,2];
if(number[0] == number[3]) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}

if(number[0] == number[2] && number[2] == number[4]) {
    console.log("Correct");
}

if(number[0] == number[2] || number[2] == number[4]) {
    console.log("Correct");
}