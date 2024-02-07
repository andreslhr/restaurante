 // Obtén una lista de todos los elementos con la clase 'menu-arrow-right'
 const rightBtns = document.querySelectorAll('.menu-arrow-right');

 // Obtén una lista de todos los elementos con la clase 'menu-arrow-left'
 const leftBtns = document.querySelectorAll('.menu-arrow-left');

 // Obtén una lista de todos los elementos con la clase 'menu-flex'
 const contents = document.querySelectorAll('.menu-flex');

 // Itera sobre cada botón derecho y agrega el evento
 rightBtns.forEach((rightBtn, index) => {
     rightBtn.addEventListener("click", () => {
         // Utiliza el índice para referenciar el contenido correspondiente
         contents[index].scrollLeft += 100;
     });
 });

 // Itera sobre cada botón izquierdo y agrega el evento
 leftBtns.forEach((leftBtn, index) => {
     leftBtn.addEventListener("click", () => {
         // Utiliza el índice para referenciar el contenido correspondiente
         contents[index].scrollLeft -= 100;
     });
 });



function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
