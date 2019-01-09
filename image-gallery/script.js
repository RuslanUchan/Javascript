const thumbnail = document.querySelector('.thumbnail');
const thumbs = document.querySelectorAll('.thumb');

// console.log(thumbnail.getAttribute('class'));
// console.log(thumbnail.previousElementSibling.getAttribute('src'));

thumbnail.addEventListener('click', (e) => {
	if (e.target.classList.contains('thumb')) {
		// Set chaning img feature
		let clickedImg = e.target.getAttribute('src');
		e.target.parentElement.previousElementSibling.setAttribute('src', clickedImg);

		// Set animations
		e.target.parentElement.previousElementSibling.classList.add('fade');		
		setTimeout(() => {
			e.target.parentElement.previousElementSibling.classList.remove('fade');
		}, 500);

		// Set active img opacity
		thumbs.forEach((thumb) => {
			thumb.className = 'thumb';
		});
		e.target.classList.add('active');
	}
});