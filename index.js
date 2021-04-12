// variables declared
let selectedRow = null,
    selcetRowFirst,
    selectedRowSecond,
    selectedRowThird,
    selcetRowFourth,
    firstNameId, lastNameId, phoneNumberId, cityId, form;

// assigning the variables
firstNameId = document.getElementById("firstName");
lastNameId = document.getElementById("lastName");
phoneNumberId = document.getElementById("phoneNumber");
city = document.getElementById("city");
form = document.querySelector("form");
selcetRowFirst = selectedRow.cells[0].innerHtml;
selectedRowSecond = selectedRow.cells[1].innerHtml;
selectedRowThird = selectedRow.cells[2].innerHtml;
selcetRowFourth = selectedRow.cells[3].innerHtml;

// submit function
const onFormSubmit = e => {
    e.preventDefault();
    let readData = readFromData();
    if (selectedRow === null) {
        //insertNewRecord(readData);
    } else {
        updateRecord(readData);
    }
    resetForm();
}

// reseting the form data
const resetForm = () => {
    firstNameId.value = "";
    lastNameId.value = "";
    phoneNumberId.value = "";
    cityId = "";
    selectedRow = null;
}

// editing the particular td
const onEdit = td => {
    selectedRow = td.parentElement.parentElement;
    firstNameId.value = selcetRowFirst;
    lastNameId.value = selectedRowSecond;
    phoneNumberId.value = selectedRowThird;
    cityId.value = selcetRowFourth;
}

// updating the td
const updateRecord = formData => {
    selcetRowFirst = formData.firstName;
    selectedRowSecond = formData.lastNameId;
    selectedRowThird = formData.phoneNumber;
    selcetRowFourth = formData.city;
}

//deleting the td
const onDelete = td => {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// eventlistener in the form
form.addEventListener("submit", onFormSubmit);