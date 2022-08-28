import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DoubleSide, TextureLoader } from 'three';
import DayMap from '../../assets/8k_earth_daymap.jpg';
import CloudMap from '../../assets/8k_earth_clouds.jpg';
import SpecularMap from '../../assets/8k_earth_specular_map.jpg';
import NormalMap from '../../assets/8k_earth_normal_map.jpg';
import { useRef } from 'react';

const Earth = (props) => {
  const earthRef = useRef();
  const cloudRef = useRef();

  const [dayMap, specularMap, normalMap, cloudMap] = useLoader(TextureLoader, [
    DayMap,
    SpecularMap,
    NormalMap,
    CloudMap,
  ]);

  useFrame(({ clock }) => {
    const step = clock.getElapsedTime();

    earthRef.current.rotation.y = step / 10;
    cloudRef.current.rotation.y = step / 10;
  });

  return (
    <>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.42, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enablePan={true}
          enableRotate={true}
          enableZoom={true}
          panSpeed={0.5}
          rotateSpeed={0.4}
          zoomSpeed={0.7}
        />
      </mesh>
    </>
  );
};

export default Earth;
