
const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.screen');

let currentInput = "";

//Mouse events

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent.trim();

        if (display.value === "ERROR") {
            currentInput = "";
        }

        if(value === "AC"){
            // console.log("AC");
            currentInput = ""
        } 
        else if(value === "DEL"){
            currentInput = currentInput.slice(0, -1)
        }
        else if(value == '='){
            try{
                currentInput = currentInput.replace(/\^/g, "**");
                currentInput = eval(currentInput).toString();
            }
            catch{
                currentInput = "ERROR"
            }
            // console.log(currentInput);
        }
        else{
            currentInput += value;
        }
        display.value = currentInput;
    });
});


//Keypress Events


    document.addEventListener("keydown", function(e){

        if (display.value === "ERROR") {
            currentInput = "";
        }

        if(e.key === "Tab") {
        e.preventDefault()
        return;
        }

        if(e.key === " "){
            e.preventDefault();
        }

        if((isFinite(e.key) || ["+", "-", "*", "/", "%", ".", "^"].includes(e.key)) && e.key != " "){
        let keyValue = e.key;
            console.log(keyValue);
            currentInput += keyValue;
            display.value = currentInput;
        }


        else if(e.key === "Enter"){

            e.preventDefault();
            try{
                currentInput = currentInput.replace(/\^/g, "**");
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            }
            catch{
                display.value = "Error";
                currentInput = "";
            } 
        }


        else if (e.key === "Escape") {
            currentInput = "";
            display.value = "";
        }
        
        else if(e.key === "Backspace" || e.key === "Delete"){
            console.log(e.key);
            currentInput = currentInput.slice(0, -1)
            display.value = currentInput;
        }
    })

    //dark mode

const themeSwitch = document.querySelector("#mode-toggle");
themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

