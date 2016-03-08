var scene; 
var camera; 
var renderer;
var mesh;
var kubis; 
var KLOT;
// git add file.name && git commit -m "removed merge conflicts"
var startTime   = Date.now();
var r;
var dtime;
var a; 
  var kMaterial
var bitmap // bitmapptest
var container,stats;
 var delta;

// det my hittar på
var h = 0.01;
//var bollen = [0, 98, 0, -50, 0, 0];
var bollen = [0, 98, 0, 0, 0, 0];
//var bollen = [0, 98, -2.38, -10, 5, 5];
//var bollen = [0, 98, 0, -10, 0, 0];
//var bollen = [0, 30, 0, -20, 0, 0];

var thePins = [[0, 10.56, 0, 0, 0, 0], [-1.52, 7.92, 0, 0, 0, 0], [1.52, 7.92, 0, 0, 0, 0], [-3.04, 5.28, 0, 0, 0, 0], [0, 5.28, 0, 0, 0, 0], [3.04, 5.28, 0, 0, 0, 0], [-4.16, 2.64, 0, 0, 0, 0], [-1.52, 2.64, 0, 0, 0, 0], [1.52, 2.64, 0, 0, 0, 0], [4.16, 2.64, 0, 0, 0, 0]];
var camera2;

init();
animate();
//render();

var clock = new THREE.Clock();
var Mcylinder_mesh1
var Mcylinder_mesh2
var Mcylinder_mesh3
var Mcylinder_mesh4
var Mcylinder_mesh5
var Mcylinder_mesh6
var Mcylinder_mesh7
var Mcylinder_mesh8
var Mcylinder_mesh9
var Mcylinder_mesh10



/* SÅHÄR ÖPPNAR DU CHROME
MAC   : open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
WINDOWS: chrome --allow-file-access-from-files 
*/


 /// ----------------------------- FUNCTIONS----------------------------------




function bana(par1){

    var kGeometry = new THREE.CubeGeometry( 17, 0.1, 100); // storleken på kuben /Users/my/Documents/LiU/Appelmos/Appelmos/js/images/klotet.jpeg

    var tetexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/lane3.jpg', {}, function(){ renderer.render(scene, camera); } );
    var tematerial = new THREE.MeshPhongMaterial({map: tetexture})

    mesh = new THREE.Mesh(kGeometry, tematerial ); // tillhör kuben 
    mesh.position.z = 50
    mesh.position.x = par1;
    mesh.position.y = -0.02;

    scene.add( mesh );
}


function klot(){
 var texture2 = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/klotet.jpeg ', {}, function(){ renderer.render(scene, camera); } );

  var geometry3 = new THREE.SphereGeometry(1.09, 15, 15);

  var material3 = new THREE.MeshPhongMaterial({map: texture2})

  //var material3 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/lane.jpg ');

  KLOT = new THREE.Mesh(geometry3, material3);
  KLOT.translateZ(bollen[1]);
  KLOT.translateY(1.09);
  scene.add(KLOT);
}

function rannor(par1){

  var long_cylinder = new THREE.CylinderGeometry(1.25, 1.25, 100, 20);


   var rannorTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/fab.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
   rannorTexture.repeat.set( 1, 5 );
   rannorTexture.wrapS = rannorTexture.wrapT = THREE.RepeatWrapping;


   var rannorMaterial = new THREE.MeshPhongMaterial({map: rannorTexture})
  //var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

  var cylinder_mesh = new THREE.Mesh(long_cylinder, rannorMaterial);
  cylinder_mesh.translateZ(51);

  cylinder_mesh.rotation.x = Math.PI /2;
  cylinder_mesh.translateX(par1);

  scene.add(cylinder_mesh);

}

function golvMellenRannor(par1){

  var gmrGeometry = new THREE.CubeGeometry( 4, 0.5, 100); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
  var gmrmaterial = new THREE.MeshPhongMaterial({map: gmrtexture})

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 50;
  mesh.position.x = par1;

  scene.add( mesh );

}


function vagg1(){


  var vaggGeometry = new THREE.PlaneGeometry(200, 30, 5);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/spacad.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 1, 1 );
  vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

  var vaggMaterial = new THREE.MeshPhongMaterial({map: vaggTexture})


  var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
  vagg.translateY(25);
  vagg.translateZ(11);

  scene.add(vagg);
}

function vagg2(par1){
  //Andra väggar

  var vaggGeometry = new THREE.PlaneGeometry(110, 110, 5);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/black2.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 3, 3 );
  vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

  var vaggMaterial = new THREE.MeshPhongMaterial({map: vaggTexture})

  var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
  vagg.translateY(55);
  vagg.translateX(par1 * 110);
  vagg.translateZ(40);
  vagg.rotation.y = (-par1)* Math.PI /3;


  scene.add(vagg);


}

