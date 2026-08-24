///selected elements

const headerTop = document.querySelector('.topHeader')
const ham = document.querySelector('.ham')
const side = document.querySelector('.side')
const sec = document.querySelectorAll('.sec')
const heroSection = document.querySelector('.heroSection')
const box = document.querySelector('.box')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
/////topHeader bg change while scrolling
addEventListener('scroll',()=>{
       let headerHeight = headerTop.clientHeight
       headerTop.classList.toggle('header-bg', headerHeight < scrollY)
})
///hamburger menu
ham.addEventListener('click',()=>{
       side.classList.toggle('sideClose')
       sec.forEach((val)=>{
              val.classList.toggle('secWide')
       })
})
const step = 45
let currentRotation =0
let targetRotation =0
let duration = 10000
let speed = 360 / duration
let paused = false
let lastTime = performance.now()
function carousel(time){
       let delta = time - lastTime
       lastTime = time
        if(!paused) targetRotation += speed * delta

        currentRotation += (targetRotation - currentRotation) * 0.1

        box.style.transform=`perspective(1000px) rotateY(${currentRotation}deg)`
      requestAnimationFrame(carousel)
}

heroSection.addEventListener('mouseenter',()=>{
       paused = true
})

heroSection.addEventListener('mouseleave',()=>{
       paused = false
})

requestAnimationFrame(carousel)

////drag to move the carousel

let startX = 0
let isDragging = false

const minimumDistance = 50

box.addEventListener('pointerdown',(e)=>{
       isDragging = true
       startX = e.clientX
       paused = true
       box.setPointerCapture(e.pointerId)
       box.style.cursor='grabbing'
})



box.addEventListener('pointerup',(e)=>{
       if(!isDragging) return
       isDragging = false
       const distance = e.clientX - startX
        
       if(Math.abs(distance) > minimumDistance){
              if(distance > 0){
                     targetRotation += step
              }else{
                     targetRotation -= step
              }
       }
       box.style.cursor = 'grab'
})

box.addEventListener('pointercancel',()=>{
        isDragging = false
    box.style.cursor = 'grab'
})