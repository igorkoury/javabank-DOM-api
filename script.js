var customerData = [
  {
    id: 1,
    firstName: "Rui",
    lastName: "Ferrão",
    email: "rui@gmail.com",
    phone: "777888",
  },
  {
    id: 2,
    firstName: "Sergio",
    lastName: "Gouveia",
    email: "sergio@gmail.com",
    phone: "777999",
  },
  {
    id: 3,
    firstName: "Bruno",
    lastName: "Ferreira",
    email: "bruno@gmail.com",
    phone: "777666",
  },
  {
    id: 4,
    firstName: "Rodolfo",
    lastName: "Matos",
    email: "rodolfo@gmail.com",
    phone: "777333",
  },
];

window.onload = function populateTable() {
  var table = "";

  for (var i in customerData) {
    table += "<tr>";
    table +=
      "<td>" +
      customerData[i].id +
      "</td>" +
      "<td>" +
      customerData[i].firstName +
      "</td>" +
      "<td>" +
      customerData[i].lastName +
      "</td>" +
      "<td>" +
      customerData[i].email +
      "</td>" +
      "<td>" +
      customerData[i].phone +
      "</td>" +
      "<td><button type='button' class='btn btn-warning'>Edit</button></td>" +
      "<td><button type='button' class='btn btn-danger'>Delete</button></td>";
    table += "</tr>";
  }

  document.getElementById("user-table").innerHTML = table;
};
