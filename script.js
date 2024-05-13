var cross = document.querySelector(".cross");
var hum = document.querySelector(".hum");
var humburger = document.querySelector(".humburger");
var sidebar = document.querySelector(".sidebar");


cross.style.display = "none";
humburger.addEventListener("click", ()=>{
    sidebar.classList.toggle("sidebarGo");
    if(sidebar.classList.contains("sidebarGo")){
        hum.style.display = "inline";
        cross.style.display = "none";
    }else{
        setTimeout(function(){
            cross.style.display = "inline";
        },400)
        hum.style.display = "none";
    }
})