//Collection data array
const collectArray = [{
	name: "Lamborghini",
	color: "Green",
	speed: 180,
	style: "Coup",
	forsale: true
},{
	name: "Ferrari",
	color: "Black",
	speed: 220,
	style: "Convertable",
	forsale: false
},{
	name: "Mustang",
	color: "Blue",
	speed: 200,
	style: "Convertable",
	forsale: false
},{
	name: "Maserati",
	color: "Red",
	speed: 190,
	style: "Sedan",
	forsale: false
},{
	name: "Jaguar",
	color: "Green",
	speed: 190,
	style: "Coup",
	forsale: true
}];

//inserting collection array into vue
var myVue = new Vue({
      el: "#collect",
      data: {
		  cars: collectArray,
		  newName:"",
		  newColor:"",
		  newSpeed:"",
		  newStyle:"",
		  newBody:"",
		  newSale:""
      }
    });