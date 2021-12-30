
class GameBoard {
    background;
    motor;
    obstacle;
    oil1;
    constructor(Background, Motor, obstacle,oil1) {
        this.background = Background;
        this.motor = Motor;
        this.obstacle = obstacle;
        this.oil1= oil1;
    }
    startGame(ctx) {
        this.background.showBackground(ctx)
        for (let i=0;i<this.obstacle.length;i++) {
            this.obstacle[i].showObstacle(ctx)
        }
        this.motor.show(ctx)
    }
    reload(ctx) {
        this.background.showBackground(ctx)
        this.motor.show(ctx)
        for (let i=0;i<this.obstacle.length;i++){
        this.obstacle[i].showObstacle(ctx)
        this.impactObstacle(this.obstacle[i])
        }
        this.countObstacle(ctx)
        this.oil1.showOil(ctx)
        this.impactOil(this.oil1)
    }
    impactObstacle(obstacle) {
        let CarX=[5,MOTOR_WIDTH/2,MOTOR_WIDTH-5,MOTOR_WIDTH,MOTOR_WIDTH-5,MOTOR_WIDTH/2,5,0]
        let CarY=[5,0,-5,MOTOR_HEIGHT/2,MOTOR_HEIGHT-5,MOTOR_HEIGHT,MOTOR_HEIGHT-5,MOTOR_HEIGHT/2]
        let ObsX=[]
        let ObsY=[]
        let checkImpact=false
        let lengthObstacle=obstacle._width
     for(let i=5;i<=lengthObstacle;i=i+5) {
         let obsX = obstacle._x + i;
         let obsY = obstacle._y+OBSTACLE_HEIGHT/2;
         for(let j=0;j<CarX.length;j++){
         let motorX = this.motor.xPosititon + CarX[j];
         let motorY = this.motor.yPosition + CarY[j] ;
         let dis = Math.sqrt(Math.pow(motorX - obsX, 2) + Math.pow(motorY - obsY, 2));
         if (dis <= OBSTACLE_HEIGHT/2) {
             checkImpact = true;
         }
         }
     }
        if (checkImpact===true){
            this.stopGame(ctx)
            checkImpactObstacle=true;
        }

    }

    impactOil(oil) {
        let oilX = oil._x+OIL_WIDTH/2;
        let oilY = oil._y+OIL_HEIGHT/2;
        let motorX = this.motor.xPosititon+MOTOR_WIDTH/2;
        let motorY = this.motor.yPosition+MOTOR_HEIGHT/2;
        let dis = Math.sqrt(Math.pow(motorX - oilX, 2) + Math.pow(motorY - oilY, 2));
        if (dis <= 40) {
            countOil+=1
            this.getoil(ctx)
        }
    }
    getoil(ctx) {
        this.oil1._x = Math.random() * 385
        this.oil1._y = Math.random() * 20

        if (countOil==1){
        this.uplever(4)
        }else if(countOil==5) {
            this.uplever(5)
        }else if(countOil==10) {
            this.uplever(6)
        }else if(countOil==20) {
            this.uplever(7)
        }
        this.oil1.showOil(ctx)
    }


    stopGame() {
        let image = new Image()
        image.src = './images/' + "gameover.png";
        image.onload = function () {
            ctx.drawImage(image, 25, 150, 350, 350);
        }
        setTimeout(introEndGame,3000)
        let scoreArray=[countObs.toString(),countOil.toString()]
        if (player!==""){
        localStorage.setItem(player,scoreArray);
        }
        DisplayScoresBoard();

    }
    countObstacle(ctx){
        let image = new Image()
        image.src = './images/score.png';
        image.onload = function () {
            ctx.drawImage(image, 75, 10, 250, 50);
            ctx.font = "20px Comic Sans MS";
            ctx.fillText("Obstacle: " + countObs.toString() + "     Oil: " + countOil.toString(), 100, 40);
        }
    }
    uplever(stp){
        this.background._speed=stp
        this.oil1._speed=stp
        for (let i=0;i<this.obstacle.length;i++){
            this.obstacle[i]._speed=stp
        }

    }

}





