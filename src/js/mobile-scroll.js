// const fullName = document.querySelector('.main-name')

const peopleFixMob = document.querySelector('.people-fixed-mobile')
const peopleMob = document.querySelector('.people-mobile')
const madeMob = document.querySelector('.made-mobile')
const cliqueMob = document.querySelector('.clique-mobile')
const textAboutUsMob = document.querySelector('.about-us .text-mobile')
const textWorksMob = document.querySelector('.works .text-mobile')
const textCooperationMob = document.querySelector('.cooperation .text-mobile')
const peopleMainMob = document.querySelector('.people-main-mobile')

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

	// console.log(scroll)
	// const bodyHeight = document.body.clientHeight

	// opacMiddleTitle(scroll, -200, 760 - VERT_OFFSET, fullName, false, false)
	opacMiddleTitle(scroll, 00, 1250 - VERT_OFFSET, peopleMob, true, false)
	// opacMiddleTitle(scroll, 100, 705 - VERT_OFFSET, peopleFixMob, true, false)
	opacMiddleTitle(scroll, 300, 1400 - VERT_OFFSET, textAboutUsMob, false, false)
	opacMiddleTitle(scroll, 900, 2000 - VERT_OFFSET, madeMob, false, false)
	opacMiddleTitle(scroll, 1000, 2100 - VERT_OFFSET, textWorksMob, false, false)
	opacMiddleTitle(scroll, 1700, 2800 - VERT_OFFSET, cliqueMob, false, false)
	opacMiddleTitle(scroll, 1700, 2900 - VERT_OFFSET, textCooperationMob, false, false)
	// opacMiddleTitle(scroll, 1500, 2750 - VERT_OFFSET, textWorks, false, false)
	// opacMiddleTitle(
	// 	scroll,
	// 	2500,
	// 	4000 - VERT_OFFSET,
	// 	textCooperation,
	// 	false,
	// 	false
	// )

	// opacMiddleTitle(
	// 	scroll,
	// 	1695 - VERT_OFFSET,
	// 	2700 - VERT_OFFSET,
	// 	madeFix,
	// 	false,
	// 	false
	// )
	// opacMiddleTitle(
	// 	scroll,
	// 	2695 - VERT_OFFSET,
	// 	3550 - VERT_OFFSET,
	// 	cliqueFix,
	// 	false,
	// 	false
	// )

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

	// if (scroll > 0 && scroll < 505) {
	// 	peopleFixMob.classList.remove('display-none')
		
	// } else {
	// 	peopleFixMob.classList.add('display-none')
		
	// }

	// if (scroll > 0 && scroll < 532) {
	// 	peopleFixMob.classList.remove('display-none')
	// 	peopleMob.style.opacity = 0
	// } 

	// if (scroll = 0) {
	// 	peopleFixMob.classList.add('display-none')
	// } 
	
})

window.addEventListener('scroll', function () {
	let scroll = window.pageYOffset


	if (scroll > 0 && scroll < 520) {
		peopleMob.style.opacity = 0
	} 
	// else {
	// 	peopleMob.style.opacity = 1
	// }

	if (scroll === 0) {
		peopleMob.style.opacity = 0
	}

	if (scroll > 0 && scroll < 520) {
		peopleFixMob.classList.remove('display-none')
	}

	if (scroll >= 520 || scroll < 0) {
		peopleFixMob.classList.add('display-none')
	}

	if (scroll <= 0) {
		peopleMainMob.classList.remove('display-none')
	} else {
		peopleMainMob.classList.add('display-none')
	}
})

$(function() {

	$(window).scroll(function() {
  
	  var mass = Math.min(1.875, 1+0.0017*$(this).scrollTop());
  
	  $('.people-fixed-mobile').css('transform', 'scale(' + mass + ')');
	});
});

const connection = document.getElementById('btn-light')

const further = document.getElementById('btn-further')

const items = [peopleMainMob, peopleFixMob, connection, further]

// for (let item of items) {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = item.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };

	

for (let item of items) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
};