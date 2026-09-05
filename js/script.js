////selected elements 
const topbar = document.querySelector('.topbar')
const hamburger = document.querySelector('.hamburger')

//////navbar main
const navBar = document.querySelector('.main-nav')
const navItems = document.querySelectorAll('.navItems')


/////side item

const homeLink = document.getElementById('homeLink')
const artistsLink = document.getElementById('artistsLink')

///searchbar
const inp = document.getElementById('inp')
const searchGrid = document.getElementById('searchSectionGrid')
const searchSection = document.getElementById('searchSection')

////slider
const heroSection = document.getElementById('hero')
const slide = document.querySelectorAll('.slide')
const preSlide = document.getElementById('slide-prev')
const nextSlide = document.getElementById('slide-next')
const dotsWrapper = document.getElementById('slide-dots')

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
const gif = document.querySelector('.gif')


///player bar selected elements 
const playerCover = document.getElementById('pb-cover')
const playerTilte = document.getElementById('pb-title')
const playerArtist = document.getElementById('pb-artist')
const  playerPlayBtn = document.getElementById('pb-play')
const  playerNext = document.getElementById('pb-next')
const  playerPrev = document.getElementById('pb-prev')
const playerElapsed = document.getElementById('pb-elapsed')
const playerDuration = document.getElementById('pb-duration')
const seekBar = document.getElementById('pb-bar')
const seekFill = document.getElementById('pb-bar-fill')
const playerImg = document.getElementById('playerImg')
let currentAudio = null
let currentContainer = null
const volBar = document.getElementById('vol-bar')
const volFill = document.getElementById('vol-fill')
const playerLikeBtn = document.getElementById('pb-like')
const playerBar = document.querySelector('.player-bar')

//////liked songs selected elekemet

const likedSection = document.getElementById('likedSection')
const likedGrid = document.getElementById('likedSectionGrid')
const likedSongsLink = document.getElementById('likedSongsLink')

//////playlist

const playlistsLink = document.getElementById('playlistsLink')
const playlistsSection = document.getElementById('playlistsSection')
const createPlaylistBtn = document.getElementById('createPlaylistBtn')
const playlistsGrid = document.getElementById('playlistsGrid')

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

//Navigation bar _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&
navBar.addEventListener('click',(e)=>{
  let selected = e.target.closest('.navItems')
  if(!selected) return
  navItems.forEach((i)=>i.classList.remove('is-active'))
  selected.classList.add('is-active')

   likedSection.classList.remove('is-visible')
  searchSection.classList.remove('is-visible')
  sec.forEach(section => section.style.display = '')
  heroSection.style.display = ''
})

