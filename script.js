var element;

element = document;

document.getElementById("calculate").onclick=abc;

function abc(){
   
    var a = document.getElementById("amount").value; 
    var b = document.getElementById("services").value;
    var g = document.getElementById("tip").value;
    var c = document.getElementById("people").value;
    


     var total = parseFloat(a)*parseFloat(b)/parseFloat(c);
     document.getElementById("tip").innerText=total;

} 