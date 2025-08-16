function task17(numbers) {
    let nums = numbers.split(" ").map(Number)

    if (nums.length === 3){
        let avg = (nums[0] + nums[1] + nums[2]) / 3
        alert(`Average: ${avg}`)
    }else{
        alert("Error!")
    }
    
}

let numbers = prompt("Enter the numbers with space:")

// task17(numbers)


//------------------------------------------------

// n ta sonni o'rtachasini topish

// function task17(numbers) {
//     let nums = numbers.split(" ").map(Number)
//     let n = nums.length
//     let avg = 0

//     for(let i = 0; i < n; i++){
//         avg += nums[i]
//     }

//     alert(`Average: ${avg / n}`)
    
// }

// let numbers = prompt("Enter the numbers with space:")

// task17(numbers)