// main array _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

 const musicArray = [
        { id: '0',
        artist: 'Charlie Puth',
        trackName: 'Cry',
        duration: '3:07',
        src: './music/cry.mp3',
       imgSrc:'./images/charlieputh1.jpg'
       },

        { id: '1',
        artist: 'The Kid Laroi',
        trackName: 'STAY',
        duration: '2:11',
        src: './music/stay.mp3',
       imgSrc:'./images/stay.jpg'
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
        artist: 'Taylor Swift',
        trackName: 'Cruel Summer',
        duration: '2:58',
        src: './music/Taylor Swift Cruel Summer.mp3',
       imgSrc:'./images/taylor1.webp'
       },

          { id: '5',
        artist: "Why Don't We",
        trackName: 'Cold in LA',
        duration: '3:27',
        src: './music/Cold in LA .mp3',
       imgSrc:'./images/cold.jpg'
       },

          { id: '6',
        artist: 'Charlie Puth',
        trackName: 'Attention',
        duration: '3:45',
        src: './music/Charlie Puth Attention.mp3',
       imgSrc:'./images/attention.jpeg'
       },

          { id: '7',
        artist: 'The 1975',
        trackName: 'Somebody Else',
        duration: '4:26',
        src: './music/the-1975-somebody-else_(get-tune.net).mp3',
      imgSrc:'./images/images (2).jpeg'},

         { id: '8',
        artist: 'Dan & Shay',
        trackName: 'Tequila',
        duration: '3:16',
        src: './music/ABBA – Dancing Queen.mp3',
      imgSrc:'./images/tequila.jpg'},

         { id: '9',
        artist: 'Eminem feat. Rihanna',
        trackName: 'Love The Way You Lie',
        duration: '4:23',
        src: './music/Eminem Love The Way You Lie Ft Rihanna.mp3',
      imgSrc:'./images/eminem.jpeg'},

         { id: '10',
        artist: 'Marc Anthony',
        trackName: 'When I Dream At Night',
        duration: '4:20',
        src: './music/Marc Anthony - When I Dream At Night.mp3',
      imgSrc:'./images/images (4).jpeg'},

         { id: '11',
        artist: 'Charlie Puth',
        trackName: 'Cheating on You',
        duration: '3:21',
        src: './music/Charlie Puth - Cheating on You [Official Video].mp3',
      imgSrc:'./images/home.jpg'},

        { id: '12',
        artist: 'Morgan Wallen',
        trackName:'Sand in My Boots',
        duration: '3:22',
        src: './music/Morgan-Wallen-Sand-in-My-Boots-320.mp3',
      imgSrc:'./images/morganw.jpeg'},

        { id: '13',
        artist: "Why Don't We",
        trackName: 'Falling',
        duration: '3:36',
        src: './music/Why Don t We - Fallin  (Adrenaline).mp3',
      imgSrc:'./images/whydont.jpeg'},
        

        { id: '14',
        artist: 'Charlie Puth',
        trackName: 'Smells Like Me',
        duration: '3:24',
        src: './music/Charlie Puth - Smells Like Me.mp3',
      imgSrc:'./images/covercharlie 2.JPG'},

       { id: '15',
        artist: 'Gracie Abrams',
        trackName: 'Mess it Up',
        duration: '2:52',
        src: './music/Gracie Abrams - Mess It Up (Official Video).mp3',
      imgSrc:'./images/gracie2.jpg'},

        { id: '16',
        artist: 'Taylor Swift',
        trackName: 'Call It What You Want',
        duration: '3:23',
        src: './music/Call it what you want.mp3',
      imgSrc:'./images/images (3).jpeg'},


        { id: '17',
        artist: 'USA For Africa',
        trackName: 'We are The World',
        duration: '7:07',
        src: './music/U.S.A.-for-Africa-We-Are-the-World-320.mp3',
      imgSrc:'./images/usafor.jpeg'},


        { id: '18',
        artist: 'Marc Anthony',
        trackName: 'You Sang To Me',
        duration: '5:47',
        src: './music/F833824 - Marc Anthony - You Sang To Me .mp3',
      imgSrc:'./images/marcanthony.jpeg'},


        { id: '19',
        artist: 'Elton John & George Micheal',
        trackName:"Don't Let The Sun Go Down On Me",
        duration: '5:47',
        src: './music/sun go down on me.mp3',
      imgSrc:'./images/eg.jpg'},

        { id: '20',
        artist: 'Chicago',
        trackName: 'If You Leave Me Now',
        duration: '3:56',
        src: './music/Chicago - If You Leave Me Now.mp3',
      imgSrc:'./images/chicago.jpeg'},

        { id: '21',
        artist: 'ABBA',
        trackName: 'Dancing Queen',
        duration: '3:53',
        src: './music/ABBA – Dancing Queen.mp3',
      imgSrc:'./images/dancingq.jpeg'},


        { id: '22',
        artist: 'Halsey,Khalid',
        trackName: 'Eastside',
        duration: '2:53',
        src: './music/eastside.mp3',
      imgSrc:'./images/east.jpeg'},


        { id: '23',
        artist: 'Charlie Puth',
        trackName: 'Loser',
        duration: '3:24',
        src: './music/Loser - Charlie Puth (320).mp3',
      imgSrc:'./images/charchar.JPG'},


        { id: '24',
        artist: 'The 1975',
        trackName: "It's Not Living if It's ...",
        duration: '4:08',
        src: './music/The 1975 - Its Not Living (If Its Not With You).mp3',
      imgSrc:'./images/notliving.png'},


        { id: '25',
        artist: 'Taylor Swift',
        trackName: 'August',
        duration: '4:21',
        src: './music/august.mp3',
      imgSrc:'./images/taylor4.avif'},

       { id: '26',
        artist: '5 Second Of Summer',
        trackName: 'Easier',
        duration: '2:37',
        src: './music/Easier CD 1 TRACK 1 (320).mp3',
      imgSrc:'./images/easier.png'},
        
      ]

