import {playList} from './playList.js'
export const playBtn = document.querySelector('.player-btn');
export const playPrevBtn = document.querySelector('.play-prev');
export const playNextBtn = document.querySelector('.play-next');
export const playListContainer = document.querySelector('.play-list');

let isPlay = false;
export const audio = new Audio;
const lengthOfPlayList = playList.length;
let currentTrack = 0;
let currentTime = 0;

export function playOrPause() {
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('pause');
  if(isPlay) {
    isPlay = false;
    pause();
  } else {
    isPlay = true;
    play();
  }
}

function play() {
  audio.src = playList[currentTrack].src;
  audio.currentTime = currentTime;
  document.querySelectorAll('.play-list .item-active').forEach(e => e.classList.remove('item-active'));
  playListContainer.childNodes[currentTrack].classList.add('item-active');
  audio.play();
}

function pause() {
  currentTime = audio.currentTime;
  audio.pause();
}

export function playPrev() {
  audio.pause();
  currentTime = 0;
  if(currentTrack > 0) --currentTrack;
  else currentTrack = lengthOfPlayList - 1;
  !isPlay ? playOrPause() : play();
}

export function playNext() {
  audio.pause();
  currentTime = 0;
  if(currentTrack < lengthOfPlayList - 1) ++currentTrack;
  else currentTrack = 0;
  !isPlay ? playOrPause() : play();
}