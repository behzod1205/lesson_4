function task3(age){
    if (age < 0){
        alert("Invalid Age Number!")
    }else if(age >= 18){
        alert("You're An Adult!")
    }else{
        alert("You're A Minor!")
    }
}

let age = Number(prompt("Enter your age:"))

task3(age)