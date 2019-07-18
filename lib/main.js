

const sections = document.querySelectorAll('section');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');



let index = 0;
const animationDuration = 2000;
let lastTime = 0;

const toggleText = (index, state) => {
    if (state === 'show') {
        sections.forEach((section, i) => {
            if (i === index) {
                section.querySelector('.text').classList.add('show');
            }
        })
    } else {
        sections.forEach((section, i) => {
            if (i === index) {
                section.querySelector('.text').classList.remove('show');
            }
        })
    }
}

toggleText(0, 'show');
nextBtn.addEventListener('click', () => {
    if (index > 2) return;
    toggleText(index, 'hide');
   index ++;
   sections.forEach((section, i) => {
       if (i === index) {
           toggleText(i, 'show');
           section.scrollIntoView({behavior: 'smooth'});
       }
    })
});

prevBtn.addEventListener('click', () => {
    if (index < 1) return;
    toggleText(index, 'hide');
    index --;
    sections.forEach((section, i) => {
        if (i === index) {
            toggleText(i, 'show');
            section.scrollIntoView({behavior: 'smooth'});
        }
     })
 });

 window.addEventListener('wheel', (e) => { 
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();

    if (currentTime - lastTime < animationDuration) {
        // causes errors e.preventDefault();
        return;
    }
    if (delta < 0) {
        const nextBtnClick = new Event('click');
        nextBtn.dispatchEvent(nextBtnClick);
    } else {
        const prevBtnClick = new Event('click');
        prevBtn.dispatchEvent(prevBtnClick);
    }
    lastTime = currentTime;
 });


 var container = document.querySelector("section");

 container.addEventListener("touchstart", startTouch, false);
 container.addEventListener("touchmove", moveTouch, false);

 // Swipe Up / Down / Left / Right
 var initialX = null;
 var initialY = null;

 function startTouch(e) {
   initialX = e.touches[0].clientX;
   initialY = e.touches[0].clientY;
 };

 function moveTouch(e) {
   if (initialX === null) {
     return;
   }

   if (initialY === null) {
     return;
   }

   var currentX = e.touches[0].clientX;
   var currentY = e.touches[0].clientY;

   var diffX = initialX - currentX;
   var diffY = initialY - currentY;

   if (Math.abs(diffX) > Math.abs(diffY)) {
     // sliding horizontally
     if (diffX > 0) {
       // swiped left
       console.log("swiped left");
     } else {
       // swiped right
       console.log("swiped right");
     }  
   } else {
     // sliding vertically
     if (diffY > 0) {
       // swiped up
       if (index < 1) return;
        toggleText(index, 'hide');
        index --;
        sections.forEach((section, i) => {
            if (i === index) {
                toggleText(i, 'show');
                section.scrollIntoView({behavior: 'smooth'});
            }
        });
       console.log("swiped up");
     } else {
       // swiped down
       if (index > 2) return;
        toggleText(index, 'hide');
        index ++;
        sections.forEach((section, i) => {
            if (i === index) {
                toggleText(i, 'show');
                section.scrollIntoView({behavior: 'smooth'});
           }
        });
       
       
       console.log("swiped down");
     }  
   }

   initialX = null;
   initialY = null;

   e.preventDefault();
 };