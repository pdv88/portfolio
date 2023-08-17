// Funcion para añadir o quitar la clase slide-in a secciones
function handleSectionIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else {
      entry.target.classList.remove('slide-in');
    }
  });
}

// Configuracion del observador de interseccion
const sectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, // The amount of section visible needed to trigger the animation
};

// Variable de interseccion de seccion
const sectionObserver = new IntersectionObserver(handleSectionIntersect, sectionObserverOptions);

// Variable de seleccion de secciones
const sections = document.querySelectorAll('section');

// Observing each section
sections.forEach((section) => {
  sectionObserver.observe(section);
});
