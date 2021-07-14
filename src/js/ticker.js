const list = document.querySelector('.ticker__list')

const item = document.querySelector('.ticker__item')

for (let count = 0; count < 100; count++) {
	let clone = item.cloneNode(true)

	list.appendChild(clone)
}
