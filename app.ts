const inputform = document.getElementById(`form`)!;
const table = document.getElementById(`tbody`)!;

inputform.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputform = event?.target as HTMLFormElement;
  const input = inputform?.firstElementChild as HTMLInputElement;

  const tableOf = Number(input.value);

  table.innerHTML = "";

  for (let i:number = 1; i <= 10; i++) {
    table.innerHTML += `<tr">
    <td>${tableOf}</td>
    <td>X</td>
    <td>${i}</td>
    <td>= </td>
    <td>${tableOf * i}</td> 
    </tr>`;
  }
  document.getElementById(`inp`)!.innerHTML = "Here is the table of " + input.value;
  input.value = "";
});