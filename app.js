// Math's Tables Assignment

let inputform = document.getElementById(`form`);
let input = document.getElementById(`inputNumber`);
let table = document.getElementById(`tbody`);

inputform.addEventListener("submit", (event) => {
  event.preventDefault();
  let tableOf = input.value;
  tbody.innerHTML = "";

  for (let i = 1; i <= 10; i++) {

    tbody.innerHTML += `<tr">
        <td>${tableOf}</td>
        <td>X</td>
        <td>${i}</td>
        <td>= </td>
        <td>${tableOf * i}</td>
    </tr>`;
  }
  document.getElementById(`inp`).innerHTML = "of " + input.value;
});
