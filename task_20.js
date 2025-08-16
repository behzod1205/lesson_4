function task20(numbers) {
    let nums = numbers.split(" ").map(Number)
    let all_nums = nums.sort((a, b) => b - a)

    alert(`${all_nums[0]}`)
}

let numbers = prompt("Enter the numbers with space:")

task20(numbers)