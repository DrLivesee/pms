const port = document.querySelectorAll('.portfolio')
const portFull = []
const portDescr = document.querySelectorAll('.portfolio-descr')
const portDescrFull = []
const close = document.querySelectorAll('.portfolio-descr .close')
const closeFull = []
const overlayBlocker = document.getElementById('overlay-blocker')

const worksWrapper = document.querySelector('.works-wrapper')

const body = document.querySelector('body')

for (const node of port) {
	portFull.push(node)
}

for (const node of portDescr) {
	portDescrFull.push(node)
}

for (const node of close) {
	closeFull.push(node)
}

const prevent = (ev) => ev.preventDefault()

const closeModal = () => {
	for (let i = 0; i < portFull.length; i++) {
		portDescrFull[i].classList.remove('display-flex')
		portFull[0].classList.remove('blur')
		portFull[1].classList.remove('blur')
		portFull[2].classList.remove('blur')
		document.removeEventListener('wheel', prevent, { passive: false })
		overlayBlocker.classList.add('display-none')
	}
}

for (let i = 0; i < portFull.length; i++) {
	portFull[i].addEventListener('click', function () {
		portDescrFull[i].classList.add('display-flex')
		portFull[0].classList.add('blur')
		portFull[1].classList.add('blur')
		portFull[2].classList.add('blur')
		document.addEventListener('wheel', prevent, { passive: false })
		overlayBlocker.classList.remove('display-none')
	})

	closeFull[i].addEventListener('click', function (event) {
		event.preventDefault()
		closeModal()
	})

	overlayBlocker.addEventListener('click', function (event) {
		event.preventDefault()
		closeModal()
	})

	window.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			event.preventDefault()
			closeModal()
		}
	})
}
