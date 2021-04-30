document.querySelector('#btnGuardar').addEventListener('click', guardar);
drawUsuariosTabla();

function guardar(){
    var gNombre = document.querySelector('#txtnombre').value,
        gFecha = document.querySelector('#txtfecha').value,
        gDocumento = document.querySelector('#txtdocumento').value,
        gEdad = document.querySelector('#txtedad').value,
        gGenero = document.querySelector('#txtgenero').value,
        gTelefono = document.querySelector('#txttelefono').value,
        gEmail = document.querySelector('#txtemail').value,
        gDepartamento = document.querySelector('#txtdepartamento').value,
        gCiudad = document.querySelector('#txtciudad').value,
        gDireccion = document.querySelector('#txtdireccion').value,
        gCodigo = document.querySelector('#codigopostal').value;

        if(gNombre!="" && gFecha!="" && gDocumento!="" && gEdad!="" && gGenero!="" && gTelefono!="" && gEmail!="" && gDepartamento!="" && gCiudad!="" && gDireccion!="" && gCodigo!=""){
            addUsuarioToSystem(gNombre,gFecha,gDocumento,gEdad,gGenero,gTelefono,gEmail,gDepartamento,gCiudad,gDireccion,gCodigo);
            drawUsuariosTabla();
           

        }else{
            alert("ERROR: CAMPOS VACIOS, POR FAVOR LLENAR TODOS LOS DATOS")
        }
    
}

function drawUsuariosTabla(){
    var list = getUsuariosList(),
        tbody = document.querySelector('#tablaUsuario tbody');
    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){
      var row = tbody.insertRow(i),
          nombreCell = row.insertCell(0),
          fechaCell = row.insertCell(1),
          documentoCell = row.insertCell(2),
          edadCell = row.insertCell(3),
          generoCell = row.insertCell(4),
          telefonoCell = row.insertCell(5),
          emailCell = row.insertCell(6),
          departamentoCell = row.insertCell(7),
          ciudadCell = row.insertCell(8),
          direccionCell = row.insertCell(9),
          codigoCell = row.insertCell(10);




      nombreCell.innerHTML = list[i].nombre;
      fechaCell.innerHTML = list[i].fecha;
      documentoCell.innerHTML = list[i].documento;
      edadCell.innerHTML = list[i].edad;
      generoCell.innerHTML = list[i].genero;
      telefonoCell.innerHTML = list[i].telefono;
      emailCell.innerHTML = list[i].email;
      departamentoCell.innerHTML = list[i].departamento;
      ciudadCell.innerHTML = list[i].ciudad;
      direccionCell.innerHTML = list[i].direccion;
      codigoCell.innerHTML = list[i].codigo;




    tbody.appendChild(row);

}

}