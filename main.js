const container = document.querySelector(".grid-container");
container.addEventListener("mouseover", (evt) => {
  evt.target.classList.add("hover");
});

// function that builds a 16x16 grid in the container

function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const rowEm = document.createElement("div");
    rowEm.classList.add("js-row");
    container.appendChild(rowEm);
    for (let columns = 0; columns < size; columns++) {
      const gridDiv = document.createElement("div");
      gridDiv.classList.add("js-gridDiv");
      rowEm.appendChild(gridDiv);
    }
  }
}
function getPrompt(promptString) {
  const sizeStr = prompt(promptString);
  return parseInt(sizeStr);
}

const btn = document.getElementById("js-promptButton");
btn.addEventListener("click", (e) => {
  let choice;
  let isValid;
  let promptString = "Enter grid size";
  do {
    choice = getPrompt(promptString);
    const lessThan100 = choice < 101;
    const isANumber = !isNaN(choice);
    console.log("lessThan100", lessThan100);
    console.log("isANumber", isANumber);
    isValid = lessThan100 && isANumber;
    if (!isValid) {
      promptString = "Enter a number less than 100";
    }
  } while (!isValid);

  container.innerHTML = "";
  createGrid(choice);
});

//creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a pixel trail through the grid
