// variables declared
let selectedRow = null,
    firstNameId, lastNameId, phoneNumberId, cityId, form;

// assigning the variables
firstNameId = document.getElementById("firstName");
lastNameId = document.getElementById("lastName");
phoneNumberId = document.getElementById("phoneNumber");
cityId = document.getElementById("city");
form = document.querySelector("form");

// submit function
const onFormSubmit = e => {
    e.preventDefault();
    let readData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(readData);
    } else {
        updateRecord(readData);
    }
    resetForm();
};

// reseting the form data
const resetForm = () => {
    firstNameId.value = "";
    lastNameId.value = "";
    phoneNumberId.value = "";
    cityId.value = "";
    selectedRow = null;
};

//reading data from the form
const readFormData = () => {
    let formData = {};
    formData.firstName = firstNameId.value;
    formData.lastName = lastNameId.value;
    formData.phoneNumber = phoneNumberId.value;
    formData.city = cityId.value;
    return formData;
};

//Inserting data to the table
const insertNewRecord = (data) => {
    console.log(data);
    let table = document
        .getElementById("employeeList")
        .getElementsByTagName("tbody")[0]; //inserts rows in the its first child

    let newRow = table.insertRow(-1); //adds the row from bottom
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

// editing the particular td
const onEdit = td => {
    selectedRow = td.parentElement.parentElement;
    firstNameId.value = selectedRow.cells[0].innerText;
    lastNameId.value = selectedRow.cells[1].innerText;
    phoneNumberId.value = selectedRow.cells[2].innerText;
    cityId.value = selectedRow.cells[3].innerText;
};

// updating the td
const updateRecord = formData => {
    selectedRow.cells[0].innerText = formData.firstName;
    selectedRow.cells[1].innerText = formData.lastName;
    selectedRow.cells[2].innerText = formData.phoneNumber;
    selectedRow.cells[3].innerText = formData.city;
};

//deleting the td
const onDelete = td => {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
};

// eventlistener in the form
form.addEventListener("submit", onFormSubmit);