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
const total  = document.getElementById("total");
const weeklyIncome = document.getElementById("weekly");
const yearlyIncome = document.getElementById("yearly");
const singleMonths = document.getElementById("list")

// Event listener
form.addEventListener('submit',getTotals);
form.addEventListener('submit',incomeOverTime);
form.addEventListener('submit',incomePerMonth);

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
                   +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 7 *7;

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
// Monthly Income in a leap year
function incomePerMonth(){

    // Initialising individual months variable
    const january  = document.getElementById("january");
    const february = document.getElementById("february");
    const march    = document.getElementById("march");
    const april    = document.getElementById("april");
    const may      = document.getElementById("may");
    const june     = document.getElementById("june");
    const july     = document.getElementById("july");
    const august   = document.getElementById("august");
    const september= document.getElementById("september");
    const october  = document.getElementById("october");
    const november = document.getElementById("november");
    const december = document.getElementById("december");

    // Income for January
    const jan = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(jan)){
    january.innerHTML = "Income for January is "+jan;
}
// Income for February
    const feb = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 29;

    if(!isNaN(feb)){
    february.innerHTML = "Income for February is "+feb;
}
// Income for March
    const mar = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(mar)){
    march.innerHTML = "Income for March is "+mar;
}
// Income for April
    const apr = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 30;

    if(!isNaN(apr)){
    april.innerHTML = "Income for April is "+apr;
    }
    // Income for May
    const mayi = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(mayi)){
    may.innerHTML = "Income for May is "+mayi;
}
// Income for June
    const jun = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 30;

    if(!isNaN(jun)){
    june.innerHTML = "Income for June is "+jan;
    }
    // Income for July
    const jul = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(jul)){
    july.innerHTML = "Income for January is "+jul;
}
// Income for August
    const aug = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(aug)){
    august.innerHTML = "Income for August is "+aug;
    }
    // Income for September
    const sep = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 30;

    if(!isNaN(sep)){
    september.innerHTML = "Income for September is "+sep;
}
// Income for October
    const oct = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(oct)){
     october.innerHTML = "Income for October is "+oct;
    }
    // Income for November
    const nov = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 30;

    if(!isNaN(nov)){
    november.innerHTML = "Income for November is "+nov;
    }
    // Income for December
    const dec = parseFloat(field1.value)+parseFloat(field2.value)
                +parseFloat(field3.value)+parseFloat(field4.value) * 45 * 31;

    if(!isNaN(dec)){
    december.innerHTML = "Income for December is "+dec;
}
}
// getting the individual months
   singleMonths.innerHTML =`
        <ul>
            <li id="january" class="list">Income for   ${months[0]} is</li>
            <li id="february" class="list">Income for  ${months[1]} is</li>
            <li id="march" class="list">Income for     ${months[2]} is</li>
            <li id="april" class="list">Income for     ${months[3]} is</li>
            <li id="may" class="list">Income for       ${months[4]} is</li>
            <li id="june" class="list">Income for      ${months[5]} is</li>
            <li id="july" class="list">Income for      ${months[6]} is</li>
            <li id="august" class="list">Income for    ${months[7]} is</li>
            <li id="september" class="list">Income for ${months[8]} is</li>
            <li id="october" class="list">Income for   ${months[9]} is</li>
            <li id="november" class="list">Income for  ${months[10]} is</li>
            <li id="december" class="list">Income for  ${months[11]} is</li>
        </ul>
  `


