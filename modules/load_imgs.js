define(function (require, exports, module) {
    function mainCall(imgObjects){
        require('./main')(imgObjects);
    }

    var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];

    var imgObjects = [];
    var loadCount = 0;
    function listener() {
        loadCount++;
        if (loadCount >= imgs.length) {
            mainCall(imgObjects);
        }
    }

    imgs.forEach(function (imgurl) {
        var img = new Image();
        img.addEventListener('load', listener);
        img.src = './imgs/' + imgurl;
        imgObjects.push(img);
    });
});
