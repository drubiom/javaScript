var pila = []
var mutex = []
var log = null

function obrero(name){
	this.name = name
}
new obrero ("Txema")

function cargar(){
	log.innerHTML += 'El cargar es un placer<br/>'
}

function descargar(){
	log.innerHTML += 'Scargando, me paso el dia scargando...<br/>\n'
}


function main(){
	log = document.getElementById("log")
	mutex.push(cargar)
	mutex.push(cargar)
	mutex.push(descargar)
	mutex.push(descargar)
	mutex.push(cargar)
	mutex.push(descargar)

	for (var i = 0; i < mutex.length; i++)
		mutex[i]()
}