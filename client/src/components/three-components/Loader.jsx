import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: 'white' }}>
      {progress}% loaded
    </Html>
  );
};

export default Loader;
