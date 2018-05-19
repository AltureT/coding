$(document).ready(function() {
    var config = {
        authDomain: "danmu-alture.wilddogio.com",
        syncURL: "https://danmu-alture.wilddogio.com"
    };
    wilddog.initializeApp(config);
    var ref = wilddog.sync().ref();
    var arr = [];

    $(".submit").click(function() {
        var text = $(".text").val();
        ref.child("message").push(text);
        $(".text").val("");
    });

    $(".text").keypress(function(event) {
        if (event.keyCode == "13") {
            $(".submit").trigger("click");
        }
    });

    $(".delete").click(function() {
        ref.remove();
        arr = [];
        $(".screen").empty();
    });

    ref.child("message").on("child_added", function(snapshot) {
        var text = snapshot.val();
        arr.push(text);
        var textObj = $("<div class=\"danmu\"></div>");
        textObj.text(text);
        $(".screen").append(textObj);
        moveObj(textObj);
    });

    ref.on("child_removed", function() {
        arr = [];
        $(".screen").empty();
    });

    var topMin = $(".screen").offset().top;
    var topMax = topMin + $(".screen").height();
    var _top = topMin;

    var moveObj = function(obj) {
        var _left = $(".screen").width() - obj.width();
        _top = _top + 50;
        if (_top > (topMax - 50)) {
            _top = topMin;
        }
        obj.css({ left: _left, top: _top, color: getReandomColor() });
        var time = 20000 + 10000 * Math.random();
        obj.animate({ left: "-" + _left + "px" }, time, function() {
            obj.remove();
        });
    };

    var getReandomColor = function() {
        return "#" + (function(h) {
            return new Array(7 - h.length).join("0") + h;
        })((Math.random() * 0x1000000 << 0).toString(16));
    };

    var getAndRun = function() {
        if (arr.length > 0) {
            var n = Math.floor(Math.random() * arr.length + 1) - 1;
            var textObj = $("<div>" + arr[n] + "</div>");
            $(".screen").append(textObj);
            moveObj(textObj);
        }

        setTimeout(getAndRun, 3000);
    };

    jQuery.fx.interval = 50;
    getAndRun();
});