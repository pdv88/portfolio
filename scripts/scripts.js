// ----------------funcion activar link  ---------------------

let navLinks = document.getElementsByClassName('nav_link');
let burgerNavLinks = document.getElementsByClassName('nav_link_burger');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', activeLink)
  burgerNavLinks[i].addEventListener('click', activeLink)
}
function activeLink(e) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('activeLink');
    burgerNavLinks[i].classList.remove('activeLink');
  }
  e.target.classList.add('activeLink');
}

// --------- funcion activar link con scroll---------------

let sections = document.querySelectorAll('.mainSection');
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      let id = '#' + entry.target.id;
			history.pushState({}, entry.target.innetText, id);
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('activeLink');
        let href = navLinks[i].attributes.href.value;
        if (href === id) {
          navLinks[i].classList.add('activeLink');
        }
      }
      for (let i = 0; i < burgerNavLinks.length; i++) {
        burgerNavLinks[i].classList.remove('activeLink');
        let href = burgerNavLinks[i].attributes.href.value;
        if (href === id) {
          burgerNavLinks[i].classList.add('activeLink');
        }
      }
		}
	});
}, {
  threshold: 1,
	rootMargin: '0px 0px 30% 0px'
});
sections.forEach(section => {
  observer.observe(section);
})

// -----------------Menu hamburguesa-----------------------

const burger = document.getElementById('burger-icon');
const modal = document.getElementById('burger-modal');

burger.addEventListener("click", () =>{
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
});

modal.addEventListener("click", () =>{
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});

// -----------------Tabs Experiencia-----------------------

let buttonTabs = document.getElementsByClassName('tab');
let contentTabs = document.getElementsByClassName('tab_content');
  for (let i = 0; i < buttonTabs.length; i++) {
    buttonTabs[i].addEventListener('click', showTab);        
  }

contentTabs[0].style.display = 'flex';
buttonTabs[0].classList.add('active');

function showTab(e) {
  
  for (let i = 0; i < contentTabs.length; i++) {
    if (contentTabs[i].firstChild.nextSibling.innerHTML == e.target.innerHTML) {
      contentTabs[i].style.display = 'flex';
      buttonTabs[i].classList.add('active');
    } else {
      contentTabs[i].style.display = 'none'
      buttonTabs[i].classList.remove('active');
    }
  }
}