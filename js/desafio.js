data = {
  "dragon_ball_z": [
    "DRAGON BALL Z",
    "Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho.",
    "https://www.youtube.com/embed/yWgWhuN8wc4",
    "dragon_ball_z_banner.jpg"
  ],
  "attack_on_titan2": [
    "ATAQUE DOS TITÃS",
    "Esse é só para ADULTOS... hahaha",
    "https://www.youtube.com/embed/6MRxT8kz30k",
    "attack_on_titan_b.png"
  ],
  "bleach": [
    "BLEACH",
    "",
    "https://www.youtube.com/embed/hCjwrpyJ0vI",
    "bleach_b.jpg"
  ],
  "demon_slayer": [
    "DEMON SLAYER",
    "",
    "https://www.youtube.com/embed/VQGCKyvzIM4",
    "demon_slayer_b.png"
  ],
  "dr_stone": [
    "DR. STONE",
    "",
    "https://www.youtube.com/embed/vHtZhVtEu04",
    "dr_stone_b.jpg"
  ],
  "my_hero_academia": [
    "MY HERO ACADEMIA",
    "",
    "https://www.youtube.com/embed/y2XaDCwKdpg",
    "my_hero_b.png"
  ],
  "fairy_tail": [
    "FAIRY TAIL",
    "",
    "https://www.youtube.com/embed/LqkVn-2pQ8k",
    "fairy_tail_b.jpg"
  ],
  "fullmetal_alchemist_brotherhood": [
    "FULLMETAL ALCHEMIST BROTHERHOOD",
    "",
    "https://www.youtube.com/embed/Kef3BsgI1Sk",
    "full_a_b.png"
  ],
  "jujutsu_kaisen": [
    "JUJUTSU KAISEN",
    "",
    "https://www.youtube.com/embed/ynr6gnyu9NE",
    "jujutsu_b.png"
  ],
  "hunter_x_hunter": [
    "HUNTER X HUNTER",
    "",
    "https://www.youtube.com/embed/koo0AvABfpw",
    "hunter_x_hunter_b.jpg"
  ],
  "naruto_shippuden": [
    "NARUTO SHIPPUDEN",
    "",
    "https://www.youtube.com/embed/FJb_4oZWTMQ",
    "naruto_s_b.jfif"
  ]
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
  filmePrincipal[0].style.background = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('../img/" + data[filme.path[0].id][3] + "')";
  filmePrincipal[0].style.backgroundSize = "cover";

  const video = document.getElementById("video");
  video.setAttribute("src", data[filme.path[0].id][2]);

  //  alert("https://www.youtube.com/embed/" + data[filme.path[0].id][2])

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
  const video = document.getElementById("video");
  const aux = video.getAttribute("src");
  video.setAttribute("src", aux);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    const video = document.getElementById("video");
    const aux = video.getAttribute("src");
    video.setAttribute("src", aux);
  }
}
