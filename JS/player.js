'use strict'

function Player (ctx) {
    this.ctx = ctx;
    
    this.position = {
        x: 20,
        y: 20,
    }

    this.size = {
        width: 20,
        heigth: 60,
    }

    this.speed = 15;
    this.lives = 0;
}

Player.prototype.draw = function () {
    var self = this;

    self.ctx.fillReact (self.player.position.x, self.player.position.y, self.player.width, self.player.height);
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
self.ctx.font="16px Verdana"
self.ctx.fillText(self.lives, 10, 30)
}