let newMusic =musicArray.slice(0,8)
newMusic.forEach((item)=>{
     cardGenerator(item,newMusicGrid)
})

let popularMusic = musicArray.slice(5,20)
popularMusic.forEach((item)=>{
  cardGenerator(item,popularGrid)
})

let moodMusic = musicArray.slice(15,22)
moodMusic.forEach((item)=>{
  cardGenerator(item,moodGrid)
})
// card generator _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function cardGenerator(x,container){
  let trackCard = document.createElement('div')
     trackCard.classList.add('track-card')
     trackCard.setAttribute('data-id',x.id)
     trackCard.setAttribute('data-playing','false')
     trackCard.setAttribute('data-liked','false')
     trackCard.innerHTML=`
      <div class="cover" >
      <figure class="songCover">
      <img src="${x.imgSrc}" class="w-full h-full object-cover rounded-xl">
      </figure>
        <button class="likeBtn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.4-9.5 9-9.5 9z"/></svg>
        </button>
        <button class="playBtn cursor-pointer bg-black/80 ">
          <svg viewBox="0 0 24 24" fill="white"><path d="M7 5l13 7-13 7z"/></svg>
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


///////restoring liked songs

function restoreLikedSongs() {
  let liked = JSON.parse(localStorage.getItem('likedSongs')) || []

  document.querySelectorAll('.track-card, .trend-row').forEach(card => {
    let id = card.getAttribute('data-id')
    if (liked.includes(id)) {
      card.setAttribute('data-liked', 'true')
      let likeBtn = card.querySelector('.likeBtn')
      if (likeBtn) likeBtn.children[0].classList.add('likeFill')
    }
  })
  document.querySelectorAll('[data-save-hero]').forEach(btn => {
    let btnVal = Number(btn.getAttribute('data-save-hero'))
    let song = heroMusic[btnVal]
    if (song && liked.includes(song.id)) {
      btn.classList.add('is-liked')
      btn.children[0].classList.add('likeFill')
    }
  })
}



// play the muisuc function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

///applying to other sections
newMusicGrid.addEventListener('click',(e)=>{
  musicPlay(newMusicGrid,e,'.track-card')
  likingTheSong(newMusicGrid,e,'.track-card')
})

popularGrid.addEventListener('click',(e)=>{
  musicPlay(popularGrid,e,'.track-card')
  likingTheSong(popularGrid,e,'.track-card')
})

moodGrid.addEventListener('click',(e)=>{
  musicPlay(moodGrid,e,'.track-card')
  likingTheSong(moodGrid,e,'.track-card')
})

trendList.addEventListener('click',(e)=>{
  musicPlay(trendList,e,'.trend-row')
   likingTheSong(trendList,e,'.trend-row')
})

pickRow.addEventListener('click',(e)=>{
   musicPlay(pickRow,e,'.pick-card')
})

let currentCardSelector = null
let activeCard = null 

function musicPlay(container,e,cardSelector){
  let playBtn = e.target.closest('.playBtn')
  if(!playBtn) return
  currentCardSelector = cardSelector
  let allCards = container.querySelectorAll(cardSelector)
  let currentCard = playBtn.closest(cardSelector)
  if(!currentCard) return
  activeCard = currentCard
  updatePlayerBar(currentCard)

  let isLiked = currentCard.getAttribute('data-liked') === 'true'
  playerLikeBtn.classList.toggle('is-liked', isLiked)
  playerLikeBtn.children[0].classList.toggle('likeFill', isLiked)

  if(heroSound) heroSound.pause()

  let sound = currentCard.querySelector('audio')

  sound.addEventListener('timeupdate',()=>{
    // console.log(sound.currentTime)
    playerElapsed.innerText = formatTime(sound.currentTime)
    let percentage = ((sound.currentTime) / (sound.duration)) *100
    seekFill.style.width = `${percentage}%`
  })


if (sound.readyState >= 1) {
  // metadata already loaded
  playerDuration.innerText = formatTime(sound.duration)
} else {
  // not loaded yet . it waits but only listens once!
  sound.addEventListener('loadedmetadata', () => {
    playerDuration.innerText = formatTime(sound.duration)
  }, { once: true })
}


  currentAudio = sound
  sound.volume = currentVolume
  sound.addEventListener('ended',()=>{
    let allcards = currentContainer.querySelectorAll(currentCardSelector)
    let currentIndex = [...allcards].indexOf(activeCard)
    let nextIndex  = currentIndex + 1
    if(!allcards[nextIndex]) return
    let nextCard = allcards[nextIndex]
    let nextCardPlayBtn = nextCard.querySelector('.playBtn')
    nextCardPlayBtn.click()
  })
  currentContainer = container
  let allSounds =container.querySelectorAll(`${cardSelector} > audio`)

////play the music 
  allSounds.forEach((s)=>{
    let card = s.closest(cardSelector)
    let playButton = card.querySelector('.playBtn')
    card.setAttribute('data-playing','false')
    if(s !== sound){
      s.pause()
      s.currentTime = 0
        resetIcon(playButton)
    card.setAttribute('data-playing','false')
    }else{
      if(sound.paused){
         sound.play()
         card.setAttribute('data-playing','true')
         playButton.innerHTML=`
         <img src="./images/playGif.gif" class="w-full h-full object-cover">
           `
      }else{
        sound.pause()
        resetIcon(playButton)
        card.setAttribute('data-playing','false')
        }
    }
   
  })
  sound.paused ? pauseGif() : playGif()
  sound.paused ? pausePlayerPlayBtnIcon(playerPlayBtn) : playPlayerPlayBtnIcon(playerPlayBtn)
 nowplaying(currentCard)
}

///////format the time function 
function formatTime(seconds){
  let minutes = Math.floor(seconds / 60)
  let secs = Math.floor(seconds % 60)
  if(secs < 10) secs = '0'+ secs
  return `${minutes}:${secs}`
}



function resetIcon(btn){
  btn.innerHTML=`
  <svg viewBox="0 0 24 24" fill="white"><path d="M7 5l13 7-13 7z"/></svg>
  `
}


// like the muisuc function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function likingTheSong(container,e,selector){
  let likeBtn = e.target.closest('.likeBtn')
 if(!likeBtn) return
 let allCards = container.querySelectorAll(selector)
 let currentCard = likeBtn.closest(selector)
let temp = currentCard.getAttribute('data-liked')
  if(temp == 'true') currentCard.setAttribute('data-liked','false')
    else currentCard.setAttribute('data-liked','true')

  let newTemp = currentCard.getAttribute('data-liked')
  likeBtn.children[0].classList.toggle('likeFill', newTemp == 'true' )

    saveLikedSong(currentCard.getAttribute('data-id'), newTemp === 'true') 

}

// now playing function  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

function nowplaying(x){
  nowPlaying.classList.add('has-song')
   playerBar.classList.add('has-song')
let artist = x.querySelector('.track-artist')
 let trackName = x.querySelector('.track-title')
 let trackImg = x.querySelector('img')
 nowPlayingCaption.children[0].innerText = artist.innerText
 nowPlayingCaption.children[1].innerText = trackName.innerText

let oldImg = nowPlayingCover.querySelector('.nowPlayingImg')
  if(oldImg) oldImg.remove()

 let img = document.createElement('img')
 img.classList.add('nowPlayingImg')
 img.src= trackImg.src
 nowPlayingCover.appendChild(img)
}

function pauseGif(){
  gif.innerHTML=''
  gif.innerHTML=`
     <img src="./images/pauseGif.png" alt="" class="w-full h-full">
  `
}

function playGif(){
  gif.innerHTML=''
   gif.innerHTML=`
     <img src="./images/playGif.gif" alt="" class="w-full h-full">
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

