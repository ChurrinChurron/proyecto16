let botones = document.querySelectorAll(".menu-register");
let horas = document.querySelectorAll(".hours");
let descripcion = document.querySelectorAll(".previous");
let dia = document.getElementById("daily");
let semana = document.getElementById("weekly");
let mes = document.getElementById("monthly");

fetch("data.json")
.then(res => res.json())
.then(data => {

window.onload = defecto();

function defecto() {

	for(let i = 0; i < horas.length; i++) {

		horas[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
		descripcion[i].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
	}
}
	
	dia.addEventListener("click", () => {
	
		defecto();

	})

	semana.addEventListener("click", () => {
	
		for(let i = 0; i < horas.length; i++) {

			horas[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
			descripcion[i].innerHTML = `Last Day - ${data[i].timeframes.weekly.previous}hrs`;
		}

	})

	mes.addEventListener("click", () => {
	
		for(let i = 0; i < horas.length; i++) {

			horas[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
			descripcion[i].innerHTML = `Last Day - ${data[i].timeframes.monthly.previous}hrs`;
		}

	})

})

for(const bot of botones) {

	bot.addEventListener("click", () => {
		
		for(const bot of botones) {

			bot.classList.remove("active");
		}

		bot.classList.add("active");
	
	})

};