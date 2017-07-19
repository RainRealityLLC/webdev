var container, controls;			// Declare vars for creating space where 3D objects with go - BJL 071817 - 
var camera, scene, renderer;


function init() {
	
	container = document.getElementById('div-container');							// Intialize container as div-container that is already within the DOM - BJL 071817 -
	//document.body.appendChild( container );													// Original code from the example that is no longer needed, div is alread on DOM - BJL 071817 -
	
	
	camera = new THREE.PerspectiveCamera( 60, container.clientWidth / container.clientHeight, 0.1, 10 );	// Initialize camera into middle of screen - BJL 071817 -
	camera.position.z = 3;																																				// Initialize camera z value - BJL 071817 -
	
	
	controls = new THREE.TrackballControls( camera, container );			// Specify which div by ID that you want the controls to be within - BJL 071817 -
	
	
	scene = new THREE.Scene();																				// Initialize scene as new Scene - BJL 071817 -
	scene.background = new THREE.Color( 0x4f465a )										// Change scene background color - BJL 071817 -
	
	
	//scene.add( new THREE.HemisphereLight() );												// Orginal code from example not needed here, move to drop() function - BJL 071817 -
	//var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	//directionalLight.position.set( 0, 0, 2 );
	//scene.add( directionalLight );

	
	renderer = new THREE.WebGLRenderer();																// Initialize renderer as new WebGLRenderer
	renderer.setPixelRatio( window.devicePixelRatio );									// Set pixel ratio of renderer equal to windows pixel ratio 
	renderer.setSize( container.clientWidth, container.clientHeight );	// Set size of renderer equal to window width - 50 (25px on each side) and window height - 225 (~25px on bottom) - BJL 071817 -	
	
	
	container.appendChild( renderer.domElement );												// Add renderer to DOM within container - BJL 071817 -
	
	
	window.addEventListener( 'resize', resize, false );									// Add event listener for responding to user resizing window - BJL 071817 -
	
}

function resize() {
	
	camera.aspect = container.clientWidth / container.clientHeight;			// Update camera aspect based on window resize - BJL 071817 -
	camera.updateProjectionMatrix();																		// Update projection matrix based on resize - BJL 071817 -
	
	
	renderer.setSize( container.clientWidth, container.clientHeight );	// Update size of renderer equal to window width - 50 (25px on each side) and window height - 225 (~25px on bottom) based on resize - BJL 071817 -
	
}

function animate() {
	
	controls.update();								// Update controls for animation - BJL 071817 -
	renderer.render( scene, camera );	// Update renderer with scene and camera for animation - BJL 071817 -
	requestAnimationFrame( animate );	// Request animation frame - BJL 071817 -
	
}

function drag(ev) {

	ev.dataTransfer.setData("id", ev.target.id);	// When draggable element starts to drag set the ID so we know what object is being dragged - BJL 071817 -

}

function allowDrop(ev) {

		ev.preventDefault();	// Allow element to dropped on this area - BJL 071817 -

}

function drop(ev) {

	var id = ev.dataTransfer.getData("id");		// Intialize id var for identifying switch object was dragged and dropped - BJL 071817 -
	
	
	while(scene.children.length > 0){					// Clear all objects from scene first in order to add new object - BJL 071817 -
		
			scene.remove(scene.children[0]);
			console.log(scene.children[0]);
		
	}
	
	
	controls.reset();													// Reset controls to show default view on newly added object - BJL 071817 -

	
	if (id=="spaceship") {																						// If the dragged and dropped object is a spaceship ..  - BJL 071817 -

		scene.add( new THREE.HemisphereLight() );												// .. Add new hemisphere lighting ..  - BJL 071817 -
		
		
		var directionalLight = new THREE.DirectionalLight( 0xffeedd );	// .. Initalize directionalight var with new DirectionalLight ..  - BJL 071817 -
		directionalLight.position.set( 0, 0, 2 );												// .. Set position of directionallight var ..  - BJL 071817 -
		
		
		scene.add( directionalLight );																	// .. Add the directional light to the scene ..  - BJL 071817 -

		
		var loader = new THREE.TextureLoader();													// .. Initialize loader var as new TextureLoader .. - BJL 071817 -
		var texture = loader.load( 'textures/color.jpg' );							// .. Initialize texture var as loaded color.jpg .. - BJL 071817 -
		var normal = loader.load( 'textures/normal.jpg' );							// .. Initialize normal var as loaded normal.jpg .. - BJL 071817 -
		var loader = new THREE.TDSLoader( );														// .. Re-initialize loader var as new TDSLoader .. - BJL 071817 -

		
		loader.load( 'models/portalgun/portalgun.3ds', function ( object ) {
			
			object.traverse( function ( child ) {
				
				if ( child instanceof THREE.Mesh ) {
					
					child.material.map = texture;
					child.material.normalMap = normal;
					
				}
				
			});
			
			
			scene.add( object );
			
		});					

	}

	if (id=="box") {
		
		scene.add( new THREE.HemisphereLight() );
		var directionalLight = new THREE.DirectionalLight( 0xffeedd );
		directionalLight.position.set( 0, 0, 2 );
		scene.add( directionalLight );
		
		var texture = new THREE.TextureLoader().load( 'textures/crate.gif' );

		var shape = new THREE.BoxGeometry(1, 1, 1);
		var material = new THREE.MeshBasicMaterial({map: texture});
		var mesh = new THREE.Mesh(shape, material);

		mesh.rotation.x += 10;
		mesh.rotation.y += 25;

		scene.add(mesh);

	}
	
	else if (id=="teapot"){
		
		// LIGHTS
		var ambientLight = new THREE.AmbientLight( 0x333333 );	// 0.2
		var light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
		
		scene.add( ambientLight );
		scene.add( light );
		
		var teapotSize = 50;
		var tess = 15;
		
		var wireMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } );
		var shading = "wireframe";
		
		var teapotGeometry = new THREE.TeapotBufferGeometry( 50,
			10,
			true,
			true,
			true,
			false,
			true );
		
		console.log(teapotGeometry)
		
		teapot = new THREE.Mesh(
			teapotGeometry, wireMaterial  );	// if no match, pick Phong
		scene.add( teapot );
	}


}

function editText() {

	var text = prompt("Enter your description...", document.getElementById('td-text').innerText);

	if (text == null || text == "") {

		document.getElementById('td-text').innerText = "";
		document.getElementById('td-text').setAttribute("hidden", "true");

	}

	else {

		document.getElementById('td-text').removeAttribute("hidden");
		document.getElementById('td-text').innerText = text;

	}

}