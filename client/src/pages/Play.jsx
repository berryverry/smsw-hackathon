import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Map from '../components/three-components/Map';
import Loader from '../components/three-components/Loader';
import {
  Environment,
  FirstPersonControls,
  Sky,
  Stars,
  Cloud,
  OrbitControls,
} from '@react-three/drei';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import Player from '../components/three-components/Player';
import { useState } from 'react';
import Plane from '../components/three-components/Plane';
import Cube from '../components/three-components/Cube';

const Play = () => {
  return (
    <div className="canvas-container">
      <Canvas shadows gl={{ alpha: false }}>
        {/*<ambientLight />
        <Suspense fallback={<Loader />}>
          <Map />
  </Suspense>
        <Environment preset="sunset" background />*/}
        <Sky sunPosition={[100, 20, 100]} />
        <Suspense fallback={<Loader />}>
          <Cloud position={[0, 10, 11]} args={[3, 2]} />
          <Cloud position={[10, 11, 5]} args={[3, 2]} />
        </Suspense>
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[100, 100, 100]}
          castShadow
          shadow-mapSize={[2048, 2048]}
          intensity={0.7}
        />
        <Physics gravity={[0, -30, 0]}>
          <Plane position={[0, 0, 0]} />
          <Cube position={[0.1, 5, 0]} />
          <Cube position={[0, 9, 0]} />
          <Cube position={[0, 20, -2]} />
          <Player position={[0, 3, 10]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Play;
