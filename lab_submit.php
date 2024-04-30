<?php
	$patientName = $_POST['patientName'];
	$email = $_POST['email'];
	$phoneNumber = $_POST['phoneNumber'];
	$address = $_POST['address'];
	$testType = $_POST['testType'];
	$preferredDate = $_POST['preferredDate'];

	// Database connection
	$conn = new mysqli('localhost','root','','mediconnect');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into lab_test(patient_name,email,phone,address,type,date) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssisss", $patientName, $email, $phoneNumber, $address, $testType, $preferredDate);
		$execval = $stmt->execute();
		echo "<script>alert('Appointment Booked Successfully!.......');  window.location.href = 'LabTests.html'</script>";
		$stmt->close();
		$conn->close();
	}
?>