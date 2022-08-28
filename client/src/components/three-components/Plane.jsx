import { usePlane } from '@react-three/cannon';

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow castShadow>
      <planeGeometry args={[1000, 1000]} />
      {/*<Environment preset="park" background />*/}
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  );
};

export default Plane;
