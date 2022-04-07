

function createDomElement(className) {
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;

    board.appendChild(newElm)

    return newElm;
}

function drawDomElement(instance){
    instance.domElement.style.left = instance.positionX + "%";
    instance.domElement.style.bottom = instance.positionY + "%";
}

const game = new Game(createDomElement, drawDomElement);
game.start()

document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight") {
        game.movePlayer("right");
    } else if(event.key === "ArrowLeft") {
        game.movePlayer("left");
    }
});

