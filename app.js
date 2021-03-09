var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = 250;
var height = 50;

var positionX = canvas.width / 2 - width / 2;
var positionY = canvas.height / 2 - height * 1.5;

context.fillStyle = 'red';
context.fillRect(positionX, positionY, width, height);

positionY += height;

context.fillStyle = 'white';
context.fillRect(positionX, positionY, width, height);

positionY += height;

context.fillStyle = 'green';
context.fillRect(positionX, positionY, width, height);