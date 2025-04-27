document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
  
    let formValido = true;
  
    // Nome
    if (nomeInput.value.trim() === "") {
      nomeInput.classList.add("is-invalid");
      formValido = false;
    } else {
      nomeInput.classList.remove("is-invalid");
    }
  
    // E-mail
    if (emailInput.value.trim() === "") {
      emailInput.classList.add("is-invalid");
      formValido = false;
    } else {
      emailInput.classList.remove("is-invalid");
    }
  
    // Telefone
    if (telefoneInput.value.trim() === "") {
      telefoneInput.classList.add("is-invalid");
      formValido = false;
    } else {
      telefoneInput.classList.remove("is-invalid");
      telefoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9\s()-]/g, "");
      });
    }
  
    if (formValido) {
      alert("Formulário enviado com sucesso!");
      
    }
  });