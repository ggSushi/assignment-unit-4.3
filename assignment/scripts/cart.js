console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
//STRETCH: try to keep as many declared var at the top
const maxItems = 5;

function addItem(item) {
 /* disabled this code for the stretch goal.  
    basket.push(item);
    return true;
     STRETCH: update addItem function
 */   
    let filled = isFull();
    if (filled === true) {
     // disabling below line for stretch goal and cleanliness
       // basket.pop();
        console.log(`Basket is Full, can't add last item.`);
        return false;
    } else {
        //Added line 17 to line 22 for cleaner code,
        //allowing push to happen only if isFull is false.
        basket.push(item);
        return true;
    }
}

//? testing some code
console.log(`I have ${basket} in my basket`); // result is nothing
// Adding eggs to basket
// We've added 'eggs' to the basket while also setting the 
// result value to the return value of the function
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
    //basket.length = 0 will clear the array also
    basket = [];
}
 empty();
console.log(`I have ${basket} in my basket`);

//! Stretch goals

// isFull will return false if it is less than maxItems
// ' ' will return true if it is equal or more than maxItems
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

addItem('milk');
addItem('beans');
addItem('pizza');
addItem('ramen');
addItem('steak');
console.log(`I have ${basket} in my basket`);

// Adding item to go over maxItems
addItem('toys');
console.log(`I have ${basket} in my basket`);

