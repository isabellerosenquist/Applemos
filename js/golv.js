var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
//var geometry = new THREE.BoxGeometry(1,1,1);
var geometry = new THREE.Geometry(); 


geometry.vertices.push(new THREE.Vector3(-0.75, 0, -10));//Vertice 0
geometry.vertices.push(new THREE.Vector3( 0.75, 0, -10));//Vertice 1
geometry.vertices.push(new THREE.Vector3( 0.75, 0,  10));//Vertice 2
geometry.vertices.push(new THREE.Vector3(-0.75, 0,  10));//Vertice 3
		
geometry.faces.push(new THREE.Face3( 1, 0, 2));
geometry.faces.push(new THREE.Face3( 2, 0, 3));
			
var material = new THREE.MeshBasicMaterial({color: 0xffff00}); 
var floor = new THREE.Mesh(geometry, material); 
scene.add(floor); 
camera.position.z = 2; 
camera.position.y = 0.5; 
renderer.render(scene, camera);