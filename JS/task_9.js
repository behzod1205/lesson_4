function task9(degree) {
    switch(true){
        case (degree < 30):
            alert("The air is very dry!")
            break
        case (degree >= 30 && degree < 60):
            alert("The air is normal!")
            break
        case (degree >= 60 && degree <= 100):
            alert("The air is wet!")
            break
        default:
            alert("Invalid Degree!")
    }
}

let degree = Number(prompt("Enter the air humidity:"))

task9(degree)