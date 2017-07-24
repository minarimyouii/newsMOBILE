<?php include('server.php'); 

	//fetch the record to update
	if(isset($_GET['edit'])){
		$id = $_GET['edit'];

		$rec = mysqli_query($db, "SELECT * FROM crud WHERE id=$id");
		$record = mysqli_fetch_array($rec);
		$name = $record['name'];
		$address = $record['address'];
		$id = $record['id'];
	}
	

?>
<!DOCTYPE html>
<html>
<head>
	<title>CRUD: PHP MySQL</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

	<?php if (isset($_SESSION['msg'])): ?>
		<div class="msg">
			<?php 
				echo $_SESSION['msg'];
				unset ($_SESSION['msg']);
			 ?>
		</div>
	<?php endif ?>

	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Address</th>
				<th colspan = "2">Action</th>

			</tr>
		</thead>
		<tbody>

			<?php while ($row = mysqli_fetch_array($results)){ ?>
				<tr>
					<td><?php echo $row ['name']; ?></td>
					<td><?php echo $row ['address']; ?></td>
					<td>
						<a href="index.php?edit=<?php echo $row['id']; ?>">Edit</a>
					</td>
					<td>
						<a href="delete.php?delete=<?php echo $row['id'];?>">Delete</a> 
					</td>
				</tr>
			<?php } ?>

			
		</tbody>
	</table>

	<form method="POST" action="server.php">
	<input type="hidden" name="id" value="<?php echo $id; ?>">
		<div class="input-group">
			<label>Name</label>
			<input type="text" name="name" value="<?php echo $name; ?>">
		</div>
		<div class="input-group">
			<label>Address</label>
			<input type="text" name="address" value="<?php echo $address; ?>">
		</div>
		<div class="input-group">
		
			<button type="submit" name="save" class="btn">Save</button>
		
			<button type="submit" name="update" class="btn">Update</button>
		
		</div>
	</form>

</body>
</html>