import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import useKeyabord from '../lib/useKeyboard';

const Player = (props) => {
  const keyMap = useKeyabord();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((velo) => (velocity.current = velo));
  }, [api.velocity]);

  const pos = useRef([0, 0, 0]);
  useEffect(
    () => api.position.subscribe((velo) => (pos.current = velo)),
    [api.position],
  );
  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2]),
    );
    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (keyMap.s ? 1 : 0) - (keyMap.w ? 1 : 0),
    );
    const sideVector = new Vector3(
      (keyMap.a ? 1 : 0) - (keyMap.d ? 1 : 0),
      0,
      0,
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(6)
      .applyEuler(camera.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    <>
      <mesh ref={ref} />
    </>
  );
};

export default Player;
