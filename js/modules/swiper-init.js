const projetos = [
  {
    titulo: "Seasons",
    descricao:
      "é um projeto interativo que explora as quatro estações do ano: Verão, Outono, Inverno e Primavera. Utilizando uma navegação intuitiva com duas listas de itens relacionadas 1:1, o projeto oferece uma experiência visual e informativa que destaca as características únicas de cada estação.",
    imagem: "./img/seasons.png",
    link: "https://seasons-three.vercel.app",
  },
  {
    titulo: "Projeto Linktree",
    descricao:
      "É um projeto simples para criar uma página de links estilo Linktree. O objetivo é fornecer um ponto centralizado para acessar diferentes links e contatos, incluindo a integração com o WhatsApp.",
    imagem: "./img/linktree.png",
    link: "https://caiobaldudev.github.io/victoriamalaquias-links/",
  },
  {
    titulo: "Subaru BRZ Showcase",
    descricao:
      "É um projeto de uma página web interativa dedicada ao icônico Subaru BRZ, tão sonhado carro do autor desse projeto. (ainda em construção...)",
    imagem: "./img/subarup.png",
    link: "https://github.com/Caiobaldudev/subaru-sportive",
  },
  {
    titulo: "(Estudo) Conheça Busan",
    descricao:
      "Projeto Frontend desenvolvido para a Rocketseat. Neste projeto, criamos uma página web com o objetivo de promover a cidade de Busan, na Coreia do Sul, como um destino turístico imperdível. (sem deploy)",
    imagem: "./img/busanp.png",
    link: "https://github.com/Caiobaldudev/-study-tourist-destination",
  },
  {
    titulo: "(Desafio) Food Explorer",
    descricao:
      "Um menu interativo para um restaurante fictício. A aplicação simula uma plataforma de restaurante real, onde usuários podem visualizar pratos e administradores podem gerenciar o cardápio. O Food Explorer permite que os usuários naveguem por diferentes pratos, vejam informações detalhadas e façam pedidos. Usuários administradores possuem funcionalidades adicionais, como criar, editar e excluir pratos do menu.",
    imagem: "./img/foodp.png",
    link: "https://https://food-explo.netlify.app/",
  },
  {
    titulo: "Gerenciador de Tarefas",
    descricao:
      "Este é um projeto simples de Gerenciador de Tarefas construído com React usando Vite. O usuário deve ser capaz de adicionar tarefas, marcar tarefas como concluídas e filtrar tarefas por seu status... As tarefas são salvas no localStorage, garantindo que não se percam ao atualizar a página.",
    imagem: "./img/taskp.png",
    link: "https://caio-task-manager-acqa.vercel.app",
  },
  {
    titulo: "(NLW) In.orbit",
    descricao:
      "é um site desktop focado em registro de metas com acompanhamento de progresso semanal. Este é o frontend da aplicação, desenvolvido durante o evento NLW Pocket FullStack, oferecido pela Rocketseat. (Não foi feito deploy do projeto pois será feito uma nova versão mais completa)",
    imagem: "./img/orbitp.png",
    link: "https://github.com/Caiobaldudev/nlw-pocket-front",
  },
];

export default function initSwiper() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  projetos.forEach((projeto) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    slide.innerHTML = `
      <div class="project-card">
    <div class="project-image">
      <a href="${projeto.link}" target="_blank" class="project-link">
        <img src="${projeto.imagem}" alt="Capa do ${projeto.titulo}">
      </a>
    </div>
    <div class="project-info">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a target='_blank' href="${projeto.link}" class="btn-project">Ver Projeto</a>
    </div>
  </div>
    `;

    swiperWrapper.appendChild(slide);
  });

  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
