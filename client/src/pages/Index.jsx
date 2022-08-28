import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stars } from '@react-three/drei';
import Earth from '../components/three-components/Earth';
import IndexText from '../components/indexText';
import Loader from '../components/three-components/Loader';

const IndexPage = () => {
  return (
    <div className="canvas-container">
      <IndexText />
      <Canvas>
        <ambientLight intensity={0.2} />
        <pointLight color="#ffeedd" position={[2, 0, 2]} />
        <Stars
          radius={300}
          depth={60}
          coutn={20000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <Suspense fallback={<Loader />}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default IndexPage;
