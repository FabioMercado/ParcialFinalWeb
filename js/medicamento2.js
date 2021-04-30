var usuariosList = [];

function addUsuarioToSystem(pnombre, papellido, pfecha, pdocumento, pedad, pgenero, ptelefono, pemail, pdepartamento, pciudad, pdireccion, pcodigo, pmedicamento, punidad) {
    
    var newUsuario = {
        nombre : pnombre,
        apellido : papellido,
        fecha : pfecha,
        documento : pdocumento,
        edad : pedad,
        genero : pgenero,
        telefono : ptelefono,
        email : pemail,
        departamento : pdepartamento,
        ciudad : pciudad,
        direccion : pdireccion,
        codigo : pcodigo,
        medicamento : pmedicamento,
        unidad : punidad
    };

    console.log(newUsuario);
    usuariosList.push(newUsuario);
    localStorageUsuarioList(usuariosList);
}

function getUsuariosList(){
    var storedList = localStorage.getItem('localUsuarioList');
    if(storedList == null){
        usuariosList = [];
     
    }else{
        usuariosList = JSON.parse(storedList);
    }
    return usuariosList;
    
}

function localStorageUsuarioList(plist) {
    localStorage.setItem('localUsuarioList', JSON.stringify(plist));
}

function ocultarymostrar() {
    let x = document.getElementById("tablaUsuario");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

