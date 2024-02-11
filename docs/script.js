const wrapper = document.getElementById("tiles");
const size = 40;
let columns = rows = 0;

createGrid();

const text = document.getElementById("type-anim");
setInterval(() => {
	if (text.textContent == "dev ") {
		text.textContent = "dev|";
	} else {
		text.textContent = "dev ";
	}
}, 750);

window.onresize = createGrid;

function createGrid() {
	wrapper.innerHTML = "";
	columns = Math.floor(document.body.clientWidth / size);
	rows = Math.floor(document.body.clientHeight / size);
	wrapper.style.setProperty("--columns", columns);
	wrapper.style.setProperty("--rows", rows);
	createTiles(columns * rows);
}

function createTiles(quantity) {
	for (let i = 0; i < quantity; i++) {
		const tile = document.createElement("div");
		tile.classList.add("tile");
		wrapper.appendChild(tile);
	}
}
