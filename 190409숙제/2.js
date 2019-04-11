function add() {
    var input = document.getElementsByClassName("add_input")
    var output = document.getElementById("add_result")
    output.innerHTML = Number(input[0].value) + Number(input[1].value)
}

function sub() {
    var input = document.getElementsByClassName("sub_input")
    var output = document.getElementById("sub_result")
    output.innerHTML = Number(input[0].value) - Number(input[1].value)
}

function mul() {
    var input = document.getElementsByClassName("mul_input")
    var output = document.getElementById("mul_result")
    output.innerHTML = Number(input[0].value) * Number(input[1].value)
}

function div() {
    var input = document.getElementsByClassName("div_input")
    var output = document.getElementById("div_result")
    output.innerHTML = Number(input[0].value) / Number(input[1].value)
}