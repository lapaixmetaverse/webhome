"use strict";
const button=document.querySelector(".menu"),nav=document.querySelector("nav");
if(button&&nav){button.addEventListener("click",()=>{const isOpen=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(isOpen));});nav.addEventListener("click",event=>{if(event.target.matches("a")){nav.classList.remove("open");button.setAttribute("aria-expanded","false");}});}
