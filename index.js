// Code your solutions in this file

function writeCards(arr, str) {
    const messages = [];
    for (let i = 0; i < arr.length; i++) {
        messages.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
    }
    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}