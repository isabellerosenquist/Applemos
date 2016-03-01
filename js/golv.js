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




function bana(par1){

     var kGeometry = new THREE.CubeGeometry( 17, 0.1, 100); // storleken på kuben

    var tetexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lane.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshBasicMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50
    mesh.position.x = par1;

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

var long_cylinder = new THREE.CylinderGeometry(1.25, 1.25, 100);


 var rannorTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/fab.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
 rannorTexture.repeat.set( 1, 5 );
 rannorTexture.wrapS = rannorTexture.wrapT = THREE.RepeatWrapping;


 var rannorMaterial = new THREE.MeshBasicMaterial({map: rannorTexture})
//var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

var cylinder_mesh = new THREE.Mesh(long_cylinder, rannorMaterial);
cylinder_mesh.translateZ(51);

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


function vagg1(){


    var vaggGeometry = new THREE.PlaneGeometry(200, 55, 5);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/spacad.jpg', {}, function(){ renderer.render(scene, camera); } );
     vaggTexture.repeat.set( 1, 1 );
    vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

    var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})


    var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
    vagg.translateY(47);

    scene.add(vagg);
}

function vagg2(par1){
    //Andra väggar

    var vaggGeometry = new THREE.PlaneGeometry(110, 110, 5);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/spackel.jpg', {}, function(){ renderer.render(scene, camera); } );
     vaggTexture.repeat.set( 1, 1 );
    vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

    var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})

    var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
    vagg.translateY(55);
    vagg.translateX(par1 * 110);
    vagg.translateZ(40);
    vagg.rotation.y = (-par1)* Math.PI /3;


    scene.add(vagg);


}

function pinnar(par1){

    var vaggGeometry = new THREE.PlaneGeometry(2, 20, 10);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
     vaggTexture.repeat.set( 5, 5 );
    vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

    var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})


    var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
    vagg.translateX(par1);
    vagg.translateY(10);

    scene.add(vagg);
}

function pinnar2(par1){

    var vaggGeometry = new THREE.PlaneGeometry(52, 20, 10);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
     vaggTexture.repeat.set( 5, 5 );
    vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

    var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})


    var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
    vagg.translateX(par1);
    vagg.translateY(10);

    scene.add(vagg);
}

function border(){

    var borderGeometry = new THREE.PlaneGeometry(200, 7, 5);

    var borderTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/dark2.jpg', {}, function(){ renderer.render(scene, camera); } );
    borderTexture.repeat.set( 5, 1 );
    borderTexture.wrapS = borderTexture.wrapT = THREE.RepeatWrapping;

    var borderMaterial = new THREE.MeshBasicMaterial({map: borderTexture})


    var border = new THREE.Mesh(borderGeometry, borderMaterial);
    border.translateZ(3);
    border.translateY(20);

    scene.add(border);

}

function golv(){
var gmrGeometry = new THREE.CubeGeometry( 250, 1, 250); // storleken på kuben

var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/rug.jpg', {}, function(){ renderer.render(scene, camera); } );
gmrtexture.repeat.set( 30, 30 );
gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture})

mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
mesh.position.z = 114;
mesh.position.x = 10;
mesh.position.y = -0.5;

scene.add( mesh );
}

function tak(){
var gmrGeometry = new THREE.CubeGeometry( 250, 1, 250); // storleken på kuben

var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lights.jpg', {}, function(){ renderer.render(scene, camera); } );
gmrtexture.repeat.set( 10, 10 );
gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture})

mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
mesh.position.z = 114;
mesh.position.x = 10;
mesh.position.y = 70;

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

   klot();

   bana(0);
   bana(22);
   bana(-22);
   bana(44);
   bana(-44);

   rannor(8.75);
   rannor(-8.75);
   rannor(13.25);
   rannor(-13.25);
   rannor(30.75);
   rannor(-30.75);
   rannor(35.25);
   rannor(-35.25);
   rannor(52.75);
   rannor(-52.75);


   golvMellenRannor(-10);
   golvMellenRannor(10);
   golvMellenRannor(-32);
   golvMellenRannor(32);
   vagg1();
   vagg2(1);
   vagg2(-1);

   pinnar(11);
   pinnar(-11);
   pinnar(33);
   pinnar(-33);
   pinnar2(80);
   pinnar2(-80);

   border();
   golv();
   tak();

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





