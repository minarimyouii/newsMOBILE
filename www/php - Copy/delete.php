<?php

require_once('server.php');

if(isset($_GET['delete'])){
		$del = $_GET['delete'];

		$delete = "DELETE FROM crud WHERE id='$del'";
		$result = mysqli_query($db, $delete);
		header("refresh:0; url=index.php");
		if(!$result){
			echo "error";
		}
	}

?>