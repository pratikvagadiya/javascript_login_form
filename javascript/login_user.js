
            //login page

            function dataSearch() {
                event.preventDefault();
                let storename = JSON.parse(localStorage.getItem("users"));
                let regemail = document.getElementById("uname").value;
                let regpass = document.getElementById("psw").value;
                let error = false;
                let role;
                for (let i = 0; i < storename.length; i++) {
                    
                    const element = storename[i];

                    const email = element.email;
                    const password = element.password;
                    if (regemail === email && regpass === password) {
                        role = element.role;
                        error = false;
                        break;
                    }
                    else {
                        error = true;
                    }
                }
                if (error) {
                    alert("Error");
                    return false;
                } else {
                    alert("You are loged in")
                    localStorage.setItem("loginuser", regemail);
                    if (role === 'admin') {
                        window.location.href = "admin_list.html"
                    } else {
                        window.location.href = "user_list.html"
                    }

                }
            }