var index, currentIndex;

for (index = 0; index < 3; index++) {
	currentIndex = index.toString();
}

// Is the same as...

var index, currentIndex;

index = 0;

if (index < 3) {
	currentIndex = index.toString(); // "0"
	
	index++;
}


if (index < 3) {
	currentIndex = index.toString(); // "1"
	
	index++;
}


if (index < 3) {
	currentIndex = index.toString(); // "2"
	
	index++;
}
