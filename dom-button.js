'use strict';
const button = document.querySelector('.btn');
const lastStateMsg = document.querySelector('#lastState');

// Set initial state
let isOn = false;
const offText = 'Turn off';
const offColor = 'lightgray';
const onText = 'Turn on';
const onColor = 'darkgray';
button.textContent = offText;
document.body.style.backgroundColor = offColor;

// Check if there is a saved state

if (localStorage.getItem('isOn')) {
	isOn = localStorage.getItem('isOn') === 'true';

	if (isOn) {
		updateState(true);
		const lastOnTime = localStorage.getItem('lastOnTime');
		lastStateMsg.textContent = `Last turn on: ${lastOnTime}`;
	} else {
		updateState(false);
		const lastOffTime = localStorage.getItem('lastOffTime');
		lastStateMsg.textContent = `Last turn off: ${lastOffTime}`;
	}
}

// Define function to update state
function updateState(isOn) {
	const text = isOn ? onText : offText;
	const color = isOn ? onColor : offColor;
	button.textContent = text;
	document.body.style.backgroundColor = color;
	// Save state and update message
	const lastTime = new Date().toLocaleString();
	localStorage.setItem('isOn', isOn.toString());
	localStorage.setItem(isOn ? 'lastOnTime' : 'lastOffTime', lastTime);
	lastStateMsg.textContent = `Last turn ${isOn ? 'on' : 'off'}: ${lastTime}`;
}

// Add event listener to the button
button.addEventListener('click', function () {
	// Update state and button text
	isOn = !isOn;
	updateState(isOn);
});