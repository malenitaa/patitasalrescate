document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.querySelectorAll(".error-message").forEach(function (errorSpan) {
            errorSpan.textContent = "";
        });

        let hasErrors = false;

        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value === "" || !emailRegex.test(email.value)) {
            document.getElementById("error-email").textContent =
                "El campo de correo electrónico es obligatorio y debe tener un formato válido.";
            hasErrors = true;
        }

        const textAnimals = document.getElementById("nombre-apellido");
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (textAnimals.value === "" || !nameRegex.test(textAnimals.value)) {
            document.getElementById("error-nombre-apellido").textContent =
                "Son necesarios el nombre y apellido, y solo deben contener letras.";
            hasErrors = true;
        }

        const textOtherAnimals = document.getElementById("ciudad");
        if (textOtherAnimals.value === "") {
            document.getElementById("error-ciudad").textContent =
                "Por favor, indica en qué ciudad te encuentras.";
            hasErrors = true;
        }

        const textIfHoliday = document.getElementById("telefono");
        const phoneRegex = /^[0-9]+$/;
        if (textIfHoliday.value === "" || !phoneRegex.test(textIfHoliday.value)) {
            document.getElementById("error-telefono").textContent =
                "Por favor, indica un número de teléfono válido (solo números).";
            hasErrors = true;
        }

        const room = document.getElementById("mensaje");
        if (room.value === "") {
            document.getElementById("error-mensaje").textContent =
                "Por favor, deja un breve mensaje.";
            hasErrors = true;
        }

        if (!hasErrors) {
            var myModal = new bootstrap.Modal(
                document.getElementById("successModal"),
                {
                    keyboard: false,
                }
            );
            myModal.show();
            form.reset();

            document.querySelectorAll(".error").forEach(function (errorSpan) {
                errorSpan.textContent = "";
            });
        } else {
            var myModal = new bootstrap.Modal(document.getElementById("failModal"), {
                keyboard: false,
            });
            myModal.show();
        }
    });
});
