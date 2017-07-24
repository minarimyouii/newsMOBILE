// <?php

// 	session_start();


// 	//initialize
// 	$name = "";
// 	$address = "";
// 	$id = 0;
// 	$edit_state = false;

// 	//connection

// 	$db = mysqli_connect('localhost','root','','goal');

// 	//save button is clicked
	
// 		// $name = $_POST['name'];
// 		// $address = $_POST['address'];

// 		// $query = "INSERT INTO crud (name, address) VALUES ('$name','$address')";
// 		// mysqli_query($db, $query);
// 		// $_SESSION['msg'] = "Address Saved";
// 		// header('location:index.html'); //redirect to headerlocation after insert
	

// 	//edit
// 	if (isset($_POST['update'])){
// 		$id = $_POST['id'];
// 		$name = $_POST['name'];
// 		$address = $_POST['address'];
// 		$update = "UPDATE crud set name='$name', address='$address' WHERE id='$id'";
// 		$results = mysqli_query($db, $update);
// 		header('refresh:0; url=index.php');
// 	}

// 	//get records
// 	$results = mysqli_query($db, "SELECT * FROM crud");

// 	echo "wewewaasasa2131231231231";
// ?>