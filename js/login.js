
const form = document.getElementById("form");


form.addEventListener("submit", function (event) {


    let Username = document.getElementById("usuarioid").value;
    let password = document.getElementById("contraseñaid").value;
    let bandera = null;
    let sesion
    if ((password.length == 0) & (Username.length == 0)) {
        alert("Ambos campos vacios");
    } else if (Username.length == 0) {
        alert("Campo usuario vacio");
    } else if (password.length == 0) {
        alert("Campo contraseña vacio");
    } else {
        fetch("../json/usuarios.json")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                data.forEach(function (validar) {
                    if (validar.usuario == Username) {
                        if (validar.contraseña == password) {
                            bandera = true;
                            localStorage.setItem('user',JSON.stringify(Username))
                            location.href = "../html/inicio.html"
                        } else {
                            alert("contraseña incorrecta");
                            flag = true;
                        }
                    }
                });
                if (bandera == null) {
                    alert("Usuario o contraseña Incorrecto");
                }
            })
            .catch(function (error) {
                alert(error);
            });
    }


    

    //console.log(users);
    


});
function invitado(){
    localStorage.setItem('user',JSON.stringify("invitado"))
    location.href = "../html/inicio.html"
}