function pinnar(par1){

  var vaggGeometry = new THREE.CubeGeometry(2, 8, 10);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 5, 5 );
  vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

  var vaggMaterial = new THREE.MeshPhongMaterial({map: vaggTexture})


  var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
  vagg.translateX(par1);
  vagg.translateY(4);
  vagg.translateZ(5);

  scene.add(vagg);
}

function pinnar2(par1){

  var vaggGeometry = new THREE.CubeGeometry(52, 8, 10);

  var vaggTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
   vaggTexture.repeat.set( 5, 5 );
  vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

  var vaggMaterial = new THREE.MeshPhongMaterial({map: vaggTexture})


  var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
  vagg.translateX(par1);
  vagg.translateY(4);
  vagg.translateZ(5);

  scene.add(vagg);
}

function border(){

  var borderGeometry = new THREE.PlaneGeometry(200, 6, 5);

  var borderTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/dark2.jpg', {}, function(){ renderer.render(scene, camera); } );
  borderTexture.repeat.set( 5, 1 );
  borderTexture.wrapS = borderTexture.wrapT = THREE.RepeatWrapping;

  var borderMaterial = new THREE.MeshPhongMaterial({map: borderTexture})


  var border = new THREE.Mesh(borderGeometry, borderMaterial);
  border.translateZ(3+10);
  border.translateY(8);

  scene.add(border);

}

function golv(){
  var gmrGeometry = new THREE.CubeGeometry( 350, 1, 250); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/rug.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 30, 30 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshPhongMaterial({map: gmrtexture})

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 124;
  mesh.position.x = 10;
  mesh.position.y = -0.5;

  scene.add( mesh );
}

function golv2(){
  var gmrGeometry = new THREE.CubeGeometry( 350, 1, 50); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/wood.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 30, 30 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshPhongMaterial({map: gmrtexture})

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 125;
  mesh.position.x = 10;
  mesh.position.y = -0.4;

  scene.add( mesh );
}

function tak(){
  var gmrGeometry = new THREE.CubeGeometry( 250, 1, 250); // storleken på kuben

  var gmrtexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/lights2.jpg', {}, function(){ renderer.render(scene, camera); } );
  gmrtexture.repeat.set( 10, 10 );
  gmrtexture.wrapS = gmrtexture.wrapT = THREE.RepeatWrapping;

  var gmrmaterial = new THREE.MeshPhongMaterial({map: gmrtexture}) // MeshPhongMaterial

  mesh = new THREE.Mesh(gmrGeometry, gmrmaterial ); // tillhör kuben 
  mesh.position.z = 114;
  mesh.position.x = 10;
  mesh.position.y = 40;

  scene.add( mesh );
}


