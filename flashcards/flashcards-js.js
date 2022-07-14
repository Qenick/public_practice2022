//ES6


//tworzenie class
//constructor
//dziedziczenie extendsm 
//super
//metody
//spread operator - tablice, stringi, obiekty(ze zmianą stanu obiektu)
//rest operator
//destrukturyzacja list
//destrukturyzacja obiektów
//destrukturyzacja obiektów ze zmianą nazwy klucz/zmienna
//Prostsze przypisywanie zmiennych do kluczy obietów w notacji ES6
//Eksport/import w ES5.
//Eksport/import w ES6.

//ES5 
// tworzenie konstruktora bez parametrów
// tworzenie konstruktora z parametrami
// tworzenie obiektu na podstawie konstruktora
// dodawanie do konstruktora metody poprzez łańcuch prototypów


//Dopisać funkcje i funkcje anonimowe



//Napisz funkcje czasu która co sekunde będzie drukowała 1 i zostanie wyłączona po 5 sekundach
const intervalID = setInterval(function () {
    console.log("Działam co sekundę!");
}, 1000);

const timeoutID = setTimeout( function () {
    clearInterval(intervalID);
}, 5000);


//Na końcu tablicy nums dodaj 4
nums.push(4);

//Połącz wartości z tablicy nums w jednego stringa rozdzielając spacją
nums.join(' ');

//Zwróć indeks wartości 1 z tablicy nums
nums.indexOf(1);

//Stwórz tablice nums z liczbami 1 2 3
const nums = [1, 2, 3];



//Pętla wypisująca po kolei wszystkie wartości z tablicy nums
for (let i = 0; i <= nums.length - 1; i++) {
    console.log(nums[i]);
}


//Prosta pętla która wydrukuje zmienną result z sumą liczb od 0 do 5
let result = 0;
for (let i = 0; i <= 5; i++) {
    result = result + i;
}
console.log(result);


//Prosta pętla drukująca liczby od zera do 10 

for (let i = 0; i <= 10; i++) {
    console.log(i);
}



//Instrukcja warunkowa switch - oceń zmienną grade i dla 4 wydrukuj 'dobry' a dla 3 wydrukuj dostateczny, dla innych
// error

switch(grade) {
    case 4: {
        console.log('dobry');
        break;
    }
    case 3: {
        console.log('dostateczny');
        break;
    }
    default: {
        console.log('error');
    }
}




//Prosta instrukcja warunkowa - jeśli age jest większe lub równe 18 to wydrukuj 'Jesteś pełnoletni', jeśli nie to
// wydrukuj 'Jesteś nieletni'.

if (age >= 18) {
    console.log('Jesteś pełnoletni');
} else {
    console.log('Jesteś nieletni');
}




//Ternary operator w zmiennej age sprawdź czu user jest pełnoletni. Jeśli tak to zmienna ma wartość string "Dorosły"
// a jak nie to Dziecko.

const age = user >= 18 ? 'Dorosły' : 'Dziecko'




//napisz wzór na losowanie liczby z zakresu min-max

Math.floor(Math.random() * (max - min + 1) + min);


// DONE
// DONE
// DONE
// DONE