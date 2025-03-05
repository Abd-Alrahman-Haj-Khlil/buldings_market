// العداد
let button = document.querySelectorAll("button");
console.log(button);
let x = document.querySelectorAll("header span")[1];
console.log(x);

button.forEach((e)=> {
    e.addEventListener('click', ()=> {
        x.innerHTML = Number(x.innerHTML)+1
    })
})
// الوضع الليلي
   function toggleDarkMode() {
     document.body.classList.toggle("light-mode")
     if (document.body.classList.contains("light-mode")) {
       document.body.style.backgroundColor = "#fff";
       document.body.style.color = "#000";
       document.querySelector("header").style.backgroundColor = "#f0f0f0";
       document.querySelector("nav").style.backgroundColor = "#ddd";
       document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#fff");
       document.querySelectorAll("section div").forEach(div => div.style.backgroundColor = "#f9f9f9");
       document.querySelector("footer").style.backgroundColor = "#222";
       document.querySelector("i").style.cssText = "color: #000; border-color: #000";
     } else {
       document.querySelector("i").style.cssText = "color: #fff; border-color: #fff";
       document.body.style.backgroundColor = "#000";
       document.body.style.color = "#fff";
       document.querySelector("header").style.backgroundColor = "#121212";
       document.querySelector("nav").style.backgroundColor = "#222";
       document.querySelectorAll("section").forEach(sec => sec.style.backgroundColor = "#181818");
       document.querySelectorAll("section div").forEach(div => div.style.backgroundColor = "#222");
       document.querySelector("footer").style.backgroundColor = "#000";
     }
   }

   // عرض صفحة تسجيل الدخول
  window.onload = () => {
    toggleDarkMode();
  }
// let users = document.getElementById("users");
// console.log(users);
// users.addEventListener("click",()=> {
//  let form = document.getElementsByClassName("sign_users")[0];
//  let div = document.getElementsByClassName("from")[0];
//   form.classList.add("none");
//   div.classList.add("none");
// })

// // رز اغلاق صفحة تسجيل الدخول
// let y=document.getElementsByClassName("close_user")[0];
// y.addEventListener("click",()=> {
//   let form = document.getElementsByClassName("sign_users")[0];
//   let div = document.getElementsByClassName("from")[0];
//    form.classList.remove("none");
//    div.classList.remove("none");
// })
