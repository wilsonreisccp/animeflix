data = {
  "dragon_ball_z": [
    "DRAGON BALL Z",
    "Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho.",
    "https://youtu.be/yWgWhuN8wc4",
    "dragon_ball_z_banner.jpg"
  ],
  "attack_on_titan2": [
    "ATAQUE DOS TITÃS",
    "Esse é só para ADULTOS... hahaha",
    "https://youtu.be/yHzLwE3_v4I",
    "attack_on_titan_b.png"
  ],
  "bleach": [
    "BLEACH",
    "",
    "",
    "bleach_b.jpg"
  ],
  "demon_slayer": [
    "DEMON SLAYER",
    "",
    "",
    "demon_slayer_b.png"
  ],
  "dr_stone": [
    "DR. STONE",
    "",
    "",
    "dr_stone_b.jpg"
  ],
  "my_hero_academia": [
    "MY HERO ACADEMIA",
    "",
    "",
    "my_hero_b.png"
  ],
  "fairy_tail": [
    "FAIRY TAIL",
    "",
    "",
    "fairy_tail_b.jpg"
  ],
  "fullmetal_alchemist_brotherhood": [
    "FULLMETAL ALCHEMIST BROTHERHOOD",
    "",
    "",
    "full_a_b.png"
  ],
  "jujutsu_kaisen": [
    "JUJUTSU KAISEN",
    "",
    "",
    "jujutsu_b.png"
  ],
  "hunter_x_hunter": [
    "HUNTER X HUNTER",
    "",
    "",
    "hunter_x_hunter_b.jpg"
  ],
  "naruto_shippuden": [
    "NARUTO SHIPPUDEN",
    "",
    "",
    "naruto_s_b.jfif"
  ]
}



var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, cueRangeIndex = 0, cueRangeStart = null, inCueRange = false;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'tu0qtEwb9gE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  player.addEventListener("onCueRangeEnter", onCueRangeEnter);
  player.addEventListener("onCueRangeExit", onCueRangeExit);
}

function onPlayerStateChange(event) {
  console.log(event);
  if (event.data === 1 && cueRangeStart !== null && !inCueRange)
    event.target.seekTo(cueRangeStart);
}

function stopVideo() {
  player.stopVideo();
}

function onCueRangeEnter(event) {
  console.log("onCueRangeEnter", event);
  document.getElementById("event").textContent = "Entered Cue Range -> " + event.data + " -> " + event.target.getCurrentTime();
  if (event.data === "range" + cueRangeIndex)
    inCueRange = true;
}

function onCueRangeExit(event) {
  console.log("onCueRangeExit", event);
  document.getElementById("event").textContent = "Exited Cue Range -> " + event.data + " -> " + event.target.getCurrentTime();
  if (event.data === "range" + cueRangeIndex)
    player.stopVideo();
  if (event.data === "range" + cueRangeIndex)
    inCueRange = false;
}

function addCueRange(name, start, end) {
  player.addCueRange(name, start, end);
}

function removeCueRange(name, start, end) {
  player.removeCueRange(name, start, end);
}

function loadVideoById(videoId, startSeconds, endSeconds) {
  cueRangeStart = startSeconds;
  inCueRange = false;
  document.getElementById("event").textContent = "";
  removeCueRange("range" + cueRangeIndex, startSeconds, endSeconds);
  player.loadVideoById({ 'videoId': videoId, 'suggestedQuality': 'large' });
  cueRangeIndex++;
  addCueRange("range" + cueRangeIndex, startSeconds, endSeconds);
  player.playVideoAt(startSeconds);
  player.seekTo(startSeconds);
}








const filmes = document.getElementsByClassName("box-filme");

const clickFilme = (filme) => {

  const titulo = document.getElementsByClassName("titulo");
  titulo[0].innerHTML = ""
  titulo[0].innerHTML = "" + data[filme.path[0].id][0];

  const descricao = document.getElementsByClassName("descricao");
  descricao[0].innerHTML = ""
  descricao[0].innerHTML = "" + data[filme.path[0].id][1];


  const filmePrincipal = document.getElementsByClassName("filme-principal");
  filmePrincipal[0].style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/" + data[filme.path[0].id][3] +"')";
  filmePrincipal[0].style.backgroundSize = "cover";

  //const video = document.querySelector("iframe");
  //video.setAttribute("src","adfasdfasdf");
  //const video = document.getElementById("myFrame");
  //video.setAttribute("src","https://youtu.be/yHzLwE3_v4I");

  //console.log("-----------------------------------------")
  //console.log("ATRIBUO SRC:", video.getAttribute("src"));
  //console.log("-----------------------------------------")

  //console.log(data[filme.path[0].id][2])

}

for (let i = 0; i < filmes.length; i++) {
  filmes[i].addEventListener('click', clickFilme, false);
}



//player
var modal = document.getElementById("myModal");
var btn = document.getElementById("goTrailer");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";

  
}

span.onclick = function () {
  modal.style.display = "none";
}

