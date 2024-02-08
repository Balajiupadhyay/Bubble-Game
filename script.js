let score = 0;
let bubbleToHit;

function generateBubble() {
    let bubble = "";
    for(let i = 0; i < 96; i++) {
        let randomNum = Math.floor(Math.random()* 10);
        bubble += `<div class="bubble">${randomNum}</div>`;
    }
    document.querySelector(".bubble-container").innerHTML = bubble;    
}

function hitBubble() {
    bubbleToHit = Math.floor(Math.random()* 10);
    document.querySelector(".hit").textContent = bubbleToHit;
}

function runTimer() {
    let time = 60;
    let timer = setInterval(function(){
        if(time > 0) {
            time--;
            document.querySelector(".timer").textContent = time;
        } else {
            clearInterval(timer);   
            document.querySelector(".bubble-container").innerHTML = `<h1>Game over</h1>`;
            document.querySelector(".hit").textContent = "";

        }
    }, 1000);
}

function incrementScore() {
    score += 10;
    document.querySelector(".score").textContent = score;
}

document.querySelector(".bubble-container").addEventListener("click", function(detail){
    let clickedBubble =  Number(detail.target.textContent);
    if(clickedBubble === bubbleToHit) {
        incrementScore();
        generateBubble();
        hitBubble();
        runTimer();
    }
});

function startGame() {
    document.querySelector(".start-game").style.display = "none";
    generateBubble();
    hitBubble();
    runTimer();
}
