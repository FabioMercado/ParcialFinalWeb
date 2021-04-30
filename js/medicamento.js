document.querySelector('#btnGuardar').addEventListener('click', guardar);
drawUsuariosTabla();

function guardar(){
    var gNombre = document.querySelector('#txtnombre').value,
        gApellido = document.querySelector('#txtapellido').value,
        gFecha = document.querySelector('#txtfecha').value,
        gDocumento = document.querySelector('#txtdocumento').value,
        gEdad = document.querySelector('#txtedad').value,
        gGenero = document.querySelector('#txtgenero').value,
        gTelefono = document.querySelector('#txttelefono').value,
        gEmail = document.querySelector('#txtemail').value,
        gDepartamento = document.querySelector('#txtdepartamento').value,
        gCiudad = document.querySelector('#txtciudad').value,
        gDireccion = document.querySelector('#txtdireccion').value,
        gCodigo = document.querySelector('#codigopostal').value,
        gMedicamento = document.querySelector('#txtm').value,
        gUnidad = document.querySelector('#unidades').value;


        if(gNombre!="" && gApellido!="" && gFecha!="" && gDocumento!="" && gEdad!="" && gGenero!="" && gTelefono!="" && gEmail!="" && gDepartamento!="" && gCiudad!="" && gDireccion!="" && gCodigo!="" && gMedicamento!="" && gUnidad!=""){
            addUsuarioToSystem(gNombre,gApellido,gFecha,gDocumento,gEdad,gGenero,gTelefono,gEmail,gDepartamento,gCiudad,gDireccion,gCodigo,gMedicamento,gUnidad);
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
          apellidoCell = row.insertCell(1),
          fechaCell = row.insertCell(2),
          documentoCell = row.insertCell(3),
          edadCell = row.insertCell(4),
          generoCell = row.insertCell(5),
          telefonoCell = row.insertCell(6),
          emailCell = row.insertCell(7),
          departamentoCell = row.insertCell(8),
          ciudadCell = row.insertCell(9),
          direccionCell = row.insertCell(10),
          codigoCell = row.insertCell(11),
          medicamentoCell = row.insertCell(12),
          unidadCell = row.insertCell(13);






      nombreCell.innerHTML = list[i].nombre;
      apellidoCell.innerHTML = list[i].apellido;
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
      medicamentoCell.innerHTML = list[i].medicamento;
      unidadCell.innerHTML = list[i].unidad;




    tbody.appendChild(row);

}

}