import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const TagCloud = () => {
  const mountRef = useRef(null);
  const rotationState = useRef({ x: 0, y: 0 }); // Store the persistent rotation state
  const isMouseOver = useRef(false); // Track mouse hover state
  const mousePosition = useRef({ x: 0, y: 0 }); // Store mouse position

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create Scene
    const scene = new THREE.Scene();

    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 400;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Tags for the Cloud
    const tags = [
      'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'HTML5',
      'CSS3', 'MongoDB', 'SQL', 'REST APIs', 'Tailwind', 'Bootstrap', 'Git', 'Java', 'C++',
      'Python', 'MySQL', 'Azure', 'ThreeJS', 'Postman', 'Spring Boot', 'Spring MVC', 'AWS',
      'Agile', 'VS Code', 'IntelliJ', 'Jira', 'Thymeleaf',
    ];

    // Create Sphere and Add Text Tags
    const radius = 200;

    const fontLoader = new FontLoader();
    fontLoader.load('/helvetiker_regular.typeface.json', (font) => {
      tags.forEach((tag, i) => {
        const phi = Math.acos(-1 + (2 * i) / tags.length);
        const theta = Math.sqrt(tags.length * Math.PI) * phi;

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        const textGeometry = new TextGeometry(tag, {
          font: font,
          size: 12,
          height: 2,
        });

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        // Position the text
        textMesh.position.set(x, y, z);

        // Make the text face outwards
        textMesh.lookAt(0, 0, 0); // Face towards the center first
        textMesh.rotateY(Math.PI); // Rotate 180 degrees to face outward

        scene.add(textMesh);
      });
    });

    // Mouse move event listener
    const onMouseMove = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize to [-1, 1]
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1; // Normalize to [-1, 1]

      mousePosition.current = { x: mouseX, y: mouseY }; // Update mouse position
      isMouseOver.current = true;
    };

    const onMouseLeave = () => {
      isMouseOver.current = false; // Stop rotation when the mouse leaves
    };

    mountRef.current.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('mouseleave', onMouseLeave);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply persistent rotation state
      if (isMouseOver.current) {
        rotationState.current.x += mousePosition.current.y * 0.01; // Apply slight rotation based on mouse Y
        rotationState.current.y += mousePosition.current.x * 0.01; // Apply slight rotation based on mouse X
      }

      scene.rotation.x = rotationState.current.x;
      scene.rotation.y = rotationState.current.y;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current.removeEventListener('mousemove', onMouseMove);
      mountRef.current.removeEventListener('mouseleave', onMouseLeave);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default TagCloud;
