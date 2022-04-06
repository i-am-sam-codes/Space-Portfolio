import './style.css'

import * as THREE from 'three';
//will allows us to move around the scene with out using our mouse 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

//designed to mimic what eyeballs would see. First argument - Field of view, the amount that is visible within a 360 degrees. Second argument is Aspect Ration based on the users browser window. Calculated by dividing innerWidth / innerHeight.
//the last two arguments are for the View Frustrum to control which objects are visible relative to the camera itself. 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderer to render the graphics to the scene 
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio );

//set full screen 
renderer.setSize( window.innerWidth, window.innerHeight );

//moving camera to the z axis 
camera.position.setZ(30);

renderer.render( scene, camera )

//There are 3 basic steps to creating an object. 
// #1 Need geometry/vector define the object. THREE.js has a bunch of build in geometrys. 
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
// #2 Need to define material to define color or texture. Theres many different materials to chose from with THREE.js material
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } )
// #3 Create a MESH geometry + material combining them both together
const torus = new THREE.Mesh( geometry, material )
//and add MESH to scene 
scene.add( torus )

//add lighting - pointLight is an easy light which emits light in all directions like a lightbulb 
const pointLight = new THREE.PointLight(0xffffff)
//setting the light away from center 
pointLight.position.set(20, 20, 20)

//ambient light adds light to everything equally 
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)
//lightHelper shows us the position of the point light
const lightHelper = new THREE.PointLightHelper(pointLight)
//draws a two dimentional grid to the scene 
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(lightHelper, gridHelper)


const controls = new OrbitControls(camera, renderer.domElement)

//function to call to redender - gameloop
function animate() {
  requestAnimationFrame( animate );

  //change animate rotation 
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();
  renderer.render( scene, camera )
}
animate()
