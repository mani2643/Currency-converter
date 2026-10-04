const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('#exchange-btn');
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener('load',()=>{
    updateExchangeRate();
})
dropdowns.forEach((select)=>{
    for(currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener('change',()=>{
        let currCode = select.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        let img = select.parentElement.querySelector('img');
        img.src = newSrc;
    });

})

btn.addEventListener('click',async (e)=>{
    e.preventDefault();
    updateExchangeRate();
})

const updateExchangeRate = async ()=>{
    try{
        let amount = document.querySelector(".amount input");
        let amtVal = Number(amount.value);
        if(amtVal <= 0 || isNaN(amtVal)){
            amtVal = 1;
            amount.value = '1';
            alert("Amount should be in positive");
            return;
        }

        const from = fromCurr.value.toLowerCase();
        const to = toCurr.value.toLowerCase();

        const url = `${BASE_URL}/${from}.json`;
        let response = await fetch(url);

        if(!response.ok){
            throw new Error("Currency data not found!");
        }
        let data = await response.json();
        let rate = data[from][to];
        
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    }
    catch(error){
        msg.innerText = error.message;
    }
    
}