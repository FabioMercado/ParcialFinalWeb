$(document).ready(function () {
    $("#pacientes").DataTable({
      dom: "Bfrtilp",
      buttons: [
        {
          extend: "excelHtml5",
          text: `Excel`,
          titleAttr: "exportar a excel",
          className: "btn btn-success",
        },
        {
          extend: "pdf",
          text: `PDF`,
          titleAttr: "exportar a PDF",
          className: "btn btn-danger",
        },
        {
          extend: "print",
          text: `Imprimir`,
          titleAttr: "Imprimir",
          className: "btn btn-info",
        },
      ],
    });
  });

let btnGuardar = document.getElementById("btnGuardar");
let btnEditar = document.getElementById("btnEditar");


function guardar() {
    const nombre = document.getElementById("txtnombre").value;
    const fecha = document.getElementById("txtfecha").value;
    const documento = document.getElementById("txtdocumento").value;
    const edad = document.getElementById("txtedad").value;
    const genero = document.getElementById("Sgenero").value;
    const telefono = document.getElementById("txttelefono").value;
    const email = document.getElementById("txtemail").value;
    const departamento = document.getElementById("txtdepartamento").value;
    const ciudad = document.getElementById("txtciudad").value;
    const direccion = document.getElementById("txtdireccion").value;
    const postal = document.getElementById("codigopostal").value;

    if(nombre=="" || fecha=="" || documento=="" || edad=="" || genero=="" || telefono=="" || email=="" || departamento=="" || ciudad=="" || postal==""){
      alert("debe ingresar la informacion en todos los campos")
    }else{

    let paciente = {
        nombre,
        fecha,
        documento,
        edad,
        genero,
        telefono,
        email,
        departamento,
        ciudad,
        direccion,
        postal,
    };

    if (localStorage.getItem("pacientes") === null) {
        let pacientes = [];
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    } else {
        let pacientes = JSON.parse(localStorage.getItem("pacientes"));
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }

    loadFromLocalStorage();
    document.getElementById("contactenos").reset();
    document.getElementById("miForm2").reset();
document.getElementById("miForm1").reset();

}
}

function deleteTask(id) {
    console.log(id);
    let pacientes = JSON.parse(localStorage.getItem("pacientes"));
    for (let i = 0; i < pacientes.length; i++) {
      if (i == id) {
  
        pacientes.splice(i, 1);
      }
    }
  
  
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    if(pacientes.length == 0){
      localStorage.removeItem('pacientes')
    }
    loadFromLocalStorage();
    location.reload();
  }


function editar(id) {
    console.log(id);
    btnEditar.disabled = false;

    btnGuardar.disabled = true;
    let pacientes = JSON.parse(localStorage.getItem("pacientes"));
    for (let i = 0; i < pacientes.length; i++) {
        if (i == id) {
            document.getElementById("txtid").value = id + 1
            document.getElementById("txtnombre").value = pacientes[i].nombre;
            document.getElementById("txtfecha").value = pacientes[i].fecha;
            document.getElementById("txtdocumento").value = pacientes[i].documento;
            document.getElementById("txtedad").value = pacientes[i].edad;
            document.getElementById("Sgenero").value = pacientes[i].genero;
            document.getElementById("txttelefono").value = pacientes[i].telefono;
            document.getElementById("txtemail").value = pacientes[i].email;
            document.getElementById("txtdepartamento").value = pacientes[i].departamento;
            document.getElementById("txtciudad").value = pacientes[i].ciudad;
            document.getElementById("txtdireccion").value = pacientes[i].direccion;
            document.getElementById("codigopostal").value = pacientes[i].postal;


            localStorage.setItem("editando", id);
        }
    }
}

