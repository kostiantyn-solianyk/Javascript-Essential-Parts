window.onload = function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d"); // get the context for drawing a line
    document.addEventListener("keydown", keyPush); // for each key down event call keyPush Method
    setInterval(game, 1000 / 15); //refresh the page to simulate animation
}
console.log(localStorage);
px = py = 10; //player's x and y cordinates
gs = tc = 20; // grid size and tileCount 20 * 20 = 400
ax = ay = 15; //apple's x and y cordinates
xv = yv = 0; //velocity of snake
trail = [];
tail = 5;

function game() {
    px += xv;
    py += yv;
    if (px < 0) { //wrapping
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2); //why 2?
        if (trail[i].x == px && trail[i].y == py) { //it clashed
            tail = 5;
        }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    if (ax == px && ay == py) { //eats the apple
        tail++;
        ax = Math.floor(Math.random() * tc); //place it at a random position
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}