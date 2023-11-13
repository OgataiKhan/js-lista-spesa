'use strict';

// 1. Select the ul element in the html and save it as a variable.
const lista = document.querySelector('.list');
console.log('La tua lista della spesa è:');

// 2. Save an array with the desired shopping list as a variable.
const spesa = [
    'Pane',
    'Insalata',
    'Uova',
    'Pasta',
    'Riso',
    'Cozze',
    'Patate',
    'Melograno',
    'Kiwi',
    'Farina',
    'Vino Bianco',
];

// 3. Initialize "i" as a variable outside the loop.
let i = 0;

// 4. Implement the loop as you would with a "for" loop but increment the value of i at the end of each iteration.
while (i < spesa.length) {
    console.log(spesa[i].toUpperCase());
    const prodotto = document.createElement('li');
    prodotto.classList.add('prodotto');
    prodotto.textContent = spesa[i];
    lista.append(prodotto);
    i++;
}