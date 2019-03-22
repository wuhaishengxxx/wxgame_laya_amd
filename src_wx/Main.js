require(["src/GameMain"], function () {
    console.error("GameMain");
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var GameMain = args[0].GameMain;
    var main = new GameMain();
});