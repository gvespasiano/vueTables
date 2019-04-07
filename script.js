const collectArray = [{
	name: "Lamborghini",
	color: "Green",
	speed: 180,
	style: "coup",
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
	name: "Jaguard",
	color: "Green",
	speed: 190,
	style: "Coup",
	forsale: true
}];

var myVue = new Vue({
      el: "#collect",
      data: {
        collectArray: [
          {},
          {},
        ]
      }
    });