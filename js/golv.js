var scene; 
var camera; 
var renderer;
var mesh;
// git add file.name && git commit -m "removed merge conflicts"
var startTime   = Date.now();
var r;
var dtime;

init();
animate();


function init(){
    r = 1;
    

    var $container = $('#container');

    renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 
    scene = new THREE.Scene(); 

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


//Andra väggar
var geometry5 = new THREE.Geometry();

geometry5.vertices.push(new THREE.Vector3(-125,   0, 0));//Vertice 0
geometry5.vertices.push(new THREE.Vector3(-125, 180, 0));//Vertice 1
geometry5.vertices.push(new THREE.Vector3(-125, 180, 200));//Vertice 2
geometry5.vertices.push(new THREE.Vector3(-125,   0, 200));//Vertice 

geometry5.faces.push(new THREE.Face3( 0, 1, 2));
geometry5.faces.push(new THREE.Face3( 0, 2, 3));

var material5 = new THREE.MeshBasicMaterial({color: 0xcc00cc}); 

var vagg2 = new THREE.Mesh(geometry5, material5); 
scene.add(vagg2); 

var geometry6 = new THREE.Geometry();

geometry6.vertices.push(new THREE.Vector3(125,   0, 200));//Vertice 0
geometry6.vertices.push(new THREE.Vector3(125, 180, 200));//Vertice 1
geometry6.vertices.push(new THREE.Vector3(125, 180,   0));//Vertice 2
geometry6.vertices.push(new THREE.Vector3(125,   0,   0));//Vertice 

geometry6.faces.push(new THREE.Face3( 1, 2, 0));
geometry6.faces.push(new THREE.Face3( 3, 0, 2));

var vagg3 = new THREE.Mesh(geometry6, material5); 
scene.add(vagg3); 

//RÄNNOR 

var long_cylinder = new THREE.CylinderGeometry(1.25, 1.25, 200);
var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

var cylinder_mesh = new THREE.Mesh(long_cylinder, material7);

cylinder_mesh.rotation.x = Math.PI /2;
cylinder_mesh.translateX(-8.75);

scene.add(cylinder_mesh);

var long_cylinder2 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh2 = new THREE.Mesh(long_cylinder, material7);

cylinder_mesh2.rotation.x = Math.PI /2;
cylinder_mesh2.translateX(8.75);

scene.add(cylinder_mesh2);

//GOLV MELLAN RÄNNOR

var geometry8 = new THREE.Geometry();

geometry8.vertices.push(new THREE.Vector3(-10, 0,  100));//Vertice 0
geometry8.vertices.push(new THREE.Vector3(-10, 0, -100));//Vertice 1
geometry8.vertices.push(new THREE.Vector3(-12, 0, -100));//Vertice 2
geometry8.vertices.push(new THREE.Vector3(-12, 0,  100));//Vertice 

geometry8.faces.push(new THREE.Face3( 1, 2, 0));
geometry8.faces.push(new THREE.Face3( 3, 0, 2));

var material8 = new THREE.MeshBasicMaterial({color: 0xccffff}); 
var golv_mesh = new THREE.Mesh(geometry8, material8);

scene.add(golv_mesh);

var geometry9 = new THREE.Geometry();

geometry9.vertices.push(new THREE.Vector3(12, 0, -100));//Vertice 0
geometry9.vertices.push(new THREE.Vector3(10, 0, -100));//Vertice 1
geometry9.vertices.push(new THREE.Vector3(10, 0,  100));//Vertice 2
geometry9.vertices.push(new THREE.Vector3(12, 0,  100));//Vertice 

geometry9.faces.push(new THREE.Face3( 1, 2, 0));
geometry9.faces.push(new THREE.Face3( 3, 0, 2));

var golv_mesh2 = new THREE.Mesh(geometry9, material8);

scene.add(golv_mesh2);


//KAMERA POSITION
camera.position.z = 120; 
camera.position.y = 12;
camera.position.x = 0;

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





function kuben(){
   var kGeometry = new THREE.CubeGeometry( 10, 20, 10); // storleken på kuben


    var kMaterial = new THREE.MeshBasicMaterial({color: 0x33FF00} ); 

    mesh = new THREE.Mesh(kGeometry, kMaterial ); // tillhör kuben 

    mesh.position.z = 50;
    scene.add( mesh );
}


function animate() {
    //mesh.rotation.x += .04;
    //mesh.rotation.y += .01;

    render();
    requestAnimationFrame( animate );
}
  
function render() {


     dtime = 100 - ((Date.now() - startTime)/10);

    //mesh.scale.x    = 1.0 + 0.3*Math.sin(dtime/100);
    //mesh.scale.y    = 1.0 + 0.3*Math.sin(dtime/300);
    //mesh.scale.z    = 1.0 + 0.3*Math.sin(dtime/300);

    mesh.position.set(1,1,dtime);


    renderer.render( scene, camera );
    //mesh.rotation.set(r, 20, 5);

}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}


