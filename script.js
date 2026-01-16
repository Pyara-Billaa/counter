let count = 0;
let mode;

let containerEl = document.createElement("div");
containerEl.setAttribute("id", "container-el");
document.body.appendChild(containerEl);

let displayEl = document.createElement("h1");
displayEl.textContent = `Counter : ${count}`;
containerEl.appendChild(displayEl);

let select = document.createElement("select");
select.id = "counting";
containerEl.appendChild(select);

let modes = ["integers", "whole", "natural"];

modes.forEach((modes) => {
  const option = document.createElement("option");
  option.value = modes;
  option.textContent = modes[0].toUpperCase() + modes.slice(1);
  select.appendChild(option);
});

let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "btn-container");
document.body.appendChild(buttonContainer);

let minusBtn = document.createElement("button");
minusBtn.setAttribute("id", "minus-btn");
minusBtn.textContent = "-";
buttonContainer.appendChild(minusBtn);

let plusBtn = document.createElement("button");
plusBtn.setAttribute("id", "plus-btn");
plusBtn.textContent = "+";
buttonContainer.appendChild(plusBtn);

let resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "reset-btn");
resetBtn.textContent = "RESET";
buttonContainer.appendChild(resetBtn);

function enforceRules() {
  if (mode === "integers") {
    minusBtn.disabled = false;
  }

  if (mode === "whole") {
    minusBtn.disabled = count <= 0;
  }

  if (mode === "natural") {
    minusBtn.disabled = count <= 1;
  }
}

select.addEventListener("change", () => {
  mode = select.value;
  count = mode === "natural" ? 1 : 0;

  displayEl.textContent = `Counter : ${count}`;
  plusBtn.style.display = "inline-block";
  minusBtn.style.display = "inline-block";

  enforceRules();
});

plusBtn.addEventListener("click", function () {
  count += 1;
  displayEl.textContent = `Counter : ${count}`;
  enforceRules();
});

minusBtn.addEventListener("click", function () {
  count -= 1;
  displayEl.textContent = `Counter : ${count}`;

  enforceRules();
});

resetBtn.addEventListener("click", function () {
  select.value="integers";
  select.dispatchEvent(new Event("change"));
});
