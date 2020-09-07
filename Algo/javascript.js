function quantStr(str) {
	let char = 0;
	let word = 0;
	let voyel = 0;
	let i = 0;
	if (str != "") {
		word = 1;
	}
	while (str[i] != ".") {
		i++;
		if (str[i] === " ") {
			word++;
		}

		if (str[i] != " " && str[i] != ".") {
			char++;
		}
		if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "y") {
			voyel++;
		}
	}
	let object = {
		NbrChar: char,
		NbrWord: word,
		NbrVoyel: voyel
	}
	return object;

}



console.log(quantStr("Cette phrase contient 11 mots , 17 voyelle et 47 caractere."));


function permuteN(n) {
	let nstring = n.toString();
	return nstring[2] + nstring[0] + nstring[1];
}

console.log(permuteN(654));


function rental(day, km) {
	let pricePKm = 0;
	let pricePDay = day * 100 + day * 0.3 + day * 0.18;
	if (km < 100) {
		pricePKm = km * 0.7 + day * 0.3 + day * 0.18;
		// return pricePKm;
	}
	if (km >= 100 && km < 1000) {
		pricePKm = km * 0.4 + day * 0.3 + day * 0.18;
		// return pricePKm;
	}
	if (km >= 1000) {
		pricePKm = km * 0.2 + day * 0.3 + day * 0.18;
		// return pricePKm;
	}

	console.log(pricePKm);
	console.log(pricePDay);
	if (pricePDay > pricePKm) {
		return "The km option is better for you"
	} else {
		return "The Day option is better for you"
	}
	console.log(pricePKm);
}



console.log(rental(10, 100));

// const distinctSum = (a,b) => {
// 	let sum = 0;
// 	for (let i = 0; i < a.length; i++) {
// 		// code...
// 		let found = false;
// 		for (let j = 0; j< b.length; j++) {
// 			// code...
// 			if (a[i] === b[j]) {
// 				// code...
// 				found= true;
// 			}
// 		}
// 		if (!found) {
// 		// code...
// 		sum += a[i];
// 	}
// 	}
	
// 	return sum;

// }


// console.log(distinctSum([2, 4, 1, 9, 3], [3, 1, 7, 9]));


// Task Two Interval Overlapping 

const intervalLap = (array) => {
	let overlapping = false;
	for (let i = 0; i < array.length; i++) {
		// code...
		for (let j = 0; j < array.length; j++) {
			// console.log(i,j);
			if ( i != j) {

				if ((array[i][0] > array[j][0] && array[i][0] < array[j][1])||(array[i][1] < array[j][1] && array[i][1] > array[j][0])) {
					// code...

					overlapping= true
				}	
			}
			
		}

	}
	return overlapping;
}
console.log(intervalLap([[1,5],[6,10],[12,15], [7,9]]));


// scalar Product 

const scalarProd = (tab1,tab2) => {
	if (tab1.length === tab2.length) {
		// code...
		let prod = 0;
 		for (let i = 0; i < tab1.length; i++) {
			// code...
			prod += tab1[i]*tab2[i];
		}
		return prod;
	}
	else return null;
}

console.log(scalarProd([2,7,1],[8,2,8]));

// zero 

const isItZero = (tab1,tab2) => {
	if (scalarProd(tab1,tab2)=== 0) {
		// code...
		return true;
	}
	else 
		return false;
}
console.log(isItZero([2,7,1],[8,2,8]));

// with es6 
const zero2 = (tab1,tab2) => scalarProd(tab1,tab2)===0;
console.log(zero2([2,7,1],[8,2,8,9]));
console.log(zero2([2,1,1],[2,1,-5]));

// number of separator number of Character number of digit 
// is separator function 
const is_separator = (separator) => {
	if (separator === " " || separator ===",") {
			// code...
			return true;
		}	
		return false;
}
// is letter function 
const is_letter = (character) => {
	if (character.codePointAt() >= 65 && character.codePointAt() <=90 || character.codePointAt() >= 97 && character.codePointAt() <= 97) {
		// code...
		return true;
	}
	return false;
}

// is digit function 
const is_digit = (number) => number.codePointAt() >= 48 && number.codePointAt() <= 57

// final function 
const nbrOf = (string) => {
			let nbrOfSep = 0;
		let nbrOfChar = 0;
		let nbrOfDig = 0;
	for (let i = 0; i < string.length; i++) {
		// code...
		 is_separator(string[i])? ++nbrOfSep: nbrOfSep;
		 is_letter(string[i])? ++nbrOfChar: nbrOfChar;
		 is_digit(string[i])? ++nbrOfDig: nbrOfDig;
		 
	}
	return `nbr of separator is ${nbrOfSep}, nbr of character is ${nbrOfChar}, nbr of digit is ${nbrOfDig}`;
}