function kagla(par1){

  var cylinder = new THREE.CylinderGeometry(0.6, 0.6, 3.8);

  var kagTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/bowlingPin.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
  //kagTexture.repeat.set( 1, 1 );
  //kagTexture.wrapS = kagTexture.wrapT = THREE.RepeatWrapping;
  var kagMaterial = new THREE.MeshPhongMaterial({map: kagTexture,   side:THREE.DoubleSide, transparent:true})
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
  cylinder_mesh6.translateX(3.04 + par1);
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

function movingKaglor(){

  var cylinder = new THREE.CylinderGeometry(0.6, 0.6, 3.8);

  var kagTexture = THREE.ImageUtils.loadTexture('/Users/my/Documents/LiU/Appelmos/Appelmos/js/images/bowlingPin.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
  //kagTexture.repeat.set( 1, 1 );
  //kagTexture.wrapS = kagTexture.wrapT = THREE.RepeatWrapping;
  var kagMaterial = new THREE.MeshPhongMaterial({map: kagTexture,   side:THREE.DoubleSide, transparent:true})
  //var material7 = new THREE.MeshBasicMaterial( {color: 0x0000ff} );



  // Kägla 0
  Mcylinder_mesh1 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[0][0]);
  Mcylinder_mesh1.translateZ(thePins[0][1]);
  Mcylinder_mesh1.translateY(1.9);
  Mcylinder_mesh1.rotation.y = Math.PI ;

  scene.add(Mcylinder_mesh1);

    // Kägla 1
  Mcylinder_mesh2 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[1][0]);
  Mcylinder_mesh1.translateZ(thePins[1][1]);
  Mcylinder_mesh2.translateY(1.9);
  scene.add(Mcylinder_mesh2);

    // Kägla 2
  Mcylinder_mesh3 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[2][0]);
  Mcylinder_mesh1.translateZ(thePins[2][1]);
  Mcylinder_mesh3.translateY(1.9);
  scene.add(Mcylinder_mesh3);

    // Kägla 3
  Mcylinder_mesh4 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[3][0]);
  Mcylinder_mesh1.translateZ(thePins[3][1]);
  Mcylinder_mesh4.translateY(1.9);
  scene.add(Mcylinder_mesh4);

    // Kägla 4
  Mcylinder_mesh5 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[4][0]);
  Mcylinder_mesh1.translateZ(thePins[4][1]);
  Mcylinder_mesh5.translateY(1.9);
  scene.add(Mcylinder_mesh5);

    // Kägla 5
  Mcylinder_mesh6 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[5][0]);
  Mcylinder_mesh1.translateZ(thePins[5][1]);
  Mcylinder_mesh6.translateY(1.9);
  scene.add(Mcylinder_mesh6);

    // Kägla 6
  Mcylinder_mesh7 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[6][0]);
  Mcylinder_mesh1.translateZ(thePins[6][1]);
  Mcylinder_mesh7.translateY(1.9);
  scene.add(Mcylinder_mesh7);

    // Kägla 7
  Mcylinder_mesh8 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[7][0]);
  Mcylinder_mesh1.translateZ(thePins[7][1]);
  Mcylinder_mesh8.translateY(1.9);
  scene.add(Mcylinder_mesh8);

    // Kägla 8
  Mcylinder_mesh9 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[8][0]);
  Mcylinder_mesh1.translateZ(thePins[8][1]);
  Mcylinder_mesh9.translateY(1.9);
  scene.add(Mcylinder_mesh9);

    // Kägla 9
  Mcylinder_mesh10 = new THREE.Mesh(cylinder, kagMaterial);
  Mcylinder_mesh1.translateX(thePins[9][0]);
  Mcylinder_mesh1.translateZ(thePins[9][1]);
  Mcylinder_mesh10.translateY(1.9);
  scene.add(Mcylinder_mesh10);

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
  startTime;

  //container = document.getElementById( 'container' );
  scene = new THREE.Scene(); 
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 1000); 

  //KAMERA POSITION
  camera.position.z = 120; 
  camera.position.y = 12;
  camera.position.x = 0;

  // camera 2 (my)
  camera2 = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000); 
  camera2.position.z = 45; 
  camera2.position.y = 7;
  camera2.position.x = 0;



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

  movingKaglor();
  kagla(22); 
  kagla(-22); 
  kagla(44); 
  kagla(-44); 

  var spotLight = new THREE.SpotLight( 0xaaaaaa );
  spotLight.position.set( 0, 50, 50 );

  spotLight.castShadow = true;

  spotLight.shadowMapWidth = 1024;
  spotLight.shadowMapHeight = 1024;

  spotLight.shadowCameraNear = 500;
  spotLight.shadowCameraFar = 4000;
  spotLight.shadowCameraFov = 30;

  scene.add( spotLight );
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  
  directionalLight.position.set( 0, 1, 1 );
  scene.add( directionalLight );
  
  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );

// KLOT FAN SKAPET --------------
 // var texture2 = new THREE.TextureLoader().load('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/klotet.jpeg ');


// ------------------------------

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
  /*var texture20 = new THREE.TextureLoader().load('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/klotet.jpeg ');
  //    var material30 = new THREE.MeshBasicMaterial({map: texture20})
  var geometry30 = new THREE.CylinderGeometry(1, 1, 10);
  var material30 = new THREE.MeshBasicMaterial( { map: texture20 } );
  //var material3 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/lane.jpg ');
  kubis = new THREE.Mesh(geometry30, material30);
  kubis.translateZ(100);
  kubis.translateY(5);
  kubis.translateX(7);
  scene.add(kubis);*/
// --------------------------


  //
  renderer = new THREE.WebGLRenderer();
  // ? renderer.setPixelRatio( window.devicePixelRatio );

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );
animate();

}

