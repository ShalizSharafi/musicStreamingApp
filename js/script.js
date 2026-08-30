// // ///selected elements_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

// const headerTop = document.querySelector('.topHeader')
// const ham = document.querySelector('.ham')
// const side = document.querySelector('.side')
// const sec = document.querySelectorAll('.sec')
// const heroSection = document.getElementById('heroSection')
// const box = document.querySelector('.box')
// const card = document.querySelectorAll('.card')
// const carouselItems = document.querySelectorAll('.carouselItems')
// const right = document.querySelector('.rightClick')
// const left = document.querySelector('.leftClick')
// const seeMore = document.querySelector('.seemore')
// /////main selects  _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

// const newMusicCard = document.querySelectorAll('.newMusicCard')
// const popularSongs = document.querySelector('.popularSongs')
// const songfield = document.querySelectorAll('.songfield')
// const playingNow = document.querySelector('.playingNow')
// let flag = 1

// /////topHeader bg change while scrolling _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
// addEventListener('scroll',()=>{
//        let headerHeight = headerTop.clientHeight
//        headerTop.classList.toggle('header-bg', headerHeight < scrollY)
//         scrollY > 200 ? heroSection.style.backgroundColor='white' : heroSection.style.backgroundColor='black'
// })

// // /hamburger menu _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
// ham.addEventListener('click',()=>{
//        side.classList.toggle('sideClose')
//        sec.forEach((val)=>{
//               val.classList.toggle('secWide')
//        })
// })




// //////main//////_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --


// const musicArray = [
//         { id: '0',
//         artist: 'Charlie Puth',
//         trackName: 'Attention',
//         duration: '3:32',
//         src: './music/Charlie Puth Attention.mp3',
//        imgSrc:'./images/attention.jpeg'
//        },

//         { id: '1',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: './music/Delicate.mp3',
//        imgSrc:'./images/delicate.jpeg'
//        },
        
       
//        { id: '2',
//               artist: 'The Weeknd',
//               trackName: 'Blinding Lights',
//               duration: '3:20',
//               src: './music/The Weeknd Blinding Lights.mp3',
//               imgSrc:'./images/blindingLights.jpeg'
//        },
       
//        { id: '3',
//       artist: '5 Seconds of Summer',
//       trackName: 'Old Me',
//       duration: '3:05',
//       src: './music/Old Me.mp3',
//      imgSrc:'./images/oldme.jpeg'
//      },
//           { id: '4',
//         artist: 'Elton John',
//         trackName: 'The One',
//         duration: '6:04',
//         src: './music/The One.mp3',
//        imgSrc:'./images/attention.jpeg'
//        },

//           { id: '5',
//         artist: "Why Don't We",
//         trackName: 'Cold in LA',
//         duration: '3:26',
//         src: './music/Cold in LA .mp3',
//        imgSrc:'./images/attention.jpeg'
//        },

//           { id: '6',
//         artist: 'Charlie Puth',
//         trackName: 'Home',
//         duration: '3:45',
//         src: './music/Home.mp3',
//        imgSrc:'./images/home.jpg'
//        },

//           { id: '7',
//         artist: 'ABBA',
//         trackName: 'Dancing Queen',
//         duration: '3:53',
//         src: './music/ABBA – Dancing Queen.mp3'},

//           { id: '9',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '10',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '11',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '12',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '13',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '14',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},

//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
        
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//           { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'},
//          { id: '3',
//         artist: 'Taylor Swift',
//         trackName: 'Delicate',
//         duration: '3:52',
//         src: '../music/Delicate.mp3'}
// ]

// console.log(musicArray.length)

// ///on load data _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --
// document.addEventListener('DOMContentLoaded',()=>{
//        popular()
// })
// //on load data  _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --


// ////popular music_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

// function popular(){
//        let popularMusic = []
// popularMusic = musicArray.slice(0,8)

