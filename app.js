const field1 = document.getElementById("num1");
const field2 = document.getElementById("num2");
const field3 = document.getElementById("num3");
const field4 = document.getElementById("num4");

// Event listener
form.addEventListener('submit',getTotals);

// Total amount in litres
function getTotals(e){
   
    const result = parseFloat(field1.value)+parseFloat(field2.value)
                   +parseFloat(field3.value)+parseFloat(field4.value)

    if(!isNaN(result)){
       total.innerHTML = result+ " Litres";
    }

    e.preventDefault();
}


