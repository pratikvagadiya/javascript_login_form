
// edit data

let email = JSON.parse(localStorage.getItem("edituser"));

let alldelete = JSON.parse(localStorage.getItem("users"));

const result = alldelete.filter((word) => word.email == email);

document.getElementById("fname").value = result[0].fname;
document.getElementById("lname").value = result[0].lname;
document.getElementById("email").value = result[0].email;
document.getElementById("psw").value = result[0].password;

function saveEdit() {
    event.preventDefault()
    let changedata = alldelete.map((item) => {
       
        if (item.email === email) {
            return {
                ...item,
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                password: document.getElementById("psw").value,
            };
            
        } else {
            return item;
        }
    });
    
    let conformation = confirm("Are you sure your data has been edited");
    
    if (conformation === true) {
        localStorage.setItem("users", JSON.stringify(changedata));
        let namelist = JSON.parse(localStorage.getItem("users"));

        let roll = namelist.filter((word) => word.email === email);
        
        if (roll[0].role === "admin") {
            window.location.href = "data_list.html";
        } else {
            window.location.href = "user_list.html";
        }
    }
    else {
        window.location.href = "edit_page.html";
    }
    localStorage.removeItem('edituser');
}