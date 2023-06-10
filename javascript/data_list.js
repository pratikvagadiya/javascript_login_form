function logout() {
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

    let conformation = confirm("Are you sure you want to delete this Massage?");
    if (conformation == true) {
        localStorage.setItem("users", JSON.stringify(result));
        DisplayList(result, list_element, count, current_page);
    }
}


// pagination

let user = JSON.parse(localStorage.getItem('users'));


const list_element = document.getElementById('table_heading');
let current_page = 1;
let count = 5;

function myFunction() {
    count = Number(document.getElementById("dropdown").value);
    DisplayList(user, list_element, count, current_page);
}

function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let user = items.slice(start, end);

    for (let i = 0; i < user.length; i++) {
        let addtr = document.createElement("tr");
        addtr.innerHTML = `
                <td>${user[i].role}</td>
                <td>${user[i].fname}</td>
                <td>${user[i].lname}</td>
                <td>${user[i].email}</td>
                <td class="edit_size"><a onclick="editData('${user[i].email}')" class="btn_edit">Edit</a>
                <a onclick="deleteData('${user[i].email}')" class="btn_delete">Delete</a></td>`;
        wrapper.appendChild(addtr);

    }
    let page_count = Math.ceil(items.length / rows_per_page);
    let parent = document.getElementById('pagination-wrapper');
    parent.innerHTML = "";
    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        parent.appendChild(btn);
    }
}


function sortData(value) {
    let usersData = JSON.parse(localStorage.getItem('users'));
    let down = document.getElementsByClassName('fa-arrow-down');
    let up = document.getElementsByClassName('fa-arrow-up');

    if (up[value.key].style.display !== 'none') {
        down[value.key].style.display = "block";
        up[value.key].style.display = 'none';
        usersData = usersData.sort((a, b) => a[value.name].toLowerCase() > b[value.name].toLowerCase() ? 1 : -1);
        DisplayList(usersData, list_element, count, current_page);
    }
    else {
        up[value.key].style.display = "block"
        down[value.key].style.display = "none";
        usersData = usersData.sort((a, b) => a[value.name].toLowerCase() < b[value.name].toLowerCase() ? 1 : -1);
        DisplayList(usersData, list_element, count, current_page);
    }
}

function PaginationButton(page, items) {
    let button = document.createElement('button');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    button.innerText = page;

    if (current_page == page) button.classList.add('active');

    if (current_page === 1) {
        prev.style.display = 'none';
    } else {
        prev.style.display = 'block';
    }

    if (current_page === page) {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }


    button.addEventListener('click', function () {
        current_page = page;
        DisplayList(items, list_element, count, current_page);
        let current_btn = document.querySelector('.header');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}
DisplayList(user, list_element, count, current_page);

function arrowButton(value) {
    if (value == 'next') {
        current_page += 1;
    }
    else if (value == 'previes') {
        current_page -= 1;
    }
    DisplayList(user, list_element, count, current_page);
}

// search bar

function searchData() {
    let userData = JSON.parse(localStorage.getItem("users"));
    let filteredData = userData.filter(item => (
        Object.keys(item).some(key => item[key] != null ? item[key].toLowerCase().includes(event.target.value.toLowerCase()) : "")
    ));

    DisplayList(filteredData, list_element, count, current_page);
}

document.querySelector('#myInput').addEventListener('keyup', searchData, false);
localStorage.removeItem('filteredData');