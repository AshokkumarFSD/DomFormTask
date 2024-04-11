const userForm = document.querySelector("#user-data-form");

// document.querySelector("#first_name").appendChild();
// let somPara = document.createElement("p");
// somPara.innerHTML = "asdsdf"
// console.log(somPara);
// document.querySelector("#first_name").appendChild(somPara);

userForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const firstName = document.querySelector("#first_name").value; 
    const lastName = document.querySelector("#last_name").value; 
    const address = document.querySelector("#address").value; 
    const pincode = document.querySelector("#pincode").value; 
    const state = document.querySelector("#state").value; 
    const country = document.querySelector("#country").value; 
    let genders = document.getElementsByName('gender');

     
    var selected = false;
    let genderSelectedVal = "";
    
    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selected = true;
            if(i==0)
            {
                genderSelectedVal = "Male"
            }else if(i==1)
            {
                genderSelectedVal = "Female";
            }
            else{
                genderSelectedVal ="Others";
            }
            break;
        }
    }
    
    var foodValues = [];
    var foodCheckboxes = document.getElementsByName('food');
    for (var i = 0; i < foodCheckboxes.length; i++) {
        if (foodCheckboxes[i].checked) {
            foodValues.push(foodCheckboxes[i].value);
        }
    }
    console.log(foodValues);

    if (isEmpty(firstName)) {
        alert("Enter First name");
    }
    else if (isEmpty(lastName)) {
        alert("Enter last name");
    }
    else if (isEmpty(address)) {
        alert("Enter address");
    }
    else if (isEmpty(pincode)) {
        alert("Enter pincode");
    }
    else if (isEmpty(state)) {
        alert("Enter state");
    }
    else if (isEmpty(country)) {
        alert("Enter country");
    }
    else if (!selected) {
        alert("Please select your gender.");
    }
    else  if (foodCheckboxes.length < 2) {
        alert("Please select at least two food.");
    }
    else{
        console.log("Enter to the table");
        let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.rows.length);
        let allValues = [firstName,lastName,address,pincode,genderSelectedVal,foodValues.join(", "),state,country];
        for (let value of allValues.values()) {
            let cell = newRow.insertCell();
            let valuePara = document.createElement("p");
            valuePara.innerHTML = value;
            cell.appendChild(valuePara);
        }
        userForm.reset();
    }

});


function isEmpty(input) {
    if (input) {
        return false;
    }
    else {
        return true;
    }
}