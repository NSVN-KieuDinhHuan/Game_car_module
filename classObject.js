class Motor {
    xPosititon;
    yPosition;
    speed;

    constructor(xPosititon, yPosition, speed) {
        this.xPosititon = xPosititon;
        this.yPosition = yPosition;
        this.speed = speed;

    }

    move(event) {
        switch (event.which) {
            case 37:
                if (this.xPosititon >= 1) {
                    this.xPosititon -= this.speed;
                }
                break;
            case 40:
                if (this.yPosition < 550) {
                    this.yPosition += this.speed;
                }
                break;
            case 38:
                if (this.yPosition > 10) {
                    this.yPosition -= this.speed;
                }
                break;
            case 39:
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
        image.src = './images/' + "Car_1_01.png";
        image.onload = function () {
            ctx.drawImage(image, xPosition, yPosition, MOTOR_WIDTH, MOTOR_HEIGHT);
        }

    }

}


class Background {
    xPosition;
    yPosition;
    _step;
    constructor( xPosition, yPosition, step) {

        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this._step = step;
    }

    get step() {
        return this._step;
    }

    set step(value) {
        this._step = value;
    }

    moveBackground() {
        this.yPosition += this.step;
        if (this.yPosition >= 0) {
            this.yPosition = -150;
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
    _step
    constructor(x, y, width, height,img,step) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._img=img
        this._step = step;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get step() {
        return this._step;
    }

    set step(value) {
        this._step = value;
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

    moveDown() {
        this._y += this.step;
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
    _step
    constructor(x, y, width, height,imageOil,step) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._imageOil=imageOil;
        this._step=step;
    }

    get step() {
        return this._step;
    }

    set step(value) {
        this._step = value;
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
        this._y += this.step;
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