//your JS code here. If required.
let btn = document.getElementById("sum_btn");

function sum(){
	let num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);
	let num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);
	let sum = num1+num2;
	document.getElementById("sum").innerHTML=sum;
}

btn.addEventListener("click",sum);
