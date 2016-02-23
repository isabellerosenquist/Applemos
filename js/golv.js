var scene; 
var camera; 
var renderer;
var mesh;


init();
animate();


function init(){
    // get the DOM element to attach to
    // - assume we've got jQuery to hand ????? 
    var $container = $('#container');

    renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 
    scene = new THREE.Scene(); 

    //scene.add(camera);







// --------------


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

    var geometry4 = new THREE.PlaneGeometry(250, 180, 5);
    var material4 = new THREE.MeshBasicMaterial( {color: 0x66CCFF} );

    var vagg = new THREE.Mesh(geometry4, material4);
    vagg.translateY(90);

<<<<<<< HEAD
=======
//Andra väggar
var geometry5 = new THREE.Geometry();

geometry5.vertices.push(new THREE.Vector3(-125,   0, 0));//Vertice 0
geometry5.vertices.push(new THREE.Vector3(-125, 180, 0));//Vertice 1
geometry5.vertices.push(new THREE.Vector3(-125, 180, 200));//Vertice 2
geometry5.vertices.push(new THREE.Vector3(-125,   0, 200));//Vertice 

geometry5.faces.push(new THREE.Face3( 0, 1, 2));
geometry5.faces.push(new THREE.Face3( 0, 2, 3));

var material5 = new THREE.MeshBasicMaterial({color: 0x66ff00}); 

var vagg2 = new THREE.Mesh(geometry5, material5); 
scene.add(vagg2); 


//KAMERA POSITION
camera.position.z = 120; 
camera.position.y = 12;
camera.position.x = 0;
>>>>>>> 93362bd0c09b47c75d7c3d13d4cb33249506ce47

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
    $container.append(renderer.domElement);// attach the render-supplied DOM element ???



}



 /// ----------------------------- FUNCTIONS----------------------------------


function sfar(){


// ------------ sfärtest

// create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
var sphere1Material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
var sphere1 = new THREE.Mesh( new THREE.SphereGeometry( 50, 16, 16), sphere1Material);

// add the sphere to the scene
scene.add(sphere1);


// set the geometry to dynamic
// so that it allow updates
sphere1.geometry.dynamic = true;

// changes to the vertices
sphere1.geometry.verticesNeedUpdate = true;

// changes to the normals
sphere1.geometry.normalsNeedUpdate = true;

}



function kuben(){

    var kGeometry = new THREE.CubeGeometry( 10, 20, 10); // storleken på kuben


    var kMaterial = new THREE.MeshBasicMaterial({color: 0x33FF00} ); 

    mesh = new THREE.Mesh(kGeometry, kMaterial ); // tillhör kuben 

    mesh.position.z = 50;
    scene.add( mesh );
}


function animate() {
    //mesh.rotation.x += .04;
    mesh.rotation.y += .01;
  
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


