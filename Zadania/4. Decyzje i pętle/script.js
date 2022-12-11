function evenOrOdd(n) {
    if (evenOrOdd % 2) {
        console.log('Liczba nieparzysta');
    } else {
        console.log('Liczba parzysta');
    }
}

evenOrOdd(2);
evenOrOdd(3);

console.log('-------------');

function oneToHundred() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0){
            console.log(i)
        }
    }
}