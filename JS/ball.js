'use strict'

function Ball (ctx) {
    this.ctx = ctx;
    
    this.position = {
        x: self.size,
        y: 20,
    }

    this.size = {
        width: 20,
        heigth: 60,
    }

    this.speed = 30;
}

Ball.prototype.draw = function () {
    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect (self.position.x, self.position.y);
}

Ball.prototype.move = function() {
    var self = this;

    self.position.y -= self.speed;
    self.position.x += self.speed;
}
