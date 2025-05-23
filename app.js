
let score = 0;
let timeLeft = 10;
let timer;

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
});

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('timeLeft').innerText = `Time Left: ${timeLeft} seconds`;
    timer = setInterval(updateTime, 1000);
}

function updateTime() {
    timeLeft--;
    document.getElementById('timeLeft').innerText = `Time Left: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    alert(`Game Over! Your score is ${score}`);
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
}