import * as THREE from "three";
import { AmbientLight, GridHelper, SpotLightHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;

const scene = new THREE.Scene();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(-10, 30, 30);
orbit.update();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true;
// plane.castShadow = true;

const gridHelper = new GridHelper(10);
scene.add(gridHelper);

const loader = new THREE.TextureLoader();
const earthTexture = loader.load("2k_earth_daymap.jpg");
const sunTexture = loader.load("2k_sun.jpg");
const starTexture = loader.load("2k_stars.jpg");
const moonTexture = loader.load("2k_moon.jpg");
const mercuryTexture = loader.load("2k_mercury.jpg");
const venusTexture = loader.load("2k_venus_surface.jpg");
const marsTexture = loader.load("2k_mars.jpg");
const jupiterTexture = loader.load("2k_jupiter.jpg");
const saturnTexture = loader.load("2k_saturn.jpg");
const uranusTexture = loader.load("2k_uranus.jpg");
const neptuneTexture = loader.load("2k_neptune.jpg");
const saturnRingTexture = loader.load("2k_saturn_ring_alpha.png");

scene.background = starTexture;

// ------
// earth
const sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
const sphereMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
  wireframe: false,
});
// sun
const secondGeometry = new THREE.SphereGeometry(8, 30, 40);
const seondMaterial = new THREE.MeshStandardMaterial({
  // color: "red",
  map: sunTexture,
  wireframe: false,
});
// moon
const moonGeometry = new THREE.SphereGeometry(0.2, 20, 20);
const moonMaterial = new THREE.MeshStandardMaterial({
  // color: "red",
  map: moonTexture,
  wireframe: false,
});
// MERCURY
const mercuryGeometry = new THREE.SphereGeometry(0.1, 20, 20);
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,
  // color: "red",
  wireframe: false,
});
// venus
const venusGeometry = new THREE.SphereGeometry(1.2, 20, 20);
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,
  // color: "red",
  wireframe: false,
});
// mars
const marsGeometry = new THREE.SphereGeometry(0.5, 20, 20);
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
  // color: "red",
  wireframe: false,
});
// jupiter
const jupiterGeometry = new THREE.SphereGeometry(3.5, 20, 20);
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture,
  // color: "red",
  wireframe: false,
});
// satrun
const saturnGeometry = new THREE.SphereGeometry(3, 20, 20);
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture,
  // color: "red",
  wireframe: false,
});
// saturnRing
const ringGeometry = new THREE.TorusGeometry(4.5, 0.1, 32, 100); // Adjust the radii as needed
const ringMaterial = new THREE.MeshBasicMaterial({
  map: saturnRingTexture,
  side: THREE.DoubleSide, // Ensures the texture is visible from both sides
  transparent: true, // Allows the texture to be transparent
  opacity: 0.7, // Adjust the opacity as needed
});

// uranus
const uranusGeometry = new THREE.SphereGeometry(2, 20, 20);
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: uranusTexture,
  // color: "red",
  wireframe: false,
});
// neptune
const neptuneGeometry = new THREE.SphereGeometry(1.8, 20, 20);
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture,
  // color: "red",
  wireframe: false,
});

// -------------

// sun
const seondShape = new THREE.Mesh(secondGeometry, seondMaterial);
scene.add(seondShape);
seondShape.position.set(0, 0, 0);
seondShape.castShadow = true;

// earth
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(260, 0, 0);
sphere.castShadow = true;

// moon
const moonShape = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moonShape);
moonShape.position.set(275, 0, 0);
moonShape.castShadow = true;

// mercury
const mercuryShape = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
scene.add(mercuryShape);
mercuryShape.position.set(230, 0, 0);
mercuryShape.castShadow = true;

// venus
const venusShape = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(venusShape);
mercuryShape.position.set(250, 0, 0);
mercuryShape.castShadow = true;

// mars
const marsShape = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(marsShape);
mercuryShape.position.set(265, 0, 0);
mercuryShape.castShadow = true;
// jupiter
const jupiterShape = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiterShape);
jupiterShape.position.set(295, 0, 0);
jupiterShape.castShadow = true;
// saturn
const saturnShape = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturnShape);
saturnShape.position.set(315, 0, 0);
saturnShape.castShadow = true;
// satrun ring
const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(ringMesh);

// uranus
const uranusShape = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranusShape);
uranusShape.position.set(335, 0, 0);
uranusShape.castShadow = true;
// neptune
const neptuneShape = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptuneShape);
neptuneShape.position.set(335, 0, 0);
neptuneShape.castShadow = true;

