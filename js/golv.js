var scene; 
var camera; 
var renderer;
var mesh;



init();
animate();


function init(){

scene = new THREE.Scene(); 
camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 
renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );





//BANA -------------------------
var geometry = new THREE.Geometry(); 


geometry.vertices.push(new THREE.Vector3(-7.5, 0, -100));//Vertice 0
geometry.vertices.push(new THREE.Vector3( 7.5, 0, -100));//Vertice 1
geometry.vertices.push(new THREE.Vector3( 7.5, 0,  100));//Vertice 2
geometry.vertices.push(new THREE.Vector3(-7.5, 0,  100));//Vertice 3
		
geometry.faces.push(new THREE.Face3( 1, 0, 2));
geometry.faces.push(new THREE.Face3( 2, 0, 3));


kuben();



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

//KLOT
var geometry3 = new THREE.SphereGeometry(1.09, 15, 15);
var material3 = new THREE.MeshBasicMaterial( {color: 0xFF3300} );

var sphere = new THREE.Mesh(geometry3, material3);
sphere.translateZ(90);
sphere.translateY(1.09);
scene.add(sphere);

//VÄGG

var geometry4 = new THREE.PlaneGeometry(250, 100, 5);
var material4 = new THREE.MeshBasicMaterial( {color: 0x66CCFF} );

var vagg = new THREE.Mesh(geometry4, material4);
vagg.translateY(50);


scene.add(vagg);

//KAMERA POSITION
camera.position.z = 120; 
camera.position.y = 12;
camera.position.x = 0;

// document.addEventListener("keydown", onDocumentKeyDown, false);

// function onDocumentKeydown(event){

// var keyCode = event.which;

// var count = 1;

// if(keyCode == 32);
	// count++;
// };

window.addEventListener( 'resize', onWindowResize, false );


render();

}



function kuben(){

// kub---
var kGeometry = new THREE.CubeGeometry( 10, 20, 10); // storleken på kuben
//var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } ); // kub
var kMaterial = new THREE.MeshBasicMaterial({color: 0x66FF00}); 


mesh = new THREE.Mesh(kGeometry, kMaterial ); // tillhör kuben 
mesh.position.z = 50;
scene.add( mesh );

//------
}

function animate() {
    mesh.rotation.x += .04;
    mesh.rotation.y += .02;
    //mesh.translateZ = 10; 
  
    render();
    requestAnimationFrame( animate );
}
  
function render() {
    renderer.render( scene, camera );
}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}






/*-------------------------------
	
var camera;
var scene;
var renderer;
var mesh;
  
init();
animate();
  
function init() {
  
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
  
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);
  
    var geometry = new THREE.CubeGeometry( 10, 10, 10);
    var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
     
    // Denna istälelt för den ovan ska generera en bild som textur men bilden vill inte hittas
	//var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/crate.jpg') } );  


    mesh = new THREE.Mesh(geometry, material );
    mesh.position.z = -50;
    scene.add( mesh );
  
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  
    window.addEventListener( 'resize', onWindowResize, false );
  
    render();
}
  
function animate() {
    mesh.rotation.x += .04;
    mesh.rotation.y += .02;
  
    render();
    requestAnimationFrame( animate );
}
  
function render() {
    renderer.render( scene, camera );
}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}
*/
