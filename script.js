const containerEl = document.querySelector(".container")

const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let input = Number(window.prompt("Enter # of squares per side of grid"))
    if (isNaN(input)) {
        alert("You must enter a number.")
    } else if (input >= 100) {
        alert("Number is too large.")
    } else {
        createDivs(input)
    }
})

let randomRGB = (min, max) => min + Math.floor(Math.random() * (max - min + 1)) 

function createDivs(num) {
    containerEl.innerHTML = '';

    for (let i = 0; i < num * num; i++) {
        const box = document.createElement('div');
        box.classList.add("boxes")
        box.style.width = box.style.height = `${100 / num}%`
        containerEl.appendChild(box)
    }

    const newBoxes = document.querySelectorAll(".boxes");
    newBoxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            const r = randomRGB(0, 255)
            const g = randomRGB(0, 255)
            const b = randomRGB(0, 255)
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        });
    });
}

createDivs(16)