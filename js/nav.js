
const usernav= document.getElementById("usernav");
const close=document.getElementById("close");
let username =JSON.parse(localStorage.getItem("user"))
if(username!=null){
    usernav.innerHTML= '<i><b> <a  href="#" id="#" class="nav-link">'+username+'</a></b></i>'
    
}else{
    location.href="../index.html"
  
}
close.addEventListener('click',function(){

    localStorage.clear('user')
    location.href="../index.html"
    
});
