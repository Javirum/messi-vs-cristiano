"use strict";

function Player(
  ctx,
  positionX,
  positionY,
  initialPositionX,
  initialPositionY,
  side
) {
  this.ctx = ctx;
  this.positionX = positionX;
  this.positionY = positionY;
  this.initialPositionX = initialPositionX;
  this.initialPositionY = initialPositionY;
  this.radius = 20;
  this.arcStartAngle = 0;
  this.speed = 20;
  this.score = 0;
  this.side = side;
}

Player.prototype.draw = function() {
  var self = this;
  if (self.side === 'left') {
    self.ctx.fillStyle = "red";
  } else {
    self.ctx.fillStyle = "blue";
  }  
  self.ctx.beginPath();
  self.ctx.arc(self.positionX, self.positionY, self.radius, self.arcStartAngle, 2 * Math.PI);
  self.ctx.fill();
  self.ctx.closePath();
};

Player.prototype.getImages = function () {
    var self = this;
    self.ctx.cristiano = new Image();
    self.ctx.cristiano.src = '/images/Cristiano-Ronaldo-PNG-HD.png';

    self.messi = new Image();
    self.messi.src = '/images/messi-canvas.png';
}

Player.prototype.playerImage = function () {
    var self = this;
    if (self.ctx.side === 'left') {
        self.ctx.drawImage(cristiano, 33, 71, 104, 124, 21, 20, 87, 104);
    } else {self.ctx.drawImage(messi, 20, 20)};
}


Player.prototype.moveUp = function() {
  var self = this;
  self.positionY -= self.speed;
};

Player.prototype.moveDown = function() {
  var self = this;
  self.positionY += self.speed;
};

Player.prototype.moveRight = function() {
  var self = this;
  self.positionX += self.speed;
};

Player.prototype.moveLeft = function() {
  var self = this;
  self.positionX -= self.speed;
};

Player.prototype.drawScore = function() {
  var self = this;
  self.ctx.font = "16px Verdana";
  self.ctx.fillText(self.score, 0, 0);
};
