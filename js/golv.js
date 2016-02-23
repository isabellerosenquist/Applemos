var scene; 
var camera; 
var renderer;

init();

function init(){

scene = new THREE.Scene(); 
camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 
renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
//var geometry = new THREE.BoxGeometry(1,1,1);

//BANA -------------------------
var geometry = new THREE.Geometry(); 

geometry.vertices.push(new THREE.Vector3(-0.75, 0, -10));//Vertice 0
geometry.vertices.push(new THREE.Vector3( 0.75, 0, -10));//Vertice 1
geometry.vertices.push(new THREE.Vector3( 0.75, 0,  10));//Vertice 2
geometry.vertices.push(new THREE.Vector3(-0.75, 0,  10));//Vertice 3
		
geometry.faces.push(new THREE.Face3( 1, 0, 2));
geometry.faces.push(new THREE.Face3( 2, 0, 3));
			
var material = new THREE.MeshBasicMaterial({color: 0xffff00}); 
//var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
//var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/trad.jpg') } );
var floor = new THREE.Mesh(geometry, material); 
scene.add(floor); 

//KÄGLA -------------------------
var geometry2= new THREE.CylinderGeometry( 2, 2, 5, 5 );


var material2 = new THREE.MeshBasicMaterial( {color: 0x0033CC} );
var cylinder = new THREE.Mesh( geometry2, material2 );
cylinder.translateZ(-5);
cylinder.translateY(2);


scene.add( cylinder);


camera.position.z = 15; 
camera.position.y = 1.5;
camera.position.x = 2;


renderer.render(scene, camera);

}

/*
	
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