function actualizarfila() {
    let idedit = localStorage.getItem("editando");

    let pacientes = JSON.parse(localStorage.getItem("pacientes"));
    for (let i = 0; i < pacientes.length; i++) {
        if (i == idedit) {
            let nombre = document.getElementById("txtnombre").value;
            let fecha = document.getElementById("txtfecha").value;
            let documento = document.getElementById("txtdocumento").value;
            let edad = document.getElementById("txtedad").value;
            let genero = document.getElementById("Sgenero").value;
            let telefono = document.getElementById("txttelefono").value;
            let email = document.getElementById("txtemail").value;
            let departamento = document.getElementById("txtdepartamento").value;
            let ciudad = document.getElementById("txtciudad").value;
            let direccion = document.getElementById("txtdireccion").value;
            let postal = document.getElementById("codigopostal").value;

            pacientes[i].nombre = nombre;
            pacientes[i].fecha = fecha;
            pacientes[i].documento = documento;
            pacientes[i].edad = edad;
            pacientes[i].genero = genero;
            pacientes[i].telefono = telefono;
            pacientes[i].email = email;
            pacientes[i].departamento = departamento;
            pacientes[i].ciudad = ciudad;
            pacientes[i].direccion = direccion;
            pacientes[i].postal = postal;
        }
    }
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    btnEditar.disabled = true;
    btnGuardar.disabled = false;
    loadFromLocalStorage();
    location.reload();
}

function loadFromLocalStorage() {
    var pacientes = [],
        dataInLocalStorage = localStorage.getItem("pacientes"),
        pacienteshead = document.querySelector('#pacientes thead'),
        pacientesbody = document.querySelector("#pacientes tbody");


    if (dataInLocalStorage == null) {
        pacienteshead.innerHTML = "";
        console.log('hola')
    } else {
        pacientes = JSON.parse(dataInLocalStorage);
        // Draw TR from TBODY
        pacientesbody.innerHTML = "";

        pacientes.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdId = document.createElement("td"),
                nombre = document.createElement("td"),
                fecha = document.createElement("td"),
                documento = document.createElement("td"),
                edad = document.createElement("td"),
                genero = document.createElement("td"),
                telefono = document.createElement("td"),
                email = document.createElement("td"),
                departamento = document.createElement("td"),
                ciudad = document.createElement("td"),
                direccion = document.createElement("td"),
                postal = document.createElement("td"),
                buttons = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btneditar = document.createElement("button");

            tdId.innerHTML = i + 1;
            fecha.innerHTML = x.fecha;
            nombre.innerHTML = x.nombre;
            documento.innerHTML = x.documento;
            edad.innerHTML = x.edad;
            genero.innerHTML = x.genero;
            telefono.innerHTML = x.telefono;
            email.innerHTML = x.email;
            departamento.innerHTML = x.departamento;
            ciudad.innerHTML = x.ciudad;
            direccion.innerHTML = x.direccion;
            postal.innerHTML = x.postal;

            btnRemove.innerHTML = `Eliminar`;
            btnRemove.id = "botoneliminar";
            btnRemove.role = "button";

            btnRemove.className = "btn btn-danger";

            btnRemove.addEventListener("click", function () {
                deleteTask(i);
            });

            btneditar.innerHTML = `Editar`;
            btneditar.id = "botoneditar";
            btneditar.role = "button";

            btneditar.className = "btn btn-warning";

            btneditar.addEventListener("click", function () {
                editar(i);
            });

            buttons.appendChild(btneditar);
            buttons.appendChild(btnRemove);


            tr.appendChild(tdId);
            tr.appendChild(nombre);
            tr.appendChild(fecha);
            tr.appendChild(documento);
            tr.appendChild(edad);
            tr.appendChild(genero);
            tr.appendChild(telefono);
            tr.appendChild(email);
            tr.appendChild(departamento);
            tr.appendChild(ciudad);
            tr.appendChild(direccion);
            tr.appendChild(postal);
            tr.appendChild(buttons);

            pacientesbody.appendChild(tr);

        });
    }


}

loadFromLocalStorage();