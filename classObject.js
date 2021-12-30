class Motor {
    xPosititon;
    yPosition;
    speed;
    imgCar;
    constructor(xPosititon, yPosition, speed,imgCar) {
        this.xPosititon = xPosititon;
        this.yPosition = yPosition;
        this.speed = speed;
        this.imgCar=imgCar

    }

    move(event) {
        switch (event.which) {
            case LEFT:
                if (this.xPosititon >= 1) {
                    this.xPosititon -= this.speed;
                }
                break;
            case DOWN:
                if (this.yPosition < 600) {
                    this.yPosition += this.speed;
                }
                break;
            case UP:
                if (this.yPosition > 10) {
                    this.yPosition -= this.speed;
                }
                break;
            case RIGHT:
                if (this.xPosititon < 350) {
                    this.xPosititon += this.speed;
                }
                break;
        }
    }

    show(ctx) {
        let image = new Image()
        let xPosition = this.xPosititon;
        let yPosition = this.yPosition;
        image.src = './images/' + this.imgCar;
        image.onload = function () {
            ctx.drawImage(image, xPosition, yPosition, MOTOR_WIDTH, MOTOR_HEIGHT);
        }

    }

}


class Background {
    _xPosition;
    _yPosition;
    _speed;
    constructor( xPosition, yPosition, speed) {

        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._speed = speed;
    }


    get xPosition() {
        return this._xPosition;
    }

    set xPosition(value) {
        this._xPosition = value;
    }

    get yPosition() {
        return this._yPosition;
    }

    set yPosition(value) {
        this._yPosition = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    moveBackground() {
        this.yPosition += this.speed;
        if (this.yPosition >= 0) {
            this.yPosition = -100;
        }
    }

    showBackground(ctx) {
        this.moveBackground();
        let image = new Image()
        let x = this.xPosition;
        let y = this.yPosition;
        image.src = './images/' + "road.png";
        image.onload = function () {
            ctx.drawImage(image, x, y, GAMEBOARD_WIDTH, 800);
        }
    }

}
class Obstacle { //Chướng ngại vật
    _x;
    _y;
    _width;
    _height;
    _img
    _speed
    constructor(x, y, width, height,img,speed) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._img=img
        this._speed = speed;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    moveDown() {
        this._y += this._speed;
        if (this._y > GAMEBOARD_HEIGHT) {
                this._x = Math.random() * 300
                this._y = 0
            countObs+=1;
        }

    }
    drawObstacle(ctx) {
        let image = new Image()
        let x = this._x;
        let y = this._y;
        let height=this.height
        let width=this.width
        image.src = './images/' + this._img;
        image.onload = function () {
            ctx.drawImage(image, x, y,width , height);
        }
    }
    showObstacle(ctx) {
        this.moveDown()
        this.drawObstacle(ctx)
    }

}

class Oil{// xăn dầu
    _x;
    _y;
    _width;
    _height;
    _imageOil
    _speed
    constructor(x, y, width, height,imageOil,speed) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._imageOil=imageOil;
        this._speed=speed;
    }


    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get imageOil() {
        return this._imageOil;
    }

    set imageOil(value) {
        this._imageOil = value;
    }


    moveDown() {
        this._y += this._speed;
        if (this._y > GAMEBOARD_HEIGHT) {
            this._x = 20+Math.random() * 350
            this._y = Math.random() * 100
        }
    }
    drawOil(ctx) {
        let image = new Image()
        let x = this._x;
        let y = this._y;
        let height=this.height
        let width=this.width
        image.src = './images/' +this._imageOil;
        image.onload = function () {
            ctx.drawImage(image, x, y, width, height);
        }
    }
    showOil(ctx) {
        this.moveDown()
        this.drawOil(ctx)
    }


}