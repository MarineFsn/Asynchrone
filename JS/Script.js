const request = fetch("./Assets/your-json-file.json");
console.log(request); 

const response = request.then((response) => response.text());
console.log(response); 

response.then((text) => {
	console.log(text);

const heroesList = document.createElement("p");


document.body.appendChild(heroesList);


});













