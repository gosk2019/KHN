function calc_button_click(target) {

    var display = doucment.getElementById("display")
    var input = target.innerHTML

    display.innerHTML += input
}

function calc_clear_button_click() {

    var display = document.getElementById("display")
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
}

function calc_allclear_button_click() {

    var display = document.getElementById("display")
    display.innerHTML = ""
}

function is_Number(input) {
    if (Number(input) || input == "0") {
        return true
    }
    else {
        return false
    }
}

function Operator(input) {
    if (input == "×" || input == "÷") {
        return 2
    }
    else if (input == "+" || input == "-") {
        return 1
    }
    else if (input == "=") {
        return -1
    }
}

function spliter(str) {
    stack = []
    tmp = ""
    for (i in str) {
        var x = str[i]
        if (is_Number(x)) {
            tmp += x
        }
        else {
            stack.push(tmp)
            stack.push(x)
            tmp = ""
        }
    }
    return stack
}

function postfix_converter(input) {
    var tmp = []
    var tmp2 = []
    var stack = []
    for (i in input) {
        var x = input[i]
        if (is_Number(x)) {
            stack.push(x)
        }
        else {
            if (Operator(x) == 2) {
                tmp.push(x)
            }
            else if (Operator(x) == 1) {
                tmp2 = tmp
                tmp2.reverse()
                for (j in tmp2) {
                    if (Operator(tmp2[j]) == 2) {
                        stack.push(tmp2[j])
                        tmp.pop()
                    }
                }
                tmp.push(x)
            }
            else if (Operator(x) == -1) {
                tmp2 = tmp
                tmp2.reverse()
                for (j in input) {
                    stack.push(tmp2[j])
                }
                return stack
            }
        }
    }
}

function postfix_computer(postfix) {
    console.log(postfix)
    var stack = []
    for (i in postfix) {
        if (postfix[i] == "×") {
            var val1 = stack.pop()
            var val2 = stack.pop()
            stack.push(val2 * val1)
            console.log(stack)
        }
        else if (postfix[i] == "÷") {
            var val1 = stack.pop()
            var val2 = stack.pop()
            stack.push(val2 / val1)
            console.log(stack)
        }
        else if (postfix[i] == "+") {
            var val1 = stack.pop()
            var val2 = stack.pop()
            stack.push(Number(val2) + Number(val1))
            console.log(stack)
        }
        else {
            stack.push(postfix[i])
        }
    }
    return stack.pop()
}

function calculator(input) {
    var stack = spliter(input)
    if (input[input.length - 1] == "=") {
        var postfix = postfix_converter(stack)
        var result = postfix_computer(postfix)
        var display = document.getElementById("display")
        display.innerHTML = ""
        return result
    }
    else {
        return ""
    }
}

function calc_button_click(target) {
    var display = document.getElementById("display")
    var result = document.getElementById("result")
    var input = target.innerHTML
    display.innerHTML += input
    result.innerHTML = calculator(display.innerHTML)
}

function calc_clear_button_click() {
    var display = document.getElementById("display")
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1)
}

function calc_allclear_button_click() {
    var display = document.getElementById("display")
    var result = document.getElementById("result")
    display.innerHTML = ""
    result.innerHTML = ""
}