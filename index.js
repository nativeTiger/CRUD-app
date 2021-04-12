//reading data from the form
const readFormData = () => {
  var formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["phoneNumber"] = document.getElementById("phoneNumber").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
};

//Inserting data to the table
const insertNewRecord = (data) => {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];      //inserts rows in the its first child

  var newRow = table.insertRow(-1);    //adds the row from bottom
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phoneNumber;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
};


