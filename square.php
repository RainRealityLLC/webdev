<?php
	echo "Hello";
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset=utf-8>
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<form action="action_page.php">
			<form>
  			First name:<br>
  			<input type="text" name="firstname"><br>
  			Last name:<br>
  			<input type="text" name="lastname"><br><br>
            <input type="submit" value="Submit">
		</form> 
		<script src="three.js"></script>
		<script>
        	var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0xecb7ee});
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;
			function render() {
				requestAnimationFrame( render );
				renderer.render( scene, camera );
				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;
			}
			render();
		</script>
	</body>
</html>

