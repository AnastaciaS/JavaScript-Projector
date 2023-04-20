'use strict';
const button = document.querySelector('.btn');
const lastStateMsg = document.querySelector('#lastState');

// Set initial state
let isOn = false;
button.textContent = 'Turn off';
document.body.style.backgroundColor = 'lightgray';

// Check if there is a saved state

if (localStorage.getItem('isOn')) {
	isOn = localStorage.getItem('isOn') === 'true';

	if (isOn) {
		button.textContent = 'Turn on';
		document.body.style.backgroundColor = 'darkgray';
		const lastOnTime = localStorage.getItem('lastOnTime');
		lastStateMsg.textContent = `Last turn on: ${lastOnTime}`;
	} else {
		const lastOffTime = localStorage.getItem('lastOffTime');
		lastStateMsg.textContent = `Last turn off: ${lastOffTime}`;
	}
}

// Add event listener to the button
button.addEventListener('click', function () {
	// Update state and button text
	isOn = !isOn;

	if (isOn) {
		button.textContent = 'Turn on';
		document.body.style.backgroundColor = 'darkgray';
		// Save last on time and update message
		const lastOnTime = new Date().toLocaleString();
		localStorage.setItem('isOn', 'true');
		localStorage.setItem('lastOnTime', lastOnTime);
		lastStateMsg.textContent = `Last turn on: ${lastOnTime}`;
	} else {
		button.textContent = 'Turn off';
		document.body.style.backgroundColor = 'lightgray';
		// Save last off time and update message
		const lastOffTime = new Date().toLocaleString();
		localStorage.setItem('isOn', 'false');
		localStorage.setItem('lastOffTime', lastOffTime);
		lastStateMsg.textContent = `Last turn off: ${lastOffTime}`;
	}
});