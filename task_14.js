function task14(num1, num2) {
    if (num1 > num2){
        alert(`${num1} is greater than ${num2}`)
    }else if (num1 < num2){
        alert(`${num2} is greater than ${num1}`)
    }else if(num1 == num2){
        alert("The numbers are equal!")
    }else{
        alert("Error!")
    }
}

let num1 = Number(prompt("Enter the fisrt number:"))
let num2 = Number(prompt("Enter the second number:"))

task14(num1, num2)