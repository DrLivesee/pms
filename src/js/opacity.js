const clique = document.querySelector('.clique')
const made = document.querySelector('.made')
const peopleFix = document.querySelector('.people-fixed')
const madeFix = document.querySelector('.made-fixed')
const cliqueFix = document.querySelector('.clique-fixed')

window.addEventListener('scroll', function () {
	let scroll = window.pageYOffset
	console.log(scroll)
	clique.style.opacity = Math.max(0, Math.min(1, -scroll / 250 + 2))
	made.style.opacity = Math.max(0, Math.min(1, -scroll / 250 + 2))
	peopleFix.style.opacity = Math.max(0.3, Math.min(1, -scroll / 1100 + 2))
	madeFix.style.opacity = Math.min(1, Math.max(0.5, 1800 / -scroll + 2))
})
