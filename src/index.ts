const menuBtn = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.menu-image img')

menuBtn.addEventListener('click', ()=>{
	menu.classList.add('menu-open')
})

closeBtn.addEventListener('click', ()=>{
	menu.classList.remove('menu-open')
})

console.log(closeBtn)