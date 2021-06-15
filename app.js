fetch("user.json")
.then(function(response) {
    return response.json();
})
.then(function (data) {
    //console.log(data);
    if(data.length != 0) {
        // dat = Math.ceil((data.length)/2);
        let arr = '';

        data.forEach(function(u, index) {            
            arr += "<tr class='tr'>";
            arr += `<td>${index+1}</td>`;
            // arr += "<td class = 'td'>"+u.id+"</td>";
            arr += "<td>"+u.salutation+"</td>";
            arr += "<td>"+u.first_name+"</td>";
            arr += "<td>"+u.last_name+"</td>";
            arr += "<td>"+u.email+"</td>";
            arr += "<td>"+u.gender+"</td>";
            arr += "<td>"+u.phone+"</td>";
            arr += "<td>"+u.country+"</td>";
            arr += "<td>"+u.state+"</td>";
            arr += "<td>"+u.city+"</td>";
            arr += "<td>"+u.date+"</td>";

            arr += `<td><i class="far fa-trash-alt delete"  onclick = "deleteNotes(this)">&nbsp;&nbsp;
            </i><i class= "far fa-edit edit"  onclick = "editNotes(this)"></i></td></tr>`;
        })  
        document.getElementById('data').innerHTML = arr;   
        // console.log(Math.ceil(data.length/2));

    }    
})

// Model Popup
var modelBtn = document.querySelector('.model-button');
var modelBg = document.querySelector('.model-bg');
var modelClose = document.querySelector('.model-close');
const mbtn = document.querySelector('.mbtn');
    // mbtn.style.visibility = "visible";
modelBtn.addEventListener('click', function() {
    const mbtn = document.querySelector('.mbtn');
    modelBg.classList.add('bg-active');
    mbtn.style.visibility = "visible";
    const mbtnedit = document.querySelector('.mbtn-edit');
    mbtnedit.style.visibility = "hidden";
})

modelClose.addEventListener('click', function() {
    modelBg.classList.remove('bg-active');
})




function validateForm() {
    // let id = document.getElementById('id').value;
    let salutation = document.getElementById('salutation').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    // let gender = document.getElementById('gender').value;
    let phone = document.getElementById('phone').value;
    if(salutation.length > 3) {
        document.getElementById('msgSalutation').innerHTML = "**Salutation can't large 3";
        return false;
    }
    if(isNaN(phone)) {
        document.getElementById('msgMobile').innerHTML = "**Mobile only digit";
        return false;
    }
    if(phone.length !=10) {
        document.getElementById('msgMobile').innerHTML = "**Mobile contains 10 digit";
        return false;
    }
    else {
        addRow();
        
    }

}






// let form = document.getElementById('form');
// const id = document.getElementById('id');
// let salutation = document.getElementById('salutation');
// let fname = document.getElementById('fname');
// let lname = document.getElementById('lname');

// form.addEventListener('submit', function(e) {

    
//     validateForm();
//     e.preventDefault();
// })






// Adding Row
function addRow() {    
    // Hiding edit Button and show Add button
    const mbtn = document.querySelector('.mbtn');
    mbtn.style.visibility = "visible";
    const mbtnedit = document.querySelector('.mbtn-edit');
    mbtnedit.style.visibility = "hidden";
    
    var id = document.getElementById('id').value;
    var salutation = document.getElementById('salutation').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    // var phone = document.getElementById('male').value;
    var country = document.getElementById('input').value;
    var state = document.getElementById('select').value;
    var city = document.getElementById('city').value;
    
    // if(id===''||salutation===''||fname==''||lname===''||email===''||phone===''||country===''||state===''||city==='')
    // {
    //     alert('Enter data');      
    // } else {
     

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let current = day+'-'+month+'-'+year;


    let table = document.getElementById('customers');

    var rate_value;
    if (document.getElementById('male').checked){
        rate_value = document.getElementById('male').value;
        
    }else if (document.getElementById('female').checked){
        rate_value = document.getElementById('female').value;
        
    }else if (document.getElementById('other').checked){
        rate_value = document.getElementById('other').value;
    } 

    
    // console.log(fname,lname,age);
    var newRow = table.insertRow(table.last);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);
    var cell10 = newRow.insertCell(9);
    var cell11 = newRow.insertCell(10);
    var cell12 = newRow.insertCell(11);

    cell1.innerHTML = id;
    cell2.innerHTML = salutation;
    cell3.innerHTML = fname;
    cell4.innerHTML = lname;
    cell5.innerHTML = email;
    cell6.innerHTML = rate_value;
    cell7.innerHTML = phone;
    cell8.innerHTML = country;
    cell9.innerHTML = state;
    cell10.innerHTML = city;
    cell11.innerHTML = current;
    cell12.innerHTML = `<i class="far fa-trash-alt delete" onclick = "deleteNotes(this)"></i>
                        <i class= "far fa-edit edit" onclick = "editNotes(this)"></i>`
    resetForm();
    random();
    modelBg.classList.remove('bg-active');
    showAlert('Successfully Added!!!', 'success');

   }
// }

function random() {
    var a = document.getElementById('input').value;
    // console.log(a)
    if(a === 'India') {
        var array = ["Kerala", "Tamilnadu", "Utter Predesh", "Punchab"];

    } else if(a === 'USA') {
        var array = ["Washington", "Texas", "Ontario"];
    }
    else {
        var array = [];
    }
    var string = "";
    for(let i=0; i<array.length; i++) {
        string = string+"<option>"+array[i]+"</option>";
    }
    string = "<select name='lol'>"+string+"<select>";
    document.getElementById('select').innerHTML = string;
}