let quickMuisc = musicArray.slice(20,26)
quickMuisc.forEach((item)=>{
 quickPickGenerator(item,pickRow)
})
/////generate quick picks

function quickPickGenerator(item,container){
   let quickBlocks = document.createElement('div')
quickBlocks.classList.add('pick-card')
quickBlocks.setAttribute('data-id',item.id)
quickBlocks.setAttribute('data-playing','false')
quickBlocks.innerHTML=`
    <figure class="pick-cover relative cover-4 ">
    <img src="${item.imgSrc}" class="w-full h-full object-cover rounded-lg">
     <button class="playBtn bottom-0 right-0 w-full h-full translate-0 bg-ink/80 rounded-none ">
          <svg viewBox="0 0 24 24" fill="white" class="size-6"><path d="M7 5l13 7-13 7z"/></svg>
        </button>
    </figure>
    <div class="pick-info">
      <div class="track-title">${item.trackName}</div>
      <div class="track-artist">${item.artist}</div>
    </div>
    <audio src="${item.src}"></audio>
`
container.appendChild(quickBlocks)
}

/// Artists _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

/////generate artists

let artists = musicArray.slice(14,22)
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

/// TRENDING _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&



let trendMusic = musicArray.slice(1,12)
trendMusic.forEach((val,i)=>{
  let trendRow = document.createElement('div')
  trendRow.classList.add('trend-row')
  trendRow.setAttribute('data-id',val.id)
  trendRow.innerHTML=`
   <span class="trend-rank text-[#F18602">0${i+1}</span>
      <figure class="trend-cover flex items-center justify-center overflow-hidden">
      <img src="${val.imgSrc}" class="w-full h-full object-cover">
        <button class="playBtn bottom-0 right-0 w-full h-full translate-0 bg-ink/80 rounded-none ">
          <svg viewBox="0 0 24 24" fill="white" class="size-6"><path d="M7 5l13 7-13 7z"/></svg>
        </button>
      </figure>
      <div class="trend-main">
        <div class="track-title">${val.trackName}</div>
        <div class="track-artist">${val.artist}</div>
      </div>
      <span class="trend-streams">
        <svg viewBox="0 0 24 24" fill="#F18602"><path d="M12 4C7.6 4 4 7.6 4 12h3c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-7C2 6.5 6.5 2 12 2s10 4.5 10 10v7c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h3c0-4.4-3.6-8-8-8z"/></svg>
       ${Math.floor(i*1.8+668)} M
      </span>
      <span class="trend-time">${val.duration}</span>
      <button class="likeBtn relative opacity-100! ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0112 5.5 5.5 5.5 0 0121.5 12c-2.5 4.4-9.5 9-9.5 9z"/></svg>
      </button>
      <span class="trend-more">⋯</span>
      <audio src="${val.src}"></audio>
  `
 
trendList.appendChild(trendRow)
})

