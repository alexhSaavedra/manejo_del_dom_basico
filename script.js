var calc1 = document.querySelector("#calculo1");
var calc2 = document.querySelector("#calculo2");
var btn = document.querySelector("#btn");
var result = document.querySelector("#resultado");

btn.addEventListener("click", buttonCLick);

/* function buttonCLick(event) {
  event.preventDefault();
  result.innerHTML = `El resultado es ${
    Number(calc1.value) + Number(calc2.value)
  }`;
}
 */

function buttonCLick(event) {
  event.preventDefault();
  result.innerHTML = `El resultado es ${
    Number(calc1.value) + Number(calc2.value)
  }`;
}
