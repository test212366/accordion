let accordions
const accordionWrap = document.querySelector('.wrapper')


const contentData = [
	{
		id: 1,
		title: 'title One',
		content: 'content One'
	},
	{
		id: 2,
		title: 'title Two',
		content: 'content Two'
	},
	{
		id: 3,
		title: 'title One',
		content: 'content One'
	},
	{
		id: 4,
		title: 'title One',
		content: 'content One'
	},

]

const createTemplate = item => {
	return `
	<div class="accorfion-item">
			<div class="accorfion-item-title">${item.title}</div>
			<div class="accorfion-item-content">${item.content}</div>
	</div>
	`
}
const fillHtmlList = () => {
	contentData.forEach(item => {
		accordionWrap.innerHTML += createTemplate(item)
	})
	accordions = document.querySelectorAll('.accorfion-item')
}
fillHtmlList()

if (accordions) {
	for (item of accordions) {
		item.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active')
			} else {
				for (el of accordions) {
					el.classList.remove('active')
				}
				this.classList.add('active')
			}
		})
	}

}


