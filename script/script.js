// Codigo



const menuHamburguer = document.getElementById("hamburguer");

menuHamburguer.addEventListener("click", () => {
  document.getElementById("menu-mobile").classList.toggle("active");
});

const sliderHome = [
  {
    indice: 0,
    url: "imagens/2-home/1-home.webp",
    titulo: "Bem-Vindo(a) à CasaBlanca Residence para mulheres!",
    descricao:
      "Descubra como podemos proporcionar mais saúde, conforto e qualidade de vida para nossas queridas hóspedes.",
  },

  {
    indice: 1,
    url: "imagens/2-home/2-envelhecer.webp",
    titulo: "Envelhecer é inevitável, viver com qualidade é uma escolha!",
    descricao:
      "Oferecemos atividades que recrutam funções físicas e mentais para promover saúde, bem-estar e qualidade de vida.",
  },

  {
    indice: 2,
    url: "imagens/2-home/3-rotina.webp",
    titulo: "Uma rotina de atividades completa para quem você ama!",
    descricao:
      "Uma rotina de atividades completa para estimular a cognição e sociabilidade das nossas hóspedes.",
  },

  {
    indice: 3,
    url: "imagens/2-home/4-equipe.webp",
    titulo: "Uma equipe completa e altamente qualificada: ",
    descricao:
      "Profissionais preparadas para oferecer cuidado especializado e muito carinho para nossas hóspedes.",
  },
];

let indice = 0;
const home = document.getElementById("home");
home.innerHTML = `
    <div class="container-home" style="background-image: url(${sliderHome[indice].url});">
    <img src="imagens/2-home/5-logo-top-home.webp" alt="" class="logo-top-home">
    <div class="content">
        <span class="titulo">${sliderHome[indice].titulo}</span> <br>
        <span class="descricao">${sliderHome[indice].descricao}</span>
    </div>
    </div>
    `;

function mudarSlideHome() {
  setInterval(() => {
    indice++
    home.innerHTML = `
        <div class="container-home" style="background-image: url(${sliderHome[indice].url});">
        <img src="imagens/2-home/5-logo-top-home.webp" alt="" class="logo-top-home">
        <div class="content">
            <span class="titulo">${sliderHome[indice].titulo}</span> <br>
            <span class="descricao">${sliderHome[indice].descricao}</span>
        </div>
        </div>
        `;

    if(indice >= 3){
        indice = -1;
    }
  }, 5000);
}

mudarSlideHome();

const menu = document.querySelectorAll(".js-menu");

menu.forEach(el => {
    el.addEventListener("click", ()=> {
      document.getElementById("menu-mobile").classList.remove("active");
    })
});


const container = document.getElementById("container-estrutura");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseup", () => {
  isDown = false;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = x - startX;
  container.scrollLeft = scrollLeft - walk;
});

const depoimentos = [
  {
    indice: 0,
    nome: "Dancarlo",
    descricao: "A razão pela qual eu e meus irmãos escolhemos a Casablanca Residence foi, primeiramente, pelo fato de aceitarem apenas mulheres. Na visita que fizemos, constatamos que o espaço físico era agradável e limpo. Além disso, fomos muito bem atendidos pela Cacilda, proprietária da instituição, que foi solícita e nos deu todas as informações necessárias. Hoje, minha mãe está na Casablanca Residence há quase um ano e se encontra totalmente adaptada e bem cuidada!"
  },
  
  {
    indice: 1,
    nome: "Elaine",
    descricao: "O principal motivo de termos optado pela Casablanca foi pelo fato de só receberem mulheres, e hoje em dia vejo que minha mãe está muito bem cuidada, recebendo toda a assistência de que precisa, o que me deixa muito confortável para deixá-la sob os cuidados da Casablanca."
  },
];

const nomeDepoimento = document.getElementById("nome-depoimento");
const descricaoDepoimento = document.getElementById("descricao-depoimento");


nomeDepoimento.innerHTML = `
      <span>${depoimentos[0].nome}</span>
    `;

    descricaoDepoimento.innerHTML = `
      <p>${depoimentos[0].descricao}</p>
      <img src="imagens/7-depoimentos/3-aspas.webp" alt="" class="aspas">
      <img src="imagens/7-depoimentos/2-estrelas.webp" alt="" class="estrela">
      <img src="imagens/7-depoimentos/1-pontos.webp" alt="" class="pontos">
    `;


function depoimento() {
  let indiceDepoimento = 1;
  setInterval(() => {
    nomeDepoimento.innerHTML = `
      <span>${depoimentos[indiceDepoimento].nome}</span>
    `;

    descricaoDepoimento.innerHTML = `
      <p>${depoimentos[indiceDepoimento].descricao}</p>
      <img src="imagens/7-depoimentos/3-aspas.webp" alt="" class="aspas">
      <img src="imagens/7-depoimentos/2-estrelas.webp" alt="" class="estrela">
      <img src="imagens/7-depoimentos/1-pontos.webp" alt="" class="pontos">
    `;


    if (indiceDepoimento >= depoimentos.length - 1) {
      indiceDepoimento = 0;
    } else {
      indiceDepoimento++;
    }
  }, 5000);
}


depoimento();



