// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.xRange = [-150, 1000];
    this.possibleY = [60, 140, 220];
    this.speedRange = [150, 600];

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.reset();
}

Enemy.prototype.reset = function() {
    var startPos = this.xRange[0];

    this.x = startPos;
    this.y = this.getRandomY();
    this.speed = this.getRandomSpeed();
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    var maxPos = this.xRange[1];
    this.x += this.speed * dt;

    if (this.x > maxPos) {
        this.reset();
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Enemy.prototype.getRandomY = function() {
    return this.possibleY[Math.floor(Math.random() * this.possibleY.length)];
}

Enemy.prototype.getRandomSpeed = function() {
    var minSpeed = this.speedRange[0],
        maxSpeed = this.speedRange[1];

    return Math.floor(Math.random() * (maxSpeed - minSpeed)) + minSpeed;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.xRange = [-2, 1000];
    this.yRange = [-20, 380];
    this.sprite = 'images/char-boy.png';
    this.reset();
}

Player.prototype.update = function() {
    this.checkCollisions();
}

Player.prototype.checkCollisions = function() {
    if (this.y === -20) {
        this.reset();
    } else if (this.y >= 60 && this.y <= 220) {
        var self = this;
        allEnemies.forEach(function(enemy) {
            if (enemy.y == self.y) {
                if (enemy.x >= player.x -30 && enemy.x <= player.x + 30) {
                    self.reset();
                }
            }
        });
    }
}

Player.prototype.reset = function() {
    this.x = 400;
    this.y = 300;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x -= (this.x - 101 < this.xRange[0]) ? 0 : 101;
    } else if (key === 'right') {
        this.x += (this.x + 101 > this.xRange[1]) ? 0 : 101;
    } else if (key === 'up') {
        this.y -= (this.y - 80 < this.yRange[0]) ? 0 : 80;
    } else if (key === 'down') {
        this.y += (this.y + 80 > this.yRange[1]) ? 0 : 80;
    }
}

// Show gems on the map randomly.
var Gem = function() {
    this.gemImages = ['images/Gem-Blue.png', 'images/Gem-Green.png', 'images/Gem-Orange.png'];
    this.gemPosX = [0, 101, 202, 303, 404, 505, 606, 707, 808];
    this.gemPosY = [60, 140, 220];
    this.gemImg = this.gemImages[Math.floor(Math.random() * 3)];
    this.x = this.gemPosX[Math.floor(Math.random() * 9)];
    this.y = this.gemPosY[Math.floor(Math.random() * 3)];
}

Gem.prototype.update = function() {
    if (player.x === this.x && player.y === this.y) {
        this.gemImg = gemImages[Math.floor(Math.random() * 3)];
        this.x = gemPosX[Math.floor(Math.random() * 9)];
        this.y = this.gemPosY[Math.floor(Math.random() * 3)];
        if (allEnemies.length < 10) {
            allEnemies.push(new Enemy());
        }
    }
}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.getImg), this.x, this.y);
}






// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player();

var gem = new Gem();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//Disable arrow keys from scrolling window in game.
document.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


//when time runs out or player loses all lives, the game is over.
function gameOver() {
    var removeScore = document.getElementById('score');
        removeScore.parentNode.removeChild(removeScore);
        timer = document.getElementById('timer');
        timer.parentNode.removeChild(timer);
        ctx.clearRect(0, 0, 909, 606);
        ctx.font = "50px Roboto Condensed";
        ctx.fillStyle="white";
        ctx.fillText("Game Over!", 140, 100);
        ctx.font="30px Roboto Condensed";
        ctx.fillText("Your final score is " + score, 140, 150);
        keyEnabled = false;
}


// Create a 60-second timed game
var timer;
var totalSeconds;

function createTimer(TimerID, Time) {
    timer = document.getElementById(TimerID);
    totalSeconds = Time;
    updateTimer();
    window.setTimeout("Tick()", 1000);
}

function Tick() {
    if(totalSeconds <= 0) {
        return gameOver();
    }
    totalSeconds --;
    updateTimer();
    window.setTimeout("Tick()", 1000);
}

function updateTimer() {
    var seconds = totalSeconds;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * (60);

    var timeStr = LeadingZero(minutes) + ":" + LeadingZero(seconds);

    timer.innerHTML = timeStr;
}

function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}
























