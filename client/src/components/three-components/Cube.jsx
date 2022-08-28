import { useState } from 'react';
import { useBox } from '@react-three/cannon';

const Cube = (props) => {
  const [hover, setHover] = useState(false);
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      receiveShadow
      castShadow
    >
      <boxGeometry />
      <meshLambertMaterial
        color={hover ? 'hotpink' : 'yellow'}
        transparet
        opacity={0.7}
      />
    </mesh>
  );
};

export default Cube;
