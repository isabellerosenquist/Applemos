var scene; 
var camera; 
var renderer;
var mesh;
// git add file.name && git commit -m "removed merge conflicts"
var startTime   = Date.now();
var r;
var dtime;
var a; 
  var kMaterial
var bitmap // bitmapptest

init();
animate();
render();


 /// ----------------------------- FUNCTIONS----------------------------------




function bana1(){

     var kGeometry = new THREE.CubeGeometry( 20, 0.1, 100); // storleken på kuben

    var tetexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lane.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshBasicMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50

    scene.add( mesh );
}

function bana2(){
    
     var kGeometry = new THREE.CubeGeometry( 20, 0.1, 100); // storleken på kuben

    var tetexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lane.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshBasicMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50;
    mesh.position.x = 22;

    scene.add( mesh );
}

function bana3(){
    
     var kGeometry = new THREE.CubeGeometry( 20, 0.1, 100); // storleken på kuben

    var tetexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lane.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshBasicMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50;
    mesh.position.x = -22;

    scene.add( mesh );
}

function klot(){

 var texture2 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/klotet.jpeg ', {}, function(){ renderer.render(scene, camera); } );
    var material3 = new THREE.MeshBasicMaterial({map: texture2})

    var geometry3 = new THREE.SphereGeometry(1.09, 15, 15);
    //var material3 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/lane.jpg ');

    var KLOT = new THREE.Mesh(geometry3, material3);
    KLOT.translateZ(90);
    KLOT.translateY(1.09);
    scene.add(KLOT);
}

function rannor(par1){

var long_cylinder = new THREE.CylinderGeometry(1.25, 1.25, 200);


 var rannorTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/tex.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
 rannorTexture.repeat.set( 0.1, 1 );
 rannorTexture.wrapS = rannorTexture.wrapT = THREE.RepeatWrapping;


 var rannorMaterial = new THREE.MeshBasicMaterial({map: rannorTexture})
//var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

var cylinder_mesh = new THREE.Mesh(long_cylinder, rannorMaterial);

cylinder_mesh.rotation.x = Math.PI /2;
cylinder_mesh.translateX(par1);

scene.add(cylinder_mesh);

}

function golvMellenRannor(par1){

var gmrGeometry = new THREE.CubeGeometry( 5, 0.5, 100); // storleken på kuben

var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture})

mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
mesh.position.z = 50;
mesh.position.x = par1;

scene.add( mesh );

}

 /// -----------------------------------------------------------------------


function animate() {
   // mesh.rotation.x += .04;
   // mesh.rotation.y += .01;

    render();
   // requestAnimationFrame( animate );
}
  
function render() {


    // dtime = 0 - (((Date.now() - startTime)/50)*a); // denna får den att röra på sig. FUNKAR

    //mesh.scale.x    = 1.0 + 0.3*Math.sin(dtime/100);
    //mesh.scale.y    = 1.0 + 0.3*Math.sin(dtime/300);
    //mesh.scale.z    = 1.0 + 0.3*Math.sin(dtime/300);


   // mesh.position.set(1,1,dtime); // denna får den att röra på sig. FUNKAR


     requestAnimationFrame(render);  
    renderer.render( scene, camera );

    //mesh.rotation.set(r, 20, 5);

}
  
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}

/// ----------------------------- MAIN----------------------------------
function init(){  

    r = 1;
    dtime = 1;
    a = -1;

    var $container = $('#container');
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 

    renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

   bana1();
   bana2();
   bana3();

   klot();
   rannor(-8.75);
   rannor(-13.25);
   rannor(8.75);
   rannor(13.25);
   golvMellenRannor(-10);
   golvMellenRannor(10);


//----------------- HÄR GÖRS GRISBOLLEN
/*
var texture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Desktop/gris.jpg', {}, function(){ renderer.render(scene, camera); } );
var testMaterial = new THREE.MeshBasicMaterial({map: texture})

  // var testTexture = THREE.ImageUtils.loadTexture(bitmap.src); // Create texture object based on the given bitmap path.
    //var testMaterial = new THREE.MeshBasicMaterial({ map: testTexture }); // Create a material (for the spherical mesh) that reflects light, potentially causing sphere surface shadows.

    var testGeometry = new THREE.SphereGeometry(50, 64, 64); // Radius size, number of vertical segments, number of horizontal rings.

    var testSphere = new THREE.Mesh(testGeometry, testMaterial); // Create a mesh based on the specified geometry (cube) and material (blue skin).

    scene.add(testSphere); // Add the sphere at (0, 0, 0).
*/
//----------------- 


    var geometry4 = new THREE.PlaneGeometry(250, 180, 5);
    var texture4 = new THREE.MeshBasicMaterial( {color: 0x66CCFF} );


    var vagg = new THREE.Mesh(geometry4, texture4);
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
// ---

var geometry6 = new THREE.Geometry();

geometry6.vertices.push(new THREE.Vector3(125,   0, 200));//Vertice 0
geometry6.vertices.push(new THREE.Vector3(125, 180, 200));//Vertice 1
geometry6.vertices.push(new THREE.Vector3(125, 180,   0));//Vertice 2
geometry6.vertices.push(new THREE.Vector3(125,   0,   0));//Vertice 

geometry6.faces.push(new THREE.Face3( 1, 2, 0));
geometry6.faces.push(new THREE.Face3( 3, 0, 2));

var vagg3 = new THREE.Mesh(geometry6, material5); 
scene.add(vagg3); 





//GOLV MELLAN RÄNNOR




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





