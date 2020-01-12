// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**** Solution 1 ****/
// function reverse(str) {
//
//     // const arr = str.split('');
//     // arr.reverse();
//     // return arr.join('');
//     return str.split('').reverse().join('');
//
// }

/**** Solution 2 ****/
function reverse(str){
   let reversed = '';
   for (let character of str) {
       reversed = character + reversed;
   }
   return reversed;
}

module.exports = reverse;
