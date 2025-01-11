/****************Menu*****************/
/*PROGRAMACION MENU MOVIL*/
((d)=>{ //FUNCION ANONIMA AUTO EJECUTABLE
    const $btnMenu = d.querySelector(".menu-btn")
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) =>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click",e =>{
        if(!e.target.matches(".menu a")) return false //SI EL EVENTO QUE ORIGINO EL CLICK EN EL DOCUMENTO NO UN ENLACE QUE NO ESTA DENTRO DEL MENU, RETORNA FALSO

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });

})(document);
/*FIN*/