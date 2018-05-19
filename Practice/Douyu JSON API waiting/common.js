$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "http://open.douyucdn.cn/api/RoomApi/live/lol?limit=2",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "data",
        success: function(response) {
            console.log(response);
        }
    });


    // ****************jsonp实现原理*****************************************
    // function data(response) {
    //     console.log(response);
    // }
    // var url = "http://open.douyucdn.cn/api/RoomApi/live/lol";
    // var script = document.createElement("script");
    // script.setAttribute("src", url);
    // document.getElementsByTagName("head")[0].appendChild(script);
});