// let x = ''
// popularMusic.forEach((val,i)=>{
//        const visibility = i > 3 ? 'lg:hidden' : 'lg:flex'
//        const extraTag = i >3 ? 'extraTag' : ''
//        x+= `
//        <div class="card group duration-300 bg-green/5 overflow-hidden w-1/3 sm:w-1/4 lg:w-1/5  ${visibility} ${extraTag}" data-id="${val.id}">
//                             <figure class="w-full h-full   songCover rounded-[5px] group-hover:*:scale-[1.2] duration-300 cursor-pointer">
//                             <img src="${val.imgSrc}" alt="" class="w-full h-full object-cover  duration-500 rounded-[5px] object-center">
//                             </figure>
//                             <div class="overlay group-hover:h-0 group-hover:opacity-0 duration-300">
//                                     <div class="cardCaption rounded-[5px] content-center gap-2.5 h-1/2  backdrop-blur-2xl">
//                                    <h6 class="artist">${val.artist}</h6>
//                                    <h5 class="trackName text-green/70 [text-shadow:0_0_12px_rgba(204,197,185,0.3)] font-medium">${val.trackName}</h5>
//                             </div>
//                             </div>
//                             <div class="playBox backdrop-blur-2xl bg-black  duration-300 ">
//                                    <div class="play">
//                                           <i class="w-full h-full playButton flex items-center justify-center cursor-pointer">
//                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#403d39" class="size-4 lg:size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
// </svg>

//                                           </i>
//                                    </div>
//                             </div>
//                             <i class="favorite hidden absolute z-10 w-fit h-fit right-0 top-0 p-1 rounded-full">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ccc5b9" class="size-6 cursor-pointer">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
// </svg>

//                             </i>
//                             <audio src="${val.src}" class="audioLink"></audio>
//                      </div>
// `



// })
// songfield[1].innerHTML = x
// }

// seeMore.addEventListener('click',()=>{
//        const hiddenCards =songfield[1].querySelectorAll('.extraTag')
//         hiddenCards.forEach((one,i)=>{
//               if(flag % 2){
//               one.classList.add('lg:flex')
//               one.classList.remove('lg:hidden')
//               }else{
              
//               one.classList.remove('lg:flex')
//               one.classList.add('lg:hidden')
//               }
           
//        })
//           flag++
// })

// ////popular music _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --



// ////play the music (BTN) _______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --_______+++++++++++________+_++_+++_+_+_+_++_++_+<>?<?<?<?<?<?<?<?< --

// let currentAudio = null
// console.log(currentAudio)
// songfield.forEach((s)=>{
//        s.addEventListener('click',(e)=>{
//               let selected = e.target.closest('.play')
//               if (!selected) return 
              
//               let card = selected.closest('.card')
//               let audio = card.querySelector('.audioLink')
             

//               console.log(audio)
//               if(currentAudio && currentAudio !== audio) {
//                      audio.pause()
//               }

//               if(audio.paused){
//                      audio.play()
//                      selected.children[0].innerHTML=`<img src="./images/Music Equalizer.png" class="w-1/2 object-cover">`
//                      selected.children[0].classList.add('iconReset')
//               }else{
//                      audio.pause()
//                      resetPlayIcon(selected.children[0])
//                       selected.children[0].classList.remove('iconReset')
//               }

//               audio = currentAudio

            

//        })
// })


// function resetPlayIcon(btn){
//        btn.innerHTML = `
//        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#403d39" class="size-4 lg:size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
// </svg>
//        `
// }


// function likeSong(){
//        songfield.forEach((s)=>{
            
//               ///hovering to display the like btn
//               s.addEventListener('mouseover',(e)=>{
//                     let card = e.target.closest('.card')
//                     if (!card || card.contains(e.relatedTarget)) return
//                     let likeIcon = card.querySelector('.favorite')
//                     if(!likeIcon) return
//                     likeIcon.classList.add('likeIconShow')
                    
//               })

//               s.addEventListener('mouseout',(e)=>{
//               let card = e.target.closest('.card')
//                     if (!card || card.contains(e.relatedTarget)) return
//                     let likeIcon = card.querySelector('.favorite')
//                     if(!likeIcon) return
//                     likeIcon.classList.remove('likeIconShow')
//               })
//               ///click on the like btn
//                 s.addEventListener('click',(e)=>{
//                      let likeIcon = e.target.closest('.favorite')
//                      if(!likeIcon) return
//                      likeIcon.children[0].classList.toggle('likeIcon', flag%2)
//                     flag++
//               })
//        })
// }

// likeSong()

////selected elements 
const topbar = document.querySelector('.topbar')
const hamburger = document.querySelector('.hamburger')
const app = document.getElementById('app')
const newMusicGrid = document.getElementById('newMusicGrid')
const sec = document.querySelectorAll('.sec')

// header bg chnage while scrolling  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*& _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_
addEventListener('scroll',()=>{
  let topbarHeight = topbar.clientHeight
  topbar.classList.toggle('is-scrolled', scrollY > topbarHeight)
})

// side nav open  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

