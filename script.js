//                    Rock Paper Scissors Algorithm:

/* 
There are two players of the game(Computer and Player);
Computer play by choosing the random variable
while the player has to choose the variable by clicking on the button

step 1:
if both players choose the same variable then the result
the game is tied and is usually immediately replayed to break the tie.

step 2:
if the choices are Paper and Rock then the result are ("paper covers rock")

step 3:
if the choices are Rock and Scissors then the result are ("rock crushes scissors")

step 4:
if the choice are Paper and Scissors then the result are  ("scissors cut paper")

next  create round function to check round played and marks the highest marks are 5 marks and 
then end the game.

*/


let getComputerChoice;
let playerScores = 0;
let computerScores = 0;

let items = document.querySelectorAll('.item');

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
    let results = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'scissor' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
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

        if (playerScores == 5)
        {
            alert("You won the game! Reload the page to play again");
            disableItems();
        }

    } else if (playerSelection == computerSelection)
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

        if (computerScores == 5)
        {
            alert("I won the game! Reload the page to play again");
            disableItems();
        }

    }

    document.getElementById('results').innerHTML += results;
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