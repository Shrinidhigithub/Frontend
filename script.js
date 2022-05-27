
// JavaScript source code
var selectedRow = null;
function onFormSubmit(e) {

    event.preventDefault();
  
    submittoserver();
    if (selectedRow === null) {
        return true;
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

function submittoserver() {
    var formdata = JSON.stringify(readFormData());

    console.log(formdata);
    $.ajax({
        type: "POST",
        url: "http://localhost:8080/studentapi",
        data: formdata,
        success: function () {
            insertNewRecord(JSON.parse(formdata));

        },
        dataType: "json",
        contentType: "application/json"
    });
}

// Retrieve the data 
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["phone"] = document.getElementById("phone").value;
    return formData;
}

// Insert the data 
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phone;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<a onClick="onEdit(this)">Edit</a> <br></br> <a onClick="onDelete(this)">Delete</a>';

}


