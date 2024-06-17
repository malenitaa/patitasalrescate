document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.querySelectorAll(".error-message").forEach(function (errorSpan) {
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

        const freeSpace = document.getElementById("free-space");
        if (freeSpace.value === "") {
            document.getElementById("error-free-space").textContent =
                "Por favor, indica si posees algún espacio al aire libre.";
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
            var myModal = new bootstrap.Modal(
                document.getElementById("failModal"),
                {
                    keyboard: false,
                }
            );
            myModal.show();
        }
    });
});
