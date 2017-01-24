			
			var imagen = document.getElementById("imagen");
			var palabraHTML = document.getElementById("palabra");
			var letra = document.getElementById("letra");
			var fallos;
			var aciertos;
			var lista = ["CARACOLA","PERIODICO","PANTALLA","CALENDARIO","ROTULADOR","PARAGUAS","BOLSILLO","AVION","MOCHILA"];
			var aleatorio;
			var respuesta;
			var palabra;


			function inicializa(){
				fallos = 0;
				aciertos = 0;
				aleatorio = Math.floor((Math.random() * lista.length));
				respuesta = lista[aleatorio];
				palabra = "";
				for(i = 0; i < respuesta.length; i++)
					palabra += "*";
				palabraHTML.innerHTML = palabra;
				palabra = palabra.toString().split("");
			}


			function comprueba() {
				letra.value = letra.value.toUpperCase();
				var aux = 0, i;
				for(i = 0; i < respuesta.length; i++){
					if (respuesta.charAt(i) == letra.value){
						palabra[i] = letra.value;
						palabraHTML.innerHTML = palabra.join("");
						document.getElementById("frase").innerHTML = "Bien!";
						aciertos++;
						aux = 1;
					}
				}
				if(aux == 0){
					document.getElementById("frase").innerHTML = "Fallo!";
					fallos++;
					switch (fallos){
						case 1: imagen.src = "1.png";
								break;
						case 2: imagen.src = "2.png";
								break;
						case 3: imagen.src = "3.png";
								break;
						case 4: imagen.src = "4.png";
								break;
						case 5: imagen.src = "5.png";
								break;
					}
				}
				if(fallos == 5){
					document.getElementById("frase").innerHTML = "PERDISTE!";
					document.getElementById("boton").style.display = 'none';
					document.getElementById("letra").style.display = 'none';
					document.getElementById("palabra").innerHTML = respuesta;
				}
				else if(aciertos == palabra.length){
					document.getElementById("frase").innerHTML = "GANASTE!";
					document.getElementById("boton").style.display = 'none';
					document.getElementById("letra").style.display = 'none';
				}
				document.getElementById("restantes").innerHTML = "Fallos Restantes: " + (5 - fallos);
				document.getElementById("letra").value = "";
			}