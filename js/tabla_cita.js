$(document).ready(function () {
  $("#citas").DataTable({
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
  const documento = document.getElementById("txtdocumento").value;
  const edad = document.getElementById("txtedad").value;
  const telefono = document.getElementById("txttelefono").value;
  const email = document.getElementById("txtemail").value;
  const cita = document.getElementById("txtcita").value;

if(nombre=="" || documento=="" || edad=="" || telefono=="" || email=="" || cita==""){
  alert("debe ingresar la informacion en todos los campos")
}else{


  let dato = {
      nombre,
      documento,
      edad,
      telefono,
      email,
      cita,
    
  };

  if (localStorage.getItem("citas") === null) {
    let citas = [];
      citas.push(dato);
      localStorage.setItem("citas", JSON.stringify(citas))
      
  } else {
      
    let citas = JSON.parse(localStorage.getItem("citas"));  
    citas.push(dato);
    localStorage.setItem("citas", JSON.stringify(citas));

   
  }

  loadFromLocalStorage();
  document.getElementById("contactenos").reset();
  document.getElementById("miForm2").reset();
document.getElementById("miForm1").reset();
}
}



function deleteTask(id) {
  console.log(id);
  let citas = JSON.parse(localStorage.getItem("citas"));
  
  for (let i= 0; i < citas.length; i++){
    if (i == id){
      citas.splice(i, 1);
    }

  }

localStorage.setItem("citas", JSON.stringify(citas));

if(citas.length == 0){
  localStorage.removeItem('citas')


}
  loadFromLocalStorage();
  location.reload();

}


function editar(id) {
  console.log(id);
  btnEditar.disabled = false;

  btnGuardar.disabled = true;
  let citas = JSON.parse(localStorage.getItem("citas"));

  
  for (let i = 0; i < citas.length; i++) {
      if (i == id) {

       
        document.getElementById("txtnombre").value = citas[i].nombre;
        document.getElementById("txtdocumento").value = citas[i].documento;
        document.getElementById("txtedad").value = citas[i].edad;
        document.getElementById("txttelefono").value = citas[i].telefono;
        document.getElementById("txtemail").value = citas[i].email;
        document.getElementById("txtcita").value = citas[i].cita;




          localStorage.setItem("editando", id);
      }
  }
}

function actualizarfila() {
  let idedit = localStorage.getItem("editando");
let citas = JSON.parse(localStorage.getItem("citas"));
for(let i = 0; i < citas.length; i++){
 if( i == idedit){
  let nombre = document.getElementById("txtnombre").value;
  let documento = document.getElementById("txtdocumento").value;
  let edad = document.getElementById("txtedad").value;
  let telefono = document.getElementById("txttelefono").value;
  let email = document.getElementById("txtemail").value;
  let cita = document.getElementById("txtcita").value;

  citas[i].nombre = nombre;
  citas[i].documento = documento;
  citas[i].edad = edad;
  citas[i].telefono = telefono;
  citas[i].email = email;
  citas[i].cita = cita;
 }
}


localStorage.setItem("citas", JSON.stringify(citas)); 

  btnEditar.disabled = true;
  btnGuardar.disabled = false;
  loadFromLocalStorage();
  location.reload();
}

function loadFromLocalStorage() {
var citas = [],
dataInLocalStorage = localStorage.getItem("citas"),
citashead = document.querySelector('#citas thead'),
citasbody = document.querySelector('#citas tbody');
     


  if (dataInLocalStorage == null) {
    citashead.innerHTML = "";
      console.log('hola')
  } else {
    citas = JSON.parse(dataInLocalStorage);
      // Draw TR from TBODY
      citasbody.innerHTML = "";
     
citas.forEach(function (e, i){
var tr = document.createElement("tr"),
tdId = document.createElement("td"),
nombre = document.createElement("td"),
documento = document.createElement("td"),
edad = document.createElement("td"),
telefono = document.createElement("td"),
email = document.createElement("td"),
cita = document.createElement("td"),

buttons = document.createElement("td"),
btnRemove = document.createElement("button"),
btneditar = document.createElement("button");

tdId.innerHTML = i + 1;
nombre.innerHTML = e.nombre;
documento.innerHTML = e.documento;
edad.innerHTML = e.edad;
telefono.innerHTML = e.telefono;
email.innerHTML = e.email;
cita.innerHTML = e.cita;
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
          tr.appendChild(documento);
          tr.appendChild(edad);
          tr.appendChild(telefono);
          tr.appendChild(email);
          tr.appendChild(cita);
          tr.appendChild(buttons)

          citasbody.appendChild(tr);
        });
}

}




loadFromLocalStorage();