hamburger.addEventListener('click',()=>{
  app.classList.toggle('side-collapsed')
})
// main array _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

 const musicArray = [
        { id: '0',
        artist: 'Charlie Puth',
        trackName: 'Attention',
        duration: '3:32',
        src: './music/Charlie Puth Attention.mp3',
       imgSrc:'./images/attention.jpeg'
       },

        { id: '1',
        artist: 'Taylor Swift',
        trackName: 'Delicate',
        duration: '3:52',
        src: './music/Delicate.mp3',
       imgSrc:'./images/delicate.jpeg'
       },
        
       
       { id: '2',
              artist: 'The Weeknd',
              trackName: 'Blinding Lights',
              duration: '3:20',
              src: './music/The Weeknd Blinding Lights.mp3',
              imgSrc:'./images/blindingLights.jpeg'
       },
       
       { id: '3',
      artist: '5 Seconds of Summer',
      trackName: 'Old Me',
      duration: '3:05',
      src: './music/Old Me.mp3',
     imgSrc:'./images/oldme.jpeg'
     },
          { id: '4',
        artist: 'Elton John',
        trackName: 'The One',
        duration: '6:04',
        src: './music/The One.mp3',
       imgSrc:'./images/attention.jpeg'
       },

          { id: '5',
        artist: "Why Don't We",
        trackName: 'Cold in LA',
        duration: '3:26',
        src: './music/Cold in LA .mp3',
       imgSrc:'./images/attention.jpeg'
       },

          { id: '6',
        artist: 'Charlie Puth',
        trackName: 'Home',
        duration: '3:45',
        src: './music/Home.mp3',
       imgSrc:'./images/home.jpg'
       },

          { id: '7',
        artist: 'ABBA',
        trackName: 'Dancing Queen',
        duration: '3:53',
        src: './music/ABBA – Dancing Queen.mp3'}
          ]

let newMusic =musicArray.slice(0,6)
newMusic.forEach((item)=>{
     cardGenerator(item,newMusicGrid)
})


// card generator _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function cardGenerator(x,container){
  let trackCard = document.createElement('div')
     trackCard.classList.add('track-card')
     trackCard.setAttribute('data-id',x.id)
     trackCard.setAttribute('is-liked',false)
     trackCard.innerHTML=`
      <div class="cover" >
      <figure class="songCover">
      <img src="${x.imgSrc}" class="w-full h-full object-cover rounded-xl">
      </figure>
        <button class="likeBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.4-9.5 9-9.5 9z"/></svg>
        </button>
        <button class="playBtn cursor-pointer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>
        </button>
      </div>
      <div class="track-caption">
        <div class="track-title">${x.trackName}</div>
        <div class="track-artist">${x.artist}</div>
      </div>
      <audio src="${x.src}"></audio>
     `
    container.appendChild(trackCard)
}

// play the muisuc function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

newMusicGrid.addEventListener('click',(e)=>{
  musicPlay(newMusicGrid,e)
})

function musicPlay(container,e){
  let playBtn = e.target.closest('.playBtn')
  if(!playBtn) return
  let allCards = playBtn.closest('#newMusicGrid').querySelectorAll('.track-card')
  let currentCard = playBtn.closest('.track-card')
  // let cardId = Number(currentCard.getAttribute('data-id'))
  // let currentCardId = musicArray.find((m)=> m.id == cardId)
  let sound = currentCard.querySelector('audio')
  let allSounds = newMusicGrid.querySelectorAll('.track-card>audio')
  
  allSounds.forEach((s)=>{
    let card = s.closest('.track-card')
    let playButton = card.querySelector('.playBtn')

    if(s !== sound){
      s.pause()
        resetIcon(playButton)
    }else{
      if(sound.paused){
        sound.play()
         playButton.innerHTML=`
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
  `
      }else{
        sound.pause()
        resetIcon(playButton)
        }
    }
  })
}

function resetIcon(btn){
  btn.innerHTML=`
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>
  `
}


// like the muisuc function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function likingTheSong(container,e){
  let likeBtn = e.target.closest('.likeBtn')
 if(!likeBtn) return
 let allCards = likeBtn.closest('#newMusicGrid').querySelectorAll('.track-card')
 let currentCard = likeBtn.closest('.track-card')
let temp = currentCard.getAttribute('is-liked')
  if(temp == 'true') currentCard.setAttribute('is-liked','false')
    else currentCard.setAttribute('is-liked','true')

  let newTemp = currentCard.getAttribute('is-liked')
  likeBtn.children[0].classList.toggle('likeFill', newTemp == 'true' )
}

newMusicGrid.addEventListener('click',(e)=>{
 likingTheSong(newMusicGrid,e)
})