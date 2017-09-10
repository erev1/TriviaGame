$(document).ready(function(){

	
	var questionRepo = [
	 {question: "Who is the author of Pride and Prejudice?", correctAnswer: "Jane Austen", 1: "Jane Austen", 2: "Ernest Hemingway", 3:"Bart Simpson", 4:"Donald Trump", gif: "https://media.giphy.com/media/FgnT83M1fJ2JG/giphy.gif"},
	 {question: "How many Bronte sisters are there?", correctAnswer: "3", 1: "3", 2: "4", 3: "5", 4: "9", gif:"https://media.giphy.com/media/P1Ia8PyyEZbPy/giphy.gif"},
	 {question: "What was Charles Dickens first novel?", correctAnswer: "The Pickwick Papers", 1: "The Pickwick Papers", 2: "A Tale of Two Cities", 3: "Great Expectations", 4: "A Christmas Carol", gif: "https://media.giphy.com/media/sjIupMAie2WY0/giphy.gif"},
	 {question: "In Dracula, who is Lucy Westenra's doctor?", correctAnswer: "Van Helsing", 1: "Van Helsing", 2: "Arthur Holmwood", 3: "Quincy Morris", 4: "John Seward", gif:"https://images.gr-assets.com/hostedimages/1446662623ra/16859696.gif"}
	]

	var questionCount = 0
	var time = 3
	var clockrunning = true
	var correctAnswers = 0
	var incorrectAnswers = 0


	$("#start-button").on("click", function(){
		
		$(this).empty()
		$("#timer-div").append('<div>Time remaining: <span id="time-remaining">30</span></div>')

		setQA(questionCount)

		intervalId = setInterval(timer, 1000)


		function timer() {
			if (clockrunning === true) {
				time = time -1
				$("#time-remaining").text(time)
			}
			if (time === 0 && clockrunning === true) {
				// var f = function() {
				// 	setQA(questionCount)
				// }
				setTimeout(setQA, 5000)
				clockrunning = false
				$("#content").empty()
				$("#content").text("Your time is up! The correct answer was " + questionRepo[questionCount].correctAnswer)
				$("#content").append('<br><img id="giffy">')
				$("#giffy").attr("src", questionRepo[questionCount].gif)
				questionCount += 1
				incorrectAnswers += 1
			}

		}
	})


	function setQA(){
		

		if (questionCount === questionRepo.length) {
			clockrunning = false
			$("#content").empty()
			$("#content").text("Game over! Here is your score:")
			$("#content").append('<div id="finalScoreCorrect"></div>')
			$("#finalScoreCorrect").text("Correct Answers: " + correctAnswers)
			$("#content").append('<div id="finalScoreIncorrect"></div>')
			$("#finalScoreIncorrect").text("Incorrect Answers: " + incorrectAnswers)
			return 

		}

		time = 3
		clockrunning = true
		var array = [1,2,3,4]
		var currentNumber

		function answerNumber (someArray) {
			var number
			number = someArray[Math.floor(Math.random() * someArray.length)]
			return number
		}

		console.log(answerNumber(array))

		$("#content").empty()
		$("#content").append('<div class="question"></div>')
		$(".question").text(questionRepo[questionCount].question)

		$("#content").append('<div class="answer" id="answer1"></div>')
		currentNumber = answerNumber(array)
		$("#answer1").text("Option 1: " + questionRepo[questionCount][currentNumber])
		if (questionRepo[questionCount][currentNumber] === questionRepo[questionCount].correctAnswer) {
			$("#answer1").attr("id", "correctAnswer")
		}
		array.splice($.inArray(currentNumber, array), 1)

		$("#content").append('<div class="answer" id="answer2"></div>')
		currentNumber = answerNumber(array)
		$("#answer2").text("Option 2: " + questionRepo[questionCount][currentNumber])
		if (questionRepo[questionCount][currentNumber] === questionRepo[questionCount].correctAnswer) {
			$("#answer2").attr("id", "correctAnswer")
		}
		array.splice($.inArray(currentNumber, array), 1)

		$("#content").append('<div class="answer" id="answer3"></div>')
		currentNumber = answerNumber(array)
		$("#answer3").text("Option 3: " + questionRepo[questionCount][currentNumber])
		if (questionRepo[questionCount][currentNumber] === questionRepo[questionCount].correctAnswer) {
			$("#answer3").attr("id", "correctAnswer")
		}
		array.splice($.inArray(currentNumber, array), 1)

		$("#content").append('<div class="answer" id="answer4"></div>')
		currentNumber = answerNumber(array)
		$("#answer4").text("Option 4: " + questionRepo[questionCount][currentNumber])
		if (questionRepo[questionCount][currentNumber] === questionRepo[questionCount].correctAnswer) {
			$("#answer4").attr("id", "correctAnswer")
		}
		array.splice($.inArray(currentNumber, array), 1)

	

		$(".answer").on("click", function(){
			if ( $(this).attr("id") === "correctAnswer") {
				setTimeout(setQA, 5000)
				clockrunning = false
				$("#content").empty()
				$("#content").text("Nice!")
				$("#content").append('<br><img id="giffy">')
				$("#giffy").attr("src", questionRepo[questionCount].gif)
				questionCount += 1
				correctAnswers += 1

			}
			else {
				setTimeout(setQA, 5000)
				clockrunning = false
				$("#content").empty()
				$("#content").text("Nope! The correct answer was " + questionRepo[questionCount].correctAnswer)
				$("#content").append('<br><img id="giffy">')
				$("#giffy").attr("src", questionRepo[questionCount].gif)
				questionCount += 1
				incorrectAnswers += 1
				
			}
		})


	}


})