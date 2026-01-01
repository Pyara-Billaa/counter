let count = 0;
let mode = "integers";


let containerEl = document.createElement("div");
containerEl.setAttribute("id", "container-el");
document.body.appendChild(containerEl);
document.querySelector("#container-el");

let displayEl = document.createElement("h1");
containerEl.appendChild(displayEl);
displayEl.textContent=0;

let integerBtn = document.createElement("button");
integerBtn.textContent = "Integers";
containerEl.appendChild(integerBtn);

let wholeNumbersBtn = document.createElement("button");
wholeNumbersBtn.textContent = "Whole Numbers";
containerEl.appendChild(wholeNumbersBtn);

let naturalNumbersBtn = document.createElement("button");
naturalNumbersBtn.textContent = "Natural Numbers";
containerEl.appendChild(naturalNumbersBtn);


let plusBtn = document.createElement("button");
plusBtn.setAttribute("id", "plus-btn");
plusBtn.textContent = "+";
containerEl.appendChild(plusBtn);
plusBtn.style.display="none";

let minusBtn = document.createElement("button");
minusBtn.setAttribute("id", "minus-btn");
minusBtn.textContent = "-";
containerEl.appendChild(minusBtn);
minusBtn.style.display="none";

function enforceRules() {
    if (mode === "integers") {
        minusBtn.disabled = false;
    }

    if (mode === "whole") {
        minusBtn.disabled = (count <= 0);
    }

    if (mode === "natural") {
        minusBtn.disabled = (count <= 1);
    }
}


plusBtn.addEventListener("click", function () {
    count += 1;
    displayEl.textContent = count;
    enforceRules();
});

minusBtn.addEventListener("click", function () {
    count -= 1;
    displayEl.textContent = count;

    enforceRules();
});

integerBtn.addEventListener("click", function () {
    mode = "integers";
    plusBtn.style.display="inline-block";
    minusBtn.style.display="inline-block";

    wholeNumbersBtn.style.display="none";
    naturalNumbersBtn.style.display="none";
})

wholeNumbersBtn.addEventListener("click", function () {
    mode = "whole";
    plusBtn.style.display="inline-block";
    minusBtn.style.display="inline-block";

    if(count<=0){
        document.querySelector("#minus-btn").disabled=true;
    }

    integerBtn.style.display="none";
    naturalNumbersBtn.style.display="none";
})

naturalNumbersBtn.addEventListener("click", function () {
    mode = "natural";
    plusBtn.style.display="inline-block";
    minusBtn.style.display="inline-block";

    if(count<=0){
        document.querySelector("#minus-btn").disabled=true;
    }

    wholeNumbersBtn.style.display="none";
    integerBtn.style.display="none";
})