// const sphereMaterial = new THREE.MeshStandardMaterial({
//  map: earthTexture,
//  wireframe: false,
// });

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("whitesmoke");
scene.add(directionalLight);
directionalLight.position.set(0, 100, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -112;

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(
//   directionalLight.shadow.camera
// );
// scene.add(dLightShadowHelper);

const spotLight = new THREE.SpotLight(0xffffff);
scene.add(spotLight);
spotLight.position.set(0, 30, 0);
spotLight.intensity = 500;
spotLight.angle = 1;
spotLight.castShadow = true;

const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

const gui = new dat.GUI();
const options = {
  sphereColor: "#fff",
  wireframe: false,
  speed: 0.01,
  angle: 0.999,
  penumbra: 0,
  intensity: 500,
};
gui.addColor(options, "sphereColor").onChange(function (e) {
  sphere.material.color.set(e);
});
gui.add(options, "wireframe").onChange(function (e) {
  sphere.material.wireframe = e;
});
gui.add(options, "speed", 0, 0.1);
gui.add(options, "angle", 0, 1);
gui.add(options, "penumbra", 0, 1);
gui.add(options, "intensity", 0, 10000);

// camera.position.z = 5;
// camera.position.y = 1;

// let step = 0;
// let moonStep = 0;
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   step += options.speed;
//   sphere.position.x = 10 * Math.cos(step);
//   sphere.position.y = 10 * Math.sin(step);
//   sphere.position.z = 10 * Math.sin(step);
//   moonShape.position.x = sphere.position.x + 3 * Math.cos(moonStep);
//   // moonShape.position.y = sphere.position.y + 3 * Math.sin(moonStep);
//   moonShape.position.z = sphere.position.z + 3 * Math.sin(moonStep);
//   moonShape.rotation.y += 0.01 * options.speed; // Adjust the speed as needed

//   // sphere.position.x = 10 * Math.abs(Math.cos(step));
//   // console.log(10 * Math.abs(Math.cos(step)));
//   spotLight.angle = options.angle;
//   spotLight.intensity = options.intensity;
//   spotLight.penumbra = options.penumbra;
//   moonStep += options.speed;

//   renderer.render(scene, camera);
// }
// animate();

let step = 0;
let moonStep = 50; // Additional step for the moon's rotation around the earth

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  step += options.speed;

  // mercury's orbit around the sun
  mercuryShape.position.x = 10 * Math.cos(step);
  mercuryShape.position.y = 10 * Math.sin(step);
  mercuryShape.position.z = 10 * Math.sin(step);

  // venus's orbit around the sun
  venusShape.position.x = 12 * Math.cos(step);
  venusShape.position.y = 12 * Math.sin(step);
  venusShape.position.z = 12 * Math.sin(step);

  // mars's orbit around the sun
  marsShape.position.x = 14 * Math.cos(step);
  marsShape.position.y = 14 * Math.sin(step);
  marsShape.position.z = 14 * Math.sin(step);

  // Earth's orbit around the sun
  sphere.position.x = 17 * Math.cos(step);
  sphere.position.y = 17 * Math.sin(step);
  sphere.position.z = 17 * Math.sin(step);

  // jupiter's orbit around the sun
  jupiterShape.position.x = 25 * Math.cos(step);
  jupiterShape.position.y = 25 * Math.sin(step);
  jupiterShape.position.z = 25 * Math.sin(step);

  // saturn's orbit around the sun
  saturnShape.position.x = 35 * Math.cos(step);
  saturnShape.position.y = 35 * Math.sin(step);
  saturnShape.position.z = 35 * Math.sin(step);

  // satrun ring
  ringMesh.position.set(
    saturnShape.position.x + 0.8 * Math.cos(moonStep),
    saturnShape.position.y + 0.8 * Math.cos(moonStep),
    saturnShape.position.z + 0.8 * Math.cos(moonStep)
  );
  // ringMesh.rotation.x = Math.PI / 2; // Adjust the rotation as needed

  // uranus's orbit around the sun
  uranusShape.position.x = 42 * Math.cos(step);
  uranusShape.position.y = 42 * Math.sin(step);
  uranusShape.position.z = 42 * Math.sin(step);

  // neptune's orbit around the sun
  neptuneShape.position.x = 49 * Math.cos(step);
  neptuneShape.position.y = 49 * Math.sin(step);
  neptuneShape.position.z = 49 * Math.sin(step);

  // Moon's orbit around the earth
  const moonOrbitRadius = 1; // Distance from the earth to the moon
  moonShape.position.x =
    sphere.position.x + moonOrbitRadius * Math.cos(moonStep);
  moonShape.position.y =
    sphere.position.y + moonOrbitRadius * Math.sin(moonStep);
  moonShape.position.z =
    sphere.position.z + moonOrbitRadius * Math.cos(moonStep);
  console.log(mercuryShape.position.x, sphere.position.x, moonShape.position.x);
  // Rotate the moon around the earth
  // moonShape.rotation.y = 2 * options.speed; // Adjust the speed as needed

  spotLight.angle = options.angle;
  spotLight.intensity = options.intensity;
  spotLight.penumbra = options.penumbra;
  renderer.render(scene, camera);

  // Update the moon's step for the next frame
  moonStep += options.speed;
}
animate();
