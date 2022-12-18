function display()
{
	//name
var name = document.getElementById("fname").value;
document.getElementById("n").innerHTML = name;

//gender
if(document.getElementById('male').checked == true) {   
         
} 
else if(document.getElementById('female').checked == true) {

}

//age
var age = document.getElementById("age").value;

//weight
var weight = document.getElementById("wt").value;

//health issues
if(document.getElementById('None').checked == true) {   
	     alert("Hello! "+name+" This is your diet plan to stay healthy");
         window.open("https://i.pinimg.com/736x/c8/19/87/c81987d775ad8e58f0bac75bfffa1de7--healthy-eating-plans-healthy-meals.jpg");
} 
else if(document.getElementById('bp').checked == true) {
	alert("Hello! "+name+" This is your diet plan to cure your blood pressure");
         window.open("https://www.lybrate.com/topic/high-blood-pressure-diet-chart");
}
else if(document.getElementById('dib').checked == true) {
	alert("Hello! "+name+" This is your diet plan to cure your Diabeties");
         window.open("https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/HL-1862499-The_Best_Diabetes_Friendly_Diets_to_Help_You_Lose_Weight-Infographic-Sample_Diabetes_Friendly_Meal_Plan-1296x2570-1-scaled.jpg?w=1155&h=5376");
}
else if(document.getElementById('obes').checked == true) {
	alert("Hello! "+name+" This is your diet plan to cure your Obesity");
         window.open("https://i.pinimg.com/600x315/17/84/c3/1784c347c39816451635c9d515acc518.jpg");
}
else if(document.getElementById('resp').checked == true) {
	alert("Hello! "+name+" This is your diet plan to cure your Respiratory Diseases");
         window.open("https://www.asbestos.com/treatment/nutrition/lung-healthy-foods/");
}
else if(document.getElementById('arth').checked == true) {
	alert("Hello! "+name+" This is your diet plan to cure your Arthritis");
         window.open("https://www.healthline.com/nutrition/foods-to-avoid-arthritis#3.-Gluten-containing-foods");
}
}