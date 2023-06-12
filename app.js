function generateColorCode(){
	let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let color = '#';
	
	for (let i = 0; i < 6; i++) {
		let num = Math.round(Math.random() * 15);
		let num2 = hexCodes[num];
		color = color + num2;
		console.log(color);
	}

	document.getElementById('container').style.backgroundColor = color;
	document.getElementById('output').style.color = color;
	document.getElementById('output').innerHTML = color;
}



// function generateColor() {
// 	let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

// 	let color = '#';

// 	for (let i = 0; i < 6; i++) {
// 		let num = Math.round(Math.random() * 15);

// 		let num2 = hexCodes[num];

// 		color += num2;
// 	}

// 	document.getElementById('container').style.backgroundColor = color;
// 	document.getElementById('output').style.color = color;
// 	document.getElementById('output').innerHTML = color;
// }
