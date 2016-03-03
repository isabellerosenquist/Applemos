var scene; 
var camera; 
var renderer;
var mesh;
var kubis; 
// git add file.name && git commit -m "removed merge conflicts"
var startTime   = Date.now();
var r;
var dtime;
var a; 
  var kMaterial
var bitmap // bitmapptest
var container,stats;
 var delta;

init();
animate();
render();

var clock = new THREE.Clock();



/* SÅHÄR ÖPPNAR DU CHROME
MAC   : open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
WINDOWS: chrome --allow-file-access-from-files 
*/


 /// ----------------------------- FUNCTIONS----------------------------------




function bana(par1){

     var kGeometry = new THREE.CubeGeometry( 17, 0.1, 100); // storleken på kuben

    var tetexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lane3.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshBasicMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50
    mesh.position.x = par1;
    mesh.position.y = -0.02;

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


  var vaggGeometry = new THREE.PlaneGeometry(200, 30, 5);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/spacad.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 1, 1 );
  vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

  var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})


  var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
  vagg.translateY(25);

  scene.add(vagg);
}

function vagg2(par1){
  //Andra väggar

  var vaggGeometry = new THREE.PlaneGeometry(110, 110, 5);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/black2.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 3, 3 );
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

  var borderGeometry = new THREE.PlaneGeometry(200, 5, 5);

  var borderTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/dark2.jpg', {}, function(){ renderer.render(scene, camera); } );
  borderTexture.repeat.set( 5, 1 );
  borderTexture.wrapS = borderTexture.wrapT = THREE.RepeatWrapping;

  var borderMaterial = new THREE.MeshBasicMaterial({map: borderTexture})


  var border = new THREE.Mesh(borderGeometry, borderMaterial);
  border.translateZ(3);
  border.translateY(9);

  scene.add(border);

}

function golv(){
  var gmrGeometry = new THREE.CubeGeometry( 350, 1, 250); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/rug.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 30, 30 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture})

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 124;
  mesh.position.x = 10;
  mesh.position.y = -0.5;

  scene.add( mesh );
}

function golv2(){
  var gmrGeometry = new THREE.CubeGeometry( 350, 1, 50); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 30, 30 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture})

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 125;
  mesh.position.x = 10;
  mesh.position.y = -0.4;

  scene.add( mesh );
}

function tak(){
  var gmrGeometry = new THREE.CubeGeometry( 250, 1, 250); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/lights2.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 10, 10 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshBasicMaterial({map: gmrtexture}) // MeshPhongMaterial

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 114;
  mesh.position.x = 10;
  mesh.position.y = 40;

  scene.add( mesh );
}

function addLights() {

  var light = new THREE.DirectionalLight( 0x999999, 2 );
  light.position.x = 50;
  light.position.y = 50;
  light.position.z = 50;
  scene.add( light );
}

