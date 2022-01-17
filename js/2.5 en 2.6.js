//2.5 opdracht 1//
document.body.innerHTML += `<h1>Opdrachten 2.5 en 2.6</h1><br>`;
document.body.innerHTML += `Bewering 1 = ${1 < 4}<br>`;
document.body.innerHTML += `Bewering 2 = ${4 > 6}<br>`;
document.body.innerHTML += `Bewering 3 = ${'A' < 'g'}<br>`;
document.body.innerHTML += `Bewering 4 = ${5 == '5'}<br>`;
document.body.innerHTML += `Bewering 5 = ${5 != '5'}<br>`;
document.body.innerHTML += `Bewering 6 = ${421 >= 422}<br>`;
document.body.innerHTML += `Bewering 7 = ${8 === '8'}<br>`;
document.body.innerHTML += `Bewering 8 = ${8 !== '8'}<br><br>`;

//2.5 opdracht 2//
const x = 5;
const y = 8;
document.body.innerHTML += `Open de developers console om de vergelijkingen te zien.<br><br>`;

console.log(`Vergelijking 1 = ${x < y}`);
console.log(`Vergelijking 2 = ${x === 5}`);
console.log(`Vergelijking 3 = ${y === 'z'}`);
// console.log(`Vergelijking 4 = ${y == z}`); z is not defined
console.log(`Vergelijking 4 = z is not defined`);
console.log(`Vergelijking 5 = ${x+3 === y}`);
console.log(`Vergelijking 6 = ${x+3+'hoi' === y+'hoi'}`);
//console.log(`Vergelijking 7 = ${y+z === 12}`);
console.log(`Vergelijking 7 = z is not defined`);


// 2.6 opdracht 1
let hour = prompt(`Hoe laat is het? (uur)`);
let minute = prompt(`Hoe laat is het? (minuten)`);

if (hour < 6) {
    document.body.innerHTML += `Het is ${hour}:${minute} 's nachts<br><br>`;
} else if (hour >= 6 && hour < 12) {
    document.body.innerHTML += `Het is ${hour}:${minute} 's morgens<br><br>`;
} else if (hour >= 12 && hour < 18) {
    document.body.innerHTML += `Het is ${hour}:${minute} 's middags<br><br>`;
} else if (hour >= 18 && hour < 24) {
    document.body.innerHTML += `Het is ${hour}:${minute} 's avonds<br><br>`;
} else if (hour > 24 && hour < 0) {
    alert(`Gebruik de 24-uurs notatie voor tijd in uren<br><br>`);
}


//2.6 opdracht 2
let priceExBTW = prompt(`Noem een bedrag in euro's onder de 40`);

if (priceExBTW > 5 && priceExBTW <= 20 ) {
    priceIncBTW = (priceExBTW * 1,06).toFixed(2);
} else if (priceExBTW > 20 && priceExBTW < 40) {
    priceIncBTW = (priceExBTW * 1.21).toFixed(2);
} else if (priceExBTW <= 5 && priceExBTW > 0) {
    priceIncBTW = priceExBTW.toFixed(2);
} else if (priceExBTW > 40) {
    alert(`Onder de 40, schele.`);
} else if (priceExBTW <= 0) {
    alert(`Geen negatieve getallen pik`);
}

let btw = (priceIncBTW - priceExBTW).toFixed(2);

document.body.innerHTML += `Uw prijs exclusief BTW is €${priceExBTW}.<br><br>`
document.body.innerHTML += `Uw prijs inclusief BTW is €${priceIncBTW}.<br><br>`
document.body.innerHTML += `Uw BTW is €${btw}.<br><br>`

//2.6 opdracht 3
let num1 = prompt(`noem een getal`);
let num2 = prompt(`noem een tweede getal`);

if (num1 > num2) {
    document.body.innerHTML += `Het grootste getal is ${num1}.<br><br>`
} else if (num2 > num1) {
    document.body.innerHTML += `Het grootste getal is ${num2}.<br><br>`
}

//ik weet niet hoe ik deze code korter zou kunnen maken.

//2.6 opdracht 4
let animal = prompt("Noem een dier");

if (animal == "Kikker") {
    document.body.innerHTML += `De ${animal} kwaakt.`;
} else if (animal == "Paard") {
    document.body.innerHTML += `Het ${animal} hinnikt.`;
} else if (animal == "Koe") {
    document.body.innerHTML += `De ${animal} loeit.`;
} else if (animal == "Leeuw") {
    document.body.innerHTML += `De ${animal} brult.`;
} else if (animal == "Slang") {
    document.body.innerHTML += `De ${animal} slist.`;
} else if (animal == "Goudvis") {
    document.body.innerHTML += `De ${animal} blubt.`;
} else {
    document.body.innerHTML += `Dit dier staat niet in ons systeem.`;
}