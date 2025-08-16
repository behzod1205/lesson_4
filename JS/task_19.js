function task19(element) {
    let el = Number(element)

    if (el == element){
    alert(`The entered value is a number`)
    }else{
    alert(`The entered value is a string`)
    }
}

let element = prompt("Enter the elements:")

task19(element)