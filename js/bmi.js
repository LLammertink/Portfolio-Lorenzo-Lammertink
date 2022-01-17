let userName = prompt(`Wat is je naam?`);
let userWeight = prompt(`Hoeveel weeg je? (afgerond in kilo's)`);
let userLength = prompt(`Hoe lang ben je? (in meters)`);

let bmi = userWeight / (userLength * userLength);

document.body.innerHTML += `<br><br>Hallo ${userName}, u heeft een BMI van ${bmi}.<br><br>`;

console.log(`Calculated BMI is ${bmi}`);

if (bmi > 0  && bmi <= 18.5) {
    document.body.innerHTML += `<br><br>U heeft <b>ondergewicht</b><br><br>`;
} else if (bmi <=25 && bmi > 18.5) {
    document.body.innerHTML += `<br><br>U heeft een <b>gezond gewicht</b><br><br>`;
} else if (bmi <=30 && bmi > 25) {
    document.body.innerHTML += `<br><br>U heeft <b>overgewicht</b><br><br>`;
} else if (bmi <=40 && bmi > 30) {
    document.body.innerHTML += `<br><br>U heeft <b>obesitas</b><br><br>`;
} else if (bmi > 40) {
    document.body.innerHTML += `<br><br>U heeft <b>morbide obesitas</b><br><br><img src="../img/boogie.jpg">`;
} else {
    document.body.innerHTML += `<br><br><img src="../img/guy-fieiri-flame.jpg">`;
}

switch (true) {
    case (bmi > 0 && bmi <= 18.5):
        alert(`U heeft ondergewicht`);
        break;
    case (bmi > 18.5 && bmi <= 25):
        alert(`U heeft een gezond gewicht`);
        break;
    case (bmi > 25 && bmi <= 30):
        alert(`U heeft overgewicht`);
        break;
    case (bmi > 30 && bmi <= 40):
        alert(`U heeft obesitas`);
        break;
    case (bmi > 40):
        alert(`U heeft morbide obesitas`);
        document.head.innerHTML += `<link rel="stylesheet" src="../css/js.css"`;
        break;
    case (bmi <= 0):
        alert(`U manipuleert de wetten van de zwaartekracht`);
        break;
}

