function task10(speed) {
    if (speed < 50 && speed >=0) {
        alert("The internet is slow");
    } else if (speed >= 50 && speed < 100) {
        alert("The internet is average");
    } else if (speed >= 100) {
        alert("The internet is very fast");
    } else {
        alert("Invalid input! Are you trying to break the internet? 🌐😂");
    }
}

let speed = Number(prompt("Enter your internet speed (Mbps):"));


task10(speed);
