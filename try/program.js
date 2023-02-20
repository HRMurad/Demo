const btn = document.getElementById("result-btn");









function results(){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const sum = num1 + num2 ;
    // console.log(sum);
    document.getElementById("resultShow").innerText= `The sum of ${num1} and ${num2} is ${sum}`;

}
btn.addEventListener("click", results);