function animate() {

  requestAnimationFrame( animate );

  dtime = (((Date.now() - startTime)/50)); // denna får den att röra på sig. FUNKAR

  //moveBall();
  moveBall();
  KLOT.position.setX(bollen[0]);
  KLOT.position.setZ(bollen[1]);
  KLOT.rotation.x -= bollen[4]*h;
  KLOT.rotation.z += bollen[5]*h;

  Mcylinder_mesh1.position.setX(thePins[0][0]); 
  Mcylinder_mesh1.position.setZ(thePins[0][1]); 
  
  Mcylinder_mesh2.position.setX(thePins[1][0]); 
  Mcylinder_mesh2.position.setZ(thePins[1][1]);
 
  Mcylinder_mesh3.position.setX(thePins[2][0]); 
  Mcylinder_mesh3.position.setZ(thePins[2][1]); 
 
  Mcylinder_mesh4.position.setX(thePins[3][0]); 
  Mcylinder_mesh4.position.setZ(thePins[3][1]); 

  Mcylinder_mesh5.position.setX(thePins[4][0]); 
  Mcylinder_mesh5.position.setZ(thePins[4][1]); 
 
  Mcylinder_mesh6.position.setX(thePins[5][0]); 
  Mcylinder_mesh6.position.setZ(thePins[5][1]);

  Mcylinder_mesh7.position.setX(thePins[6][0]); 
  Mcylinder_mesh7.position.setZ(thePins[6][1]); 
 
  Mcylinder_mesh8.position.setX(thePins[7][0]); 
  Mcylinder_mesh8.position.setZ(thePins[7][1]);
 
  Mcylinder_mesh9.position.setX(thePins[8][0]); 
  Mcylinder_mesh9.position.setZ(thePins[8][1]); 
 
  Mcylinder_mesh10.position.setX(thePins[9][0]); 
  Mcylinder_mesh10.position.setZ(thePins[9][1]);
 

  if (bollen[1] < 35) {
    renderer.render( scene, camera2 );
  } else {
    renderer.render( scene, camera );
  }


}

