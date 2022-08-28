import { useEffect, useState } from 'react';
const useKeyabord = () => {
  const [keyPressed, setKeyPressed] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'KeyW') {
        setKeyPressed({ ...keyPressed, w: true });
      } else if (e.code === 'KeyA') {
        setKeyPressed({ ...keyPressed, a: true });
      } else if (e.code === 'KeyS') {
        setKeyPressed({ ...keyPressed, s: true });
      } else if (e.code == 'KeyD') {
        setKeyPressed({ ...keyPressed, d: true });
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'KeyW') {
        setKeyPressed({ ...keyPressed, w: false });
      } else if (e.code === 'KeyA') {
        setKeyPressed({ ...keyPressed, a: false });
      } else if (e.code === 'KeyS') {
        setKeyPressed({ ...keyPressed, s: false });
      } else if (e.code == 'KeyD') {
        setKeyPressed({ ...keyPressed, d: false });
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  });
  return keyPressed;
};

export default useKeyabord;
