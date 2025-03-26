import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.min.js";
alert("test");

// Scene

const scene = new THREE.Scene();

// Objects

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshBasicMaterial({ color: "white" })
);
scene.add(cube);

// Camera

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

scene.add(camera);

// Renderer

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer(canvas);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
