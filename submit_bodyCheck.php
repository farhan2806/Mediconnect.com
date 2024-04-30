<?php
	$name = $_POST['name'];
	$age = $_POST['age'];
	$phone = $_POST['phone'];
	$gender = $_POST['gender'];
	$preferred_date = $_POST['preferred_date'];
	$preferred_time = $_POST['preferred_time'];
	$address = $_POST['address'];
	$notes = $_POST['notes'];
	$medical_conditions = $_POST['medical_conditions'];
	$medications = $_POST['medications'];
	$surgeries = $_POST['surgeries'];
	$allergies = $_POST['allergies'];

	// Database connection
	$conn = new mysqli('localhost','root','','mediconnect');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into full_body_check(name,age,gender,preferred_date,preferred_time,notes,medical_conditions,medications,surgeries,allergies,address,phone) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sissssssssss", $name, $age, $gender, $preferred_date, $preferred_time, $notes, $medical_conditions, $medications, $surgeries, $allergies, $address, $phone);
		$execval = $stmt->execute();
		echo "<script>alert('Appointment Booked Successfully!.......');  window.location.href = 'FullBody.html'</script>";
		$stmt->close();
		$conn->close();
	}
?>