////slider _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

let slideIndex = 0
let slideTimer = null
let slideDuration = 6000
restartAutoPlay()
function goToSlide(i){
  slide[slideIndex].classList.remove('is-active')
  allDots[slideIndex].classList.remove('is-active')
 slideIndex = i
  slide[slideIndex].classList.add('is-active')
  allDots[slideIndex].classList.add('is-active')
  restartAutoPlay()
}

function slideNext(){
  goToSlide((slideIndex + 1) % slide.length)
}
function slidePrevious(){
  goToSlide((slideIndex - 1 + slide.length) % slide.length)
}

preSlide.addEventListener('click', slidePrevious)
nextSlide.addEventListener('click',slideNext)

// the dots////
slide.forEach((s,i)=>{
  const d = document.createElement('div')
  d.className = 'dot' + (i === 0 ? ' is-active' : '')
  d.addEventListener('click',()=>goToSlide(i))
  dotsWrapper.appendChild(d)
})

const allDots = [...dotsWrapper.children]
console.log(allDots)

function restartAutoPlay(){
  clearTimeout(slideTimer)
   slideTimer = setTimeout(slideNext,slideDuration)
}

heroSection.addEventListener('mouseenter',()=>{
  clearTimeout(slideTimer)
})

heroSection.addEventListener('mouseleave',()=>{
  restartAutoPlay()
})

