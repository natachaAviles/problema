function Rescatarmsje() {
	var inputval = document.getElementsByClassName('w-write-message-field')[0].value; //coonsigo texto que se mete al input
	document.getElementsByClassName('w-write-message-field')[0].value = "";// se limpia valor de input
	var contenedormsjes = document.getElementById('conversacion');//div que contiene todos los elementos

	var nodoTexto = document.createTextNode(inputval);//Nodo de texto que se rescata de input

	var contenedorout = document.createElement('div');
	contenedorout.classList.add('w-message','w-message-out');

	var contenedortexto = document.createElement('div');
	contenedortexto.classList.add('w-message-text');

	var parrafo = document.createElement('p');

	parrafo.appendChild(nodoTexto);


	contenedortexto.appendChild(parrafo);
	contenedorout.appendChild(contenedortexto);
	contenedormsjes.appendChild(contenedorout);
}

