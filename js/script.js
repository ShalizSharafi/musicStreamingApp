// ///selected elements_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

const headerTop = document.querySelector('.topHeader')
const ham = document.querySelector('.ham')
const side = document.querySelector('.side')
const sec = document.querySelectorAll('.sec')
const heroSection = document.getElementById('heroSection')
const box = document.querySelector('.box')
const card = document.querySelectorAll('.card')
const carouselItems = document.querySelectorAll('.carouselItems')
const right = document.querySelector('.rightClick')
const left = document.querySelector('.leftClick')
/////main selects  _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

const newMusicCard = document.querySelectorAll('.newMusicCard')
const popularSongs = document.querySelector('.popularSongs')
const songfield = document.querySelectorAll('.songfield')

/////topHeader bg change while scrolling _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
addEventListener('scroll',()=>{
       let headerHeight = headerTop.clientHeight
       headerTop.classList.toggle('header-bg', headerHeight < scrollY)
        scrollY > 200 ? heroSection.style.backgroundColor='white' : heroSection.style.backgroundColor='black'
})

// /hamburger menu _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
ham.addEventListener('click',()=>{
       side.classList.toggle('sideClose')
       sec.forEach((val)=>{
              val.classList.toggle('secWide')
       })
})

///card effects_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
card.forEach((val)=>{
       val.setAttribute('data-h',val.closest('.sec').offsetTop)
       val.classList.add(val.getAttribute('data-effect'))
})
addEventListener('scroll',()=>{
       card.forEach((val)=>{
              let cardOffset = val.getAttribute('data-h')
              let scrollT = scrollY + (innerHeight - 100 )
              if(scrollY > cardOffset) val.classList.remove(val.getAttribute('data-effect'))
       })
})

// carousel _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --


const position = [
  { transform: 'perspective(var(--persp)) translateZ(calc(var(--depth) * -1))', origin: 'center' },
  { transform: 'perspective(var(--persp)) rotateY(140deg)', origin: 'left'},
  { transform: 'perspective(var(--persp)) rotateY(-140deg)', origin: 'right', },
];

console.log(position[1].transform)
function positioning(){
       carouselItems.forEach((val,i)=>{
              let temp = Number(val.getAttribute('data-index'))
       val.style.transform = position[temp].transform
       val.style.transformOrigin = position[temp].origin
       val.style.zIndex = position[temp].z
       })
}

function updateIndex(direction){
       carouselItems.forEach((val)=>{
              let temp = Number(val.getAttribute('data-index'))
              temp += direction === 'left' ? 1 : -1
              if(temp > 2) temp = 0
              if(temp < 0) temp = 2

              val.setAttribute('data-index',temp)
       })
       positioning()
}

right.addEventListener('click',()=>updateIndex('right'))
left.addEventListener('click',()=>updateIndex('left'))

positioning()


//////main//////_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --


const musicArray = [
        { id: '1',
        artist: 'Charlie Puth',
        trackName: 'Attention',
        duration: '3:32',
        src: './music/Charlie Puth Attention.mp3',
       imgSrc:'./images/attention.jpeg'
       },

        { id: '2',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: './music/Delicate.mp3',
       imgSrc:'./images/delicate.jpeg'
       },
        
         { id: '3',
        artist: '5 Seconds of Summer',
        trackName: 'Old Me',
        duration: '3:05',
        src: './music/Old Me.mp3',
       imgSrc:'./images/oldme.jpeg'
       },

          { id: '4',
        artist: 'The Weeknd',
        trackName: 'Blinding Lights',
        duration: '3:20',
        src: './music/The Weeknd Blinding Lights.mp3',
       imgSrc:'./images/blindingLights.jpeg'
       },

          { id: '5',
        artist: 'Elton John',
        trackName: 'The One',
        duration: '6:04',
        src: './music/The One.mp3',
       imgSrc:'./images/attention.jpeg'
       },

          { id: '6',
        artist: "Why Don't We",
        trackName: 'Cold in LA',
        duration: '3:26',
        src: './music/Cold in LA .mp3',
       imgSrc:'./images/attention.jpeg'
       },

          { id: '7',
        artist: 'Charlie Puth',
        trackName: 'Home',
        duration: '3:45',
        src: './music/Home.mp3',
       imgSrc:'./images/home.jpg'
       },

          { id: '8',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '9',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '10',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '11',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '12',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '13',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '14',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},

          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
        
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
          { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'},
         { id: '3',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: '../music/Delicate.mp3'}
]

console.log(musicArray.length)

///on load data _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
document.addEventListener('DOMContentLoaded',()=>{
       popular()
})
//on load data  _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --


////popular music_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

function popular(){
       let popularMusic = []
popularMusic = musicArray.slice(0,4)

let x = ''
popularMusic.forEach((val)=>{
       x+= `
       <div class="card group duration-300 bg-green/5 overflow-hidden" data-id="${val.id}">
                            <figure class="w-full h-full   songCover rounded-[5px] group-hover:*:scale-[1.2] duration-300 cursor-pointer">
                            <img src="${val.imgSrc}" alt="" class="w-full h-full object-cover  duration-500 rounded-[5px] ">
                            </figure>
                            <div class="overlay group-hover:h-0 group-hover:opacity-0 duration-300">
                                    <div class="cardCaption rounded-[5px] content-center gap-2.5 h-1/2  backdrop-blur-2xl">
                                   <h6 class="artist">${val.artist}</h6>
                                   <h5 class="trackName text-green/70 [text-shadow:0_0_12px_rgba(204,197,185,0.3)] font-medium">${val.trackName}</h5>
                            </div>
                            </div>
                            <div class="playBox backdrop-blur-2xl bg-black  duration-300 ">
                                   <div class="play">
                                          <i class="w-full h-full playButton flex items-center justify-center cursor-pointer">
                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#403d39" class="size-4 lg:size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

                                          </i>
                                   </div>
                            </div>
                            <audio src="${val.src}" class="audioLink"></audio>
                     </div>
`
})
songfield[1].innerHTML = x
}
////popular music _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --



////play the music (BTN) _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

let currentAudio = null
console.log(currentAudio)
songfield.forEach((s)=>{
       s.addEventListener('click',(e)=>{
              let selected = e.target.closest('.play')
              if (!selected) return 
              
              let card = selected.closest('.card')
              let audio = card.querySelector('.audioLink')
             

              console.log(audio)
              if(currentAudio && currentAudio !== audio) {
                     audio.pause()
              }

              if(audio.paused){
                     audio.play()
                     selected.children[0].innerHTML=`<img src="./images/Music Equalizer.png" class="w-1/2 object-cover">`
                     selected.children[0].classList.add('iconReset')
              }else{
                     audio.pause()
                     resetPlayIcon(selected.children[0])
                      selected.children[0].classList.remove('iconReset')
              }

              audio = currentAudio

       })
})


function resetPlayIcon(btn){
       btn.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#403d39" class="size-4 lg:size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
       `
}