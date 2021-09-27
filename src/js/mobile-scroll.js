// const fullName = document.querySelector('.main-name')

const peopleFixMob = document.querySelector('.people-fixed-mobile')
const peopleMob = document.querySelector('.people-mobile')
const madeMob = document.querySelector('.made-mobile')
const cliqueMob = document.querySelector('.clique-mobile')
const textAboutUsMob = document.querySelector('.about-us .text-mobile')
const textWorksMob = document.querySelector('.works .text-mobile')
const textCooperationMob = document.querySelector('.cooperation .text-mobile')

const VERT_OFFSET = 200

const opacMiddleTitle = (
	scrollPos,
	minVisPos,
	maxVisPos,
	titleNode,
	isFirst,
	isLast
) => {
	if (scrollPos <= minVisPos + (maxVisPos - minVisPos) / 4) {
		if (isFirst) {
			titleNode.style.opacity = 1
		} else {
			titleNode.style.opacity =
				(scrollPos - minVisPos) / ((maxVisPos - minVisPos) / 4)
		}
	} else if (scrollPos >= maxVisPos - (maxVisPos - minVisPos) * 0.75) {
		if (isLast) {
			titleNode.style.opacity = 1
		} else {
			titleNode.style.opacity =
				(maxVisPos - scrollPos) / ((maxVisPos - minVisPos) / 4)
		}
	} else {
		titleNode.style.opacity = 1
	}
}

window.addEventListener('scroll', function () {
	let scroll = window.pageYOffset

	console.log(scroll)
	// const bodyHeight = document.body.clientHeight

	// opacMiddleTitle(scroll, -200, 760 - VERT_OFFSET, fullName, false, false)
	opacMiddleTitle(scroll, 300, 1400 - VERT_OFFSET, textAboutUsMob, false, false)
	opacMiddleTitle(scroll, 1500, 2750 - VERT_OFFSET, textWorks, false, false)
	opacMiddleTitle(
		scroll,
		2500,
		4000 - VERT_OFFSET,
		textCooperation,
		false,
		false
	)

	opacMiddleTitle(
		scroll,
		1695 - VERT_OFFSET,
		2700 - VERT_OFFSET,
		madeFix,
		false,
		false
	)
	opacMiddleTitle(
		scroll,
		2695 - VERT_OFFSET,
		3550 - VERT_OFFSET,
		cliqueFix,
		false,
		false
	)

	// if (scroll > 1495) {
	// 	madeFix.classList.add('z-index')
	// } else {
	// 	madeFix.classList.remove('z-index')
	// }

	// if (scroll > 2495) {
	// 	madeFix.classList.remove('z-index')
	// 	cliqueFix.classList.add('z-index')
	// } else {
	// 	cliqueFix.classList.remove('z-index')
	// }

	// if (scroll > 0) {
	// 	people.classList.add('display-none')
	// 	peopleFix.classList.remove('display-none')
	// } else {
	// 	people.classList.remove('display-none')
	// 	peopleFix.classList.add('display-none')
	// }

	// if (scroll === 0) {
	// 	peopleFix.classList.add('display-none')
	// }

	// if (scroll > 3044) {
	// 	peopleFix.classList.add('display-none')
	// 	madeFix.classList.add('display-none')
	// 	cliqueFix.classList.add('display-none')
	// 	cliqueCoop.classList.remove('display-none')
	// } else {
	// 	cliqueCoop.classList.add('display-none')
	// 	peopleFix.classList.remove('display-none')
	// 	madeFix.classList.remove('display-none')
	// 	cliqueFix.classList.remove('display-none')
	// }
})

window.addEventListener('scroll', function () {
	let scroll = window.pageYOffset

	let x = 532 / 1.875

	// console.log(x)

	if (scroll > 0 && scroll <= 532) {
		peopleFixMob.style.transform = 'scale(' + scroll / x + ')'
		peopleFixMob.style.marginRight = '122px'
		peopleFixMob.classList.remove('display-none')
		peopleMob.style.opacity = 0
	} else {
		peopleFixMob.classList.add('display-none')
		peopleFixMob.style.marginRight = '210px'
		opacMiddleTitle(scroll, 300, 1250 - VERT_OFFSET, peopleMob, true, false)
	}
})