let heroMusic = musicArray.slice(14,17)

let heroBtns = document.querySelectorAll('[data-play-hero]')
let heroSound = null
let heroBtn = null
heroBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    let btnVal = Number(btn.getAttribute('data-play-hero'))
    let song = heroMusic[btnVal]
    if(heroSound && heroBtn === btnVal) {
      if(heroSound.paused){
        heroSound.play()
        playSlideIcon(btn)
      }else{
        heroSound.pause()
        resetSlideIcon(btn)
      }
      return
    }

    if(heroSound) heroSound.pause()
    pauseAllGridSounds()
    heroSound = new Audio(song.src)
    heroSound.play()
    heroBtn = btnVal
    heroNowPlaying(song)
    playSlideIcon(btn)
         
  })
})

let heroSaveBtns = document.querySelectorAll('[data-save-hero]')
heroSaveBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let btnVal = Number(btn.getAttribute('data-save-hero'))
    let song = heroMusic[btnVal]

    let liked = JSON.parse(localStorage.getItem('likedSongs')) || []
    let isLiked = liked.includes(song.id)

    saveLikedSong(song.id, !isLiked)
    btn.classList.toggle('is-liked', !isLiked)
    btn.children[0].classList.toggle('likeFill', !isLiked)
  })
})

///////NOW PLAYING FOR HERO SECTION 
function heroNowPlaying(song){
  nowPlaying.classList.add('has-song')
   playerBar.classList.add('has-song')
  nowPlayingCaption.children[0].innerText = song.artist
  nowPlayingCaption.children[1].innerText = song.trackName

  let oldImg = nowPlayingCover.querySelector('.nowPlayingImg')
  if(oldImg) oldImg.remove()



  let img = document.createElement('img')
  img.classList.add('nowPlayingImg')
  img.src = song.imgSrc
  nowPlayingCover.appendChild(img)
}

function pauseAllGridSounds(){
  document.querySelectorAll('audio').forEach((a)=>a.pause())
}

const heroImages=['./images/piano.jpg','./images/gr.avif','./images/taylor13.jpeg']

heroMusic.forEach((song,i)=>{
  let selectedSlide = document.querySelector(`.slide[data-slide="${i}"]`)
  let title = selectedSlide.querySelector('.slide-title')
  let artImg = selectedSlide.querySelector('.artImg')

  title.innerText = song.artist
  artImg.src=heroImages[i]
  artImg.style.objectPosition='center'
  console.log(selectedSlide)
})


function playSlideIcon(x){
  x.children[0].outerHTML = `<img src="./images/Music Equalizer.png" class="slide-play-icon">`
}

function resetSlideIcon(x){
  x.children[0].outerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5l13 7-13 7z"/></svg>`
}


////search bar  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&

inp.addEventListener('input',(e)=>{
  let record = e.target.value.trim().toLowerCase()
  console.log('typing detected')

  let result = musicArray.filter((song)=>
    song.trackName.toLowerCase().includes(record) ||
    song.artist.toLowerCase().includes(record)
  )
console.log(result)
console.log(searchGrid)
  if(record === ''){
   searchSection.classList.remove('is-visible')
  sec.forEach((section)=> {
    if (section !== searchSection) section.style.display = ''
  })
  heroSection.style.display = ''
  } else {
   searchSection.classList.add('is-visible')
  sec.forEach((section)=> {
    if (section !== searchSection) section.style.display = 'none'
  })
  heroSection.style.display='none'

  searchGrid.innerHTML=''
  result.forEach((r) => cardGenerator(r, searchGrid))  }
})

