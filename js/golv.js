var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
//var geometry = new THREE.BoxGeometry(1,1,1);

//BANA
var geometry = new THREE.Geometry(); 

geometry.vertices.push(new THREE.Vector3(-0.75, 0, -10));//Vertice 0
geometry.vertices.push(new THREE.Vector3( 0.75, 0, -10));//Vertice 1
geometry.vertices.push(new THREE.Vector3( 0.75, 0,  10));//Vertice 2
geometry.vertices.push(new THREE.Vector3(-0.75, 0,  10));//Vertice 3
		
geometry.faces.push(new THREE.Face3( 1, 0, 2));
geometry.faces.push(new THREE.Face3( 2, 0, 3));
//HEJ GITHUB FUNKAR,,,, kanske.
//var texture = new THREE.TextureLoader().load( "image/lane.jpg" );
//var texture = new THREE.ImageUtils.loadTexture("C:\Users\isabelle\Documents\MoS\js\lane.jpg");

//texture.wrapS = THREE.RepeatWrapping;
//texture.wrapT = THREE.RepeatWrapping;
//texture.repeat.set( 4, 4 );

			
var material = new THREE.MeshBasicMaterial({color: 0xffff00}); 
//var material = new THREE.MeshBasicMaterial({ map: texture, side:THREE.DoubleSide});
//var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture("image/lane.jpg")});
var floor = new THREE.Mesh(geometry, material); 
scene.add(floor); 

//KÄGLA
var geometry2= new THREE.CylinderGeometry( 0.25, 0.5, 2, 35 );

// load a texture, set wrap mode to repeat
//var texture = new THREE.TextureLoader().load( "image/lane.jpg" );
//texture.wrapS = THREE.RepeatWrapping;
//texture.wrapT = THREE.RepeatWrapping;
//texture.repeat.set( 4, 4 );


//var map = new THREE.TextureLoader().load( '/Users/madeleinerapp/Desktop/fortrollande_skog_large.jpg ' );
//map.wrapS = map.wrapT = THREE.RepeatWrapping;
//map.anisotropy = 16;


var material2 = new THREE.MeshBasicMaterial( {color: 0x0033CC} );
var cylinder = new THREE.Mesh( geometry2, material2 );
cylinder.translateZ(-5);
cylinder.translateY(1);
scene.add( cylinder );

var geometry3 = new THREE.SphereGeometry(1, 5, 5);
var material3 = new THREE.MeshBasicMaterial( {color: 0xFF3300} );

var sphere = new THREE.Mesh(geometry3, material3);
sphere.translateZ(9);
sphere.translateY(1);
scene.add(sphere);


camera.position.z = 15; 
camera.position.y = 1.5;
camera.position.x = 2;
renderer.render(scene, camera);
