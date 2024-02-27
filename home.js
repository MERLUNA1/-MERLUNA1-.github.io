<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" href="home.css">
        <script>
            function login() {
                var username = document.getElementById("username").value;
                var password = document.getElementById("password").value;
                
                // Validate username and password
                if (username.trim() === "") {
                    alert("Please enter your username.");
                    return false;
                }
                if (password.trim() === "") {
                    alert("Please enter your password.");
                    return false;
                }

                // Simulate login (replace this with actual login logic)
                if (username === "yourusername" && password === "yourpassword") {
                    alert("Login successful");
                    window.location.href = "index.html"; // Redirect to index.html
                } else {
                    alert("Login unsuccessful");
                }
                return false; // Prevent form submission
            }
        </script>
    </head>
    <body>
        <form onsubmit="return login()">
            <h1>Login</h1>
            <div class="textB">
                <input type="text" id="username" placeholder="username" name="username">
            </div>
            <div class="textB">
                <input type="password" id="password" placeholder="password" name="password">
            </div class="textC">
            <input type="submit" value="Login" class="textD" name="login_Btn">
            <div class="textE">
                Don't have an account ?
                <br>
                <a href="#">Sign up</a>
            </div>
        </form>
    </body>
</html>
