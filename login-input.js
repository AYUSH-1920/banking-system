// lets start with login info:

let accounts=[
    {
        username:"ayush",
        password:"12345",
        balance:1000,
        transactions:[]

    },
    {
        username:"john",
        password:"54321",
        balance:500,
        transactions:[]
    },
    {
        username:"nobin",
        password:"95945",   
        balance:2000,
        transactions:[]
    }
];

// logic for this to runnnn

let form=document.getElementById("login-form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let enteredusername=document.getElementById("username").value;
    let enteredpassword=document.getElementById("password").value;

        let userFound = false;

    for (let i = 0; i < accounts.length; i++) {

        if (
            accounts[i].username === enteredusername &&
            accounts[i].password === enteredpassword
        ) {

            userFound = true;
            alert("Login successful!!!!");
            // Save logged in user
            localStorage.setItem("currentUser", JSON.stringify(accounts[i]));

            // Redirect to dashboard
            window.location.href = "dashboard.html";
            break;
        }
    }

    if (!userFound) {
        alert("Invalid username or password");
    }

});