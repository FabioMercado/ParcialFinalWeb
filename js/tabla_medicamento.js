$(document).ready(function () {
  $("#farmacia").DataTable({
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
  
  const ciudad = document.getElementById("txtciudad").value;
  const direccion = document.getElementById("txtdireccion").value;
  const medicamento = document.getElementById("txtmedicamento").value;
  const cantidad = document.getElementById("txtcantidad").value;

if(nombre==""|| documento=="" || edad=="" || telefono=="" || ciudad==""|| direccion=="" || medicamento=="" || cantidad=="" ){
alert("debe ingresar la informacion en todos los campos")
}else{
 var precio = parseFloat(cantidad)*3000;

  let farmacias = {
    nombre,
    documento,
    edad,
    telefono,
    ciudad,
    direccion,
    medicamento,
    cantidad,
    precio,
};

if (localStorage.getItem("farmacia") === null) {
    let farmacia = [];
    farmacia.push(farmacias);
    localStorage.setItem("farmacia", JSON.stringify(farmacia));
} else {
    let farmacia = JSON.parse(localStorage.getItem("farmacia"));
    farmacia.push(farmacias);
    localStorage.setItem("farmacia", JSON.stringify(farmacia));
}

loadFromLocalStorage();
document.getElementById("miForm2").reset();
document.getElementById("miForm1").reset();


}




}

function deleteTask(id) {
  console.log(id);
  let farmacia = JSON.parse(localStorage.getItem("farmacia"));
  for (let i = 0; i < farmacia.length; i++) {
    if (i == id) {

      farmacia.splice(i, 1);
    }
  }


  localStorage.setItem("farmacia", JSON.stringify(farmacia));
  if(farmacia.length == 0){
    localStorage.removeItem('farmacia')
  }
  loadFromLocalStorage();
  location.reload();
}


function editar(id) {
  console.log(id);
  btnEditar.disabled = false;

  btnGuardar.disabled = true;
  let farmacia = JSON.parse(localStorage.getItem("farmacia"));
  for (let i = 0; i < farmacia.length; i++) {
      if (i == id) {
          
          document.getElementById("txtnombre").value = farmacia[i].nombre;
          document.getElementById("txtdocumento").value = farmacia[i].documento;
          document.getElementById("txtedad").value = farmacia[i].edad;
          document.getElementById("txttelefono").value = farmacia[i].telefono;
          document.getElementById("txtciudad").value = farmacia[i].ciudad;
          document.getElementById("txtdireccion").value = farmacia[i].direccion;
          document.getElementById("txtmedicamento").value = farmacia[i].medicamento;
          document.getElementById("txtcantidad").value = farmacia[i].cantidad;



          localStorage.setItem("editando", id);
      }
  }
}

function actualizarfila() {
  let idedit = localStorage.getItem("editando");

  let farmacia = JSON.parse(localStorage.getItem("farmacia"));
  for (let i = 0; i < farmacia.length; i++) {
      if (i == idedit) {
          let nombre = document.getElementById("txtnombre").value;
          let documento = document.getElementById("txtdocumento").value;
          let edad = document.getElementById("txtedad").value;
          let telefono = document.getElementById("txttelefono").value;
          let ciudad = document.getElementById("txtciudad").value;
          let direccion = document.getElementById("txtdireccion").value;
          let medicamento = document.getElementById("txtmedicamento").value;
          let cantidad = document.getElementById("txtcantidad").value;
          var precio = parseFloat(cantidad)+3000;
          

          farmacia[i].nombre = nombre;
          farmacia[i].documento = documento;
          farmacia[i].edad = edad;
          farmacia[i].telefono = telefono;
          farmacia[i].ciudad = ciudad;
          farmacia[i].direccion = direccion;
          farmacia[i].medicamento = medicamento;
          farmacia[i].cantidad = cantidad;
          farmacia[i].precio = precio;

      }
  }
  localStorage.setItem("farmacia", JSON.stringify(farmacia));
  btnEditar.disabled = true;
  btnGuardar.disabled = false;
  loadFromLocalStorage();
  location.reload();
}

function loadFromLocalStorage() {
  var farmacia = [],
      dataInLocalStorage = localStorage.getItem("farmacia"),
      farmaciahead = document.querySelector('#farmacia thead'),
      farmaciabody = document.querySelector("#farmacia tbody");


  if (dataInLocalStorage == null) {
      farmaciahead.innerHTML = "";
      console.log('hola')
  } else {
      farmacia = JSON.parse(dataInLocalStorage);
      // Draw TR from TBODY
      farmaciabody.innerHTML = "";

  
      farmacia.forEach(function(x, i){
          var tr = document.createElement("tr"),
              tdId = document.createElement("td"),
              nombre = document.createElement("td"),
              documento = document.createElement("td"),
              edad = document.createElement("td"),
              telefono = document.createElement("td"),
              ciudad = document.createElement("td"),
              direccion = document.createElement("td"),
              medicamento = document.createElement("td"),
              cantidad = document.createElement("td"),
              precio = document.createElement("td"),
              buttons = document.createElement("td"),
              btnRemove = document.createElement("button"),
              btneditar = document.createElement("button");

          tdId.innerHTML = i + 1;
          nombre.innerHTML = x.nombre;
          documento.innerHTML = x.documento;
          edad.innerHTML = x.edad;
          telefono.innerHTML = x.telefono;
          ciudad.innerHTML = x.ciudad;
          direccion.innerHTML = x.direccion;
          medicamento.innerHTML = x.medicamento;
          cantidad.innerHTML = x.cantidad;
          precio.innerHTML = x.precio;

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
          tr.appendChild(ciudad);
          tr.appendChild(direccion);
          tr.appendChild(medicamento);
          tr.appendChild(cantidad);
          tr.appendChild(precio);
          tr.appendChild(buttons);

      
          farmaciabody.appendChild(tr);

      });
  }


}

loadFromLocalStorage();