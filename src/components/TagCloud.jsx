import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TagCloud = () => {
  const mountRef = useRef(null);

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

    // Create Sphere Geometry
    const radius = 200;
    const geometry = new THREE.SphereGeometry(radius, 32, 32);

    // Create Points for Tags
    const tags = [
      'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'HTML5',
      'CSS3', 'MongoDB', 'SQL', 'REST', 'Tailwind', 'Bootstrap', 'Git',
    ];
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xff00ff,
      size: 10,
    });
    const pointsGeometry = new THREE.BufferGeometry();

    const vertices = [];
    for (let i = 0; i < tags.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / tags.length);
      const theta = Math.sqrt(tags.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      vertices.push(x, y, z);
    }
    pointsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Rotate Sphere
    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.y += 0.01; // Rotate the tag cloud
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '500px' }} />;
};

export default TagCloud;
