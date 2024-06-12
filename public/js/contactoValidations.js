document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Limpia mensajes de error previos
        document.querySelectorAll(".error").forEach(function (errorSpan) {
            errorSpan.textContent = "";
        });

        let hasErrors = false;

        const email = document.getElementById("email");
        if (email.value === "") {
            document.getElementById("error-email").textContent =
                "El campo de correo electrónico es obligatorio.";
            hasErrors = true;
        }

        const textAnimals = document.getElementById("text-animals");
        if (textAnimals.value === "") {
            document.getElementById("error-text-animals").textContent =
                "Por favor, indica si estás interesado en algún animal en particular.";
            hasErrors = true;
        }

        const textOtherAnimals = document.getElementById("text-other-animals");
        if (textOtherAnimals.value === "") {
            document.getElementById("error-text-other-animals").textContent =
                "Por favor, indica si hay otros animales en la casa.";
            hasErrors = true;
        }

        const textIfHoliday = document.getElementById("text-if-holiday");
        if (textIfHoliday.value === "") {
            document.getElementById("error-text-if-holiday").textContent =
                "Por favor, indica quién cuidará del animal durante tus vacaciones.";
            hasErrors = true;
        }

        const room = document.getElementById("room");
        if (room.value === "") {
            document.getElementById("error-room").textContent =
                "Por favor, indica dónde vivirá el animal adoptado.";
            hasErrors = true;
        }

        // No hay un campo 'free-space' en el formulario proporcionado, así que esta validación se omite o se ajusta según sea necesario.

        if (!hasErrors) {
            // form.submit(); Comentado para evitar envíos reales durante la prueba
            alert("Formulario enviado correctamente.");
        }
    });
});