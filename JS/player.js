'use strict'

function Player (ctx) {
    this.ctx = ctx;
    
    this.position = {
        x: 20,
        y: 20,
    }

    this.size = {
        width: 20,
        height: 60,
    }

    this.speed = 15;
    this.score = 0;
}

// function drawSquare(x,y) {
//     ctx.beginPath();
//     ctx.rect(x,y, 50, 50);
//     ctx.fillStyle = 'red';
//     ctx.fill();
//     ctx.closePath();
    
// }

Player.prototype.draw = function (ctx) {
    var self = this;
    self.ctx.clearRect(0, 0, canvas.width, canvas.height);
    self.ctx.fillStyle = "red";
    self.ctx.fillRect (self.position.x, self.position.y, self.size.width, self.size.height);
}

Player.prototype.moveUp = function () {
    var self = this;
    self.position.y -= self.speed;
}

Player.prototype.moveDown = function () {
    var self = this;
    self.position.y += self.speed;
}

Player.prototype.moveRight = function () {
    var self = this;
    self.position.x += self.speed;
}

Player.prototype.moveLeft = function () {
    var self = this;
    self.position.x -= self.speed;
}

Player.prototype.drawScore = function () {
    var self = this;
self.ctx.font= "16px Verdana"
self.ctx.fillText(self.score, 0, 0)
}
