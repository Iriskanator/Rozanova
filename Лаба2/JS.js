  
function square(number) {
    return number;
}

function ReturnOfArgument(theNumberForTheSecondItem1, theNumberForTheSecondItem2) {
    if (isNaN(theNumberForTheSecondItem1)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(theNumberForTheSecondItem2)) {
            return ("b - not a number");
        }
        else return theNumberForTheSecondItem1 + theNumberForTheSecondItem2;
    }
}

// 1.3

function SquaringAnArray() {
    let myArray = [30, "Two", "Use", 40, "One", 5, 10];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}