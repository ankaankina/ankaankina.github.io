var container = document.getElementById('tab3'),
	blocks = legolize(85, ['tab-block1', 'tab-block2', 'tab-block3']).join('');
container.innerHTML = blocks;

var boxes = container.getElementsByTagName('*'),
	blockWidth = boxes[0].clientWidth,
	blockHeight = boxes[0].clientHeight,
	containerWidth = boxes[0].parentElement.clientWidth,

	columns = Math.floor(containerWidth / blockWidth),
	rows = 0,
	classCounter = [],
	prevBoxClass, boxClass;
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


for (var i = 0; i < boxes.length; i++) {
	boxClass = boxes[i].className;

	if (boxes[i].previousSibling) prevBoxClass = boxes[i].previousSibling.className;
	if (boxClass === prevBoxClass) {
		classCounter.push(boxes[i]);
	} else {
		classCounter = [boxes[i]];
	}

	if (i % columns === 0) {
		rows++;
		classCounter = [boxes[i]];
		console.log('row ' + rows);
	}

	if (classCounter.length >= 3) {
		for (j = 0; j < classCounter.length; j++) {
			classCounter[j].className += " more-than-2";
		}
	}

	console.log(i + ': ' + classCounter);
}
console.log('rows: ' + rows);