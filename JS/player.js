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
  this.width = 20;
  this.height = 20;
  this.speed = 15;
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
  //self.ctx.fillRect(self.positionX, self.positionY, self.width, self.height);
  
  self.ctx.beginPath();
  self.ctx.arc(self.positionX, self.positionY, self.width, self.height, 2 * Math.PI);
  self.ctx.fill();
  self.ctx.closePath();
};

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
