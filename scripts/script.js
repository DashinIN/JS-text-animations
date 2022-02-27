



const animItems = document.querySelectorAll('._anim-items');


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
       for(let element of animItems) {
        const animItem = element;
        console.log(animItem);
        const animItemHeight = animItem.offsetHeight;
        console.log(animItemHeight);
        const animItemOffset = offset(animItem).top;
        console.log(animItemOffset);
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active')
        } else {
            animItem.classList.remove('_active')
        }

       }
    }
    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop =  window.scrollY || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft 
        }
    }
}
