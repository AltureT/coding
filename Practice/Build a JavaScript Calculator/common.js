$(document).ready(function() {
    var regCal = /[-\+*/]/;
    var regNum = /[0-9\.]/;
    var preresult = 0;
    //stack作为表达式
    var stack = preresult.toString();
    $(".record").text(stack);

    $("button").on("click", function() {
        var val = $(this).text();
        var len = stack.length;
		//如果输入AC  （all clear）
		if(val==="AC"){
			stack="0";
			$(".record").text(stack);
		}
		//如果输入 CE （clear entry）
		// if(val==="CE"){
		//
		// }
        //如果输入的是  =
        if (val === "=") {
            if (stack.length <= 1) {
                return false;
            }
			stack+="=";
            preresult = calculate(preresult, stack);
            console.log("preresult=" + preresult);
            stack = "";
            stack = preresult.toString();
			$(".record").text(stack);
        }
        //如果输入的是  + - * /
        if (val.search(regCal) !== -1) {
            if (stack[len - 1].search(regCal) !== -1) {
                stack = stack.substring(0, len - 1);
                stack += val;
            } else {
                stack += val;
            }
        }
        //如果输入的是 数字 或者 .
        if (val.search(regNum) !== -1) {
            //如果第一次输入，则消除前置的 0
            if (stack === "0") {
                stack = "";
            }
            stack += val;
        }

        $(".input").text(stack);

		return true;
    });
});


function calculate(preresult, expression) {
    var num = [];
    var t = 0;
    var regCal = /[-\+*=/]/;
    var len = expression.length;
    var result = 0;
	var symbol = "";
    for (var i = 0; i < len; i++) {
		console.log("expression[i]="+expression[i]);
        if (expression[i].search(regCal) !== -1) {
            var str = expression.substring(t, i);
			if(expression[i]!=="="){
				symbol=expression[i];
			}
            num.push(parseFloat(str));
			console.log("symbol="+symbol+";num:"+num);
            if (num.length === 2) {
                result = cal(num[0], num[1], symbol);
                console.log("result=" + result);
                num.length = 0;
            }
            t = i + 1;
        }
    }
    console.log("result1=" + result);
    return result;
}

function cal(a, b, sym) {
    console.log("a="+a+";b="+b+";sym="+sym);
    if (sym === "+") {
        return a + b;
    } else if (sym === "-") {
        return a - b;
    } else if (sym === "*") {
        return a * b;
    } else if (sym === "/") {
        return a / b;
    }
    return "cal input ERROR";
}
