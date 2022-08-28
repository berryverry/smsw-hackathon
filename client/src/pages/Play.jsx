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
import { fileName, fileLength } from '../components/lib/texture-file';
const Play = () => {
  const Cubes = () => {
    let arr = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(Math.random() * 101) - 50;
      const y = Math.floor(Math.random() * 20) + 10;
      const z = Math.floor(Math.random() * 101) - 50;
      const file = Math.floor(Math.random() * fileLength);
      arr.push({ x, y, z, file });
    }
    return arr;
  };

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
          <Cloud position={[-10, 15, -8]} args={[3, 2]} />
          <Cloud position={[-8, 11, -5]} args={[3, 2]} />
          <Cloud position={[20, 10, 20]} args={[3, 2]} />
          <Cloud position={[-20, 21, 18]} args={[3, 2]} />
          <Cloud position={[-17, 25, -32]} args={[3, 2]} />
          <Cloud position={[-9, 21, 0]} args={[3, 2]} />

          <ambientLight intensity={0.25} />
          <directionalLight
            position={[100, 100, 100]}
            castShadow
            shadow-mapSize={[2048, 2048]}
            intensity={0.7}
          />
          <Physics gravity={[0, -30, 0]}>
            <Plane position={[0, 0, 0]} />
            {/* 
            <Cube position={[0.1, 5, 0]} src="/src/assets/sea.jpg" />
            <Cube position={[0, 9, 0]} src="/src/assets/red-crane.jpg" />
            <Cube position={[0, 15, -2]} src="/src/assets/panda.jpg" />*/}
            {Cubes().map((val, ind) => {
              return (
                <Cube
                  key={ind}
                  position={[val.x, val.y, val.z]}
                  src={fileName[val.file]}
                />
              );
            })}
            <Player position={[0, 3, 10]} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Play;
