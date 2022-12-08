// let list = JSON.parse(localStorage.getItem("list"))
//   ? JSON.parse(localStorage.getItem("list"))
//   : [
//       {
//         name: "Xbox",
//         model: "Series X",
//         price: "R11 999.00",
//       },
//       {
//         name: "Nintendo",
//         model: "Switch",
//         price: "R8 499.00",
//       },
//       {
//         name: "Pc",
//         model: "Gaming PC",
//         price: "R4 320.00",
//       },
//       {
//         name: "Playstion",
//         model: 5,
//         price: "R17 999.00",
//       },
//       {
//         name: "God Of War",
//         model: "Ragnorok",
//         price: "R1 369.00",
//       },
//       {
//         name: "Call Of Duty",
//         model: "Modern Warefare 2",
//         price: "R1 379.00",
//       },
//       {
//         name: "FIFA",
//         model: 23,
//         price: "R1 069.00",
//       },
//       {
//         name: "MarioKart",
//         model: "Deluxe",
//         price: "R1 000.00",
//       },
//     ];
// function readData(list) {
//   document.querySelector("#list").innerHTML = "";
//   list.forEach((list, i) => {
//     document.querySelector("#list").innerHTML += `
//             <div class="col">
//             <div class="card">
//               <img
//               src="${list.img}"
//               class="card-img-top"
//               alt="..."
//               />
//               <div class="card-body">
//                 <h5 class="card-title">${list.name}</h5>
//                 <p class="card-text">${list.model}</p>
//                 <p class="card-text">${list.price}</p>
//                 <button onclick="xbox()">Add to cart</button>
//               </div>
//             </div>
//             </div>
//         `;
//   });
// }

// readData(list);

// function product() {
//     let type = document.querySelector("#item").value;
//     console.log(productSort);
//     if (type == "Product Filter") {
//         readData(list);
//         return;
//     }
//     let filteredList = list.filter((list) =>{
//         return list.type == type;
//     });
//     readData(filteredList);
// }

// function cost() {
//     let type = document.querySelector("#cost").value;
//     console.log(productSort);
//     if (type == "Price Filter") {
//         readData(list);
//         return;
//     }
//     let filteredList = list.filter((list) =>{
//         return list.type == type;
//     });
//     readData(filteredList);
// }

// function names() {
//   let admin =
//     document.getElementById("info").value !== undefined
//       ? document.getElementById("names").value
//       : "";
// }

var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["model"] = document.getElementById("model").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("info").getElementsByTagName("tbody")[0];
    var row = table.insertRow(table.length);
    var cell1 = newRow.insertRow(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertRow(1);
        cell2.innerHTML = data.model;
    var cell3 = newRow.insertRow(2);
        cell3.innerHTML = data.price;
    var cell4 = newRow.insertRow(3);
        cell4.innerHTML = `<button onClick='onEdit(this)'><ion-icon name="create-outline"></ion-icon
        ></button> <button onClick='onEdit(this)'><ion-icon name="trash-outline"></ion-icon
        ></button>`
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('info').deleteRow(row.rowIndex)
    }
    resetForm();
}
function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('model').value = selectedRow.cells[2].innerHTML;
    document.getElementById('price').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.model;
    selectedRow.cells[3].innerHTML = formData.price;
}
// /2/ document3querySelector("gaming-info").addEventListener("click", (e) => {
// /3   target = e.target;
// /3   if (target.deleteList.contains("delete")) {
//     target.parentElement.parentElement.remove();
//     showAlert("Student Data Deleted", "danger");
//   }
// });
