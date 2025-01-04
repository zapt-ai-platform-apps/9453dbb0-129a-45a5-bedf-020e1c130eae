import React from 'react';
import { Canvas } from '@react-three/fiber';
import Character from './components/Character';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  console.log('App component loaded');

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Character />
          <OrbitControls />
        </Canvas>
      </div>
      <footer className="text-white mt-4">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}