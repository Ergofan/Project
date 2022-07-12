"use strict";

if (4 == 4) {
    console.log(`ok`);
} else {
    console.log(`not ok`);
}; 

// if (1) {
//     console.log(`ok`);
// } else {
//     console.log(`not ok`)
// }; 

// const num = 50;

// if (num < 49) {
//     console.log(`Mistake`);
// } else if (num > 100) {
//     console.log(`too much`);
// } else {
//     console.log(`pzdc`);
// } 

// (num === 50) ? console.log(`ok!`) : console.log(`Suka pzdc`);

const num = '50';

switch (num) {
    case '49':
        console.log(`Не равно`);
        break;
    case '100':
        console.log(`Не равно`);
        break;
    case '50':
        console.log(`true`);
        break;
    default:
        console.log(`not at this time`);
        break;
}