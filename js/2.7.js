//2.7 opdracht 1

function outsideTempF(outsideTemp) {
    if (outsideTemp <= 9 && outsideTemp >= 0) {
        alert(`het is koud`);
    } else if (outsideTemp >= 10 && outsideTemp <= 15) {
        document.body.innerHTML += `<br>Het is niet warm, je kunt beter een jas aan doen.<br>`;
    } else if (outsideTemp >= 16 && outsideTemp <= 24) {
        document.body.innerHTML += `<br>Het is niet koud, maar ook niet heel warm<br>`;
    } else if (outsideTemp >= 25 && outsideTemp <= 30) {
        document.body.innerHTML += `<br>Je hoeft geen jas aan vandaag<br>`;
    } else if (outsideTemp >= 31) {
        document.body.innerHTML += `<br>Smeer je in, swa<br>`;
    } else {
        alert(`swa voer eens wat geldigs in`);
    }
}

outsideTempF(13);
outsideTempF(18);
outsideTempF(27);
outsideTempF(99);

//2.7 opdracht 2

function parameter(grade) {
    let passed = false;
    if (grade >= 5.5 && grade <= 10) {
        passed = true;
    } 
    
    if (passed == true) {
        document.body.innerHTML += `<br>Je bent geslaagd! Proficiat.<br>`;
    } else {
        document.body.innerHTML += `<br>Je bent gezakt, git gud dud.<br>`;
    }
}    

parameter(10);
parameter(1);
parameter(5.5);

//2.7 opdracht 3

function opdracht3(number) {
    evenNumber = false;
    if (number % 2 == 0) {
        evenNumber = true;
    }

    if (evenNumber == true) {
        document.body.innerHTML += `<br>Je hebt een even getal, "${number}" ingevoerd.`;
    } else {
        document.body.innerHTML += `<br>je hebt een oneven getal, "${number}" ingevoerd.`;
    }
}

opdracht3(1);
opdracht3(3);
opdracht3(4);
opdracht3(6);

