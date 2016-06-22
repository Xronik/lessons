/**
 * Created by Fly on 21.06.2016.
 */


function roman(number) {
	var sum = 0;
	var sumR = 0;
	var sumX = 0;
	var sumC = 0;
	var sumM = 0;
	var sumL = 0;
	var sumD = 0;
	
	// Proverka na povtorenee
	
	var nebolsheFourX = number.search("XXXIX");
	var nebolsheFourC = number.search("CCCXC");
	var nebolsheFourM = number.search("MMMCM");

	// Proverka na kolichestvo znakov

	var ourArray = number.split("");
	
	for (var y=0; y < ourArray.length; y++) {
		switch (ourArray[y]) {
			case "X": sumX += 1; break
			case "C": sumC += 1; break
			case "M": sumM += 1; break
			case "L": sumL += 1; break
			case "D": sumD += 1; break
		}
	}
	if (sumL > 1 || sumD > 1) {
		throw new Error('Неправильный формат цифры');
	} else if ( sumX > 3 && nebolsheFourX < 0 || sumX > 4 ) {
		throw new Error('Неправильный формат цифры');
	} else if ( sumC > 3 && nebolsheFourC < 0 || sumC > 4) {
		throw new Error('Неправильный формат цифры');
	} else if ( sumM > 3 && nebolsheFourM < 0 || sumM > 4) {
		throw new Error('Неправильный формат цифры');
	}

	// Konvertacia i obshie pravila

	for (var i=0; i < ourArray.length; i++) {
		if (ourArray[i] == "M") {
			if (ourArray[i-1] == "C") {
				sum += 800;
			}	else if (ourArray[i-1] == "X" || ourArray[i-1] == "L" || ourArray[i-1] == "D") {
					throw new Error('Неправильный формат цифры');
			}	else {
					sum += 1000;
			}
			continue
		}
		if (ourArray[i] == "D") {
			if (ourArray[i-1] == "C") {
				sum += 300;
			}	else if (ourArray[i-1] == "X" || ourArray[i-1] == "L") {
					throw new Error('Неправильный формат цифры');
			}	else {
					sum += 500;
			}
			continue
		}
		if (ourArray[i] == "C") {
			if (ourArray[i-1] == "X") {
				sum += 80;
			} 	else if (ourArray[i-1] == "L") {
					throw new Error('Неправильный формат цифры');
			}	else {
				sum += 100;
			}
			continue
		}
		if (ourArray[i] == "L") {
			if (ourArray[i-1] == "X") {
				sum += 30;
			} 	else {
				sum += 50;
			}
			continue
		}
		if (ourArray[i] == "X") {
			if (ourArray[i-1] == "L" && ourArray[i-2] == "X") {
				throw new Error('Неправильный формат цифры');
			}	else if (ourArray[i-1] == "C" && ourArray[i-2] == "X") {
				throw new Error('Неправильный формат цифры');
			}	else{
				sum += 10;
			}
			continue
		}
		if (ourArray[i] == "I") {
			ourArray.splice(0,i);
			var strArray = ourArray.join("");
			switch (strArray) {
				case "I": sumR = 1; break
				case "II": sumR = 2; break
				case "III": sumR = 3; break
				case "IV": sumR = 4; break
				case "IX": sumR = 9
			}
		} 	else if (ourArray[i] == "V") {
			ourArray.splice(0,i);
			var strArray = ourArray.join("");
			switch (strArray) {
				case "V": sumR = 5; break
				case "VI": sumR = 6; break
				case "VII": sumR = 7; break
				case "VIII": sumR = 8
			}
		}
		break
	}

	// Proverka na okonchanie i na vuxod za ramki ischislenia

	if ( i == ourArray.length || sumR !== 0) {
		var arabicNumber = sum + sumR;
		if (arabicNumber > 3999) {
			throw new Error('Цифра виходит за пределы исчисления');
		}	else {
				console.log(arabicNumber);
		}
	} else {
		throw new Error('Неправильный формат цифры');
	}
}

roman("XIXX");