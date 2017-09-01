var container = document.getElementById('tab3'),
	blocks = legolize(55, ['tab-block1', 'tab-block2', 'tab-block3']).join('');
container.innerHTML = blocks;

var boxes = container.getElementsByTagName('*'),
	blockWidth = boxes[0].clientWidth,
	blockHeight = boxes[0].clientHeight,
	containerWidth = boxes[0].parentElement.clientWidth,

	columns = Math.floor(containerWidth / blockWidth);
	console.log('columns: ' + columns);

function legolize(count, classes) {
	function randomClasses(count, classes) {
		var xs = [];

		for (var i = 0; i < count; i++) {
			xs.push(classes[Math.floor(Math.random() * classes.length)]);
		}

		return xs;
	}

	return randomClasses(count, classes).map(x => '<div class="' + x + '"></div>');
}

var col = 0,
	row = 0;

for (var i = 0; i < boxes.lenght; i++) {
	boxes[i].style.left = (col * blockWidth) + 'px';
	boxes[i].style.top = (row * blockHeight) + 'px';

	if (++col >= columns) {
		col = 0;
		row++;
	}
}

console.log('rows: ' + row);