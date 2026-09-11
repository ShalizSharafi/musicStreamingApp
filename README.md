# Wave 🎵

<table>
   <tr>
    <td>
  <img width="500"  alt="screencapture-file-Users-shaliz-Downloads-Front-End-githubProjects-music-palyer-app-src-index-html-2026-09-05-19_42_27" src="https://github.com/user-attachments/assets/27eb8506-e61b-4fe3-b9f5-a7deca6e8a9d" />
    </td>
  </tr>
</table>
<table>
   <tr>
    <td>
 <img width="500"  alt="screencapture-file-Users-shaliz-Downloads-Front-End-githubProjects-music-palyer-app-src-index-html-2026-09-05-19_42_52" src="https://github.com/user-attachments/assets/666865a5-ca46-48e1-95b5-a48181b429da" />
    </td>
       <td>
         <img width="500"  alt="screencapture-file-Users-shaliz-Downloads-Front-End-githubProjects-music-palyer-app-src-index-html-2026-09-05-19_43_53" src="https://github.com/user-attachments/assets/cccf991e-66d9-4642-bf7b-fe0ecc5f9097" />
    </td>
  </tr>
</table>

**[▶ Live Demo](https://shalizsharafi.github.io/musicStreamingApp/)**





A fully interactive, front-end music player web app built with vanilla HTML, CSS (Tailwind), and JavaScript. Wave lets you browse songs across multiple curated sections, search your library, like tracks, and control playback from a persistent, Spotify-style player bar — with everything you like saved across sessions via `localStorage`.

No frameworks, no backend — just DOM manipulation, the native `Audio` API, and `localStorage`.

## Features

### 🎧 Playback
- Play/pause, skip next/previous, and seek within any track
- One song plays at a time — starting a new track anywhere automatically stops whatever else is playing
- Draggable seek bar and volume slider
- Elapsed time / total duration display
- Auto-advances to the next track in its section when a song finishes

### 🏠 Hero Slider
- Auto-rotating carousel with a real-time progress indicator on each dot
- Pauses on hover, resumes on mouse leave
- Manual navigation via arrows or dots
- Each slide can be played, paused, liked, and skipped — fully integrated with the main player bar
- Player bar Next/Prev cycles through hero slides when a hero track is active

### 🔍 Search
- Live filtering across the entire song library by title or artist
- Replaces the homepage with a dedicated results view; clears automatically when the search box is emptied

### ❤️ Liked Songs
- Like any track from its card, its row, the hero slider, or the player bar — all stay in sync
- Liked state is saved to `localStorage` and restored on page reload
- Dedicated "Liked Songs" view accessible from the sidebar, built dynamically from your saved likes

### 🧭 Navigation
- Sidebar links for Home, Artists, and Liked Songs correctly reset any active view (search/liked) before navigating
- Smooth-scrolls to in-page sections like Artists

### 🎨 Sections
- New Music, Popular Songs (with "See more/less"), Trending, Mood-based picks, Quick Picks, and Artists — all generated dynamically from a single song data array

## Tech Stack

- **HTML5** — semantic structure, native `<audio>` elements
- **CSS** — [Tailwind CSS](https://tailwindcss.com/) v4 (utility classes via `@apply`)
- **JavaScript (Vanilla)** — no frameworks or libraries; all DOM manipulation, audio control, and state handled by hand
- **localStorage** — persists liked songs across sessions

## Project Structure

```
├── index.html
├── js/
│   └── script.js
├── stylesheet/
│   └── out.css        # compiled Tailwind output
├── images/             # cover art, avatars, icons
└── music/              # audio files
```

## Getting Started

1. Clone the repo
   ```bash
   git clone <your-repo-url>
   cd wave
   ```
2. Add your own audio files to `/music` and cover images to `/images`, then update the `musicArray` in `js/script.js` with matching entries (`id`, `artist`, `trackName`, `duration`, `src`, `imgSrc`).
3. If you edit any Tailwind classes, rebuild the CSS:
   bash
   npx tailwindcss -i ./input.css -o ./stylesheet/out.css --watch
   
4. Open `index.html` in a browser (or serve it with a local dev server) — no build step required for the JS itself.

## How It Works (Notable Implementation Details)

- **One shared `currentAudio` reference** drives the player bar, regardless of whether a grid song or a hero song is playing — this keeps play/pause, seek, duration, and like state consistent across the whole app instead of maintaining separate systems.
- **`data-*` attributes** (`data-id`, `data-playing`, `data-liked`) on each card act as the source of truth for that card's state, kept in sync with the DOM and `localStorage`.
- **Reusable core functions** (`musicPlay`, `likingTheSong`, `cardGenerator`) are parameterized by container and selector, so the same logic powers every grid, the trending list, search results, and the liked songs view without duplication.
- **View switching** (Home / Search / Liked Songs) is handled by toggling a shared `is-visible` class alongside inline `display` resets, ensuring no view is left in a stale hidden state when another is opened.

## License

This project is for personal/educational use. Replace with your preferred license if publishing.
