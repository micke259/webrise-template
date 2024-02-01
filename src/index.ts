import './index.scss'

const menuBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('dialog')
const closeBtn = document.querySelector('dialog .cross')


const nav = document.querySelector('.nav')

const office = document.querySelector('.office')

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

const officePlus = document.querySelector('.office-plus')
const officeMinus = document.querySelector('.office-minus')

const check = document.querySelector('.checkbox-wrapper')
const tick = document.querySelector('.tick')

const modalCheck = document.querySelector('.modal-checkbox-wrapper')
const modalTick = document.querySelector('.modal-tick')

console.log(modalCheck)

menuBtn.addEventListener('click', ()=>{
	menu.showModal()
})
closeBtn.addEventListener('click', ()=>{
	menu.close()
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
	tick.classList.toggle('tick-visible')
})

modalCheck.addEventListener('click', ()=>{
	modalTick.classList.toggle('modal-tick-visible')
})