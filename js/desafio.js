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
    "Bleach segue as aventuras de Ichigo Kurosaki que após ganhar os poderes de um Ceifeiro de Almas, através de uma Ceifeira de Almas, Rukia Kuchiki. ... Tanto o anime quanto o mangá de Bleach alcançaram um grande sucesso dentro e fora do Japão.",
    "https://www.youtube.com/embed/hCjwrpyJ0vI",
    "bleach_b.jpg"
  ],
  "demon_slayer": [
    "DEMON SLAYER",
    "Em Kimetsu no Yaiba, Tanjiro, um bondoso jovem que ganha a vida vendendo carvão descobre que sua família foi massacrada por um demônio. ... Arrasado com essa sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana e para destruir o demônio que matou seus entes queridos.",
    "https://www.youtube.com/embed/VQGCKyvzIM4",
    "demon_slayer_b.png"
  ],
  "dr_stone": [
    "DR. STONE",
    "Stone é um mangá de aventura, que conta a história de Senku, um gênio, que renasce 3.700 anos depois que uma luz misteriosa petrifica toda a humanidade. Usando-se de conhecimento científico, ele tenta restaurar a humanidade.",
    "https://www.youtube.com/embed/vHtZhVtEu04",
    "dr_stone_b.jpg"
  ],
  "my_hero_academia": [
    "MY HERO ACADEMIA",
    "Boku no Hero conta a história de Izuku Deku Midoriya, um jovem que nasceu sem Indivualidade (poder) em um mundo em que 80% da população manifesta ao menos uma desde criança. O sonho do jovem de se tornar um herói, inspirado pelo herói nº 1, All Might, é massacrado pela descoberta.",
    "https://www.youtube.com/embed/y2XaDCwKdpg",
    "my_hero_b.png"
  ],
  "fairy_tail": [
    "FAIRY TAIL",
    "A história de Fairy Tail gira em torno das aventuras de seus protagonistas, Natsu Dragneel a maga Lucy Heartfilia, tendo o gato Happy. ... Assim, Lucy entra para a Fairy Tail, onde começa a viver todo tipo de missão perigosa junto com Natsu, Happy e seus amigos, também magos da guilda, Erza Scarlet e Gray Fullbuster.",
    "https://www.youtube.com/embed/LqkVn-2pQ8k",
    "fairy_tail_b.jpg"
  ],
  "fullmetal_alchemist_brotherhood": [
    "FULLMETAL ALCHEMIST BROTHERHOOD",
    "Dois irmãos, Edward e Alphonse, ignoram as restrições contra usar um método científico tabu para reviver a mãe neste anime de aventura.",
    "https://www.youtube.com/embed/Kef3BsgI1Sk",
    "full_a_b.png"
  ],
  "jujutsu_kaisen": [
    "JUJUTSU KAISEN",
    "Jujutsu Kaisen é um mangá da Shonen Jump, sua estreia ocorreu em 2018 e atualmente já conta com 11 volumes encadernados no Japão. Seu enredo foca em uma mistura de ação com sobrenatural e nos traz Yuji, um jovem atleta até então vivendo uma vida comum.",
    "https://www.youtube.com/embed/ynr6gnyu9NE",
    "jujutsu_b.png"
  ],
  "hunter_x_hunter": [
    "HUNTER X HUNTER",
    "A história tem como protagonista Gon Freecss, um menino de 12 anos que quer encontrar o seu pai a todo o custo, então ele decide se tornar um Hunter, assim como ele, e de alguma forma encontrar o seu paradeiro.",
    "https://www.youtube.com/embed/koo0AvABfpw",
    "hunter_x_hunter_b.jpg"
  ],
  "naruto_shippuden": [
    "NARUTO SHIPPUDEN",
    "Naruto: Shippūden é uma continuação da série de mangá Naruto por Kishimoto, e conta com as reviravoltas da Akatsuki, jinchūriki e a busca por Sasuke Uchiha como enredo principal passados 2 anos e meio no universo imaginário de Naruto. ",
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