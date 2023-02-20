
const btn = document.getElementById("result-btn");

function results(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let ans = 0;
    if (operator == "+"){
        ans = num1 + num2;
    }
    else if (operator == "-"){
        ans = num1 - num2;
    }
    else if (operator == "x"){
        ans = num1 * num2;
    }
    else if (operator == "/"){
        ans = num1 / num2;
    }
    document.getElementById("resultShow").innerText= `${num1} ${operator} ${num2} = ${ans}`;
}

btn.addEventListener("click", results);


