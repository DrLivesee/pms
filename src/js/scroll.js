const people = document.querySelector('.people')
const peopleFix = document.querySelector('.people-fixed')
const madeFix = document.querySelector('.made-fixed')
const cliqueFix = document.querySelector('.clique-fixed')

window.addEventListener('scroll', function () {
	let scroll = window.pageYOffset
	if (scroll === 0) {
		people.classList.remove('display-none')
	} else {
		people.classList.add('display-none')
	}

	if (scroll < 1505) {
		peopleFix.classList.remove('display-none')
		madeFix.classList.add('display-none')
	} else {
		peopleFix.classList.add('display-none')
		madeFix.classList.remove('display-none')
	}
})
