'use strict'

function Ball (ctx) {
    this.ctx = ctx;
    this.position = {
        x: 20,
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
    // self.ctx.clearRect(0, 0, canvas.width, canvas.height);
    self.ctx.fillStyle = 'black';
    // self.ctx.fillRect (self.position.x, self.position.y, self.size.width, self.size.height);
    self.ctx.beginPath();
    self.ctx.arc(self.positionX, self.positionY, self.width, self.height, 2 * Math.PI);
    self.ctx.fill();
    self.ctx.closePath();
  };



Ball.prototype.move = function() {
    var self = this;
    self.position.y -= self.speed;
    self.position.x += self.speed;
}
