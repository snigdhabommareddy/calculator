function add(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)+Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}

function sub(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)-Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}

function mul(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)*Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}
function div(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var out = Number(a)/Number(b);
    document.getElementById("output").innerText=`Sum of number is ${out}`
}