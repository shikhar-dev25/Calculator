const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('inputText'); // top expression
const outputDisplay = document.getElementById('output'); // bottom result

let currentInput = "";

//Mouse event

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent.trim();
        console.log(value);
        

        if (display.value === "ERROR") {
            currentInput = "";
            outputDisplay.value = "";
        }

        else if (value === "AC") {
            currentInput = "";
            outputDisplay.value = "";
        } 
        else if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
        }
        else if (value === '=') {
            try {
                let result = eval(currentInput.replace(/\^/g, "**"));
                outputDisplay.value = `= ${result}`;
            } catch {
                outputDisplay.value = "ERROR";
            }
        }
        else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});

// Keyboard Event
document.addEventListener("keydown", function(e) {

    if (display.value === "ERROR") {
        currentInput = "";
        outputDisplay.value = "";
    }

    if (e.key === "Tab") {
        e.preventDefault();
        return;
    }

    if (e.key === " ") {
        e.preventDefault();
    }

    if ((isFinite(e.key) || ["+", "-", "*", "/", "%", ".", "^"].includes(e.key)) && e.key !== " ") {
        currentInput += e.key;
        display.value = currentInput;
    }
    else if (e.key === "Enter") {
        e.preventDefault();
        try {
            let result = eval(currentInput.replace(/\^/g, "**"));
            outputDisplay.value = `= ${result}`;
        } catch {
            outputDisplay.value = "ERROR";
        }
    }
    else if (e.key === "Escape") {
        currentInput = "";
        display.value = "";
        outputDisplay.value = "";
    }
    else if (e.key === "Backspace" || e.key === "Delete") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }
});

const themeSwitch = document.querySelector("#mode-toggle");
themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
