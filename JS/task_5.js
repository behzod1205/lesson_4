function task5(score) {
    switch (true) {
        case (score > 100):
            alert("Score cannot be more than 100!");
            break
        case (score >= 90):
            alert("A")
            break
        case (score >= 80):
            alert("B")
            break
        case (score >= 70):
            alert("C")
            break
        case (score >= 60):
            alert("D")
            break
        case (score >= 0):
            alert("F")
            break
        default:
            alert("I knew you would enter a negative number! Haha 😅😁");
    }
}

let score = Number(prompt("Enter Your Score:"));
task5(score);
