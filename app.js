//
let wrapper = document.querySelector(".wrapper");
wrapper.style = "width: 100%; display: flex; justify-content: space-around";

function f1() {
    const userInput = prompt("Enter a number");
    let number = parseInt(userInput);

    let result = "";

    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }
    document.getElementById("output_1").textContent = result;
}

f1()

function f2() {
    const userInput = prompt("Enter a number");
    const number = parseInt(userInput);
    
    let result = "";

    for(let i = 0; i <= number; i++) {
        for(let j = 0; j <= number; j++) {
            result += "*";
        }
        result += "\n";
    }

    document.getElementById("output_2").textContent = result;
}

f2()

function drawCircle() {
    const userInput = prompt("Enter a number (radius):");
    const radius = parseInt(userInput);

    let result = "";

    for (let i = -radius; i <= radius; i += 2) {          // y-axis
        for (let j = -radius; j <= radius; j++) {      // x-axis
            if (i * i + j * j <= radius * radius) {
                result += "*";
            } else {
                result += " ";
            }
        }
        result += "\n";
    }

    document.getElementById("output_3").textContent = result;
}

drawCircle();












