"use strict";

function compararNumeros(
    numeroComparacao,
    numeroBase = 90210,
    limite = 100
  ) {
    const diferenca = Math.abs(numeroBase - numeroComparacao);

    if (numeroBase < numeroComparacao && diferenca > limite) {
      alert(
        "O código inserido é muito maior que o valor esperado ",
        "warning"
      );
    } else if (numeroBase > numeroComparacao && diferenca > limite) {
      alert(
        "O código inserido é muito menor que o valor esperado ",
        "info"
      );
    } else if (numeroBase > numeroComparacao) {
      alert("O código inserido esta proximo ao valor esperado ", "warning");
    } else if (numeroBase < numeroComparacao) {
      alert("O código inserido é maior que o valor esperado ", "warning");
    } else {
      const imagem = document.getElementById("image");
      imagem.src = "src/images/award_ribbon_check_mark_with_stars.jpg";
      alert("Parabens você inseriu o valor correcto!", "sucess",'output2');
    }
  }

  function alert(mensagem, estilo,id="output") {
    const p = document.getElementById(id);
    p.className = "";
    p.textContent = mensagem;
    p.classList.add(estilo);
  }

  function checkInputType(value) {
    return !isNaN(value) ? parseInt(value, 10) : null; 
  }

  function verification(input) {
    const value = checkInputType(input);
    // finalValue = value;
    if (value) {
      document.getElementById("output").innerText = "";
      //   console.log(value);

      compararNumeros(value);
    } else alert("Por favor insira um código inteiro", "warning");
  }

  function onKeyUp(nextIndex, event) {
    const input = event.target;
    const length = input.value.length;
    const inputs = document.querySelectorAll(".square-input");
    if (length === 1) {
      const nextInput = inputs[nextIndex];
      if (nextInput) {
        nextInput.focus();
      }
      const values = Array.from(inputs).map((input) => input.value);
      const joinedString = values.join("");
      verification(joinedString);
    }
  }