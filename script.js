let total = 0;

function button(id) {
    const numbers = id.match(/\d+/g);
    console.log(numbers)
    const input = document.getElementById(`input${numbers}`);
    console.log(input);
    const stock = document.getElementById(`stock${numbers}`);
    console.log(stock);
    const price = document.getElementById(`price${numbers}`);
    console.log(price);
    let totalstock = parseInt(stock.innerHTML.match(/\d+/g)[0]);
    if (input.value <= totalstock) {
        cost = parseFloat(price.innerHTML.match(/-?\d+(\.\d+)?/g));   //parseFloat- to convert string to float number
        cost *= input.value;
        stock.textContent = ` Stock: ${totalstock - input.value}`
        total += cost;
        console.log(total);
    }
}

function Total(){
    var t = total;
    var cost = document.getElementById("cost-display");
    cost.innerHTML = `Total: $${t.toFixed(2)}`;
}

let cash = document.querySelector(".cash");
cash.addEventListener("click",()=>{
    let msg = document.querySelector("#exitcontent");
    msg.innerHTML = "Payment Successful Via Cash";
})
let gpay = document.querySelector(".gpay");
gpay.addEventListener("click",()=>{
    let msg = document.querySelector("#exitcontent");
    msg.innerHTML = "Payment Successful Via Gpay";
})

let discountcode = document.querySelector("#discount-code");
console.log(discountcode)
const cheatcode = "FF2006";

let discountbtn = document.querySelector("#discount-button");
discountbtn.addEventListener("click",()=>{
    let cost = document.querySelector("#cost-display");
    
    console.log(discountcode.value);
    
    if(cheatcode == discountcode.value)
    {
        var discount_price = total*30/100;
        cost.innerHTML = "Total: $"+`${discount_price}`;
    }
    
})



