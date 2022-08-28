import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Map = () => {
  /*
  const map = useLoader(GLTFLoader, '/src/assets/scene.gltf');
  return (
    <>
      <primitive object={map.scene} />
    </>
  );*/
  const group = useRef();
  const { nodes, materials } = useGLTF('/src/assets/scene.gltf');
  return (
    <group ref={group} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BIG_ROCK.geometry}
        material={materials['Rock']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BaseROck.geometry}
        material={materials['Rock']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brush.geometry}
        material={materials['Mush_Mediteranean_Frond_Mat']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ROCK.geometry}
        material={materials['Rock']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Small_ROCK.geometry}
        material={materials['Rock']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.terreno.geometry}
        material={materials['Terrain']}
      />
    </group>
  );
};

export default Map;

useGLTF.preload('/src/assets/scene.gltf');
