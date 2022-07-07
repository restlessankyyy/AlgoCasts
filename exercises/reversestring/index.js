// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 2nd solution
function reverse(str) {
    let reversed = '';
    for ( let char of str){
        reversed = char + reversed;
        
        console.log(reversed);     
        debugger;

    }
    return reversed;
}

reverse('hello');
module.exports = reverse;



// 1st solution
// function reverse(str) {
//     const splitString = str.split('');
//     const reversedString = splitString.reverse();
//     const reversed = reversedString.join('');
//     return reversed;
// }



// 2nd solution
// function reverse(str) {
//     let reversed = '';
//     for ( let char of str){
//         reversed = char + reversed;
//         console.log(reversed);       
// // h
// // eh
// // leh
// // lleh
// // olleh
// // olleh
//     }
//     console.log(reversed);
//     return reversed;
    
// }



// 3rd Solution
// function reverse(str) {
//     const arr = str.split('');
//     console.log(arr);
//     const reverseString = arr.reduce((rev, char) => char + rev, '');
//     console.log(reverseString);
//     return reverseString;  
// }