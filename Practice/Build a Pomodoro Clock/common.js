$(document).ready(function () {
    //为每个时间控制添加事件
    $("#blminus").on("click", function () {
        setBreakTime("-");
    });
    $("#slminus").on("click", function () {
        setSessionTime("-");
    });
    $("#blplus").on("click", function () {
        setBreakTime("+");
    });
    $("#slplus").on("click", function () {
        setSessionTime("+");
    });

    //执行倒计时
    $("#toggle").on("click", function () {
        toggleTime();
    });
});

//设置中断时间
function setBreakTime(symbol) {
    var breaktime = parseInt($("#blTime").text());

    if (symbol === "-") {
        if (breaktime === 1) {
            return;
        }
        breaktime--;
    } else {
        breaktime++;
    }
    $("#blTime").text(breaktime);
}

//设置倒计时长
function setSessionTime(symbol) {
    var sessiontime = parseInt($("slTime").text());

    if (symbol === "-") {
        if (sessiontime === 1) {
            return;
        }
        sessiontime--;
    } else {
        sessiontime++;
    }
    $("#slTime").text(sessiontime);
}

//倒计时函数
function toggleTime() {
    var breaktime = parseInt($("#blTime").text());
    var sessiontime = parseInt($("#slTime").text());
    var nowtime=parseInt($("#countdown").text());

    
}