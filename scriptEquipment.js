`use strict`
function consulDatos() {
    fetch("./informacion-json/informacion-equipment.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("no response");
            }
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data => {
            const seleccionarEquipment = document.querySelector("#equipment") 
            console.log(data)
            for (let i = 0; i < data.tarjetas.length; i++) {
                const crearDoc = document.createElement("div")
                crearDoc.classList.add("row") 
                const crearImagen = document.createElement("img")
                crearImagen.classList.add("foto") 
                crearImagen.src = (data.tarjetas[i].imagen)
                console.log(data.tarjetas[i].imagen)
                console.log(crearImagen)
                crearDoc.innerHTML = `
                <span class="linkedin">${data.tarjetas[i].link}</span> 
                <br>
                <span class="nombre">${data.tarjetas[i].nombre}</span> 
                <br>               
                <span class="cargo">${data.tarjetas[i].cargo}</span>
                
                `
                              
                crearDoc.appendChild(crearImagen)
                seleccionarEquipment.appendChild(crearDoc)
            }



        })
        .catch(error => {
            console.error(error, "errorrrrr");
        });


}

consulDatos();

//document.querySelector('aqui va el id')
//document.createElement(aqui va el elemento)  - crea un elemento div
// alt 96 comillas acostadas para el iner
//${data.tarjetas.imagen}