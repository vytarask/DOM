// Sukurkite HTML dokumentą su lentele (table) ir forma (form). Dokumentu turi būti žemiau aptartos žymos (angl. tags) ir jų atributai.
// Suraskite ir konsolėje atvaizduokite:
	
// Lentelę su id = "age-table".
	
// Pirmasis <td> toje lentelėje (su id “age”).
	
// Visus <label> elementus lentelės viduje (jų turėtų būti 3).
	
// Pirmają įvestį (<input>) į formą.
	
// Paskutinę įvestį (<input>) į formą.

let ageTable = document.querySelector('#age-table');
console.log(ageTable);

let age = document.querySelector('#age');
console.log(age);

let allLabels = document.querySelectorAll('label');
console.log(allLabels);

let firstInput = document.querySelector('#firstInput')
console.log(firstInput);

let lastInput = document.querySelector('#lastInput')
console.log(lastInput);