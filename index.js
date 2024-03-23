/* let currentQuestion = 0;
import questionSet from './questions.json' assert { type: 'json' }; */
import questionSet from './questions.json';
/*const db = readFileSync('data.json');
const jsonData = JSON.parse(db);*/
console.log(length)

console.log(questionSet)
let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display next question
function displayNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        document.getElementById('question-statement').textContent = currentQuestion.question;
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = '';
        currentQuestion.answers.forEach((answer, index) => {
            const answerButton = document.createElement('button');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => checkAnswer(index));
            answersContainer.appendChild(answerButton);
        });
        currentQuestionIndex++;
    } else {
        showScoreScreen();
    }
}


function nameSelect() {
    const current = document.getElementById(`q0`);
    current.style.display = 'none';
    const teamSelect = document.getElementById(`q1`);
    teamSelect.style.display = 'block';
}

function submitName() {
    const teamName = document.getElementById(`teamNameInput`).value;
    console.log(teamName);
    startCompetition()
}

function startCompetition() {
    teamSelect.style.display = 'none';
    console.log('Competition started!');
}
