let getComputerChoice;
let playerScores = 0;
let computerScores = 0;

// Notification center
const output = document.getElementById('output');
const close = document.getElementById('close');
const message = document.getElementById('output-message');

close.addEventListener('click', () =>
{
    output.classList.remove('active');
})

function createOutput (msg)
{
    output.classList.add('active');
    message.innerText = msg;
}
// End of Notification Center 

let items = document.querySelectorAll('.item');
let scores = document.getElementById("scores");


let randomNumber = Math.floor(Math.random() * 3);

getComputerChoice = () =>
{
    switch (randomNumber)
    {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissor";
        default:
            return;
    }
}
playRound = playerSelection =>
{
    let computerSelection = getComputerChoice();
    let results = "";
    let score = "";

    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock'))
    {
        playerScores += 1;
        results = `<div class ="round">
        <div>
            <p>You Win</p>
        </div>
        <div class="how">
            <p>${ playerSelection } beats ${ computerSelection }</p>
        </div>
        </div>`

        if (playerScores === 5)
        {
            disableItems();
            createOutput("Congratulation! You won the game!");
        }

    } else if (playerSelection === computerSelection)
    {
        results = `<div class ="round">
        <div>
            <p>It's a tie.</p>
        </div>
        <div class="how">
            <p>You both chose ${ playerSelection }</p>
        </div>
        </div>`
    } else
    {
        computerScores += 1
        results = `<div class ="round">
        <div>
            <p>You lose!</p>
        </div>
        <div class="how">
            <p>${ computerSelection } beats ${ playerSelection }</p>
        </div>
        </div>`

        if (computerScores === 5)
        {
            disableItems();
            createOutput("I won the game!");
        }

    }

    document.getElementById('results').innerHTML = results;
    score = `<div class="player-score">Your Scores: <span class="value">${ playerScores }</span></div> <div class="computer-score">Computer's Scores: <span class="value">${ computerScores }</span></div>`;
    scores.innerHTML = score;
    return

}


items.forEach(item =>
{
    item.addEventListener('click', () =>
    {
        playRound(item.value)
    })
})

function disableItems ()
{
    items.forEach(item =>
    {
        item.disabled = true
    })
}