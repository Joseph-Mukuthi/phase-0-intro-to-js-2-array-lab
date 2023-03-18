// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    // Add a cat name after the array 
    // and modify the original array
    return cats.push(name);
}

function destructivelyPrependCat(name){
    // Add a cat name at start of array 
    // and modify the original array
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    // Remove a cat name at end of array 
    // and modify the original array
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    // Remove a cat name at start of array 
    // and modify the original array
    return cats.shift();
}

function appendCat(name){
    // appends a cat to the cats array and returns 
    // a new array, leaving the cats array unchanged
    const newCatList = [ ...cats, name];
    return newCatList;
}

function prependCat(name) {
    // prepends a cat to the cats array and returns 
    // a new array, leaving the cats array unchanged
    const newCatList = [name, ...cats];
    return newCatList;
}

function removeLastCat(){
    // removes the last cat in the cats array and returns 
    // a new array, leaving the cats array unchanged
    const remainingCats = cats.slice(0,-1);
    return remainingCats;
}

function removeFirstCat() {
    // removes the last cat in the cats array and returns 
    // a new array, leaving the cats array unchanged
    const remainingCats = cats.slice(1);
    return remainingCats;
}