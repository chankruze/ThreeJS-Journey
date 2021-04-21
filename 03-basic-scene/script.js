/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Apr 21 2021 12:32:52 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

// console.log("Hello Three.js");
// console.log(THREE);

// we need atleast 4 elements (scene, object, camera, renderer)

/**
 * Scene
 *
 * It's like a container
 * We put objects, models, lights etc. in it
 * At some point we ask Three.js to render that scene
 */

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 *
 * Can be many things,
 * Primitive geometries (cube, sphere etc.)
 * Imported models
 * Particles
 * Lights etc.
 */

// red cube geometry
const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
// red cube material
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

// color: https://threejs.org/docs/index.html?q=color#api/en/math/Color

// https://threejs.org/docs/index.html?q=color#api/en/geometries/BoxGeometry
// BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and 'depth'.
// On creation, the cuboid is centred on the origin, with each edge parallel to one of the axes.

/**
 * Mesh
 *
 * https://threejs.org/docs/index.html?q=Mesh#api/en/objects/Mesh
 *
 * Combination of a geometry (the shape) and a material(how it looks)
 */

const mesh = new THREE.Mesh(geometry, material);

// add mesh to scene
scene.add(mesh);

/**
 * Camera
 *
 * https://threejs.org/docs/index.html?q=camera#api/en/cameras/Camera
 * https://threejs.org/docs/index.html?q=camera#api/en/cameras/PerspectiveCamera
 */

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
// transform an object
// position(x, y, z), rotation & scale
// resize camera
camera.position.x = 1;
camera.position.y = 0.5;
camera.position.z = 4;
// add camera to scene
scene.add(camera);

/**
 * Renderer
 *
 * Renders the scene from the camera pov
 * Result is drawn into a canvas
 * Three.js will use webgl to draw the render inside the canvas
 *
 * https://threejs.org/docs/index.html?q=Renderer#api/en/renderers/WebGLRenderer
 */
const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

// resize the renderer
renderer.setSize(sizes.width, sizes.height);

// render
// https://threejs.org/docs/index.html?q=Renderer#api/en/renderers/WebGLRenderer
renderer.render(scene, camera);
