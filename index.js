 
 
 const handleMouseMove=(e)=>{
    const {clientX,clientY }=e;
    console.log({clientX,clientY});
    const {innerWidth,innerHeight}=window;
const fractionX = clientX/innerWidth;
const fractionY = clientY/innerHeight;
console.log({fractionX,fractionY})
const pupilx = -70+ fractionX*140;
const pupilY = -70+fractionY*140;
console.log({pupilx,pupilY});

document.querySelectorAll('.pupil') 
.forEach(el=>{
    el.style.transform= `translate(${pupilx}px,${pupilY}px)`;
})
}

window.addEventListener('mousemove',handleMouseMove);
