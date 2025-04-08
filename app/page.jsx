"use client";

import React, { useEffect, useRef } from "react";

import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import starVertexShader from "./shaders/stars/vertex";
import starFragmentShader from "./shaders/stars/fragment";

const Section = ({ ref, label, paragraph, pRef }) => {
  return (
    <div ref={ref} className="h-screen  m-16 ">
      <h2 className="text-7xl font-bold text-green-500 mb-4 underline">
        {label}
      </h2>
      <p className="w-1/2  text-2xl" ref={pRef}>
        {paragraph}
      </p>
    </div>
  );
};

const page = () => {
  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const mouse = {
      x: 0,
      y: 0,
    };
    const canvas = document.querySelector(".webgl");

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX / sizes.width;
      mouse.y = 1 - (event.clientY / sizes.height) * 2;
    });

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

    // Camera
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 5;

    cameraGroup.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: window.devicePixelRatio >= 2 ? false : true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sizes.width, sizes.height);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const count = 1000;

    const vertices = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randomness = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      let i3 = i * 3;

      vertices[i3 + 0] = (0.5 - Math.random()) * 12.5;
      vertices[i3 + 1] = (0.5 - Math.random()) * 5 * 3;
      vertices[i3 + 2] = (0.5 - Math.random()) * 5;

      colors[i + 0] = Math.random();
      colors[i3 + 1] = Math.random();
      colors[i3 + 2] = Math.random();

      randomness[i] = Math.random() * 5;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );
    starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    starsGeometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(randomness, 1)
    );

    const starsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 50.0 * renderer.getPixelRatio() },
      },
      vertexShader: starVertexShader,
      vertexColors: true,
      transparent: true,
      fragmentShader: starFragmentShader,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      starsMaterial.uniforms.uTime.value = elapsedTime;

      cameraGroup.position.y = -(scrollY / sizes.height) * 1.5;

      camera.position.x = mouse.x;
      camera.position.y = mouse.y;

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();

  const firstParagraphRef = useRef();
  const secondParagraphRef = useRef();
  const thirdParagraphRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const timelineOne = gsap.timeline();

    timelineOne
      .from(firstRef.current, {
        x: "-100vw",
        duration: 0.75,
        ease: "sine.inOut",
      })
      .from(
        firstParagraphRef.current,
        {
          duration: 0.75,
          x: "-100vw",
          ease: "sine.inOut",
        },
        0
      );

    const timelineTwo = gsap.timeline({
      scrollTrigger: secondRef.current,
    });

    timelineTwo
      .from(secondRef.current, {
        x: "-100vw",
        duration: 0.75,
        ease: "sine.inOut",
      })
      .from(
        secondParagraphRef.current,
        {
          duration: 0.75,
          x: "-100vw",
          ease: "sine.inOut",
        },
        0.1
      );

    // Third
    const timelineThree = gsap.timeline({
      scrollTrigger: thirdRef.current,
    });

    timelineThree
      .from(thirdRef.current, {
        x: "-100vw",
        duration: 0.75,
        ease: "sine.inOut",
      })
      .from(
        thirdParagraphRef.current,
        {
          duration: 0.75,
          x: "-100vw",
          ease: "sine.inOut",
        },
        0
      );
  });

  return (
    <>
      <canvas className="webgl fixed top-32 left-0 w-full h-full pointer-events-none"></canvas>

      <Section
        ref={firstRef}
        pRef={firstParagraphRef}
        label={"CHAT ANONYMOUSLY"}
        paragraph={
          "Connect and converse without revealing your identity. Whether you're seeking advice, sharing ideas, or simply enjoying a friendly chat, our platform allows you to interact freely while keeping your personal information private. Experience secure and anonymous communication that puts your privacy first."
        }
      />
      <Section
        ref={secondRef}
        pRef={secondParagraphRef}
        label={"USE FREE OF CHARGE"}
        paragraph={
          "Access all of our services completely free of charge. No hidden fees, no subscriptions — just straightforward, no-cost access to a secure and anonymous communication platform. Start using it today, and enjoy hassle-free chatting without worrying about costs."
        }
      />
      <Section
        ref={thirdRef}
        pRef={thirdParagraphRef}
        label={"STAY IN TOUCH"}
        paragraph={
          "Never miss a moment. Stay connected with friends, family, or colleagues effortlessly. Whether it's through regular updates or instant messages, our platform makes it easy to maintain meaningful connections. Keep the conversation going, anytime, anywhere."
        }
      />
    </>
  );
};

export default page;
