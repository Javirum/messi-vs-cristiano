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
    this.lives = 0;
}

Player.prototype.draw = function () {
    var self = this;

    self.ctx.fillStyle = "red";
    self.ctx.fillRect (self.position.x, self.position.y, self.size.width, self.size.height);
    //   self.ctx.beginPath();
    //   self.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //   self.ctx.fillStyle = 'green';
    //   self.ctx.fill();
    //   self.ctx.lineWidth = 5;
    //   self.ctx.strokeStyle = '#003300';
    //   self.ctx.stroke();
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

    self.prototype.x -= self.speed;
}

Player.prototype.drawLives = function () {
    var self = this;
self.ctx.font= "16px Verdana"
self.ctx.fillText(self.lives, 10, 30)
}
