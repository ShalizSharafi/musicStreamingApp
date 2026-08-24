///selected elements

const headerTop = document.querySelector('.topHeader')




/////topHeader bg change while scrolling
addEventListener('scroll',()=>{
       let headerHeight = headerTop.clientHeight
       headerTop.classList.toggle('header-bg', headerHeight < scrollY)
})