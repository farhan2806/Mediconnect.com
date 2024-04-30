<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Booking Form</title>
    <link rel="stylesheet" href="CSS files/booking_doc_form.css"> 
</head>
<body>
    <div class="container">
        <div class="image-container">
            <img src="Images/doctor.jpg" alt="Doctor" class="doctor-image">
        </div>
        <div class="form-container">
            <h1>Book a Doctor Appointment</h1>
            <form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phon" name="phone" pattern="[0-9]{10}" placeholder="Enter 10-digit phone number" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required>
                </div>
                <div class="form-group">
                    <label for="time">Preferred Time</label>
                    <input type="time" id="time" name="time" required>
                </div>
                <div class="form-group">
                    <label for="problem">Describe Your Problem</label>
                    <textarea id="problem" name="problem" rows="4" required></textarea>
                </div>
                <input type="submit" name="submit" value="Submit Booking"/>
            </form>
        </div>
    </div>
    <!-- <script src="JS files/booking_doc.js"></script> -->
    <script>
        console.log("i am here")
    </script>
    <!-- PHP Code Backend -->
    '<?php
        $hostname = "localhost";
        $username = "root";
        $password = "";
        $database = "mediconnect";
        $conn = new mysqli($hostname, $username, $password, $database);
        if ($conn->connect_error)
            die($conn->connect_error);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST["submit"])) {
                $sql = "INSERT INTO appointments(NAME, PHONE_NO, EMAIL, PREFERRED_DATE, PREFERRED_TIME, PROBLEM) VALUES ('$_POST[name]', '$_POST[phone]', '$_POST[email]', '$_POST[date]', '$_POST[time]', '$_POST[problem]')";
                if ($conn->query($sql) === TRUE)    
                    echo "<script>alert('Appointment Booked Successfully!');</script>";
                else
                    echo "<script>alert('Error in Booking Appointment. Try Again!');</script>";
            }
        }
    ?>
</body>
</html>