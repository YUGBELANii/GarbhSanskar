document.addEventListener("DOMContentLoaded",()=>{const form=document.querySelector("#enquiry-form");if(!form)return;form.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(form);const subject=encodeURIComponent("Website enquiry - "+data.get("topic"));const body=encodeURIComponent("Name: "+data.get("name")+"\nContact: "+data.get("contact")+"\nTopic: "+data.get("topic")+"\n\n"+data.get("message"));const recipient="hello@example.com";if(recipient==="hello@example.com"){document.querySelector("#form-status").textContent="Demo only: replace hello@example.com in script.js with the practitioner's email address to enable email enquiries.";return;}window.location.href="mailto:"+recipient+"?subject="+subject+"&body="+body;});});
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle");
 const nav=document.querySelector("#primary-navigation");
 if(!toggle||!nav)return;
 const closeMenu=()=>{
  toggle.setAttribute("aria-expanded","false");
  toggle.setAttribute("aria-label","Open navigation menu");
  nav.classList.remove("is-open");
 };
 toggle.addEventListener("click",()=>{
  const open=toggle.getAttribute("aria-expanded")!=="true";
  toggle.setAttribute("aria-expanded",String(open));
  toggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
  nav.classList.toggle("is-open",open);
 });
 nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
 document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu()});
 window.addEventListener("resize",()=>{if(window.innerWidth>760)closeMenu()});
});
