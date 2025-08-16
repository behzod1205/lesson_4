function task18() {
    let bank = spider.split(" ").map(Number)
    alert(`${(bank[0] * bank[1] * bank[2])/100} UZS`)
}

let spider = prompt("Enter The amount, annual interest rate (in percent), time(year) with space and in order like written:")

task18(spider)