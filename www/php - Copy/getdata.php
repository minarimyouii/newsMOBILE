<?php 

	include 'connection.php';

	$data = array();


	$res = mysqli_query($conn, "SELECT * FROM addgoal");
	while($row = mysqli_fetch_assoc($res)){
		array_push($data, $row);
	}

	echo json_encode($data);

?>