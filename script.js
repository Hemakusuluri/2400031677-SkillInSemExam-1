document.addEventListener('DOMContentLoaded', () => {
    // LOGIN HANDLER
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Dummy login credentials
            if(username === "pooja" && password === "pooja@123") {
                window.location.href = "index.html";
            } else {
                document.getElementById('errorMsg').innerText = "Invalid username or password";
            }
        });
    }

    // BUTTON HANDLERS ON MAIN PAGE
    const buttons = document.querySelectorAll(".options button");
    const outputDiv = document.getElementById("output");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const text = button.innerText;
            if(outputDiv) {
                switch(text) {
                    case "View User List":
                        outputDiv.innerHTML = "Showing user list...";
                        break;
                    case "Update Content":
                        outputDiv.innerHTML = "Content update page opened.";
                        break;
                    case "Generate Reports":
                        outputDiv.innerHTML = "Generating reports...";
                        break;
                    case "Explore Funds":
                        outputDiv.innerHTML = "Displaying fund options...";
                        break;
                    case "Compare Options":
                        outputDiv.innerHTML = "Comparing fund options...";
                        break;
                    case "My Portfolio":
                        outputDiv.innerHTML = "Displaying your portfolio...";
                        break;
                    case "Give Advice":
                        outputDiv.innerHTML = "Advisor giving advice...";
                        break;
                    case "Create Learning Module":
                        outputDiv.innerHTML = "Creating learning module...";
                        break;
                    case "Schedule Session":
                        outputDiv.innerHTML = "Scheduling session...";
                        break;
                    case "View Trends":
                        outputDiv.innerHTML = "Displaying trends...";
                        break;
                    case "Update Data":
                        outputDiv.innerHTML = "Updating data...";
                        break;
                    case "Download Report":
                        outputDiv.innerHTML = "Downloading report...";
                        break;
                    default:
                        outputDiv.innerHTML = "";
                }
            }
        });
    });
});