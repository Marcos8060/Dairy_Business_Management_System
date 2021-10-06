const field1 = document.getElementById("num1");
const field2 = document.getElementById("num2");
const field3 = document.getElementById("num3");
const field4 = document.getElementById("num4");
const total = document.getElementById("total");
const weekly = document.getElementById("weekly");

// Event listener
form.addEventListener('submit',getTotals);
form.addEventListener('submit',incomeOverTime)

// Total amount in litres
function getTotals(e){
   
    const result = parseFloat(field1.value)+parseFloat(field2.value)
                   +parseFloat(field3.value)+parseFloat(field4.value)

    if(!isNaN(result)){
       total.innerHTML = result+ " Litres";
    }

    e.preventDefault();
}
// Total amount on a weekly basis

function incomeOverTime(){
    
    // weekly income
    const answer = parseFloat(field1.value)+parseFloat(field2.value)
                   +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 7;

    if(!isNaN(answer)){
       weekly.innerHTML = "Amount Accrued in a week is ksh "+answer;
    }
}

