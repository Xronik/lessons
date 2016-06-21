/**
 * Created by Fly on 21.06.2016.
 */


function roman(number) {
	var sum = 0;
	var ourArray = number.split("");
	for (var i=0; i < ourArray.length; i++) {
		if (ourArray[i] == "M") {
			if (ourArray[i-1] == "C") {
				sum = sum + 800;
			} 	else {
				sum = sum + 1000;
			}
			continue
		}
		if (ourArray[i] == "D") {
			if (ourArray[i-1] == "C") {
				sum = sum + 300;
			} 	else {
				sum = sum + 500;
			}
			continue
		}
		if (ourArray[i] == "C") {
			if (ourArray[i-1] == "X") {
				sum = sum + 80;
			} 	else {
				sum = sum + 100;
			}
			continue
		}
		if (ourArray[i] == "L") {
			if (ourArray[i-1] == "X") {
				sum = sum + 30;
			} 	else {
				sum = sum + 50;
			}
			continue
		}
		if (ourArray[i] == "X") {
			sum = sum + 10;
			continue
		}
		if (ourArray[i] == "I") {
			ourArray.splice(0,i);
			var strArray = ourArray.join("");
			switch (strArray) {
				case "I": sum = sum + 1; break
				case "II": sum = sum + 2; break
				case "III": sum = sum + 3; break
				case "IV": sum = sum + 4; break
				case "IX": sum = sum + 9
			}
		} 	else if (ourArray[i] == "V") {
			ourArray.splice(0,i);
			var strArray = ourArray.join("");
			switch (strArray) {
				case "V": sum = sum + 5; break
				case "VI": sum = sum + 6; break
				case "VII": sum = sum + 7; break
				case "VIII": sum = sum + 8
			}
		}
		break
	}
	console.log(sum);
}

roman("DDDCXC");