<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="CSS Files/login2.css">
    <link rel="icon" href="Images/logo.png" type="image/png">
    <title>Login & Registration</title>
</head>
<body>
 <div class="wrapper">
    <nav class="nav">
        <div class="nav-logo">
            <p>MediConnect</p>
        </div>
        <div class="nav-menu" id="navMenu">
            <ul>
                <li><a href="#" class="link active">Home</a></li>
                <li><a href="#" class="link">Services</a></li>
                <li><a href="#" class="link">Mental Health</a></li>
                <li><a href="#" class="link">Emergency</a></li>
                <li><a href="#" class="link">More</a></li>
            </ul>
        </div>
        <div class="nav-button">
            <button class="btn white-btn" id="loginBtn" onclick="login()">Log In</button>
            <button class="btn" id="registerBtn" onclick="register()">Sign Up</button>
        </div>
        <div class="nav-menu-btn">
            <i class="bx bx-menu" onclick="myMenuFunction()"></i>
        </div>
    </nav>
<!----------------------------- Form box ----------------------------------->    
    <div class="form-box">
        
        <!------------------- login form -------------------------->
        <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" class="login-container" id="login" method="post">
            <div class="top">
                <span>Don't have an account? <a href="#" onclick="register()">Sign Up</a></span>
                <header>Login</header>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Username or Email" name="uname" required>
                <i class="bx bx-user"></i>
            </div>
            <div class="input-box">
                <input type="password" class="input-field" placeholder="Password" name="pass" required>
                <i class="bx bx-lock-alt"></i>
            </div>
            <div class="input-box">
                <input type="submit" class="submit" value="Log in" id="LogIn" name="login">
            </div>
            <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="login-check" name="remember">
                    <label for="login-check"> Remember Me</label>
                </div>
                <div class="two">
                    <label><a href="#">Forgot password?</a></label>
                </div>
            </div>
        </form>
        <!------------------- registration form -------------------------->
        <form class="register-container" id="register" action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
            <div class="top">
                <span>Have an account? <a href="#" onclick="login()">Login</a></span>
                <header>Sign Up</header>
            </div>
            <div class="two-forms">
                <div class="input-box">
                    <input type="text" class="input-field" placeholder="Firstname" name="fname" required>
                    <i class="bx bx-user"></i>
                </div>
                <div class="input-box"> 
                    <input type="text" class="input-field" placeholder="Lastname" name="lname" required>
                    <i class="bx bx-user"></i>
                </div>
            </div>
            <div class="input-box">
                <input type="text" class="input-field" placeholder="Email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required>
                <i class="bx bx-envelope"></i>
            </div>
            <div class="input-box">
                <input type="password" class="input-field" placeholder="Password" name="pass" required>
                <i class="bx bx-lock-alt"></i>
            </div>
            <div class="input-box">
                <input type="submit" class="submit" value="Register" name="register">
            </div>
            <div class="two-col">
                <div class="one">
                    <input type="checkbox" id="register-check" name="remember">
                    <label for="register-check"> Remember Me</label>
                </div>
                <div class="two">
                    <label><a href="#">Terms & conditions</a></label>
                </div>
            </div>
        </form>
    </div>
</div>   
<script>
   
   function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 
</script>
<script>
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    // sign=document.getElementById("signIn")
    // sign.addEventListener('click',()=>{
    //     alert("Account createrd succesfully")
    // })

    // logIn = document.getElementById("LogIn")    
    // logIn.addEventListener('click',()=>{
    //     alert("Logged In.... Welcome to Mediconnect")
    // })

</script>

<!--  PHP CODE to Register and Login -->
    <?php
        $hostname = "localhost";
        $username = "root";
        $password = "";
        $database = "mediconnect";
        $conn = new mysqli($hostname, $username, $password, $database);
        if ($conn->connect_error)
            die($conn->connect_error);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST["register"])) {
                $sql = "INSERT INTO users(FNAME, LNAME, EMAIL, PASSWORD) VALUES ('$_POST[fname]', '$_POST[lname]', '$_POST[email]',  '$_POST[pass]')";
                if ($conn->query($sql) === TRUE)
                    echo "<script>alert('Registered Successfully! Kindly Login!');</script>";
                else
                    echo "<script>alert('Record not inserted. Try Again!');</script>";
            }

            if (isset($_POST["login"])) {
                $sql = "SELECT PASSWORD FROM users WHERE EMAIL='$_POST[uname]'";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    $row = $result->fetch_assoc();
                    if ($row["PASSWORD"] == $_POST["pass"]) 
                        echo "<script>alert('Logged In.... Welcome to Mediconnect'); window.location.href = 'book_doc.html'</script>";
                    else
                        echo "<script>alert('Invalid Password');</script>";
                } else
                    echo "<script>alert('Invalid Username');</script>";
                
                exit;
            }
        }
    ?>
</body>
</html>