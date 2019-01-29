var myQuestions = [
	{
		question: "Who plays Olivia Pope?",
		answers: {
			a: 'Shonda Rhimes',
			b: 'Katie Lowes',
			c: 'Kerry Washington'
		},
		correctAnswer: 'c'
	},
	{
		question: "Who does Olivia Pope have an affair with?",
		answers: {
			a: 'Cyrus Beene',
			b: 'The President',
			c: 'Huck'
		},
		correctAnswer: 'b'
	},	{
		question: "What government agency does Olivia's dad run?",
		answers: {
			a: 'B613',
			b: 'The CIA',
			c: 'The FBI'
		},
		correctAnswer: 'a'
	},	{
		question: "Who Runs OPA for most of the seasons?",
		answers: {
			a: 'Quinn',
			b: 'Abby',
			c: 'Olivia Pope'
		},
		correctAnswer: 'c'
	},	{
		question: "Who plays Olivia Pope?",
		answers: {
			a: 'Shonda Rhimes',
			b: 'Katie Lowes',
			c: 'Kerry Washington'
		},
		correctAnswer: 'c'
	},	{
		question: "Which actor plays the role of the president of the United States?",
		answers: {
			a: 'Tony Goldwyn',
			b: 'Jeff Perry',
			c: 'Scott Foley'
		},
		correctAnswer: 'a'
	},	{
		question: "Who is the president in the last season?",
		answers: {
			a: 'Mellie',
			b: 'Jake',
			c: 'Fitz'
		},
		correctAnswer: 'a'
	},	{
		question: "What is Olivia's favorite drink?",
		answers: {
			a: 'Sparkling water',
			b: 'Scotch',
			c: 'Red wine'
		},
		correctAnswer: 'c'
	},	{
		question: "Who does Olivia run away to an island with?",
		answers: {
			a: 'Fitz',
			b: 'Jake',
			c: 'The senator',
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the name of the President's wife",
		answers: {
			a: 'Melinda',
			b: 'Mellie',
			c: 'Amanda'
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	
		var output = [];
		var answers;

		
		for(var i=0; i<questions.length; i++){
			
			
			answers = [];

			
			for(letter in questions[i].answers){

		
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
	
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		
		for(var i=0; i<questions.length; i++){

			
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			
			if(userAnswer===questions[i].correctAnswer){
				
				numCorrect++;
				
		
				answerContainers[i].style.color = 'lightgreen';
			}
		
			else{
				
				answerContainers[i].style.color = 'red';
			}
		}

		
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}


	showQuestions(questions, quizContainer);
	

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}


var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Your Time Is UP!!! YOU ARE NOT A GLADIATOR");
    }
}


