const links = document.getElementsByClassName('links')[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const menuHamburger = document.getElementById("hamburger");
let abierto = false;

const toggleMenu = ()=>{
    links.classList.toggle('links2');
    links.style.transition = "transform 0.5s ease-in-out";
}

hamburger.addEventListener('click', ()=>{
    toggleMenu();
    if(document.querySelector('.links.links2')){
        abierto = true;
    }else{
        abierto = false;
    }
})

window.addEventListener('click', (e) =>{
    this.console.log(e.target);
    if(abierto){
        if (e.target !== menuHamburger) {
          toggleMenu();
          abierto = false;
        }
    }
})

window.addEventListener('resize', () =>{
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            links.style.transition = 'none';
            abierto = false;
        }
    }
})

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Scroll x

// $(window).scroll(function () {
//   $("#header").css({
//     left: $(this).scrollLeft() + 15, //Why this 15, because in the CSS, we have set left 15, so as we scroll, we would want this to remain at 15px left
//   });
// });
