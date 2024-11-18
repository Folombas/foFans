// Dynamic tagline rotation
const taglines = [
	'Code Like a Rockstar',
	'Think in Cyberspace',
	'Elevate Your Tech Skills',
];
let taglineIndex = 0;
const taglineElement = document.querySelector('.dynamic-tagline');

setInterval(() => {
	taglineIndex = (taglineIndex + 1) % taglines.length;
	taglineElement.textContent = taglines[taglineIndex];
}, 3000);