function resetForm() {
    document.getElementById('id').value = '';
    document.getElementById('salutation').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('male').value = '';
    document.getElementById('female').value = '';
    document.getElementById('other').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('input').value = '';
    document.getElementById('select').value = '';
    document.getElementById('city').value = '';
}

// Show alert
function showAlert(message, className) {
   
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.example');
    const form = document.querySelector('#filter');
    console.log(form)
    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    },2000);
}


// Delete Method
function deleteNotes(r) {
    // let tr = document.querySelector('.tr');
    // let td = document.querySelector('.td');
    // let data = document.getElementById('data');
    let confirmDelete = confirm('Are you want to delete'); 
    if(confirmDelete === true) {
        var i = r.parentNode.parentNode.remove();
        // data.deleteRow(i);
        console.log(i);
        showAlert('You are successfully deleted!', 'success');
    }
}



function editNotes() {
    const mbtn = document.querySelector('.mbtn');
    modelBg.classList.add('bg-active');
    mbtn.style.visibility = "hidden";
    const mbtnedit = document.querySelector('.mbtn-edit');
    mbtnedit.style.visibility = "visible";

    let table = document.getElementById('customers'),rIndex;
    for(var i=0; i<table.rows.length; i++) {
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex;
            console.log(rIndex);
            document.getElementById('id').value = this.cells[0].innerHTML;
            document.getElementById('salutation').value = this.cells[1].innerHTML;
            document.getElementById('fname').value = this.cells[2].innerHTML;
            document.getElementById('lname').value = this.cells[3].innerHTML;
            document.getElementById('email').value = this.cells[4].innerHTML;
            document.getElementById('female').checked = this.cells[5].innerHTML;
            document.getElementById('other').checked = this.cells[5].innerHTML;
            document.getElementById('male').checked = this.cells[5].innerHTML;
            document.getElementById('phone').value = this.cells[6].innerHTML;
            document.getElementById('input').value = this.cells[7].innerHTML;
            document.getElementById('select').value = this.cells[8].innerHTML;
            document.getElementById('city').value = this.cells[9].innerHTML;
            
        }
    }
    // const mbtn = document.querySelector('.mbtn');
    // modelBg.classList.add('bg-active');
    // mbtn.style.visibility = "hidden";
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let current = day+'-'+month+'-'+year;

    // const mbtnedit = document.querySelector('.mbtn-edit');
    // mbtnedit.style.visibility = "visible";
    document.getElementById('new').addEventListener('click', function(e) {
        // if(id.value==''||salutation.value===''||fname.value==''||lname.value===''||email.value===''||phone.value===''||country.value===''||state.value===''||city.value==='') {
        //     alert('error');
        // } 
        // else {
        table.rows[rIndex].cells[0].innerHTML = document.getElementById('id').value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById('salutation').value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById('fname').value;
        table.rows[rIndex].cells[3].innerHTML = document.getElementById('lname').value;
        table.rows[rIndex].cells[4].innerHTML = document.getElementById('email').value;
        table.rows[rIndex].cells[5].innerHTML = document.getElementById('male').value;
        table.rows[rIndex].cells[5].innerHTML = document.getElementById('female').value;
        table.rows[rIndex].cells[6].innerHTML = document.getElementById('phone').value;
        table.rows[rIndex].cells[7].innerHTML = document.getElementById('input').value;
        table.rows[rIndex].cells[8].innerHTML = document.getElementById('select').value;
        table.rows[rIndex].cells[9].innerHTML = document.getElementById('city').value;
        table.rows[rIndex].cells[10].innerHTML = current;

        
        modelBg.classList.remove('bg-active');
        // showAlert('Successfully Edited Values!!!', 'success');
        // resetForm();

        e.preventDefault();
    })
}








// // function editRow() {
// //     let table = document.getElementById('customers'),rIndex;
// //     table.rows[rIndex].cells[0].innerHTML = document.getElementById('id').value;
// //     table.rows[rIndex].cells[1].innerHTML = document.getElementById('salutation').value;
// //     table.rows[rIndex].cells[2].innerHTML = document.getElementById('fname').value;
// // }




function searchFun() {
    let count = document.getElementById('data').rows[0].cells.length;
    // console.log(count);
    var filterData = document.getElementById('filter').value.toLowerCase();
    // console.log(filterData);
    if(filterData != null) {
        let table = document.getElementById('data');
        let tr = table.getElementsByTagName('tr');
        for(let i=0; i<tr.length; i++) {
            let flag = 0;
            for(let j=0; j<count; j++) {
                td = tr[i].getElementsByTagName('td')[j];
                if(td) {
                    if(td.innerHTML.toLowerCase().indexOf(filterData) > -1) {
                        flag =1;
                    } else {}
                }
            }
        if(flag===1) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}
}






let th = document.getElementsByTagName('th');
for(let c=0; c<th.length; c++) {
    th[c].addEventListener('click', item(c));
}

function item(c){

    return function() {
        console.log(c)
        sortTable(c);
    }
}

// Sort
function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("customers");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[c];
        y = rows[i + 1].getElementsByTagName("TD")[c];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }


// function displayData() {
//     const form = document.getElementById('form');
//     var id = document.getElementById('id');
//     var salutation = document.getElementById('salutation');
//     var fname = document.getElementById('fname');
//     var lname = document.getElementById('lname');
//     var email = document.getElementById('email');
//     var phone = document.getElementById('phone');
//     var country = document.getElementById('input');
//     var state = document.getElementById('select');
// }
// // function validate() {
// //     displayData();

// // }
