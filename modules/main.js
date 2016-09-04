define(function (require, exports, module) {
    module.exports = function (imgObjects) {
        var Bird = require("./bird").Bird;
        var Land = require("./land").Land;
        var Pipe = require("./pipe").Pipe;
        var Sky = require("./sky").Sky;

        var imgObjects = imgObjects;

        var gameOver = false;

        var bird = new Bird(imgObjects[0], cvs);
        var sky1 = new Sky(imgObjects[4], 0);
        var sky2 = new Sky(imgObjects[4], 800);
        var pipe1 = new Pipe(imgObjects[2], imgObjects[3], 800);
        var pipe2 = new Pipe(imgObjects[2], imgObjects[3], 1000);
        var pipe3 = new Pipe(imgObjects[2], imgObjects[3], 1200);
        var pipe4 = new Pipe(imgObjects[2], imgObjects[3], 1400);
        var pipe5 = new Pipe(imgObjects[2], imgObjects[3], 1600);
        var land1 = new Land(imgObjects[1], 0);
        var land2 = new Land(imgObjects[1], 336);
        var land3 = new Land(imgObjects[1], 336 * 2);
        var land4 = new Land(imgObjects[1], 336 * 3);

        var lastTime = Date.now();

        function loop() {
            var now = Date.now();
            var dt = now - lastTime;
            lastTime = now;
            ctx.clearRect(0, 0, 800, 600);

            sky1.update(dt);
            sky2.update(dt);
            pipe1.update(dt);
            pipe2.update(dt);
            pipe3.update(dt);
            pipe4.update(dt);
            pipe5.update(dt);
            land1.update(dt);
            land2.update(dt);
            land3.update(dt);
            land4.update(dt);
            bird.update(dt);

            if (bird.y < 0 || bird.y > 600 - 112) {
                gameover = true;
            }

            if(ctx.isPointInPath(bird.x,bird.y)){
                gameover = true;
            }
            ctx.beginPath();

            sky1.draw();
            sky2.draw();
            pipe1.draw();
            pipe2.draw();
            pipe3.draw();
            pipe4.draw();
            pipe5.draw();
            land1.draw();
            land2.draw();
            land3.draw();
            land4.draw();
            bird.draw();

            if (!gameOver) {
                requestAnimationFrame(loop);
            }
        }
        loop();
    }
});

