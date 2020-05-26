	let circle_question = Array.prototype.slice.call(document.querySelectorAll(".circle-num"));
	let box_question = document.querySelector(".box_question");
	let box_answer = Array.prototype.slice.call(document.querySelectorAll(".answer"));
	let point_txt = document.querySelector(".points");
	let bool_answer = false;
	let points = 0
	let oportunidad = 1
	let preguntas = [
		{
			texto: "Como se expresa el numero 18243,18<sub>10</sub> en base binario:",
			answer: ["100011100011, ####", "1100110101", "100010011100", "101010110101"],
			correct: 0
		},
		{
			texto: "como se expresa el numero 29042020,1821<sub>10</sub> en base octagonal :",
			answer: ["Respuesta 5", "Respuesta 6", "Respuesta 7", "Respuesta 8"],
			correct: 2
		},
		{
			texto: "como se expresa el numero 18032005,45 <sub>10</sub> en base hexadecimal:",
			answer: ["Respuesta 9", "Respuesta 10", "Respuesta 11", "Respuesta 12"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 18212904,50 <sub>10</sub> en base binaria :",
			answer: ["Respuesta 13", "Respuesta 14", "Respuesta 15", "Respuesta 16"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 1001001011001101010001<sub>2</sub> a base decimal :",
			answer: ["Respuesta 13", "Respuesta 14", "Respuesta 15", "Respuesta 16"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 613E3E<sub>16</sub> en base decimal :",
			answer: ["Respuesta 13", "Respuesta 14", "Respuesta 15", "Respuesta 16"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 54A27G<sub>16</sub> a base binaria :",
			answer: ["Respuesta 13", "Respuesta 14", "Respuesta 15", "Respuesta 16"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 1563461<sub>8</sub> en base binaria :",
			answer: ["Respuesta 13", "Respuesta 14", "1101110011100110001", "Respuesta 16"],
			correct: 2
		},
		{
			texto: "como se expresa el numero 517806<sub>10</sub> a base octal y base binaria :",
			answer: ["1763256 y 1111110011010101110", "Respuesta 14", "Respuesta 15", "Respuesta 16"],
			correct: 0
		},
		{
			texto: "como se expresa el numero 110010101110011111101001<sub>2</sub> a base  octal :",
			answer: ["Respuesta 13", "Respuesta 14", "Respuesta 15", "62563751"],
			correct: 3
		}
	]

const answer = () =>{
	box_answer.map((element)=>{
			element.addEventListener("click", (e)=>{
				if (!bool_answer) {
					let check_answer = e.target.childNodes[3];
					if (check_answer.getAttribute("correct") == "true") {
						check_answer.parentNode.classList.add("correct");
						points +=0.5
						point_txt.innerText = points;
					}else {
						check_answer.parentNode.classList.add("incorrect");
						heart.childNodes[oportunidad].setAttribute("src", "../img/broken-heart.png");
						if (oportunidad == 5) {
							setTimeout(()=>{
								window.location.replace("finGame.html");
							}, 3000);
							point_txt.innerText = points;
						}
						oportunidad +=2
					}
					check_answer.checked = true;
					siguiente.classList.add("btn-propi");
					siguiente.removeAttribute("disabled");
					siguiente.classList.remove("bg-light");
					siguiente.classList.remove("border-dark");
					bool_answer = true;
				}
		})
	});
}
const suspenderCheck = () =>{
		box_answer.map((element)=>{
				console.log('element', element.childNodes[3])

		})
}
suspenderCheck();
const questions = () =>{
	let numquestion = 0
	window.addEventListener("load", ()=>{
		document.querySelector(".texto").innerHTML = preguntas[numquestion].texto;
		circle_question[numquestion].classList.add("active")
		box_answer.map(( element, index)=>{
			element.childNodes[1].innerText = preguntas[numquestion].answer[index];
			if (index == preguntas[numquestion].correct) {
				element.childNodes[3].setAttribute("correct", true);
			}else{
				element.childNodes[3].setAttribute("correct", false);
			}
		})
	})
	siguiente.addEventListener("click", (e)=>{
		numquestion += 1;
		if (numquestion == 10) {
			// console.log('Entre al innerHTMl', box_game_question)
			box_game_question.innerHTML = '<div><h1 class="display-1">Tu Puntaje es de: <span id="puntos" class="points"></span></h1><div class="col-sm-12 d-flex justify-content-center mb-4"><a href="instrucciones.html" class="btn btn-propi">Volver a jugar</a></div></div>';
			setTimeout(()=>{
				puntos.innerHTML = points;
			}, 1000);
		}
		if(numquestion<10){
			document.querySelector(".texto").innerHTML = preguntas[numquestion].texto;
			circle_question[numquestion-1].classList.remove("active")
			circle_question[numquestion].classList.add("active")
			box_answer.map(( element, index)=>{
				if (element.classList.contains("correct") ) {
					element.classList.remove("correct");
				}else if ( element.classList.contains("incorrect")){
					element.classList.remove("incorrect");
				}
				element.childNodes[1].innerText = preguntas[numquestion].answer[index];
				if (index == preguntas[numquestion].correct) {
					element.childNodes[3].setAttribute("correct", true);
				}else{
					element.childNodes[3].setAttribute("correct", false);
				}
				siguiente.classList.add("border-dark",)
				siguiente.classList.add("bg-light")
				siguiente.classList.remove("btn-propi")
				siguiente.setAttribute("disabled", "true")
				bool_answer = false;
			})
		}
	})
}
questions();
answer();