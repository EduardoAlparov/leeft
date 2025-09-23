import gsap from 'gsap';

export const cursorControl = () => {
	const body = document.querySelector('body'),
        cursor = document.getElementById('cursor'),
        yellowSections = document.querySelectorAll('[data-section="yellow"]'),
        links  = document.getElementsByTagName('a');

	let mouseX = 0,
        mouseY = 0,
        posX = 0,
        posY = 0;

	function mouseCoords(e) {
		mouseX = e.pageX
		mouseY = e.pageY
	}

	gsap.to({}, .01, {
		repeat: -1,
		onRepeat: () => {
			posX += (mouseX - posX) / 6
			posY += (mouseY - posY) / 6

			gsap.set(cursor, {
				css: {
					left: posX,
					top: posY
				}
			})
		}
	})

	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
		})
		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
		})
	}

	for(let i = 0; i < yellowSections.length; i++) {
		yellowSections[i].addEventListener('mouseover', () => {
			cursor.classList.add('dark')
		})
		yellowSections[i].addEventListener('mouseout', () => {
			cursor.classList.remove('dark')
		})
	}

	body.addEventListener('mousemove', e => {
		mouseCoords(e)
		cursor.classList.remove('hidden')
	})

	body.addEventListener('mouseout', e => {
		cursor.classList.add('hidden')
	})

}
