



const animItems = document.querySelectorAll('._anim-items'); // получаем колекцию элементов с классом _anim-items


if (animItems.length > 0) { //Если длинна такой коллекции больше 0 (такие элементы на странице есть)
    window.addEventListener('scroll', animOnScroll); // То при событии прокрутки выполняем эту функцию:
    function animOnScroll() { 
       for(let element of animItems) { // Для кажжого элемента этой коллекции
        const animItem = element;
        const animItemHeight = animItem.offsetHeight; // Получаем его высоту и позицию относительно верха
        const animItemOffset = offset(animItem).top; 
        const animStart = 2;
  
        let animItemPoint = window.innerHeight -  animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active')
        } else {
            if (!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active')
         }
        }

       }
    }
    
    function offset(el) {
        const rect = el.getBoundingClientRect(), // Получаем позицию элемента относительно viewport
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop =  window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft } // Возвращает объект чтобы потом выбрать сторону
    }
   setTimeout(() => {
    animOnScroll();
   }, 300);
}
