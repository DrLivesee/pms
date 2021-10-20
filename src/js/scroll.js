const people = document.querySelector('.people')
const made = document.querySelector('.made')
const clique = document.querySelector('.clique')
const peopleFix = document.querySelector('.people-fixed')
const madeFix = document.querySelector('.made-fixed')
const cliqueFix = document.querySelector('.clique-fixed')
const fullName = document.querySelector('.main-name')
const textAboutUs = document.querySelector('.about-us .text')
const textWorks = document.querySelector('.works .text')
const textCooperation = document.querySelector('.cooperation .text')
const cliqueCoop = document.querySelector('.cooperation .clique')

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

	opacMiddleTitle(scroll, -200, 760 - VERT_OFFSET, fullName, false, false)
	opacMiddleTitle(scroll, 500, 1900 - VERT_OFFSET, textAboutUs, false, false)
	opacMiddleTitle(scroll, 1500, 2750 - VERT_OFFSET, textWorks, false, false)
	opacMiddleTitle(
		scroll,
		2500,
		4000 - VERT_OFFSET,
		textCooperation,
		false,
		false
	)

	opacMiddleTitle(scroll, 0, 1700 - VERT_OFFSET, peopleFix, true, false)
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

	if (scroll > 1495) {
		madeFix.classList.add('z-index')
	} else {
		madeFix.classList.remove('z-index')
	}

	if (scroll > 2495) {
		madeFix.classList.remove('z-index')
		cliqueFix.classList.add('z-index')
	} else {
		cliqueFix.classList.remove('z-index')
	}

	if (scroll > 0) {
		people.classList.add('display-none')
		peopleFix.classList.remove('display-none')
	} else {
		people.classList.remove('display-none')
		peopleFix.classList.add('display-none')
	}

	if (scroll === 0) {
		peopleFix.classList.add('display-none')
	}

	if (scroll > 3044) {
		peopleFix.classList.add('display-none')
		madeFix.classList.add('display-none')
		cliqueFix.classList.add('display-none')
		cliqueCoop.classList.remove('display-none')
	} else {
		cliqueCoop.classList.add('display-none')
		peopleFix.classList.remove('display-none')
		madeFix.classList.remove('display-none')
		cliqueFix.classList.remove('display-none')
	}
})


// $(document).ready(function(){
// 	$(people).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});

// 	$(made).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});

// 	$(clique).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});

// 	$(peopleFix).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});

// 	$(madeFix).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});

// 	$(cliqueFix).click(function (e) {
// 		e.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top;
// 		$('body,html').animate({scrollTop: top}, 500);
// 	});
// });
