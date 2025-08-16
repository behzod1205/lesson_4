function task12() {
    switch(car){
        case "light":
            if (age >= 18){
                alert("You can drive a light vehicle!")
            }else{
                alert("You are too young to drive!")
            }
            break

        case "truck":
            if (age >= 18){
                alert("You can drive a light vehicle!")
            }else{
                alert("You are too young to drive!")
            }
            break

        default:
            alert("Invalid car type!")
    }
}

let age = Number(prompt("Enter your age:"))
let car = prompt("Enter yor car type(light or truck):")

task12(age, car)