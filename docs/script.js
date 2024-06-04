const wrapper = document.getElementById("tiles");
const size = 40;
let columns = rows = 0;
const body = document.body,
	html = document.documentElement;

createGrid();

const text = document.getElementById("type-anim");
setInterval(() => {
	if (text.textContent) text.textContent = "";
	else text.textContent = "|";
}, 750);

window.onresize = createGrid;

function createGrid() {
	const height = Math.max(body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight);
	wrapper.style.setProperty("--height", height - 1 + "px");

	wrapper.innerHTML = "";
	columns = Math.floor(document.body.clientWidth / size);
	rows = Math.floor(height / size);
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
