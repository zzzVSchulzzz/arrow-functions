/** Decode the code of the arrow function into a regular user function.
The original function:
const quiz = a => b => a + b;
*/

const quiz = function(a){
    return function(b){
        return a + b;
    }
};