let currentQuestion = 0;
let data = {};
const db = readFileSync('data.json');
const jsonData = JSON.parse(db);

function nextQuestion() {
    const current = document.getElementById(`q${currentQuestion}`);
    current.style.display = 'none';
    currentQuestion++;
    if (currentQuestion < 4) {
        const next = document.getElementById(`q${currentQuestion}`);
        next.style.display = 'block';
    } else {
        startCompetition();
    }
}

function selectHouse(house) {
    data.house = house;
    console.log(data);
    nextQuestion()
}

function submitName() {
    const name = document.getElementById(`teamNameInput`).value;
    data.name = name;
    let house = data.house;

    jsonData.house.push({
        name: data.name,
        points: 0,
      });

    /*writeFileSync('data.json', JSON.stringify(data));*/
    console.log(data);
    nextQuestion()
}

function startCompetition() {
    // Do whatever you need to start the competition
    console.log('Competition started!');
}