console.log(is_separator(" "))
console.log(is_separator(","))
console.log(is_separator("a"))
console.log(is_letter('a'))
console.log(is_letter('9'))
console.log(is_digit('5'))
console.log(is_digit(','))

console.log(nbrOf("AZ , 9#"));


// hotel 
const hotel = [
  {
    idRoom: 1,
    type: 2,
    state: false,
    persons: [
      {
        id: 2132,
        name: "Mohamed",
        age: 18,
        nationality: 1,
      },
    ],
  },
  {
    idRoom: 2,
    type: 1,
    state: true,
    persons: null,
  },
  {
    idRoom: 3,
    type: 3,
    state: false,
    persons: [
      {
        id: 213234,
        name: "David",
        age: 38,
        nationality: 1,
      },
      {
        id: 21326,
        name: "Ann",
        age: 34,
        nationality: 1,
      },
      {
        id: 213102,
        name: "Jack",
        age: 6,
        nationality: 1,
      },
    ],
  },
];
const getFreeRooms = (h) => {
  let cpt = 0;
  for (let i = 0; i < h.length; i++) {
    if (h[i].state) cpt++;
  }
  return cpt;
};

const getNbrClientNationality = (h,nat) => {
	let cpt = 0;
	for (let i = 0; i < h.length; i++) {
		// code...
		if(!h[i].state) {
			for (let j = 0; j < h[i].persons.length; j++) {
				// code...
				if (h[i].persons[j].nationality===nat) {
					// code...
					cpt++;
				}
			}

			}
		}
		return cpt;
	}


console.log(getNbrClientNationality(hotel,1));

const getNbrOfChildren =(h) => {
	let cpt = 0;
	for (let i = 0; i < h.length; i++) {
		// code...
		if (!h[i].state) {
			// code...
			for (let j = 0; j < h[i].persons.length; j++) {
				// code...
				if (h[i].persons[j].age <= 12) {
					// code...
					cpt++;
				}
			}
		}
	}
	return cpt++;
}


console.log(getNbrOfChildren(hotel));

// Bubbles Sort 
// Swap function 
const swapF = (arr,i,j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
// Compare Function 

const compF = (tab) => {
	let cpt;

	do {
			 cpt = 0;
		for (let i = 0; i < tab.length-1; ++i) {
			// code...
			if (tab[i] > tab[i+1]) {
				cpt++;
				swapF(tab,i,i+1);
			}
		}
	} while (cpt != 0);
	
	return tab;
}

let t0 = performance.now();
compF(['bds','gkl','rom','wed','jik','abe','abc'])
let t1 = performance.now();
console.log(`time of excution ${t1-t0}`)
console.log(compF(['bds','gkl','rom','wed','jik','abe','abc']));

// Binary Search 
 
const binSearch = (tab,n) => {
	let sortedTab = compF(tab);// used the compare function (bubble sort) to sort the tab
	let start = 0;
	let end = sortedTab.length;
	do {
		// code...
		 let middle = Math.floor((start+end)/2);
		if (sortedTab[middle] === n) {
			// code...
			return middle;
		}
		else if(sortedTab[middle]<n) {
			// code...
			start = middle +1;
		}
		else if(sortedTab[middle] > n) {
			end = middle -1;
		}
	} while (start <= end);


	return `${n} is not here`;
}

console.log(binSearch([3,2,1,5,9,8],7));


const min =(a,b) => {
	return a<b? a: b;
};

const minTab = (tab) => {
	if (tab.length === 2) {
		// code...
		return min(tab[0],tab[1]);
	}
	return min(tab[0],minTab(tab.slice(1,tab.length)));
}

console.log(minTab([8,3,4,9,1]))


const binSearchRecursive = (tab,n,start,end) => {
	let sTab = tab.slice();
	if(start===undefined) start = 0;
	if(end===undefined) end = tab.length;
	let middle = Math.floor((start+end)/2);
	if(end<=start && sTab[middle] !== n) return `${n} is not here`;
	else if (sTab[middle]===n) return middle;
	else if (sTab[middle]< n) return binSearchRecursive(sTab,n,middle+1,end);
	else return binSearchRecursive(sTab,n,start,middle-1);
}

console.log(binSearchRecursive([1,2,4,7,8,9],5));