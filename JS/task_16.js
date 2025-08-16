function task16() {
    if (amount > 500000){
        alert(`Discount: ${amount / 10} UZS \nPayment: ${amount - (amount / 10)} UZS`)
    }else{
        alert(`Discount: 0 UZS \n Payment: ${amount} UZS`)
    }
}

let amount = Number(prompt("Enter your purchase amount(UZS):"))

task16(amount)