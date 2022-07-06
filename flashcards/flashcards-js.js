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