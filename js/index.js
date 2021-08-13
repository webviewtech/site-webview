/* Action Nav Scroll --- start */
window.addEventListener("scroll", function(event) {

    var scroll = this.scrollY;

    if (scroll >= 92) {
        document.getElementById("menu").style.background = "rgba(255, 255, 255, 0.95)";
        document.getElementById("menu").style.transition = "0.7s";
        document.getElementById("menu").style.borderBottom = "1px solid rgba(32, 19, 77, 0.2)";
        document.getElementById("logo-2").style.opacity = "0";
        document.getElementById("logo-2.2").style.opacity = "0";
        document.getElementById("btn-hamburguer-ico").style.color = "var(--dark-purple)";
        document.getElementById("menu-mobile").style.background = "white";

        /* Muda cor dos links do menu */
        document.getElementById("menuitem-1").style.color = "#20134D";
        document.getElementById("menuitem-2").style.color = "#20134D";
        document.getElementById("menuitem-3").style.color = "#20134D";
        document.getElementById("menuitem-4").style.color = "#20134D";
        document.getElementById("menuitem-5").style.color = "#20134D";
    } else if (scroll < 92) {
        document.getElementById("menu").style.background = "rgba(32, 19, 77, 0.0)";
        document.getElementById("menu").style.transition = "0.7s";
        document.getElementById("menu").style.borderBottom = "0px solid rgba(32, 19, 77, 0.2)";
        document.getElementById("logo-2").style.opacity = "1";
        document.getElementById("logo-2.2").style.opacity = "1";
        document.getElementById("btn-hamburguer-ico").style.color = "white";
        document.getElementById("menu-mobile").style.background = "transparent";

        /* Muda cor dos links do menu */
        document.getElementById("menuitem-1").style.color = "#FFFFFF";
        document.getElementById("menuitem-2").style.color = "#FFFFFF";
        document.getElementById("menuitem-3").style.color = "#FFFFFF";
        document.getElementById("menuitem-4").style.color = "#FFFFFF";
        document.getElementById("menuitem-5").style.color = "#FFFFFF";
    }
});
/* Nav Scroll end */

/* Writing header --- start */
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i) {

        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 80 * i)

    });
}
const titulo = document.querySelector('.typewrite-effect');
typeWrite(titulo);
/* Writing header end */


/* start Action open and close mobile button */
function closeNav() {
    document.getElementById("menu-mobile").style.height = "82px";
    document.getElementById("menu-mobile").style.transition = "0.5s";
    document.getElementById("btn-hamburguer").setAttribute('onclick', 'openNav()');
    document.getElementById("overflow").style.display = "none";

    var scroll = this.scrollY;

    if (scroll >= 92) {
        document.getElementById("btn-hamburguer-ico").style.color = "var(--dark-purple)";
        document.getElementById("menu-mobile").style.background = "white";

    } else if (scroll < 92) {
        document.getElementById("btn-hamburguer-ico").style.color = "white";
        document.getElementById("menu-mobile").style.background = "transparent";
    }
}

function openNav() {
    document.getElementById("menu-mobile").style.height = "500px";
    document.getElementById("menu-mobile").style.transition = "0.5s";
    document.getElementById("btn-hamburguer").setAttribute('onclick', 'closeNav()');
    document.getElementById("overflow").style.display = "block";

    var scroll = this.scrollY;

    if (scroll >= 92) {
        document.getElementById("btn-hamburguer-ico").style.color = "var(--dark-purple)";
        document.getElementById("menu-mobile").style.background = "white";

    } else if (scroll < 92) {
        document.getElementById("btn-hamburguer-ico").style.color = "white";
        document.getElementById("menu-mobile").style.background = "transparent";
    }

}
/* end Action open and close mobile button */

AOS.init();