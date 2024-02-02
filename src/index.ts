import './index.scss'

const menuBtn = document.querySelector<HTMLButtonElement>('.burger-menu')
const modal = document.querySelector<HTMLDialogElement>('.modal')
const closeBtn = document.querySelector<SVGElement>('.modal .cross')


const nav = document.querySelector<HTMLDivElement>('.nav')

const office = document.querySelector<HTMLDivElement>('.office')

const minus = document.querySelector<SVGElement>('.minus')
const plus = document.querySelector<SVGElement>('.plus')

const officePlus = document.querySelector<SVGElement>('.office-plus')
const officeMinus = document.querySelector<SVGElement>('.office-minus')

const check = document.querySelector<HTMLDivElement>('.checkbox-wrapper')
const tick = document.querySelector<SVGElement>('.checkbox__tick')

const modalCheck = document.querySelector<HTMLDivElement>('.modal-checkbox-wrapper')
const modalTick = document.querySelector<SVGElement>('.modal-tick')

menuBtn.addEventListener('click', ()=>{
	modal.showModal()
})
closeBtn.addEventListener('click', ()=>{
	modal.close()
})

modal.addEventListener("click",e=>{
	const modalDismensions = modal.getBoundingClientRect()
	const closeCondition =
		e.clientX < modalDismensions.left || 
		e.clientX > modalDismensions.right ||
		e.clientY < modalDismensions.top || 
		e.clientY > modalDismensions.bottom;
	if(closeCondition){modal.close()}
})


plus.addEventListener('click', ()=>{
	nav.classList.add('nav-open')
	plus.classList.add('plus-open')
	minus.classList.add('minus-open')
})

minus.addEventListener('click', ()=>{
	plus.classList.remove('plus-open')
	nav.classList.remove('nav-open')
	minus.classList.remove('minus-open')
})

officePlus.addEventListener('click', ()=>{
	office.classList.add('office-open')
	officePlus.classList.add('office-plus-open')
	officeMinus.classList.add('office-minus-open')
})

officeMinus.addEventListener('click', ()=>{
	officePlus.classList.remove('office-plus-open')
	office.classList.remove('office-open')
	officeMinus.classList.remove('office-minus-open')
})

check.addEventListener('click', ()=>{
	tick.classList.toggle('checkbox__tick-visible')
})

modalCheck.addEventListener('click', ()=>{
	modalTick.classList.toggle('modal-tick-visible')
})