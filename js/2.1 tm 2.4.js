document.body.innerHTML += `<h2>opdrachten 2.1 t/m 2.4</h2>`

//2.1 opdracht 1//
const myName = `Lorrie`;
console.log(myName);

//2.1 opdracht 2//
let temperature = 5;

//2.1 opdracht 3//
newTemperature = temperature + 5;
alert('Het is op dit moment ' + newTemperature + ' graden');

//2.1 opdracht 4//
document.body.innerHTML += `<h1>Dit script is door ${myName} geschreven en het is vandaag ${newTemperature} graden.</h1><br>`

//2.2 opdracht 1//
let nameResult = prompt('Wat is je naam?');

//2.2 opdracht 2//
alert(`Jouw naam is ${nameResult}`)

//2.2 opdracht 3//
const cookies = confirm(`Neem je cookies aan voor deze blanco pagina? Ik zweer op mijn moeders graf dat ik je data niet verkoop aan een stel obscure Roemenen`);
if (cookies) {
    alert(`Tof, je data is bij deze verkocht aan een stel obscure Roemenen`);
} else {
    alert(`Ik vraag het je nog een keer...`);
    confirm(`Neem je cookies aan voor deze blanco pagina? Ik zweer op mijn moeders graf dat ik je data niet verkoop aan een stel obscure Roemenen`);
if (cookies) {
    alert(`Tof, je data is bij deze verkocht aan een stel obscure Roemenen`);
} else {
    alert(`Ik vraag het je nog een keer...`);
    confirm(`Neem je cookies aan voor deze blanco pagina? Ik zweer op mijn moeders graf dat ik je data niet verkoop aan een stel obscure Roemenen`);
if (cookies) {
    alert(`Tof, je data is bij deze verkocht aan een stel obscure Roemenen`);
} else {
    alert(`Ik vraag het je nog een keer...`);
    confirm(`Neem je cookies aan voor deze blanco pagina? Ik zweer op mijn moeders graf dat ik je data niet verkoop aan een stel obscure Roemenen`);
if (cookies) {
    alert(`Tof, je data is bij deze verkocht aan een stel obscure Roemenen`);
} else {
    alert(`Stik dan maar lekker in je cookies, joh.`);
}
}
}
}

//2.2 opdracht 4//
const myCity = prompt('Uit welke plaats kom jij?');
alert(`Ik woon in ` + myCity);
//Het probleem in deze code is dat "alert" niet goed is gespeld. Hierdoor wordt er geen melding gegeven.//

//2.4 opdracht 1//
let x = 2;
document.body.innerHTML += `de macht van ${x} is ${x ** x}<br>`;
let y = 3;
document.body.innerHTML += `de macht van ${y} is ${y ** y}<br>`;
let z = prompt(`Noem een getal`);
document.body.innerHTML += `de macht van ${z} is ${z ** z}<br><br>`;

//2.4 Opdracht 2//
let age = prompt(`Hoe oud ben je?`);
console.log(`${2021 - age} of ${2020 - age}`);

//2.4 Opdracht 3//
let v = 5
let w = 7

document.body.innerHTML += `De som van ${v} en ${w} is ${v + w}<br>`;
document.body.innerHTML += `Het verschil van ${v} en ${w} is ${v - w}<br>`;
document.body.innerHTML += `De vermenigvuldiging van ${v} en ${w} is ${v * w}<br>`;
document.body.innerHTML += `De deling van ${v} en ${w} is ${v / w}<br>`;

//2.4 Opdracht 4//
let randomNumber = prompt(`Noem een willekeurig getal`);
let randomAnswer = randomNumber / 2
alert(`het restgetal van ${randomNumber} gedeeld door twee is ${randomAnswer}`)

//2.4 opdracht 5//
//het antwoord in de alertbox is "NaN" als je niet met een nummer antwoordt, maar ik zie niets in de developers console.//

