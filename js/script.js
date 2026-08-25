// ///selected elements

const headerTop = document.querySelector('.topHeader')
const ham = document.querySelector('.ham')
const side = document.querySelector('.side')
const sec = document.querySelectorAll('.sec')
const heroSection = document.getElementById('heroSection')
const box = document.querySelector('.box')
const card = document.querySelectorAll('.card')

/////topHeader bg change while scrolling
addEventListener('scroll',()=>{
       let headerHeight = headerTop.clientHeight
       headerTop.classList.toggle('header-bg', headerHeight < scrollY)
        scrollY > 200 ? heroSection.style.backgroundColor='white' : heroSection.style.backgroundColor='black'
})
// /hamburger menu
ham.addEventListener('click',()=>{
       side.classList.toggle('sideClose')
       sec.forEach((val)=>{
              val.classList.toggle('secWide')
       })
})


card.forEach((val)=>{
       val.setAttribute('data-h',val.closest('.sec').offsetTop)
       val.classList.add(val.getAttribute('data-effect'))
})
addEventListener('scroll',()=>{
       card.forEach((val)=>{
              let cardOffset = val.getAttribute('data-h')
              let scrollT = scrollY + (innerHeight -100 )
              if(scrollY > cardOffset) val.classList.remove(val.getAttribute('data-effect'))
       })
})


