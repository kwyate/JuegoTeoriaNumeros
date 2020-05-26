	let circle_question = Array.prototype.slice.call(document.querySelectorAll(".circle-num"));
	let box_question = document.querySelector(".box_question");
	let box_answer = Array.prototype.slice.call(document.querySelectorAll(".answer"));
	let point_txt = document.querySelector(".points");
	let bool_answer = false;
	let points = 0
	let oportunidad = 1
	let preguntas = [
		{
			texto: "Como se expresa el numero 18243,064<sub>10</sub> en base binario:",
			answer: ["100011100011,0001101<sub>2</sub>", "100011100011,0101101<sub>8</sub>", "100010011100,0101101<sub>2</sub>", "101010110101,0001111<sub>10</sub>"],
			correct: 0
		},
		{
			texto: "como se expresa el numero 29042020<sub>10</sub> en base octagonal :",
			answer: ["1101110110010010101100100<sub>16</sub>", "11011101100110010101101100<sub>8</sub>", "1101110110010010101100100<sub>8</sub>", "11011101100110010101101100<sub>16</sub>"],
			correct: 1
		},
		{
			texto: "como se expresa el numero 18032005,45 <sub>10</sub> en base hexadecimal:",
			answer: ["1132575,011100<sub>16</sub>", "1132E85,011100<sub>16</sub>", "1A13E85,011100<sub>16</sub>", "1132585,011100<sub>16</sub>"],
			correct: 3
		},
		{
			texto: "como se expresa el numero 17212504,50 <sub>8</sub> en base binaria :",
			answer: ["1111010001010101010101<sub>2</sub>", "1101010001000101000100<sub>2</sub>", "1111010001010101000100<sub>2</sub>", "1111010111010101000100<sub>10</sub>"],
			correct: 2
		},
		{
			texto: "como se expresa el numero 1001001011001101010001<sub>2</sub> a base decimal :",
			answer: ["2405201<sub>10</sub>", "2404201<sub>10</sub>", "2405301<sub>10</sub>", "	2405200<sub>10</sub>"],
			correct: 0
		},
		{
			texto: "como se expresa el numero 613E3E<sub>16</sub> en base decimal :",
			answer: ["6372826<sub>10</sub>", "6372926<sub>10</sub>", "6372726<sub>10</sub>", "6372426<sub>10</sub>"],
			correct: 1
		},
		{
			texto: "como se expresa el numero 54A27G<sub>16</sub> a base binaria :",
			answer: ["1010101101000100111<sub>2</sub> ", "1011100101000100111<sub>2</sub> ", "1010100101000100101<sub>2</sub> ", "1010100101000100111<sub>2</sub> "],
			correct: 3
		},
		{
			texto: "como se expresa el numero 1563461<sub>8</sub> en base binaria :",
			answer: ["1101110010100110001<sub>2</sub>", "110111001110001<sub>2</sub>", "1101110011100110001<sub>2</sub>", "1101110011100110101<sub>2</sub>"],
			correct: 2
		},
		{
			texto: "como se expresa el numero 517806<sub>10</sub> a base octal y base binaria :",
			answer: ["1763256<sub>8</sub> y 1111110011010101110<sub>2</sub>", "1762256<sub>8</sub> y 1111110011011101110<sub>2</sub>", "1763156<sub>8</sub> y 1110010011010101110<sub>2</sub>", "1863256<sub>8</sub> y 111111001101010210<sub>2</sub>"],
			correct: 0
		},
		{
			texto: "como se expresa el numero 110010101110011111101001<sub>2</sub> a base  octal :",
			answer: ["62563750<sub>8</sub>", "62562751<sub>8</sub>", "63563751<sub>8</sub>", "62563751<sub>8</sub>"],
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
			element.childNodes[1].innerHTML = preguntas[numquestion].answer[index];
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
				element.childNodes[1].innerHTML = preguntas[numquestion].answer[index];
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