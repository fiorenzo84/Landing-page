const customCursor = document.querySelector(".custom-cursor");

// Ajoute un événement "mousemove" à la fenêtre et déclenche la fonction "handleCustomCursor" lorsque l'événement se produit
window.addEventListener("mousemove", handleCustomCursor);

// Fonction "handleCustomCursor" qui prend en paramètre un événement (e)
function handleCustomCursor(e) {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const heroPushLink = document.querySelector(".hero-push-link");
const txt = "Porsche, set free.";

// Définit la fonction "typewriter" qui prend en paramètres une chaîne de caractères (text) et un entier (index)
function typewriter(text, index) {
  // Si l'index est supérieur à 3, ajoute la classe "active" à l'élément "subtitle"
  if (index > 3) subtitle.classList.add("active");
  // Si l'index est supérieur à 6, ajoute la classe "active" à l'élément "heroPushLink"
  if (index > 6) heroPushLink.classList.add("active");
  // Si l'index est inférieur à la longueur de la chaîne de caractères "text" execute un fonction après un délai de 200ms
  if (index < text.length) {
    setTimeout(() => {
      // Ajoute un élément "span" à l'élément "title" avec le caractère correspondant à l'index de la chaîne de caractères "text"
      title.innerHTML += `<span>${text[index]}</span>`;
      typewriter(text, index + 1);
    }, 200);
  }
}
setTimeout(() => {
  // Appelle la fonction typewriter
  typewriter(txt, 0);
}, 300);

// Push down button
heroPushLink.addEventListener("click", slideDown);

function slideDown(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
    behavior: "smooth",
  });
}

// Scroll animations

const generalAnimatedElements = [
  ...document.querySelectorAll("h2"),
  ...document.querySelectorAll(".section-subtitle"),
];
const discoverSectionElements = [
  document.querySelector(".text-discover-content h3"),
  document.querySelector(".text-discover-content p"),
  document.querySelector(".discover-link"),
  document.querySelector(".discover-main-img"),
];
console.log(discoverSectionElements);
const slideInContent = [
  ...document.querySelectorAll(".side-apparition-container"),
];
const animatedContents = [
  ...generalAnimatedElements,
  ...discoverSectionElements,
  ...slideInContent,
];

const intersectionObserver = new IntersectionObserver(handleIntersect, {
  rootMargin: "-10%",
});

animatedContents.forEach((el) => intersectionObserver.observe(el));

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      intersectionObserver.unobserve(entry.target);
    }
  });
}
