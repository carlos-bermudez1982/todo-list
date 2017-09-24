var button = document.querySelector("button");
var listToDo = document.querySelector("#tasks-todo");
var listDone = document.querySelector("#tasks-done");
var listProgress = document.querySelector("#in-progress");
var listItem;
var divDone;
var progressButton;
var botonAtras;
var botonAdelante;
var idBoton;
var botonFinal;

// button.addEventListener('click', function() {
// 	listItem = document.querySelector('ul').firstElementChild;
// 	divDone = document.querySelector('#tasks-done');
// 	divDone.appendChild(listItem);

// })

listToDo.addEventListener('click', function(e) {



	if (e.target && e.target.nodeName == 'LI') {
		listItem = e.target;
		// console.log(e);

		listProgress.appendChild(listItem);


		botonFinal = creaBotones();

		listItem.appendChild(botonFinal);

	}

})


listProgress.addEventListener('click', function(e) {

	if (e.target && e.target.parentNode.parentNode.nodeName == 'LI') {
		listItem = e.target.parentNode.parentNode;
		idBoton = e.target;
		// alert(idBoton);
		// alert(listItem.parentNode.parentNode.nodeName);

		if (idBoton.getAttribute('id')=='atras') {
			listToDo.appendChild(listItem);	
			listItem.removeChild(idBoton.parentNode);
		}
		if (idBoton.getAttribute('id')=='adelante') {
			listDone.appendChild(listItem);	
			listItem.removeChild(idBoton.parentNode);
		}


		// listDone.appendChild(listItem);
	}

})


listDone.addEventListener('click', function(e) {
	
	if (e.target && e.target.nodeName == 'LI') {
		listItem = e.target;
		listProgress.appendChild(listItem);


		botonFinal = creaBotones();

		listItem.appendChild(botonFinal);
	}

})


function creaBotones() {
		progressButton = document.createElement("span");
		botonAtras     = document.createElement("button");
		botonAdelante  = document.createElement("button");

		botonAtras.appendChild(document.createTextNode("Por Hacer"));
		botonAdelante.appendChild(document.createTextNode("Finalizada"));

		botonAtras.setAttribute("id","atras");
		botonAdelante.setAttribute("id","adelante");

		progressButton.appendChild(botonAtras);
		progressButton.appendChild(botonAdelante);

		return progressButton;
}