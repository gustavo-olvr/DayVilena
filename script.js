// NAVBAR AO SCROLL
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(245, 240, 232, 0.98)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
  } else {
    nav.style.background = "rgba(245, 240, 232, 0.92)";
    nav.style.boxShadow = "none";
  }
});


// ANIMAÇÃO AO SCROLL
const revealElements = document.querySelectorAll(`
  .servico-card,
  .galeria-item,
  .depoimento-card,
  .info-item,
  .stat-item
`);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("active-reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// CONTADOR DAS ESTATÍSTICAS
const counters = document.querySelectorAll(".stat-num");

const startCounter = (counter) => {
  const target = +counter.innerText.replace("+", "");
  let current = 0;

  const increment = target / 60;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      counter.innerText = Math.ceil(current) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
};

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");

  if (!counterStarted) {
    const top = statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      counters.forEach(startCounter);
      counterStarted = true;
    }
  }
});


// BOTÕES WHATSAPP COM MENSAGEM AUTOMÁTICA
const whatsappLinks = document.querySelectorAll(
  'a[href*="wa.me"]'
);

whatsappLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const message = encodeURIComponent(
      "Olá! gostaria de agendar um horário 😊"
    );

    const baseUrl = link.href.split("?")[0];

    link.href = `${baseUrl}?text=${message}`;
  });
});


// MENU ATIVO
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});