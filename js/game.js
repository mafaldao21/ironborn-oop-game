

class Game {
    constructor(create, draw){
        this.player = null;
        this.create = create;
        this.draw = draw;
    }

    start(){
        /*create and draw a player*/
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);

        /*create and draw an obstacle*/
        this.obstacle = new Obstacle;
        this.obstacle.domElement = this.create("obstacle");
        this.draw(this.obstacle);

        // make obstacle move
        setInterval( () => {
        this.obstacle.moveDown();
        this.draw(this.obstacle);
        }, 50);
    }

    movePlayer(direction){
        if(direction === "left"){
            this.player.moveLeft();
        } else if (direction === "right"){
            this.player.moveRight();
        }
        this.draw(this.player);
    }
}


class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.domElement = null;
    }

    moveLeft() {
        this.positionX--;
    }

    moveRight() {
        this.positionX++;
    }
}


class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 100;
        this.domElement = null
    }

    moveDown() {
        this.positionY--;
    }

}