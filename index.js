const cursorDot = document.querySelector('.cusor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    //update cursor position
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;

    //update outline position
    cursorOutline.style.left = `${x}px`;
    cursorOutline.style.top = `${y}px`;

    //outline animation
    cursorOutline.animate({
        left: `${x}px`,
        top: `${y}px`
    },{
        duration: 500, 
        fill: 'forwards'
    });
})