function moveBall() {
  for (var i = 0; i < thePins.length; i++) {
    if ((1.09+0.6)*(1.09+0.6) > (bollen[0]-thePins[i][0])*(bollen[0]-thePins[i][0])+(bollen[1]-thePins[i][1])*(bollen[1]-thePins[i][1])) {

      var dist = Math.sqrt((bollen[0]-thePins[i][0])*(bollen[0]-thePins[i][0])+(bollen[1]-thePins[i][1])*(bollen[1]-thePins[i][1]));
      var ra = [1.09*((thePins[i][0]-bollen[0])/dist), 1.09*((thePins[i][1]-bollen[1])/dist)];
      var rb = [0.6*((bollen[0]-thePins[i][0])/dist), 0.6*((bollen[1]-thePins[i][1])/dist)];

      var ma = 70;
      var mb = 1;
      var Ia = (2*ma*1.09*1.09)/5;
      var Ib = (mb*(3*0.6*0.6 + 3.8*3.8)/12);
      var vax = bollen[2]+bollen[5]*1.09;
      var vay = bollen[3]-bollen[4]*1.09;

      var e = 1;
      var k = 1/(ma*ma)+ 2/(ma*mb) +1/(mb*mb) - ra[0]*ra[0]/(ma*Ia) - rb[0]*rb[0]/(ma*Ib)  - ra[1]*ra[1]/(ma*Ia) - ra[1]*ra[1]/(mb*Ia) - ra[0]*ra[0]/(mb*Ia) - rb[0]*rb[0]/(mb*Ib) - rb[1]*rb[1]/(ma*Ib) - rb[1]*rb[1]/(mb*Ib) + ra[1]*ra[1]*rb[0]*rb[0]/(Ia*Ib) + ra[0]*ra[0]*rb[1]*rb[1]/(Ia*Ib) - 2*ra[0]*ra[1]*rb[0]*rb[1]/(Ia*Ib);
      var Jx = ((e+1)/k) * (vax - thePins[i][2])*( 1/ma - ra[0]*ra[0]/Ia + 1/mb - rb[0]*rb[0]/Ib) - ((e+1)/k) * (vay - thePins[i][3]) *(ra[0]*ra[1] / Ia + rb[0]*rb[1] / Ib);
      var Jy = - ((e+1)/k) * (vax - thePins[i][2]) *(ra[0]*ra[1] / Ia + rb[0]*rb[1] / Ib) + ((e+1)/k)  * (vay - thePins[i][3]) * ( 1/ma - ra[1]*ra[1]/Ia + 1/mb - rb[1]*rb[1]/Ib);


      bollen[4] = bollen[4] - (Jx*ra[1] - Jy*ra[0])/Ia;
      bollen[5] = bollen[5] - (Jx*ra[1] - Jy*ra[0])/Ia;
      bollen[2] = vax - Jx/ma  - bollen[5]*1.09;
      bollen[3] = vay - Jy/ma  + bollen[4]*1.09;

      
      thePins[i][4] = thePins[i][4] - (Jx*rb[1] - Jy*rb[0])/Ib;
      thePins[i][5] = thePins[i][5] - (Jx*rb[1] - Jy*rb[0])/Ib;
      thePins[i][2] = (thePins[i][2] - Jx/mb) ;
      thePins[i][3] = (thePins[i][3] + Jy/mb) ; 

    }
  }


  for (var j = 0; j < 9; j++) {
    for (var i = j+1; i < 10; i++) {
      if (1.44 > (thePins[j][0]-thePins[i][0])*(thePins[j][0]-thePins[i][0])+(thePins[j][1]-thePins[i][1])*(thePins[j][1]-thePins[i][1])) { 
        var dist = Math.sqrt((thePins[j][0]-thePins[i][0])*(thePins[j][0]-thePins[i][0])+(thePins[j][1]-thePins[i][1])*(thePins[j][1]-thePins[i][1]));
        var ra = [0.6*((thePins[i][0]-thePins[j][0])/dist), 0.6*((thePins[i][1]-thePins[j][1])/dist)];
        var rb = [0.6*((thePins[j][0]-thePins[i][0])/dist), 0.6*((thePins[j][1]-thePins[i][1])/dist)];

        var ma = 1;
        var mb = 1;
        var Ia = (mb*(3*0.6*0.6 + 3.8*3.8)/12);
        var Ib = (mb*(3*0.6*0.6 + 3.8*3.8)/12);
        var vax = thePins[j][2];
        var vay = thePins[j][3];

        var e = 0.9;
        var k = 1/(ma*ma)+ 2/(ma*mb) +1/(mb*mb) - ra[0]*ra[0]/(ma*Ia) - rb[0]*rb[0]/(ma*Ib)  - ra[1]*ra[1]/(ma*Ia) - ra[1]*ra[1]/(mb*Ia) - ra[0]*ra[0]/(mb*Ia) - rb[0]*rb[0]/(mb*Ib) - rb[1]*rb[1]/(ma*Ib) - rb[1]*rb[1]/(mb*Ib) + ra[1]*ra[1]*rb[0]*rb[0]/(Ia*Ib) + ra[0]*ra[0]*rb[1]*rb[1]/(Ia*Ib) - 2*ra[0]*ra[1]*rb[0]*rb[1]/(Ia*Ib);
        var Jx = ((e+1)/k) * (vax - thePins[i][2])*( 1/ma - ra[0]*ra[0]/Ia + 1/mb - rb[0]*rb[0]/Ib) - ((e+1)/k) * (vay - thePins[i][3]) *(ra[0]*ra[1] / Ia + rb[0]*rb[1] / Ib);
        var Jy = - ((e+1)/k) * (vax - thePins[i][2]) *(ra[0]*ra[1] / Ia + rb[0]*rb[1] / Ib) + ((e+1)/k)  * (vay - thePins[i][3]) * ( 1/ma - ra[1]*ra[1]/Ia + 1/mb - rb[1]*rb[1]/Ib);

        thePins[j][2] = vax - Jx/ma;
        thePins[j][3] = vay - Jy/ma;

        thePins[i][2] = (thePins[i][2] - Jx/mb) ;
        thePins[i][3] = (thePins[i][3] + Jy/mb) ; 

      }
    }
  }

  for (var i = 0; i < thePins.length; i++) {
    thePins[i][0] = thePins[i][0] + h*thePins[i][2];
    thePins[i][1] = thePins[i][1] + h*thePins[i][3];
  }


  var sliding = Math.sqrt(bollen[2]*bollen[2]+bollen[3]*bollen[3]);
  var acX = -(0.09*98.2*bollen[2])/sliding;
  var acY = -(0.09*98.2*bollen[3])/sliding;
  var alphaX = (5*acY)/(2*1.09);
  var alphaY = -(5*acX)/(2*1.09);

  var dxdt = [bollen[2]+bollen[5]*1.09 , bollen[3]-bollen[4]*1.09, acX, acY, alphaX, alphaY]; //    
  bollen[0] = bollen[0] + h*dxdt[0];
  bollen[1] = bollen[1] + h*dxdt[1];
  bollen[2] = bollen[2] + h*dxdt[2];
  bollen[3] = bollen[3] + h*dxdt[3];
  bollen[4] = bollen[4] + h*dxdt[4];
  bollen[5] = bollen[5] + h*dxdt[5];

  if (bollen[1] < -2) {
    KLOT.position.setY(0);
    bollen[2] = 0;
    bollen[3] = 0;
    bollen[4] = 0;
    bollen[5] = 0;
  }

}
