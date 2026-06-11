let numbers = [5, 2, 8, 1, 9];

// show original array
document.getElementById("original").innerHTML =
    numbers.join(", ");

// map array (multiply by 2)
let mappedArray = numbers.map(num => num * 2);

// show mapped array
document.getElementById("mapped").innerHTML =
    mappedArray.join(", ");

function sortAscending() {
    let ascending = [...mappedArray].sort((a, b) => a - b);

    document.getElementById("result").innerHTML =
        "Ascending Order: " + ascending.join(", ");
}

function sortDescending() {
    let descending = [...mappedArray].sort((a, b) => b - a);

    document.getElementById("result").innerHTML =
        "Descending Order: " + descending.join(", ");
}