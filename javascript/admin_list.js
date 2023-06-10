function logout(){
    localStorage.removeItem('loginuser');
}

        // enter - admin - page
        
        var user = JSON.parse(localStorage.getItem('users'));
        let currentUser = localStorage.getItem('loginuser')
        for (let i = 0; i < user.length; i++) {
            if (user[i].email === currentUser) {
                let addtr = document.createElement("tr");
                addtr.innerHTML = `
            <td>${user[i].fname}</td>
            <td>${user[i].lname}</td>
            <td>${user[i].email}</td>
            <td>${user[i].password}</td>`;
                document.getElementById("showdata").appendChild(addtr);
            }
        
        };


