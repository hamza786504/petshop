const header_bar = document.getElementById("header_bar");
const user = document.getElementById("user_icon");
const toggle_menu = document.getElementById("burger_icon");
const user_form = document.querySelector(".user_form");
const menu_bar = document.querySelector(".menu_bar");

user.addEventListener("click",function(){
    user_form.classList.toggle("active");
    user_form.style.top = "100px";
})
toggle_menu.addEventListener("click",function(){
    menu_bar.classList.toggle("active");
})

window.onscroll = () =>{
    user_form.classList.remove("active");
    menu_bar.classList.remove("active");
    if(window.scrollY > 0){
        header_bar.classList.add('active');
    }else{
        header_bar.classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        header_bar.classList.add('active');
    }else{
        header_bar.classList.remove('active');
    }
}