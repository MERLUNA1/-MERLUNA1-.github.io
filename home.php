<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" href="home.css">
    </head>
    <body>
        <form method="post" action="home.php">
            <h1>Login</h1>
            <div class="textB">
                <input type="text" placeholder="username" name="username">
            </div>
            <div class="textB">
                <input type="password" placeholder="password" name="password">
            </div class="textC">
            <input type="submit" value="Login" class="textD" name="login_Btn">
            <div class="textE">
                Don't have an account ?
                </br>
                <a href="#">Sign up</a>
            </div>
        </form>
    </body>
</html>
<?php
$conn = mysqli_connect("localhost", "root","");
if(isset($_POST['login_Btn'])){
    $username=$_POST['username'];
    $password=$_POST['password'];
    $sql= "SELECT * FROM websites2.logindetails WHERE username = '$username'";
    $result = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_assoc($result)){
        $resultPassword = $row['password'];
        if($password == $resultPassword){
            header('Location:index.html');
        }else{
            echo "<script>
                alert('Login unsuccessful');
            </script>";
        }
    }

}
?>
