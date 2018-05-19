/**
 * Created by Alture on 2016/11/4.
 */
addLoadEvent(loginEvent);

function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}

var EventUtil={
    addHandler:function (ele,type,event) {
        if(ele.addEventListener){
            ele.addEventListener(type,event,false);
        }else if (ele.attachEvent){
            ele.attachEvent('on'+type,event);
        }else {
            ele['on'+type]=event;
        }
    },
    removeHandler:function (ele,type,event) {
        if(ele.removeEventListener){
            ele.removeEventListener(type,type,false);
        }else if(ele.detachEvent) {
            ele.detachEvent('on'+type,event);
        }else {
            ele['on'+type]=null;
        }
    },
    stopPropagation:function (event) {
        var e=event||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else {
            e.cancelBubble=true;
        }
    },
    preventDefault:function (event) {
        var e=event||window.event;
        if(e.preventDefault){
            e.preventDefault();
        }else {
            e.returnValue=false;
        }
    }
};