window.addEventListener("load", () =>{

    let form = document.querySelector("#form");

    let errorsHTML = document.querySelector(".errors"); 

        form.addEventListener("submit", function(e){

            let errorsList = [];

            let campoEmail = document.querySelector("#email")
            if(campoEmail.value == ""){
                errorsList.push ("Completa el campo correo")
            } /* else if (campoName.value.length < 5){
                errorsList.push("El nombre debe tener al menos 5 caracteres")
            } */
            
            let campoPrice = document.querySelector("#price")
            if(campoPrice.value == ""){
                errorsList.push ("Completa el campo precio")
            } 

            let campoStock = document.querySelector("#stock")
            if(campoStock.value == ""){
                errorsList.push ("Completa el campo stock")
            } 

            if (errorsList.length > 0){
                e.preventDefault();
                errorsHTML.innerHTML = "";
                errorsList.forEach(error => {
                    errorsHTML.innerHTML += "<li>" + error + "</li>"
                })
            }
            console.log("Se envia el formulario!");
        })
        /*agrego color de fondo a la etiqueta colores*/
        document.getElementById("color").addEventListener("change", function() {
            var colorSeleccionado = this.value;
            document.getElementById("color").className = colorSeleccionado;
          });

})