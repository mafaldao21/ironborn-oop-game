

class Game {
    constructor(create, draw){
        this.player = null;
        this.create = create;
        this.draw = draw;
        this.time = 0;
        this.obstacles = [];
    }

    start(){
        /*create and draw a player*/
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);

        //create and draw an obstacle
        // make obstacle move
        setInterval( () => {

            //move obstacles
            this.obstacles.forEach( (obstacle) => {
                obstacle.moveDown();
                this.draw(obstacle);
                this.detectCollision(obstacle);
            });
        
            //create obstacles
            if(this.time % 30 === 0){
                const newObstacle = new Obstacle;
                newObstacle.domElement = this.create("obstacle"); 
                this.obstacles.push(newObstacle); 
            }

            this.time++;

        }, 50);
    }
        
    detectCollision(obstacle){
        if(this.player.positionX < obstacle.positionX + obstacle.width &&
            this.player.positionX + this.player.width > obstacle.positionX &&
            this.player.positionY < obstacle.positionY + obstacle.height &&
            this.player.height + this.player.positionY > obstacle.positionY) {
                alert("game over my friend!")

            }
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
        this.width = 10;
        this.height = 10;
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
        this.positionX = Math.floor(Math.random()*90);
        this.positionY = 100;
        this.domElement = null;
        this.width = 10;
        this.height = 10;
    }

    moveDown() {
        this.positionY--;
    }

}