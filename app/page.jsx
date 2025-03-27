"use client";

import React, { useEffect } from "react";
import * as THREE from "three";
import "./styles/style.css";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load("/textures/9.png");

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Scene

    const scene = new THREE.Scene();

    // Lightning

    const ambientLight = new THREE.AmbientLight("white", 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    // Objects

    const mesh1 = new THREE.Mesh(
      new THREE.TorusGeometry(10, 2, 16),
      new THREE.MeshStandardMaterial({ color: "white" })
    );

    mesh1.scale.set(0.05, 0.05, 0.05);

    scene.add(mesh1);

    const mesh2 = new THREE.Mesh(
      new THREE.TorusGeometry(10, 2, 16),
      new THREE.MeshStandardMaterial({ color: "white" })
    );

    mesh2.scale.set(0.05, 0.05, 0.05);

    scene.add(mesh2);

    const mesh3 = new THREE.Mesh(
      new THREE.TorusGeometry(10, 2, 16),
      new THREE.MeshStandardMaterial({ color: "white" })
    );

    mesh3.scale.set(0.05, 0.05, 0.05);

    scene.add(mesh3);

    const objectDistance = 4;

    const objects = [mesh1, mesh2, mesh3];

    for (let i = 0; i < objects.length; i++) {
      objects[i].position.y = -objectDistance * i;
      objects[i].position.x =
        i % 2 == 0 ? (objects[i].position.x = 2) : (objects[i].position.x = -2);
    }

    // Particles

    const particleGeometry = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      alphaMap: particleTexture,
      transparent: true,
      size: 0.1,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const count = 500;

    const vertices = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let i3 = i * 3;

      vertices[i3 + 0] = (Math.random() - 0.5) * 10;
      vertices[i3 + 1] = (Math.random() - 0.5) * 5 * objectDistance;
      vertices[i3 + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Camera

    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.set(0, 2, 5);

    cameraGroup.add(camera);

    // Renderer

    const canvas = document.querySelector(".webgl");

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Animation

    let scrollY = window.scrollY;
    let currentSection = 0;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;

      console.log(scrollY / sizes.height);

      const newSection = Math.round(scrollY / sizes.height);

      if (newSection != currentSection) {
        currentSection = newSection;

        gsap.to(objects[currentSection].rotation, {
          x: (Math.random() - 0.5) * 10,
          z: (Math.random() - 0.5) * 10,
          duration: 1.5,
        });
      }
    });

    const cursor = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    const clock = new THREE.Clock();
    var currentTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - currentTime;
      currentTime = elapsedTime;

      camera.position.y = -(scrollY / sizes.height) * objectDistance;

      cameraGroup.position.x = cursor.x * 0.5;
      cameraGroup.position.y = -cursor.y * 0.5;

      for (let i = 0; i < objects.length; i++) {
        objects[i].rotation.x += deltaTime * 0.3;
        objects[i].rotation.y += deltaTime * 0.3;
      }

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  });

  return (
    <>
      <canvas className="webgl"></canvas>

      <div className="box">
        <section className="section">
          <h1 className="title">CHAT ANONYMOUSLY</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>

      <div className="box">
        <section className="section">
          <h1 className="title">USE FREE OF CHARGE</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>

      <div className="box">
        <section className="section">
          <h1 className="title">STAY IN TOUCH</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
