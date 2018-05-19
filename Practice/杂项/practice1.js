/**
 * Created by Alture on 2016/11/4.
 */
function loginEvent() {
    var box=document.getElementById('box');
    var title=document.getElementById('title');
    EventUtil.addHandler(title,'mousedown',startmove);
}

function startmove(event) {
    var e=event||window.event;
    var box=document.getElementById('box');
    var title=document.getElementById('title');
    var x=e.clientX-box.offsetLeft;
    var y=e.clientY-box.offsetTop;
    var xbox,ybox;
    document.onmousemove=function (event) {
        var e=event||window.event;
        xbox=e.clientX-x;
        ybox=e.clientY-y;
        box.style.left=xbox+'px';
        box.style.top=ybox+'px';
    };
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmouseup=null;
    }
}
