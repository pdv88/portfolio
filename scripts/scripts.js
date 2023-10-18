// -------------------------------------------------------------------
// ----------------------activar link con click-----------------------
// -------------------------------------------------------------------

//  declaracion de variables para array de links en header y menu hamburguesa
let navLinks = document.getElementsByClassName('nav_link');
let burgerNavLinks = document.getElementsByClassName('nav_link_burger');

// bucle for para agregar detectores de evento a los links de navegacion
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', activeLink)
  burgerNavLinks[i].addEventListener('click', activeLink)
}

// funcion para quitar clase activeLink a links anteriores y agregarlo al nuevo link
function activeLink(e) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('activeLink');
    burgerNavLinks[i].classList.remove('activeLink');
  }
  e.target.classList.add('activeLink');
}

// -----------------------------------------------------------------
// ------------------- activar link con scroll----------------------
// -----------------------------------------------------------------

// variable para seleccionar las secciones principales del html
let sections = document.querySelectorAll('.mainSection');

// declaracion de funcion del observador
let observer = new IntersectionObserver((entries, observer) => {
  
  /* bucle que itera por cada entrada revisando si la entrada es visible
  si esta esta visible, quita la clase active link a los links anteriores
  y lo agrega al link de la seccion visible*/
  entries.forEach(entry => {
    if(entry.isIntersecting){
      let id = '#' + entry.target.id;

			// actualiza el link de la barra de navegacion con la seccion visible 
      history.pushState({}, entry.target.innetText, id);
      
      // bucle para agregar y quitar la clase activeLink
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('activeLink');
        burgerNavLinks[i].classList.remove('activeLink');
        let href = navLinks[i].attributes.href.value;
        
        // si el href del link es igual al id de la seccion visible se le agrega la clase activeLink
        if (href === id) {
          navLinks[i].classList.add('activeLink');
          burgerNavLinks[i].classList.add('activeLink');
        }
      }
		}
	});
}, {
  /*parametros del observador para determinar la altura de la pantalla a
  la que esta el observador para correr la funcion*/
  threshold: 1,
	rootMargin: '0px 0px 30% 0px'
});

// bucle para agregar los observadores a cada seccion
sections.forEach(section => {
  observer.observe(section);
})

//-------------------------------------------------------------------
// ------------------------Menu hamburguesa--------------------------
//-------------------------------------------------------------------

// variables para seleccionar el icono de burger y el menu modal
const burger = document.getElementById('burger-icon');
const modal = document.getElementById('burger-modal');

/* detector de evento click para el icono burger que agrega opacidad y 
visibilidad al menu modal*/
burger.addEventListener("click", () =>{
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
});

/* detector de evento click en menu modal que quita opacidad y 
visibilidad al menu modal clickando en cualquier parte*/ 
modal.addEventListener("click", () =>{
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});

//-----------------------------------------------------------------
// ----------------------Tabs Experiencia--------------------------
//-----------------------------------------------------------------

// variables para seleccionar las pestañas y el contenido de ellas
let buttonTabs = document.getElementsByClassName('tab');
let contentTabs = document.getElementsByClassName('tab_content');

  // bucle para agrega detectores de evento click a las pestañas
  for (let i = 0; i < buttonTabs.length; i++) {
    buttonTabs[i].addEventListener('click', showTab);        
  }

// codigo para poner display flex y clase active a la primer pestaña
contentTabs[0].style.display = 'flex';
buttonTabs[0].classList.add('active');

// funcion para mostrar contenido de la pestaña seleccionada
function showTab(e) {
  
  // bucle for para recorrer los contenidos de las pestañas
  for (let i = 0; i < contentTabs.length; i++) {

    /* condicional para ver si el contenido de la pestaña pertenece a la pestaña que detono el evento
    si sí se agregara display flex y la clase active a la pestaña, de lo contrario los quitara*/
    if (contentTabs[i].firstChild.nextSibling.innerHTML == e.target.innerHTML) {
      contentTabs[i].style.display = 'flex';
      buttonTabs[i].classList.add('active');
    } else {
      contentTabs[i].style.display = 'none'
      buttonTabs[i].classList.remove('active');
    }
  }
}