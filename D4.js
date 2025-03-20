const divider = "-----------------------";

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(20, 20));

console.log(divider);
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  let sum = num1 + num2;
  let multiSum = sum * 3;

  if (num1 === num2) {
    return multiSum;
  } else {
    return sum;
  }
}

console.log("Il totale per due parametri uguali è: " + crazySum(3, 3));
console.log("Il totale per due parametri diversi è: " + crazySum(2, 8));

console.log(divider);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num1) {
  const num2 = 19;
  let numDiff = num1 - num2;

  if (num1 < num2) {
    numDiff = num2 - num1;
  }

  if (num1 > num2) {
    return console.log(numDiff * 3);
  } else {
    return console.log(numDiff);
  }
}

crazyDiff(20);

console.log(divider);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  let a = (n >= 20 && n <= 100) || n === 400;
  return console.log(a);
}

boundary(19);
boundary(20);
boundary(100);
boundary(101);
boundary(400);

console.log(divider);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  let epicString = "EPICODE ";

  if (string.toLowerCase().startsWith(epicString.trim().toLowerCase())) {
    return string;
  } else if (string !== epicString) {
    return epicString.concat(string);
  }
}

console.log(epify("ciao"));
console.log(epify("epicode è carino"));
console.log(epify("è carino"));
console.log(epify("Epicode è carino"));

console.log(divider);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return console.log("true");
  } else {
    return console.log("Il numero scelto non è multiplo di 3, né di 7");
  }
}

check3and7(13);
check3and7(12);
check3and7(7);

console.log(divider);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reverseString("epicode"));

console.log(divider);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  const words = string.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = "";
    for (let j = 0; j < words[i].length; j++) {
      if (j === 0) {
        word += words[i][j].toUpperCase();
      } else {
        word += words[i][j];
      }
    }
    result += word + " ";
  }
  return result;
}

console.log(upperFirst("ciao come stai?"));

console.log(divider);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i > 0 && i < string.length - 1) {
      result += string[i];
    }
  }
  return result;
}

console.log(cutString("ciao"));

console.log(divider);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(Math.floor(Math.random() * 10));
  }
  return result;
}
console.log(giveMeRandom(10));
