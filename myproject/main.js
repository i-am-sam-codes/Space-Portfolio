import './style.css'

import * as THREE from 'three';

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