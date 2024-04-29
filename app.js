// Math's Tables Assignment

let input = parseInt(prompt("Please enter a digit that print the Table"));
let table = document.getElementById(`tbody`);

document.getElementById(`inp`).innerHTML = input;

input.addEventListener("submit", (event) => {
    event.preventDefault();
    let tableOf = input.value;
    table.innerHTML = "";
  
    for (let i = 1; i <= 10; i++) {
      table.innerHTML += `<tr">
          <td">${tableOf}</td>
          <td">X</td>
          <td">${i}</td>
          <td">= </td>
          <td">${tableOf * i}</td>
      </tr>`;
    }
    input.value = ""
  });