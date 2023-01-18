var titles =  Array.from(document.querySelectorAll("h3.title"));
var switches = Array.from(document.querySelectorAll("h3.switch"));
switches.forEach(swtch=>{
   swtch.addEventListener("click",e=>{
      if (swtch.innerText == "Background") {
         document.querySelector("div.left-side").classList.remove("w-50");
         document.querySelector("div.left-side").classList.add("w-100");
         document.querySelector("div.right-side").classList.add("hidden");
         document.querySelector("div.left-side").classList.remove("hidden");

      }else{
         document.querySelector("div.right-side").classList.remove("w-50");
         document.querySelector("div.right-side").classList.add("w-100");
         document.querySelector("div.right-side").classList.remove("hidden");
         document.querySelector("div.left-side").classList.add("hidden");
      }
   console.log(swtch.innerText);
   })
})
window.addEventListener("resize",e=>{
   e.preventDefault();
   resp();
})
resp();
function resp() {
   if (window.innerWidth <= 530 ) {
       document.querySelector("div.left-side").classList.remove("w-50");
         document.querySelector("div.left-side").classList.add("w-100");
         document.querySelector("div.right-side").classList.add("hidden");
         document.querySelector("div.left-side").classList.remove("hidden");
      }else{
          document.querySelector("div.left-side").classList.add("w-50");
         document.querySelector("div.left-side").classList.remove("w-100");
         document.querySelector("div.right-side").classList.add("w-50");
         document.querySelector("div.right-side").classList.remove("w-100");
         document.querySelector("div.right-side").classList.remove("hidden");
         document.querySelector("div.left-side").classList.remove("hidden");
      }
}
titles.forEach(ttl=>{
ttl.addEventListener("click", e => {
   const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
   ttl.style.color = color; 
});
})
