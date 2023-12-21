let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let won = document.querySelector(".won");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");

//Play the Game
function play(x) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    //Our Choice Result
    human.innerHTML = x.toUpperCase();

    const wait = setTimeout(computerWaitingTime, 1000);
    function computerWaitingTime() {
        computer.innerHTML = computerChoice.toUpperCase();
    }

    //Determine the result
    if (x == computerChoice) {
        result = "draw";
    } else if ((x == "rock" && computerChoice == "scissors") ||
        (x == "paper" && computerChoice == "rock") ||
        (x == "scissors" && computerChoice == "paper")) {
        result = "won";
    } else {
        result = "lose";
    };

    //Display result
    const resultWait = setTimeout(finalResult, 3000);
    function finalResult() {
        switch (result) {
            case 'draw':
                draw.classList.remove('hidden');
                won.classList.add('hidden');
                lose.classList.add('hidden');
                break;

            case 'won':
                draw.classList.add('hidden');
                won.classList.remove('hidden');
                lose.classList.add('hidden');
                break;

            default:
                draw.classList.add('hidden');
                won.classList.add('hidden');
                lose.classList.remove('hidden');
                break;
        }
    }
    const clearResult = setTimeout(goToDefault, 5000);
    function goToDefault() {
        human.innerHTML = '';
        computer.innerHTML = '';
        draw.classList.add('hidden');
        won.classList.add('hidden');
        lose.classList.add('hidden');
    }

};

