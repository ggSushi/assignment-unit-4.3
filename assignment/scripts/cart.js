console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
}
//? testing some code
console.log(`I have ${basket} in my basket`); // should display nothing
// Adding eggs to basket
let result = addItem('eggs');

console.log(`Do you have food in basket?`, result);
console.log(`I have ${basket} in my basket`);

// This function will console log everything in basket
function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}
addItem('banana');
listItems();
console.log(`I have ${basket} in my basket`);

// This function will empty everything in basket
function empty() {
    basket = '';
}
empty();
console.log(`I have ${basket} in my basket`);

//! Stretch goals