searchGrid.addEventListener('click',(e)=>{
  musicPlay(searchGrid,e,'.track-card')
  likingTheSong(searchGrid,e,'.track-card')
})

////PLAYER BAR  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&  _+_+_+_+_+_+_+_++_+_+_++_+_+_+_+_+)_()&(&*)_(*)(^*&*)_^*&


function updatePlayerBar(card) {

   let cardImg = card.querySelector('img')
   let cardTitle = card.querySelector('.track-title')
   let cardArtist = card.querySelector('.track-artist')

   playerArtist.innerText = cardArtist.innerText
   playerTilte.innerText = cardTitle.innerText
   playerImg.src= cardImg.src

}


//////seekbar
let isDragging = false
seekBar.addEventListener('click',(e)=>{
  let rect = seekBar.getBoundingClientRect()
  let clickX = e.clientX - (rect.left)
  let percentage = clickX / rect.width

  currentAudio.currentTime = percentage * (currentAudio.duration)
})


let wasPlaying = false
seekBar.addEventListener('mousedown',(e)=>{
  if(! currentAudio) return
  isDragging = true
  // console.log('is dragging')
  if (currentAudio.paused) {
    wasPlaying = false
    playPlayerPlayBtnIcon(playerPlayBtn)

} else {
    wasPlaying = true
    pausePlayerPlayBtnIcon(playerPlayBtn)
}
  currentAudio.pause()
 pauseGif() 
})

seekBar.addEventListener('mousemove',(e)=>{
  if(! isDragging) return
  let rect = seekBar.getBoundingClientRect()
  let clickX = e.clientX - (rect.left)
  
  let percentage = clickX / rect.width

  currentAudio.currentTime = percentage * currentAudio.duration
})

seekBar.addEventListener('mouseup',(e)=>{
   if (!currentAudio) return
    isDragging = false

   if (wasPlaying) {
      currentAudio.play()
      playPlayerPlayBtnIcon(playerPlayBtn)
    } else {
      pausePlayerPlayBtnIcon(playerPlayBtn)
    }

})


/////player btns

playerPlayBtn.addEventListener('click',(e)=>{
  if(! currentAudio) return
    let cardPlayBtn = activeCard ? activeCard.querySelector('.playBtn') : null
  // currentAudio.paused ? currentAudio.play() : currentAudio.pause()
  let currentCard = currentContainer.querySelector('[data-playing="true"]')
  if(currentAudio.paused){
    currentAudio.play()
    playPlayerPlayBtnIcon(playerPlayBtn)
     playGif()
     if(activeCard){
      activeCard.setAttribute('data-playing','true')
      cardPlayBtn.innerHTML = `<img src="./images/playGif.gif" class="w-full h-full object-cover">`
    }
  }else{
    currentAudio.pause()
    pausePlayerPlayBtnIcon(playerPlayBtn)
      pauseGif()
    if(activeCard){
      activeCard.setAttribute('data-playing','false')
      resetIcon(cardPlayBtn)
    }
  }
})


