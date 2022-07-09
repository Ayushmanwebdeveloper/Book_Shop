let a = false;
let b = false;
let c = false;
let d = false;
let e = false;
let f = false;
document.getElementById("checkoutbutton").disabled = true;
function validateName() {
    document.getElementById("checkoutbutton").disabled = true;
    if ((document.myForm.firstname.value.length) < 4) {
        document.myForm.firstname.style.borderColor = "red";
        (document.getElementById("fname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i> Name` + " " + "[Name must contain minimum 4 letters!]";
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.firstname.value)) {
        document.myForm.firstname.style.borderColor = "red";
        (document.getElementById("fname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i> Name` + " " + "[Name must contain letters only!]";
        return false;
    }
    if ((document.myForm.firstname.value.length) >= 4) {
        document.myForm.firstname.style.borderColor = "";
        (document.getElementById("fname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i> Name`;
    }
    if (document.myForm.firstname.value === '') {
        a = false;
    }
    if (document.myForm.firstname.value !== '') {
        a = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
    return (true);
}
function validateSurname() {
    document.getElementById("checkoutbutton").disabled = true;
    if ((document.myForm.surname.value.length) < 5) {
        document.myForm.surname.style.borderColor = "red";
        (document.getElementById("sname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i>Surname` + " " + "[Surname must contain minimum 5 letters!]";
        return false;
    }
    if ((document.myForm.surname.value.length) >= 5) {
        document.myForm.surname.style.borderColor = "";
        (document.getElementById("sname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i> Surname`;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.surname.value)) {
        document.myForm.surname.style.borderColor = "red";
        (document.getElementById("sname").previousElementSibling.innerHTML) = `<i class="fa fa-user"></i> Surname` + " " + "[Surname must contain letters only!]";
        return false;
    }
    if (document.myForm.surname.value === '') {
        b = false;
    }
    if (document.myForm.surname.value !== '') {
        b = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
    return (true);
}
function validateStreet() {
    document.getElementById("checkoutbutton").disabled = true;
    if ((document.myForm.street.value.length) < 5) {
        document.myForm.street.style.borderColor = "red";
        (document.getElementById("sadr").previousElementSibling.innerHTML) = `<i class="fa fa-address-card-o"></i>Street Address` + " " + "[Street Address must contain minimum 5 letters!]";
        return false;
    }
    if ((document.myForm.street.value.length) >= 5) {
        document.myForm.street.style.borderColor = "";
        (document.getElementById("sadr").previousElementSibling.innerHTML) = `<i class="fa fa-address-card-o"></i>Street Address`;
    }
    if (document.myForm.street.value === '') {
        c = false;
    }
    if (document.myForm.street.value !== '') {
        c = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
    return (true);
}
function validateHouse() {
    document.getElementById("checkoutbutton").disabled = true;
    if (isNaN(document.myForm.housenumber.value)) {
        document.myForm.housenumber.style.borderColor = "red";
        (document.getElementById("house").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>House number` + " " + "[House number must contain only numbers!]";
        return false;
    }
    if (!isNaN(document.myForm.housenumber.value)) {
        document.myForm.housenumber.style.borderColor = "";
        (document.getElementById("house").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>House number`;
    }
    if (Number(document.myForm.housenumber.value) < 0) {
        document.myForm.housenumber.style.borderColor = "red";
        (document.getElementById("house").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>House number` + " " + "[House number must contain only positive numbers!]";
        return false;
    }
    if (!Number(document.myForm.housenumber.value) < 0) {
        document.myForm.housenumber.style.borderColor = "";
        (document.getElementById("house").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>House number`;
    }
    if (document.myForm.housenumber.value === '') {
        d = false;
    }
    if (document.myForm.housenumber.value !== '') {
        d = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
    return (true);
}
function validateFlat() {
    document.getElementById("checkoutbutton").disabled = true;
    if (document.myForm.flatnumber.value[0] == '-') {
        document.myForm.flatnumber.style.borderColor = "red";
        (document.getElementById("flat").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>Flat number` + " " + "[Flat number must contain only positive numbers or - symbol in between!]";
        return false;
    }

    document.myForm.flatnumber.value.split('-').forEach(element => {
        if (isNaN(element)) {
            document.myForm.flatnumber.style.borderColor = "red";
            (document.getElementById("flat").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>Flat number` + " " + "[Flat number must contain only valid address( positive number or - symbol in between)!]";
            return false;
        }
        if (!isNaN(element)) {
            document.myForm.flatnumber.style.borderColor = "";
            (document.getElementById("flat").previousElementSibling.innerHTML) = `<i class="fa fa-institution"></i>Flat number`;
            return (true);
        }
    })
    if (document.myForm.flatnumber.value === '') {
        e = false;
    }
    if (document.myForm.flatnumber.value !== '') {
        e = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
}
function validateDOD() {
    document.getElementById("checkoutbutton").disabled = true;
    var today = new Date().getTime(),
        idate = document.myForm.datedelivery.value.split("-");
    console.log(idate[2], idate[1] - 1, idate[0])
    idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    console.log(idate)
    if ((today - idate) > 0) {
        document.myForm.datedelivery.style.borderColor = "red";
        (document.getElementById("DOD").previousElementSibling.innerHTML) = `<i class="fa fa-calendar"></i>Date of delivery` + " " + "[Date of delivery must be in the future!]";
    }
    if ((today - idate) < 0) {
        document.myForm.datedelivery.style.borderColor = "";
        (document.getElementById("DOD").previousElementSibling.innerHTML) = `<i class="fa fa-calendar"></i>Date of delivery`;
    }
    if (document.myForm.datedelivery.value === '') {
        f = false;
    }
    if (document.myForm.datedelivery.value !== '') {
        f = true;
    }
    if (a && b && c && d && e && f) {
        document.getElementById("checkoutbutton").disabled = false;
    }
}
function submitform() {
    document.getElementsByClassName("container")[0].innerHTML = `<h1>Dear, ${document.myForm.firstname.value} Thank you for your order! It will be delivered to ${document.myForm.flatnumber.value}, ${document.myForm.housenumber.value}, ${document.myForm.street.value}</h1>`;
}