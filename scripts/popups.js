const popupLinks = document.querySelectorAll('.popup-link');
console.log(popupLinks);
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 500;

if (popupLinks.length > 0) {
    for(let link of popupLinks) {
       
        const popupLink = link;
        
        console.log(popupLink);
        popupLink.addEventListener('click', function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let closeElement of popupCloseIcon) {
            const el = closeElement;
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open'); 
        if (popupActive) {
            popupClose(popupActive, false);

        } else {
            bodyLock();
        }

        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function(e) {
            if(!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if(lockPadding.length > 0) {
      for(let lockElement of lockPadding) {
            const el = lockElement;
            el.getElementsByClassName.paddingRight = lockPaddingValue;
         }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;

    setTimeout(function() {
        unlock = true;
    }, timeout);

}

function bodyUnlock() {
    setTimeout(function() {
        if(lockPadding.length > 0) {
            for(let lockElement of lockPadding) {
                const el = lockElement;
                el.style.paddingRight = 
                '0px';
            }
        }
            body.style.paddingRight = '0px';
            body.classList.remove('lock');
        }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    console.log(e.code);
    if(e.code === 'Escape') {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});