function pausePlayerPlayBtnIcon(x){
  x.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 9H11V15H9V9ZM13 9H15V15H13V9Z"></path></svg>
  `
}
function playPlayerPlayBtnIcon(x){
  x.innerHTML = `
  <svg id="pb-play-icon" viewBox="0 0 24 24" fill="black"><path d="M7 5l13 7-13 7z"/></svg>
  `
}

/////player previous and next btns

playerNext.addEventListener('click',(e)=>{
  let allCards = currentContainer.querySelectorAll(currentCardSelector)
  let currentCard = currentContainer.querySelector('[data-playing="true"]')
  let currentIndex = [...allCards].indexOf(activeCard)
  let nextIndex = currentIndex + 1
  let nextCard = allCards[nextIndex]
  if (!allCards[nextIndex]) return
  nextCard.querySelector('.playBtn').click()
})

playerPrev.addEventListener('click',(e)=>{
  let allcards = currentContainer.querySelectorAll(currentCardSelector)
  let currentIndex = [...allcards].indexOf(activeCard)
  let previousIndex = currentIndex - 1

  if(!allcards[previousIndex]) return
  allcards[previousIndex].querySelector('.playBtn').click()
})

//////volume bar 
let currentVolume = 1
let isVolDragging = false
volBar.addEventListener('mousedown',(e)=>{
  if(!currentAudio) return
  isVolDragging = true
})

volBar.addEventListener('mousemove',(e)=>{
  if(!isVolDragging) return
  if(!currentAudio) return

  let rect = volBar.getBoundingClientRect()
  let clickX = e.clientX - (rect.left)
  let percentage = Math.max(0, Math.min(1, clickX / rect.width))


  currentVolume = percentage
  currentAudio.volume = currentVolume
  volFill.style.width = `${percentage * 100}%`
})

volBar.addEventListener('mouseup',(e)=>{
  isVolDragging = false
})

volBar.addEventListener('click',(e)=>{
  if(!currentAudio) return

  let rect = volBar.getBoundingClientRect()
  let clickX = e.clientX - rect.left
  let percentage = Math.max(0, Math.min(1, clickX / rect.width))

  currentVolume = percentage
  currentAudio.volume = currentVolume
  volFill.style.width = `${percentage * 100}%`
})


playerLikeBtn.addEventListener('click',()=>{
  if(!activeCard) return

  let temp = activeCard.getAttribute('data-liked')
  let newVal = temp === 'true' ? 'false' : 'true'
  activeCard.setAttribute('data-liked', newVal)

  playerLikeBtn.classList.toggle('is-liked', newVal === 'true')
  playerLikeBtn.children[0].classList.toggle('likeFill', newVal === 'true')

  let cardLikeBtn = activeCard.querySelector('.likeBtn')
  if (cardLikeBtn) {
    cardLikeBtn.children[0].classList.toggle('likeFill', newVal === 'true')
  }

    saveLikedSong(activeCard.getAttribute('data-id'), newVal === 'true')   

})

function saveLikedSong(id, isLiked) {
  let liked = JSON.parse(localStorage.getItem('likedSongs')) || []

  if (isLiked) {
    if (!liked.includes(id)) liked.push(id)
  } else {
    liked = liked.filter(likedId => likedId !== id)
  }

  localStorage.setItem('likedSongs', JSON.stringify(liked))
}



restoreLikedSongs()


///////liked song playlist

likedSongsLink.addEventListener('click',(e)=>{
  e.preventDefault()

  let likedIds = JSON.parse(localStorage.getItem('likedSongs')) || []
let likedSongsData = musicArray.filter(song => likedIds.includes(song.id))

  likedGrid.innerHTML = ''
  likedSongsData.forEach((s)=>cardGenerator(s, likedGrid))
  restoreLikedSongs()
  likedSection.classList.add('is-visible')
  searchSection.classList.remove('is-visible')

  sec.forEach((s)=>{
    if(s !== likedSection) s.style.display='none'
  })
   heroSection.style.display = 'none'
})

likedGrid.addEventListener('click',(e)=>{
  musicPlay(likedGrid,e,'.track-card')
  likingTheSong(likedGrid,e,'.track-card')
})

//////side bar

homeLink.addEventListener('click',(e)=>{
  e.preventDefault()
  likedSection.classList.remove('is-visible')
  searchSection.classList.remove('is-visible')

  sec.forEach((s)=>{
    s.style.display=''
  })

  heroSection.style.display=''
})

artistsLink.addEventListener('click',(e)=>{
  e.preventDefault()
  likedSection.classList.remove('is-visible')
  heroSection.classList.remove('is-visible')

  sec.forEach((s)=>{
    s.style.display=''
  })
  heroSection.style.display=''

  setTimeout(() => {
     document.getElementById('artists').scrollIntoView({ behavior: 'smooth' })
  }, 0);
})

