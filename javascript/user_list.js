function logout(){
    localStorage.removeItem('loginuser');
}
// edit data

function editData(email) {
    localStorage.setItem("edituser", JSON.stringify(email));
    window.location.href = "edit_page.html";
}


// delete data

function deleteData(email) {
    let alldelete = JSON.parse(localStorage.getItem("users"));
    let result = alldelete.filter((word) => word.email !== email);

    let conformation = confirm("Are you sure you wann to delete this Massage?");
    if (conformation == true) {
        localStorage.setItem("users", JSON.stringify(result));
        window.location.href="new_user.html";
    }
}


// enter - user - page

let user = JSON.parse(localStorage.getItem('users'));
let currentUser = localStorage.getItem("loginuser")
for (let i = 0; i < user.length; i++) {
    if (user[i].email === currentUser) {
        let addtr = document.createElement("tr");
        addtr.innerHTML = `<tr>
            <td>${user[i].fname}</td>
            <td>${user[i].lname}</td>
            <td>${user[i].email}</td>
            <td>${user[i].password}</td>
            <td class="edit_size"><a onclick="editData('${user[i].email}')" class="btn_edit">Edit</a>
                <a onclick="deleteData('${user[i].email}')" class="btn_delete">Delete</a></td>
            </tr>`;

        document.getElementById("showdata").appendChild(addtr);
    }
};
