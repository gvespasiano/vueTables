
var myVue = new Vue({
      el: "#collect",
      data: {
		   //empty for additional items
		  
		  newName:"",
		  newColor:"",
		  newSpeed:"",
		  newStyle:"",
		  newBody:"",
		  newSale:false,
		  newID:"",
		 
		  //Collection data array
		  collectArray: [
		  {
		  	name: "Lamborghini",
		  	color: "Green",
		  	speed: 180,
		  	style: "Coup",
		  	forsale: true,
		  	id: 1
		  },{
		  	name: "Ferrari",
		  	color: "Black",
		  	speed: 220,
		  	style: "Convertable",
		  	forsale: false,
		  	id: 2
		  },{
		  	name: "Mustang",
		  	color: "Blue",
		  	speed: 200,
		  	style: "Convertable",
		  	forsale: false,
		  	id: 3
		  },{
		  	name: "Maserati",
		  	color: "Red",
		  	speed: 190,
		  	style: "Sedan",
		  	forsale: false,
		  	id: 4
		  },{
		  	name: "Jaguar",
		  	color: "Green",
		  	speed: 190,
		  	style: "Coup",
		  	forsale: true,
			  id: 5}
		  ]
      },
	  methods: {
		  //method function for delete car button
		  deleteCar: function (carObject){
			  this.collectArray = this.collectArray.filter(function (car){
					  if (car.id !== carObject.id){
						  return true;
					  } else {
						  return false;
					  }
					  })
	 			 	},
					addCar: function (){
						let newCar = {
							name: this.newName,
							color: this.newColor,
							speed: this.newSpeed,
							style: this.newStyle,
							forsale: this.newSale,
							id: this.newID
						};
						this.collectArray.push(newCar);
					}
				  }
				  
				  
				  
});