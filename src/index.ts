const menuBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu-wrapper')
const closeBtn = document.querySelector('.menu-image img')

const nav = document.querySelector('.nav')

const office = document.querySelector('.office')

const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

const officePlus = document.querySelector('.office-plus')
const officeMinus = document.querySelector('.office-minus')

menuBtn.addEventListener('click', ()=>{
	menu.classList.add('menu-open')
})
closeBtn.addEventListener('click', ()=>{
	menu.classList.remove('menu-open')
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


console.log(minus)