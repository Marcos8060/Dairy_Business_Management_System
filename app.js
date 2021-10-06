months = ["January","February","March",
          "April","May","June", "July",
          "August","September","October",
          "November","December"
        ]
// catching the Ids
const field1 = document.getElementById("num1");
const field2 = document.getElementById("num2");
const field3 = document.getElementById("num3");
const field4 = document.getElementById("num4");
const total = document.getElementById("total");
const weeklyIncome = document.getElementById("weekly");
const yearlyIncome = document.getElementById("yearly");
const singleMonths = document.getElementById("list")

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
       weeklyIncome.innerHTML = "Your weekly income will be <br> ksh "+answer;
    }
    // Yearly income
    const response = parseFloat(field1.value)+parseFloat(field2.value)
                   +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 7 * 52;

    if(!isNaN(response)){
       yearlyIncome.innerHTML = "Your yearly income will be <br> ksh "+response;
    }
}
// getting the individual months
   singleMonths.innerHTML =`
        <ul>
            <li class="list">Income for ${months[0]} is</li>
            <li class="list">Income for ${months[1]} is</li>
            <li class="list">Income for ${months[2]} is</li>
            <li class="list">Income for ${months[3]} is</li>
            <li class="list">Income for ${months[4]} is</li>
            <li class="list">Income for ${months[5]} is</li>
            <li class="list">Income for ${months[6]} is</li>
            <li class="list">Income for ${months[7]} is</li>
            <li class="list">Income for ${months[8]} is</li>
            <li class="list">Income for ${months[9]} is</li>
            <li class="list">Income for ${months[10]} is</li>
            <li class="list">Income for ${months[11]} is</li>
        </ul>
  `


