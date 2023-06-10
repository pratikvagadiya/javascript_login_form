
// new user page
function saveData() {
    event.preventDefault();
    let roles, fName, lName, eMail, psw;
    roles = document.getElementById("role").value;
    fName = document.getElementById("fname").value;
    lName = document.getElementById("lname").value;
    eMail = document.getElementById("email").value;
    psw = document.getElementById("psw").value;



    // validation form

    if (fName === "" && lName === "" && eMail === "" && psw === "") {
        alert("Please enter data")
        return false
    }
    else {
        let error = false;
        let fnameCheck = /^[a-zA-Z ]+$/;
        if (!fnameCheck.test(fName)) {
            document.getElementById('fname_error').innerHTML = "please enter valid name";
            error = true;
        } else {
            document.getElementById('fname_error').innerHTML = "";
        }
        let lnameCheck = /^[a-zA-Z ]+$/;
        if (!lnameCheck.test(lName)) {
            document.getElementById('lname_error').innerHTML = "please enter valid name";
            error = true;	
        } else {
            document.getElementById('lname_error').innerHTML = "";
        }
        let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailCheck.test(eMail)) {
            document.getElementById('email_error').innerHTML = "please enter valid email";
            error = true;
        } else {
            document.getElementById('email_error').innerHTML = "";
        }
        if (psw.length < 6) {
            document.getElementById('psw_error').innerHTML = "enter the minimum 6 charecter";
            error = true;
        } else {
            document.getElementById('psw_error').innerHTML = "";
        }

        if (error === true) {
            return false;
        }

        else {
            let user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
            let errors = user_records.filter((user) => user.email === eMail);
            if (errors.length > 0) {
                alert("Please enter other email");
                return false;
            }
            user_records.push({
                role: roles,
                fname: fName,
                lname: lName,
                email: eMail,
                password: psw,
            });
            localStorage.setItem("users", JSON.stringify(user_records));
            window.location.href = "login_user.html";
        }
    }
}



