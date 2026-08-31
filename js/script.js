////selected elements 
const topbar = document.querySelector('.topbar')
const hamburger = document.querySelector('.hamburger')
///app seleceted elements 
const app = document.getElementById('app')
const newMusicGrid = document.getElementById('newMusicGrid')
const sec = document.querySelectorAll('.sec')

const popularGrid = document.getElementById('popularGrid')
const seeMoreBtn = document.getElementById('seeMoreBtn')

const moodGrid = document.getElementById('moodGrid')
const pickRow = document.getElementById('pickRow')
const artistGrid = document.getElementById('artistGrid')
const trendList = document.getElementById('trendList')


// now playing selected elements
const nowPlaying = document.querySelector('.nowPlaying')
const nowPlayingCover = document.querySelector('.nowPlaying-cover')
const nowPlayingCaption = document.querySelector('.nowPlaying-caption')
const status_ = document.querySelector('.status')


// header bg chnage while scrolling  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*& _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_
addEventListener('scroll',()=>{
  let topbarHeight = topbar.clientHeight
  topbar.classList.toggle('is-scrolled', scrollY > topbarHeight)
})

// side nav open  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&
//default open
app.classList.remove('side-collapsed')
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

let popularMusic = musicArray.slice(0,5)
popularMusic.forEach((item)=>{
  cardGenerator(item,popularGrid)
})

let moodMusic = musicArray.slice(0,4)
moodMusic.forEach((item)=>{
  cardGenerator(item,moodGrid)
})
// card generator _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function cardGenerator(x,container){
  let trackCard = document.createElement('div')
     trackCard.classList.add('track-card')
     trackCard.setAttribute('data-id',x.id)
     trackCard.setAttribute('is-playing','false')
     trackCard.setAttribute('is-liked','false')
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

///applying to other sections
newMusicGrid.addEventListener('click',(e)=>{
  musicPlay(newMusicGrid,e)
  likingTheSong(newMusicGrid,e)

})

popularGrid.addEventListener('click',(e)=>{
  musicPlay(popularGrid,e)
  likingTheSong(popularGrid,e)

})

moodGrid.addEventListener('click',(e)=>{
  musicPlay(moodGrid,e)
  likingTheSong(moodGrid,e)
})

function musicPlay(container,e){
  let playBtn = e.target.closest('.playBtn')
  if(!playBtn) return
  let allCards = container.querySelectorAll('.track-card')
  let currentCard = playBtn.closest('.track-card')
  let sound = currentCard.querySelector('audio')
  let allSounds =container.querySelectorAll('.track-card>audio')

////play the music 
  allSounds.forEach((s)=>{
    let card = s.closest('.track-card')
    let playButton = card.querySelector('.playBtn')
    card.setAttribute('is-playing','false')
    if(s !== sound){
      s.pause()
        resetIcon(playButton)
    card.setAttribute('is-playing','false')
    }else{
      if(sound.paused){
        sound.play()
    card.setAttribute('is-playing','true')

         playButton.innerHTML=`
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
  `
      }else{
        sound.pause()
        resetIcon(playButton)
        }
    }
   
  })
 nowplaying(currentCard)
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
 let allCards = container.querySelectorAll('.track-card')
 let currentCard = likeBtn.closest('.track-card')
let temp = currentCard.getAttribute('is-liked')
  if(temp == 'true') currentCard.setAttribute('is-liked','false')
    else currentCard.setAttribute('is-liked','true')

  let newTemp = currentCard.getAttribute('is-liked')
  likeBtn.children[0].classList.toggle('likeFill', newTemp == 'true' )
}

// now playing function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function nowplaying(x){
let artist = x.querySelector('.track-artist')
 let trackName = x.querySelector('.track-title')
 let trackImg = x.querySelector('.songCover>img')
 nowPlayingCaption.children[0].innerText = artist.innerText
 nowPlayingCaption.children[1].innerText = trackName.innerText
 nowPlayingCover.innerHTML=`
 <img src="${trackImg.src}" class="w-full h-full object-contain rounded-lg">
 `
}


///check online offline  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&
let online_ = navigator.onLine
console.log(online_)
status_.classList.toggle('on-off-navigator',online_ == true)

///see more  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

seeMoreBtn.addEventListener('click',()=>{
  if(seeMoreBtn.innerText === 'See more'){
    let moreMusic = musicArray.slice(0,7)
    moreMusic.forEach((m)=>{
      cardGenerator(m,popularGrid)
    })
    seeMoreBtn.innerText = 'See less'
  }else{
    popularGrid.innerHTML =''
    popularMusic.forEach((p)=>{
      cardGenerator(p,popularGrid)
    })
    seeMoreBtn.innerText = 'See more'
  }
})

///  quick picks _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

let quickMuisc = musicArray.slice(0,7)
quickMuisc.forEach((item)=>{
 quickPickGenerator(item,pickRow)
})

function quickPickGenerator(item,container){
   let quickBlocks = document.createElement('div')
quickBlocks.classList.add('pick-card')
quickBlocks.setAttribute('data-id',item.id)
quickBlocks.setAttribute('is-playing','false')
quickBlocks.innerHTML=`
    <figure class="pick-cover cover-4 ">
    <img src="${item.imgSrc}" class="w-full h-full object-cover rounded-lg">
    </figure>
    <div class="pick-info">
      <div class="pick-title">${item.trackName}</div>
      <div class="pick-artist">${item.artist}</div>
    </div>
    <audio src="${item.src}"></audio>
`
container.appendChild(quickBlocks)
}



//// quick picks to -> now playing
function quickNowPlaying(x){
   
  let trackName = x.querySelector('.pick-title')
  let artist = x.querySelector('.pick-artist')
  let trackImg = x.querySelector('.pick-cover>img')

  nowPlayingCaption.children[0].innerText = artist.innerText
 nowPlayingCaption.children[1].innerText = trackName.innerText
 nowPlayingCover.innerHTML=`
 <img src="${trackImg.src}" class="w-full h-full object-contain rounded-lg">
 `
}


/////quick picks music play
pickRow.addEventListener('click',(e)=>{
  let pickedCard = e.target.closest('.pick-card')
    if(!pickedCard) return
    let sound = pickedCard.querySelector('audio')
    let allsounds = pickedCard.closest('#pickRow').querySelectorAll('audio')

    allsounds.forEach((s)=>{
    let pickedCard = s.closest('.pick-card')
    pickedCard.setAttribute('is-playing','false')
    if(s !== sound){
      s.pause()
    pickedCard.setAttribute('is-playing','false')
    }else{
      if(sound.paused){
        sound.play()
    pickedCard.setAttribute('is-playing','true')
      }else{
        sound.pause()
        }
    }
   
  })

quickNowPlaying(pickedCard)

})

/// Artists _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

let artists = musicArray.slice(0,6)
artists.forEach((a)=>{
  let artistCard = document.createElement('div')
  artistCard.classList.add('artist-card')
  artistCard.innerHTML=`
     <figure class="artist-photo cover-3 ">
     <img src="${a.imgSrc}" class="w-full h-full rounded-full object-cover">
     </figure>
    <div class="artist-name">${a.artist}</div>
    <div class="artist-tag">Artist</div>
  `
  artistGrid.appendChild(artistCard)
})