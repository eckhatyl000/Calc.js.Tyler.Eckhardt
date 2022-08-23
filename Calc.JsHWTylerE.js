const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What maths you tryin to do?",function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
    console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if(mathSymbol === "/"){
		console.log(num1 / num2);
	}
	if(mathSymbol === "Sqrt"){
		console.log(Math.sqrt(num1));
	}
	if(mathSymbol === "+"){
		console.log(num1 + num2);
	}
	if(mathSymbol === "-"){
		console.log(num1 - num2);
	}
	if(mathSymbol === "*"){
		console.log(num1 * num2);
	}
	reader.close()
});