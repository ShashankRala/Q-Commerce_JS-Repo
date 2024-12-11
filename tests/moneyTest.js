import {formatCurrency} from '../scripts/utils/money.js';



// grouping the relates tests together
console.log('test suite: formatCurrency');
// code/it converts cents into dollors 
console.log('converts cents into dollars');
if(formatCurrency(2095)  === '20.95'){
    console.log('Passed');

} else {
    console.log('Failed');
}


// edge cases- test With values that are tricky
// the code/it  works with 0
console.log('works with 0')
if(formatCurrency(0)  === '0.00'){
    console.log('Passed');

} else {
    console.log('Failed');
}

// the code/it  rounds up to the nearest cent
console.log('rounds up to the nearest cent')
if(formatCurrency(2000.5)  === '20.01'){
    console.log('Passed');

} else {
    console.log('Failed');
}


console.log('rounds up to the nearest cent')
if(formatCurrency(2000.4)  === '20.00'){
    console.log('Passed');

} else {
    console.log('Failed');
}