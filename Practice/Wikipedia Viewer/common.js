$(document).ready(function() {
    // 打开搜索框
    $("#search").on("click", function(event) {
        $("div.ek").animate({
            "width": "0px"
        }, 200, function() {
            $("#search").animate({
                "width": "280px"
            }, 200);
            $("#search-input").animate({
                "width": "270px",
                "opacity": 1
            }, 200, function() {
                $("#search-input").css({
                    "display": "block"
                }).focus();
                $("#eks").css({
                    "display": "block"
                });
                $("div.eks-before").animate({
                    "width": "16px"
                }, 150, function() {
                    $("div.eks-after").animate({
                        "width": "16px"
                    }, 150);
                });
            });
        });
        event.stopPropagation();
    });

    //关闭搜索框
    $("#eks").on("click", function(event) {
        $("#search-input").val("");

        $("div.eks-after").animate({
            "width": "0px"
        }, 150, function() {
            $("div.eks-before").animate({
                "width": "0px"
            }, 150, function() {
                $("#search").animate({
                    "width": "40px"
                }, 200);
                $("#search-input").animate({
                    "width": "0px",
                    "opacity": 0
                }, 200, function() {
                    $("#search-input").css({
                        "display": "none"
                    });
                    $("div.ek").animate({
                        "width": "16px"
                    }, 200);
                });
                $("#eks").css({
                    "display": "none"
                });
            });
        });
        $(".content ul").html("");
        //阻止事件冒泡至上一层
        event.stopPropagation();
    });

    //搜索功能
    $("#search-input").on("keydown", function(event) {
        var search = $("#search-input").val();
        if (event.keyCode == 13) {
            wikiSearch(search);
        }

        event.stopPropagation();
    });
});

function wikiSearch(search) {
    // var url = "https://en.wikipedia.org/w/api.php?callback=?&apos";
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + search + "&callback=JSON_CALLBACK";

    // 预处理列表，清空列表
    $(".content ul").html("");

    // $.getJSON(
    //     url, {
    //         // format: "jsonp",
    //         action: "query",
    //         jsonp: "callback",
    //         jsonpCallback: "data"
    //     },
    //     function(response) {
    //         // var result;
    //         // var rHead=response.
    //         console.log(response);
    //     }
    // );
    $.ajax({
        type: "get",
        url: url,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "data",
        success: function(response) {
            // console.log(response);
            // for (var i = 0; i < 10; i++) {
            //     $(".content ul").append("<li><h3>" + response.query.pages[i].title + "</h3><p>" + response.query.pages[i].extract + "</p></li>");
            // }
            var page = "https://en.wikipedia.org/?curid=";
            $.each(response.query.pages, function(i, val) {
                // console.log(val.title);
                var that = val;
                // $(".content ul").animate({ "opacity": 1 }, 1000,
                //     function() {
                //         $(".content ul").append("<li><a href='" + page + that.pageid + "'></a><h3>" + that.title + "</h3><p>" + that.extract + "</p></li>");
                //     }
                // );
                $(".content ul").append("<li><a href='" + page + that.pageid + "'></a><h3>" + that.title + "</h3><p>" + that.extract + "</p></li>");
                $(".content ul li").animate({
                    "opacity": 1,
                    "margin-top": 0
                }, 400);
            });
            // console.log(response.query.pages);
        }
    });
}