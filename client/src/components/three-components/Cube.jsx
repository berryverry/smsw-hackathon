import { useState } from 'react';
import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Cube = (props) => {
  const map = useLoader(TextureLoader, props.src);

  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ref, api] = useBox(() => ({ mass: 1, position: props.position }));
  return (
    <>
      {visible && (
        <mesh
          ref={ref}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={() => {
            setVisible(false);
            api.mass.set(0);
          }}
          receiveShadow
          castShadow
        >
          <boxGeometry />
          {hover ? (
            <meshLambertMaterial
              color="white"
              transparet
              opacity={0.7}
              map={map}
            />
          ) : (
            <meshBasicMaterial map={map} />
          )}
        </mesh>
      )}
    </>
  );
};

export default Cube;
