var url='https://dog.ceo/api/breeds/image/random';
fetch(url)
.then(respuesta=> respuesta.json())
.then(data=>{
console.log(data)
 var ConsumirApi=document.getElementById("perro1");
 ConsumirApi.innerHTML=' <img width="410" height="300" src="'+data.message+'"/> ';

})
.catch(err=>console.log(err))

var url='https://dog.ceo/api/breeds/image/random';
fetch(url)
.then(respuesta=> respuesta.json())
.then(data=>{
console.log(data)
 var ConsumirApi=document.getElementById("perro2");
 ConsumirApi.innerHTML=' <img width="410" height="300" src="'+data.message+'"/> ';

})
.catch(err=>console.log(err))
var url='https://dog.ceo/api/breeds/image/random';
fetch(url)
.then(respuesta=> respuesta.json())
.then(data=>{
console.log(data)
 var ConsumirApi=document.getElementById("perro3");
 ConsumirApi.innerHTML=' <img width="410" height="300" src="'+data.message+'"/> ';

})
.catch(err=>console.log(err))
var url='https://dog.ceo/api/breeds/image/random';
fetch(url)
.then(respuesta=> respuesta.json())
.then(data=>{
console.log(data)
 var ConsumirApi=document.getElementById("perro4");
 ConsumirApi.innerHTML=' <img width="410" height="300" src="'+data.message+'"/> ';

})
.catch(err=>console.log(err))