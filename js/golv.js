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
<<<<<<< HEAD
function kuben(){
   var kGeometry = new THREE.CubeGeometry( 10, 10, 10); // storleken på kuben
=======




function bana(par1){

<<<<<<< HEAD
     var kGeometry = new THREE.CubeGeometry( 17, 0.1, 100); // storleken på kuben
=======
     var kGeometry = new THREE.CubeGeometry( 20, 0.1, 100); // storleken på kuben
>>>>>>> 4122e4d440f082e42a86cd6223f36e744d1cd0ce
>>>>>>> ff5981cc5eaa59b16af9302a68bc9c1e7162535b

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


 var rannorTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/tex.jpg ', {}, function(){ renderer.render(scene, camera); } ); 
 rannorTexture.repeat.set( 0.1, 1 );
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


    var vaggGeometry = new THREE.PlaneGeometry(200, 100, 5);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/bakg.jpeg', {}, function(){ renderer.render(scene, camera); } );
     vaggTexture.repeat.set( 3, 3 );
    vaggTexture.wrapS = vaggTexture.wrapT = THREE.RepeatWrapping;

    var vaggMaterial = new THREE.MeshBasicMaterial({map: vaggTexture})


    var vagg = new THREE.Mesh(vaggGeometry, vaggMaterial);
    vagg.translateY(70);

    scene.add(vagg);
}

function vagg2(par1){
    //Andra väggar

    var vaggGeometry = new THREE.PlaneGeometry(110, 110, 5);

    var vaggTexture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/images/people.jpg', {}, function(){ renderer.render(scene, camera); } );
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
	
	//var texture = THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/z/bowling-lane-chart-15312975.jpg', {}, function(){ renderer.render(scene, camera); } );
	//var material = THREE.MeshFaceMaterial( {map: texture, side:THREE.DoubleSide});
    //var material = new THREE.MeshBasicMaterial({ map: texture, side:THREE.DoubleSide});
    //var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture("image/lane.jpg")});
    var floor = new THREE.Mesh(geometry, material); 
    scene.add(floor); 
	
	
	//ANDRA BANOR
	
	var geometry10 = new THREE.Geometry(); 

    geometry10.vertices.push(new THREE.Vector3(-29.5, 0, -100));//Vertice 0
    geometry10.vertices.push(new THREE.Vector3(-14.5, 0, -100));//Vertice 1
    geometry10.vertices.push(new THREE.Vector3(-14.5, 0,  100));//Vertice 2
    geometry10.vertices.push(new THREE.Vector3(-29.5, 0,  100));//Vertice 3
    		
    geometry10.faces.push(new THREE.Face3( 1, 0, 2));
    geometry10.faces.push(new THREE.Face3( 2, 0, 3));
	
	var floor2 = new THREE.Mesh(geometry10, material); 
	floor2.doubleSided = true; 
    scene.add(floor2); 
	

	var geometry11 = new THREE.Geometry(); 

    geometry11.vertices.push(new THREE.Vector3(14.5, 0, -100));//Vertice 0
    geometry11.vertices.push(new THREE.Vector3(29.5, 0, -100));//Vertice 1
    geometry11.vertices.push(new THREE.Vector3(29.5, 0,  100));//Vertice 2
    geometry11.vertices.push(new THREE.Vector3(14.5, 0,  100));//Vertice 3
    		
    geometry11.faces.push(new THREE.Face3( 1, 0, 2));
    geometry11.faces.push(new THREE.Face3( 2, 0, 3));
	
	var floor3 = new THREE.Mesh(geometry11, material); 
	floor3.doubleSided = true; 
    scene.add(floor3);
	

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
    // material3 = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Documents/LiU/Githubmappen/Applemos/js/lane.jpg ');
=======
   bana1();
   bana2();
   bana3();
>>>>>>> 4122e4d440f082e42a86cd6223f36e744d1cd0ce

>>>>>>> ff5981cc5eaa59b16af9302a68bc9c1e7162535b
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

//----------------- HÄR GÖRS GRISBOLLEN
/*
var texture = THREE.ImageUtils.loadTexture('/Users/madeleinerapp/Desktop/gris.jpg', {}, function(){ renderer.render(scene, camera); } );
var testMaterial = new THREE.MeshBasicMaterial({map: texture})

  // var testTexture = THREE.ImageUtils.loadTexture(bitmap.src); // Create texture object based on the given bitmap path.
    //var testMaterial = new THREE.MeshBasicMaterial({ map: testTexture }); // Create a material (for the spherical mesh) that reflects light, potentially causing sphere surface shadows.

    var testGeometry = new THREE.SphereGeometry(50, 64, 64); // Radius size, number of vertical segments, number of horizontal rings.

    var testSphere = new THREE.Mesh(testGeometry, testMaterial); // Create a mesh based on the specified geometry (cube) and material (blue skin).

<<<<<<< HEAD
    var geometry4 = new THREE.PlaneGeometry(250, 180, 5);
    var texture4 = new THREE.MeshBasicMaterial( {color: 0x66CCFF} );

=======
    scene.add(testSphere); // Add the sphere at (0, 0, 0).
*/
//----------------- 


<<<<<<< HEAD
=======
    var geometry4 = new THREE.PlaneGeometry(250, 180, 5);
    var texture4 = new THREE.MeshBasicMaterial( {color: 0x66CCFF} );


>>>>>>> 4122e4d440f082e42a86cd6223f36e744d1cd0ce
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



>>>>>>> ff5981cc5eaa59b16af9302a68bc9c1e7162535b

<<<<<<< HEAD
cylinder_mesh.rotation.x = Math.PI /2;
cylinder_mesh.translateX(-8.75);

scene.add(cylinder_mesh);

			//-----TEST FÖR ATT FÅ EN RÄNNA ISTÄLLET FÖR CYLINDER-----
			
			// var long_cylinder = new THREE.CylinderGeometry(1.25, 1.25, 200);
			// var cylinder_mesh = new THREE.Mesh(long_cylinder);

			// cylinder_mesh.rotation.x = Math.PI /2;
			// cylinder_mesh.translateX(-8.75);

			// var long_cylinder_bsp = new THREEBSP(cylinder_mesh);

			// var long_plane = new THREE.PlaneGeometry(2.5, 200);
			// var long_plane_mesh = new THREE.Mesh(long_plane);

			// long_plane_mesh.rotation.x = Math.PI /2;
			// long_plane_mesh.translateX(-8.75);

			// var long_plane_bsp = new THREEBSP(long_plane_mesh);

			// var subtract_bsp = long_cylinder_bsp.subtract(long_plane_bsp);
			// var result = subtract_bsp.toMesh( new THREE.MeshBasicMaterial( {color: 0x0000ff} ));
			// result.geometry.computeVertexNormals();
			// scene.add(result);


// var cube_geometry = new THREE.CubeGeometry( 3, 3, 3 );
// var cube_mesh = new THREE.Mesh( cube_geometry );
// cube_mesh.position.x = -7;
// var cube_bsp = new ThreeBSP( cube_mesh );
// var sphere_geometry = new THREE.SphereGeometry( 1.8, 32, 32 );
// var sphere_mesh = new THREE.Mesh( sphere_geometry );
// sphere_mesh.position.x = -7;
// var sphere_bsp = new ThreeBSP( sphere_mesh );

// var subtract_bsp = cube_bsp.subtract( sphere_bsp );
// var result = subtract_bsp.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.SmoothShading, map: THREE.ImageUtils.loadTexture('texture.png') }) );
// result.geometry.computeVertexNormals();
// scene.add( result );




var long_cylinder2 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh2 = new THREE.Mesh(long_cylinder2, material7);

cylinder_mesh2.rotation.x = Math.PI /2;
cylinder_mesh2.translateX(8.75);

scene.add(cylinder_mesh2);


var long_cylinder3 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh3 = new THREE.Mesh(long_cylinder3, material7);

cylinder_mesh3.rotation.x = Math.PI /2;
cylinder_mesh3.translateX(-13.25);

scene.add(cylinder_mesh3);


var long_cylinder4 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh4 = new THREE.Mesh(long_cylinder4, material7);

cylinder_mesh4.rotation.x = Math.PI /2;
cylinder_mesh4.translateX(13.25);

scene.add(cylinder_mesh4);

var long_cylinder5 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh5 = new THREE.Mesh(long_cylinder5, material7);

cylinder_mesh5.rotation.x = Math.PI /2;
cylinder_mesh5.translateX(30.75);

scene.add(cylinder_mesh5);

var long_cylinder6 = new THREE.CylinderGeometry(1.25, 1.25, 200);

var cylinder_mesh6 = new THREE.Mesh(long_cylinder6, material7);

cylinder_mesh6.rotation.x = Math.PI /2;
cylinder_mesh6.translateX(-30.75);

scene.add(cylinder_mesh6);
=======
>>>>>>> 4122e4d440f082e42a86cd6223f36e744d1cd0ce





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