function kagla(par1){

  var cylinder = new THREE.CylinderGeometry(0.6, 0.6, 3.8);

  var kagTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/bowlingPin.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
  //kagTexture.repeat.set( 1, 1 );
  //kagTexture.wrapS = kagTexture.wrapT = THREE.RepeatWrapping;
  var kagMaterial = new THREE.MeshBasicMaterial({map: kagTexture,   side:THREE.DoubleSide, transparent:true})
  //var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );



  // Kägla 1
  var cylinder_mesh1 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh1.translateX(0 + par1);
  cylinder_mesh1.translateZ(10.56);
  cylinder_mesh1.translateY(1.9);
  cylinder_mesh1.rotation.y = Math.PI ;

  scene.add(cylinder_mesh1);

    // Kägla 2
  var cylinder_mesh2 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh2.translateX(-1.52 + par1);
  cylinder_mesh2.translateZ(7.92);
  cylinder_mesh2.translateY(1.9);
  scene.add(cylinder_mesh2);

    // Kägla 3
  var cylinder_mesh3 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh3.translateX(1.52 + par1);
  cylinder_mesh3.translateZ(7.92);
  cylinder_mesh3.translateY(1.9);
  scene.add(cylinder_mesh3);

    // Kägla 4
  var cylinder_mesh4 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh4.translateX(-3.04 + par1);
  cylinder_mesh4.translateZ(5.28);
  cylinder_mesh4.translateY(1.9);
  scene.add(cylinder_mesh4);

    // Kägla 5
  var cylinder_mesh5 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh5.translateX(0 + par1);
  cylinder_mesh5.translateZ(5.28);
  cylinder_mesh5.translateY(1.9);
  scene.add(cylinder_mesh5);

    // Kägla 6
  var cylinder_mesh6 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh6.translateX(3.04) + par1;
  cylinder_mesh6.translateZ(5.28);
  cylinder_mesh6.translateY(1.9);
  scene.add(cylinder_mesh6);

    // Kägla 7
  var cylinder_mesh7 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh7.translateX(-4.16 + par1);
  cylinder_mesh7.translateZ(2.64);
  cylinder_mesh7.translateY(1.9);
  scene.add(cylinder_mesh7);

    // Kägla 8
  var cylinder_mesh8 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh8.translateX(-1.52 + par1);
  cylinder_mesh8.translateZ(2.64);
  cylinder_mesh8.translateY(1.9);
  scene.add(cylinder_mesh8);

    // Kägla 9
  var cylinder_mesh9 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh9.translateX(1.52 + par1);
  cylinder_mesh9.translateZ(2.64);
  cylinder_mesh9.translateY(1.9);
  scene.add(cylinder_mesh9);

    // Kägla 10
  var cylinder_mesh10 = new THREE.Mesh(cylinder, kagMaterial);
  cylinder_mesh10.translateX(4.16 + par1);
  cylinder_mesh10.translateZ(2.64);
  cylinder_mesh10.translateY(1.9);
  scene.add(cylinder_mesh10);

}

 /// -----------------------------------------------------------------------

  
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
  startTime

  container = document.getElementById( 'container' );
  scene = new THREE.Scene(); 
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 

  renderer = new THREE.WebGLRenderer();
  // ? renderer.setPixelRatio( window.devicePixelRatio );
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
 golv2();
 tak();

 kagla(0); 
 kagla(22); 
 kagla(-22); 
 kagla(44); 
 kagla(-44); 







addLights();

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

// TEST KUB-----------------
   // var texture20 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/klotet.jpeg ', {}, function(){ renderer.render(scene, camera); } );
//    var material30 = new THREE.MeshBasicMaterial({map: texture20})

var geometry30 = new THREE.CylinderGeometry(1, 1, 10);

var material30 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

//var material3 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/lane.jpg ');

kubis = new THREE.Mesh(geometry30, material30);

kubis.translateZ(100);
kubis.translateY(5);
kubis.translateX(7);
scene.add(kubis);
// --------------------------




//KAMERA POSITION
camera.position.z = 120; 
camera.position.y = 12;
camera.position.x = 0;
//camera.rotation.x = -Math.PI /10;


    //KAMERA POSITION
   // camera.position.z = 120; 
   // camera.position.y = 12;
   // camera.position.x = 0;

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

function animate() {

  requestAnimationFrame( animate );
  render();

  //kubis.rotation.x += .04;
  //kubis.rotation.y += .01;
  //renderer.render( scene, camera );  
  kubis.position.set(1,1, r)

}
function rotateCube() {
  kubis.rotation.x -= 0.1;
  kubis.rotation.y -= 0.2;
  kubis.rotation.z -= 0.3;
}


function render() {
  dtime = 0 - (((Date.now() - startTime)/50)); // denna får den att röra på sig. FUNKAR

  KLOT.position.set(r, 20, 5);
  KLOT.rotation.x(r, 20, 5);
  KLOT.position.set(1.0 + 0.3*Math.sin(dtime/100), 1, 1);
  mesh.position.set(1,1,dtime); // denna får den att röra på sig. FUNKAR


  requestAnimationFrame( animate );

  // delta = 0.75 * clock.getDelta();

  //kubis.rotation.x += 0.1;

  renderer.render( scene, camera );

  /*     

    
  //mesh.scale.y    = 1.0 + 0.3*Math.sin(dtime/300);
  //mesh.scale.z    = 1.0 + 0.3*Math.sin(dtime/300);
  */



  requestAnimationFrame(render);  
  renderer.render( scene, camera );

    
  r = r+1; 


}



