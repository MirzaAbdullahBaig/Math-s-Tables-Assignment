var inputform = document.getElementById("form");
var table = document.getElementById("tbody");
inputform.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputform = event === null || event === void 0 ? void 0 : event.target;
    var input = inputform === null || inputform === void 0 ? void 0 : inputform.firstElementChild;
    var tableOf = Number(input.value);
    table.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        table.innerHTML += "<tr\">\n    <td>".concat(tableOf, "</td>\n    <td>X</td>\n    <td>").concat(i, "</td>\n    <td>= </td>\n    <td>").concat(tableOf * i, "</td> \n    </tr>");
    }
    document.getElementById("inp").innerHTML = "of " + input.value;
});
