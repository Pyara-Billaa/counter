let count = 0;
let mode;

let containerEl = document.createElement("div");
containerEl.setAttribute("id", "container-el");
document.body.appendChild(containerEl);

let displayEl = document.createElement("input");
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

const placeholder = document.createElement("option");
placeholder.textContent = "Choose mode";
placeholder.value = "";
placeholder.disabled = true;
placeholder.selected = true;
select.appendChild(placeholder);

let resetContainer = document.createElement("div");
resetContainer.setAttribute("id", "reset-container");
document.body.appendChild(resetContainer);

let plusBtn = document.createElement("button");
plusBtn.setAttribute("id", "plus-btn");
plusBtn.textContent = "+";
containerEl.appendChild(plusBtn);
plusBtn.style.display = "none";

let minusBtn = document.createElement("button");
minusBtn.setAttribute("id", "minus-btn");
minusBtn.textContent = "-";
containerEl.appendChild(minusBtn);
minusBtn.style.display = "none";

let resetBtn = document.createElement("button");
resetBtn.setAttribute("id", "reset-btn");
resetBtn.textContent = "RESET";
resetContainer.appendChild(resetBtn);

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

  displayEl.value = count;
  plusBtn.style.display = "inline-block";
  minusBtn.style.display = "inline-block";

  enforceRules();
});

plusBtn.addEventListener("click", function () {
  count += 1;
  displayEl.value = count;
  enforceRules();
});

minusBtn.addEventListener("click", function () {
  count -= 1;
  displayEl.value = count;

  enforceRules();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  displayEl.value = "";
  select.value = "";

  plusBtn.style.display = "none";
  minusBtn.style.display = "none";
});
